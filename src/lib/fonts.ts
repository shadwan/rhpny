import { Inter } from "next/font/google";

// Body text font. Headings + default sans render via Figtree (--font-sans),
// mapped in globals.css. Only fonts actually rendered are loaded here —
// DM_Sans and Instrument_Serif were downloaded but never displayed.
export const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});
