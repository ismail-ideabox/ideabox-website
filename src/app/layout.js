"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "./styles/globals.css";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { images } from "../../public/loader";
import Image from "next/image";

import Head from "next/head";

export default function RootLayout({ children }) {
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    console.log(children, "child");
    console.log("adnan");
    const handleRouteStart = () => {
      console.log("route changed");
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
  }, [Router]);
  return (
    <html lang="en">
      <Head>
        <title>Home | Ideabox</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      {Loading && (
        <body>
          <div
            style={{
              position: "fixed",
              width: "100%",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              zIndex: "999",
              top: "0",
              left: "0",
              transition: "all 0.2s ease-in-out",
            }}
          >
            <Image src={images.loader} alt={"Loader Image"} />
          </div>
        </body>
      )}
      {!Loading && <body>{children}</body>}
    </html>
  );
}
