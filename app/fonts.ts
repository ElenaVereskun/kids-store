import localFont from "next/font/local";
export const helvetica = localFont({
  src: [
    {
      path: "./fonts/helvetica_bold.ttf",
      weight: "normal",
      style: "normal",
    },
    {
      path: "./fonts/helvetica.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
});
