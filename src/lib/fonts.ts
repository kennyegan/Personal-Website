import { DM_Mono, Manrope, Sora } from 'next/font/google';

export const manrope = Manrope({
  subsets: ['latin'],
});

export const sora = Sora({
  subsets: ['latin'],
  weight: ['600', '700'],
});

export const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
});
