import * as zod from "zod";

export const RegisterSchema = zod
  .object({
    name: zod
      .string()
      .nonempty("Name is required")
      .min(2, "Name should be at least 2 letters")
      .max(30, "Name is too Long"),
    email: zod
      .string()
      .nonempty("Email is required")
      .email("Enter a valid email"),
    password: zod
      .string()
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Password is invalid",
      ),
    rePassword: zod.string().nonempty("Please fill the field"),
    phone: zod
      .string()
      .regex(
        /^01[0125]\d{8}$/,
        "Phone is invalid",
      ),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "rePassword doesn't match the password",
    path: ["rePassword"],
  });

export type RegisterFormValues = zod.infer<typeof RegisterSchema>