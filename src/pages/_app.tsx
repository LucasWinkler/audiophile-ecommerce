import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Manrope } from "next/font/google";
import Head from "next/head";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${manrope.style.fontFamily};
          }
        `}
      </style>

      <Head>
        <title>Frontend Mentor | Audiophile E-commerce</title>
        <meta
          name="description"
          content="This is a solution by Lucas Winkler to the Audiophile e-commerce website challenge on Frontend Mentor."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
