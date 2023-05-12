"use client";
import HomePage from "./features/home";
import "./styles/globals.css";
import { Router } from "next/router";
import { useState, useEffect } from "react";
import { images } from "../../public/loader";
import Image from "next/image";
import Head from "next/head";

// export const metadata = {
//   title: "Ideabox",
//   description: "Think Outside The Box",
// };

export default function Home() {
  const [Loading, setLoading] = useState(true);
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
  }, []);

  return (
    <>
      <head>
        <title>Home | Ideabox</title>
      </head>
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100vh",
          display: Loading ? "flex" : "none",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
          zIndex: "999",
          top: "0",
          left: "0",
          transition: "all 0.2s ease-in-out",
        }}
      >
        <Image src={images.loader} alt={"Loader Image"} />
      </div>
      <HomePage />
    </>
  );
}
// className={Loading ? "loader-active" : "loader"}
