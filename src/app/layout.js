"use client";
import "./styles/globals.css";
import Image from "./components/image";
import { images } from "../../public/loader";
import Head from "next/head";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { useState, useEffect } from "react";
import Script from "next/script";

export default function RootLayout({ children }) {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <>
      <html lang="en">
        <Head>
          {/* <title>Home | Ideabox</title> */}
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        </Head>
        <Script
          defer
          src="https://www.googletagmanager.com/gtag/js?id=G-VXRMS74048"
          strategy="afterInteractive"
        />
        <Script defer id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-VXRMS74048');
        `}
        </Script>
        <body style={{ scrollbarWidth: "none" }}>
          <div
            style={{
              position: "fixed",
              width: "100%",
              height: "100vh",
              display: Loading ? "flex" : "none",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              zIndex: "1000",
              top: "0",
              left: "0",
              transition: "all 0.2s ease-in-out",
              overflow: "hidden",
              scrollbarWidth: "none",
            }}
          >
            <Image priority src={images.loader} alt={"Loader Image"} />
          </div>
          {children}
        </body>
      </html>
    </>
  );
}
