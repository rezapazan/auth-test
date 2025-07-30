import { type LoginSchema } from "@/schemas/login";
import type * as z from "zod";

export type LoginInputs = z.infer<typeof LoginSchema>;
