import { Urbanist, Sora, Inter } from "next/font/google";
export const inter = Inter({ subsets: ["latin"] });
export const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});
