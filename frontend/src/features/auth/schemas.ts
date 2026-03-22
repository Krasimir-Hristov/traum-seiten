import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Bitte gib eine gültige E-Mail-Adresse ein.'),
  password: z.string().min(1, 'Bitte gib dein Passwort ein.'),
});

export const registerSchema = z.object({
  fullName: z.string().min(2, 'Der Name muss mindestens 2 Zeichen lang sein.'),
  email: z.string().email('Bitte gib eine gültige E-Mail-Adresse ein.'),
  password: z.string().min(6, 'Das Passwort muss mindestens 6 Zeichen lang sein.'),
  confirmPassword: z.string().min(6, 'Bitte bestätige dein Passwort.'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Die Passwörter stimmen nicht überein.',
  path: ['confirmPassword'],
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
