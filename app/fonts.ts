import localFont from "next/font/local";
export const helvetica = localFont({
  src: [
    {
      path: "./public/fonts/helvetica_bold.ttf",
      weight: "normal",
      style: "normal",
    },
    {
      path: "./public/fonts/helvetica.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
});

export const nanum = localFont({
  src: [
    {
      path: "./public/fonts/nanum.ttf",
      weight: "normal",
      style: "normal",
    },
  ],
  variable: "--font-nanum",
});
