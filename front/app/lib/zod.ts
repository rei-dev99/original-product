import { z } from "zod";

export const numberPattern = /(?=.*\d)/;

export const signInSchema = z.object({
    email: z.string().email('正しいメールアドレスを入力してください'),
    password: z
      .string()
      .min(8, '8文字以上で入力してください')
      .regex(numberPattern, '数字を含めてください'),
  })

export type CredentialType = z.infer<typeof signInSchema>;