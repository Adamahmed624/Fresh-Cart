import * as zod from "zod";

export const changePasswordSchema = zod
  .object({
    currentPassword: zod
      .string()
      .nonempty("Please fill this field")
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Password is invalid",
      ),
    password: zod
      .string()
      .nonempty("Please fill this field")
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Enter a valid password",
      ),
    rePassword: zod.string().nonempty("Please fill this field"),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "rePassword doesn't match the password",
    path: ["rePassword"],
  });

  export type changePasswordValues = zod.infer<typeof changePasswordSchema>