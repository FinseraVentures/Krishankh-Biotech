// lib/sendFormEmail.ts
import emailjs from "@emailjs/browser";
import { FormPayload, TEMPLATE_MAP } from "./types";
import { hasMeta } from "./typeGaurd";

const CONFIG = {
  SERVICE_ID:
    (import.meta.env.VITE_EMAILJS_SERVICE_ID as string) || "service_ugpjx8k",
  PUBLIC_KEY:
    (import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string) || "JgdVphFjfw-FqGn9m",
};

let isSending = false;

export type SendEmailResult =
  | { success: true }
  | { success: false; error: string };

export const sendFormEmail = async (
  payload: FormPayload,
): Promise<SendEmailResult> => {
  if (isSending) {
    return { success: false, error: "Request already in progress" };
  }

  isSending = true;

  try {
    const templateId = "template_r5od5ho"; // TEMPLATE_MAP[payload.formType];

    const emailPayload = {
      form_type: payload.formType,
      name: payload.name,
      email: payload.email,
      phone: payload.phone ?? "-",
      company: payload.company ?? "-",
      message: payload.message ?? "-",
      meta: hasMeta(payload) ? JSON.stringify(payload.meta) : "-",
    };

    await emailjs.send(
      CONFIG.SERVICE_ID,
      templateId,
      emailPayload,
      CONFIG.PUBLIC_KEY,
    );

    return { success: true };
  } catch (error) {
    console.error("EmailJS Error:", error);
    return { success: false, error: "Failed to send email" };
  } finally {
    isSending = false;
  }
};
