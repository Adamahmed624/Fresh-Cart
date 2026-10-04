import * as zod from "zod";
export const updateUserInfoSchema = zod.object({
  name: zod
    .string()
    .nonempty("please fill this form")
    .min(2, "user name is to short")
    .max(50, "User name is too long"),
  email: zod.string().email().nonempty("please fill this form"),
  phone: zod
    .string()
    .nonempty("please fill this form")
    .regex(/^01[0125]\d{8}$/, "plaese enter a valid egyption phone number "),
});

export type updateUserInfoValues = zod.infer<typeof updateUserInfoSchema>;
