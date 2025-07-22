import * as z from "zod";

export const skipSchema = z.object({
  skip: z.coerce.number().default(0),
});
