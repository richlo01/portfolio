import localFont from "next/font/local";

export const neueMontreal = localFont({
  src: [
    {
      path: "../fonts/PPNeueMontreal-Thin.otf",
      style: "normal",
      weight: "100",
    },
    {
      path: "../fonts/PPNeueMontreal-Italic.woff2",
      style: "italic",
      weight: "400",
    },

    {
      path: "../fonts/PPNeueMontreal-Regular.woff2",
      style: "normal",
      weight: "450",
    },
    {
      path: "../fonts/PPNeueMontreal-Medium.otf",
      style: "normal",
      weight: "500",
    },
    {
      path: "../fonts/PPNeueMontreal-SemiBolditalic.otf",
      style: "italic",
      weight: "600",
    },
    {
      path: "../fonts/PPNeueMontreal-Bold.woff2",
      style: "normal",
      weight: "700",
    },
  ],
  variable: "--font-body",
});
