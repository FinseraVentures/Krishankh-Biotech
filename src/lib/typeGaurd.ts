// lib/typeGuards.ts
import { FormPayload } from "./types";

export const hasMeta = (
  payload: FormPayload,
): payload is Exclude<FormPayload, { formType: "contact" }> => {
  return "meta" in payload;
};
