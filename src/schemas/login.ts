import * as z from "zod";

export const LoginSchema = z.object({
  phoneNumber: z.string().regex(/^09\d{9}$/, {
    message: "Phone number must be 11 digits, starting with 09xxxxxxxxx.",
  }),
  password: z.string(),
});
