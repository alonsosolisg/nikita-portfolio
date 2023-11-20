import "@/styles/globals.css";
import type { AppProps } from "next/app";
import LocalFont from "next/font/local";

const avenir = LocalFont({
  src: [
    {
      weight: "300",
      path: "./fonts/AvenirLTStd-Roman.otf",
    },
    {
      weight: "400",
      path: "./fonts/AvenirLTStd-Book.otf",
    },
    {
      weight: "900",
      path: "./fonts/AvenirLTStd-Black.otf",
    },
  ],
  variable: "--font-avenir",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${avenir.variable}  font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
