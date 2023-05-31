"use client";
import "./styles/globals.css";
import Image from "./components/image";
import { images } from "../../public/loader";
import Head from "next/head";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { Router } from "next/router";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Script from "next/script";

export default function RootLayout({ children }) {
  const [Loading, setLoading] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleRouteStart = () => {
      setLoading(true);
    };

    const handleRouteDone = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", handleRouteStart());
    Router.events.on("routeChangeComplete", handleRouteDone());
    Router.events.on("routeChangeError", handleRouteDone());
    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off("routeChangeStart", handleRouteStart());
      Router.events.off("routeChangeComplete", handleRouteDone());
      Router.events.off("routeChangeError", handleRouteDone());
    };
  });
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
        <body>
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
            }}
          >
            <Image priority src={images.loader} alt={"Loader Image"} />
          </div>
          <GoogleReCaptchaProvider
            reCaptchaKey={SITE_KEY}
            scriptProps={{
              async: false,
              defer: false,
              appendTo: "head",
              nonce: undefined,
            }}
          >
            {children}
          </GoogleReCaptchaProvider>
        </body>
      </html>
    </>
  );
}
