"use client";
import "./styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { useState, useEffect } from "react";
import Script from "next/script";
import { images } from "../../public/loader";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const [Loading, setLoading] = useState(true);
  const pathname = usePathname();

  // useEffect(() => {
  //   const handleLoad = () => {
  //     setLoading(false);
  //   };
  //   window.addEventListener("load", handleLoad);
  //   return () => {
  //     window.removeEventListener("load", handleLoad);
  //   };
  // }, []);
  const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <>
      <html lang="en">
        <head>
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>
          {/* <div
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
            }}
          >
            <Image priority src={images.loader} alt={"Loader Image"} />
          </div> */}
          {children}
        </body>
        <Script
          defer
          src="https://www.googletagmanager.com/gtag/js?id=G-VXRMS74048"
          strategy="lazyOnload"
        />
        <Script defer id="google-analytics" strategy="lazyOnload">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-VXRMS74048');
        `}
        </Script>
      </html>
    </>
  );
}
