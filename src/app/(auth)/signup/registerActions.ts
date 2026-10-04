"use server";

import { RegisterFormValues } from "../../../schema/signupSchema";

export async function signupAction(data: RegisterFormValues) {
  try {
    const res = await fetch(
      "https://ecommerce.routemisr.com/api/v1/auth/signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      },
    );
    return res.ok;
  } catch {
    return false;
  }
}