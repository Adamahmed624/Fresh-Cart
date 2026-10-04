import * as zod from "zod";

export const addNewAddressSchema = zod.object({
    name: zod
      .string()
      .min(2, "Address name must be at least 10 characters")
      .max(50, "Address name must be less than 200 characters"),
    details: zod
      .string()
      .min(10, "Address details must be at least 10 characters")
      .max(50, "Address details must be less than 200 characters"),
    phone: zod
      .string()
      .regex(/^01[0125]\d{8}$/, "Please enter a valid Egyptian phone number"),
    city: zod
      .string()
      .min(2, "City name must be at least 2 characters")
      .max(50, "City name must be less than 200 characters"),
});

export type addNewAddressFormValues = zod.infer<typeof addNewAddressSchema>;
