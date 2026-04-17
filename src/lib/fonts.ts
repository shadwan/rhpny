import { DM_Sans, Inter, Instrument_Serif } from "next/font/google";

export const headingFont = DM_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const editorialFont = Instrument_Serif({
  variable: "--font-editorial",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});
