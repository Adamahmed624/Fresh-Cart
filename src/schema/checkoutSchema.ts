import * as zod from "zod";

export const checkoutSchema = zod.object({
  shippingAddress: zod.object({
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
    postalCode: zod
      .string()
      .nonempty("Postal code is required")
      .regex(/^\d{5}$/, "Enter a valid postal code"),
  }),
});

export type checkoutFormValues = zod.infer<typeof checkoutSchema>;
