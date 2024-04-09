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

export const jaymse = localFont({
  src: [
    {
      path: "./public/fonts/jaymse1.ttf",
      weight: "normal",
      style: "normal",
    },
  ],
  variable: "--font-jaymse",
});
