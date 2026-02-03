// lib/types.ts

export type FormType =
  | "contact"
  | "newsletter"
  | "quote"
  | "enquiry"
  | "support";

export type BaseFormPayload = {
  formType: FormType;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
};

/* ---------- Meta Types ---------- */

export type QuoteMeta = {
  businessType: string;
  varieties: string;
  weeklyQuantity: string;
  requirements?: string;
};

export type NewsletterMeta = {
  interest: string;
};

export type EnquiryMeta = {
  interest: string;
};

export type SupportMeta = {
  subject: string;
};

/* ---------- Discriminated Union ---------- */

export type FormPayload =
  | (BaseFormPayload & {
      formType: "contact";
    })
  | (BaseFormPayload & {
      formType: "newsletter";
      meta: NewsletterMeta;
    })
  | (BaseFormPayload & {
      formType: "quote";
      meta: QuoteMeta;
    })
  | (BaseFormPayload & {
      formType: "enquiry";
      meta: EnquiryMeta;
    })
  | (BaseFormPayload & {
      formType: "support";
      meta: SupportMeta;
    });

/* ---------- Template Map ---------- */

export const TEMPLATE_MAP: Record<FormType, string> = {
  contact: "template_contact",
  newsletter: "template_newsletter",
  quote: "template_quote",
  enquiry: "template_enquiry",
  support: "template_support",
};
