import { Montserrat, Roboto, Roboto_Mono, Oooh_Baby } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const robotoLight = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const robotoMono = Roboto_Mono({
  // weight: ["300"],
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

const oooBaby = Oooh_Baby({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-oooh_baby"
})

export const fonts = {
  montserrat,
  robotoLight,
  robotoMono,
  oooBaby,
};
