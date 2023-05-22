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
// import cssFilePaths from "./data/css";

export default function RootLayout({ children }) {
  const [Loading, setLoading] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // console.log(children, "child");
    const handleRouteStart = () => {
      console.log("route start");
      setLoading(true);
    };

    const handleRouteDone = () => {
      console.log("Route changed");
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
  return (
    <>
      <html lang="en">
        <Head>
          {/* {cssFilePaths.map((path, index) => (
            <link key={index} rel="stylesheet" href={path.path} />
          ))} */}
          <title>Home | Ideabox</title>
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        </Head>
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
              zIndex: "999",
              top: "0",
              left: "0",
              transition: "all 0.2s ease-in-out",
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
