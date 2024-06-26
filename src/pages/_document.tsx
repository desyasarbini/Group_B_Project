import { Html, Head, Main, NextScript } from "next/document";
import { Footer, Navigation } from "@/components";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navigation />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
