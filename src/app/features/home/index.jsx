"use client";
import React, { useEffect, useRef, useState } from "react";
import GetInTouch from "../../components/getInTouch";
import Technical from "../../components/technical";
import Odoo from "../../components/odoo";
import Overview from "../../components/overview";
import Commitments from "../../components/commitments";
import Ideabox from "../../components/ideabox";
import Clientele from "../../components/clientele";
import OurWork from "../../components/ourWork";
import Testimonials from "../../components/testimonials";
import Faqs from "../../components/faqs";
import ProudProduct from "../../components/proudProduct";
import OurPeople from "../../components/ourPeople";
import Footer from "../../components/footer";
import { ScrollToTop } from "../../components/scrollToTop";
import styles from "./page.module.css";
import { classNames, isSticky } from "@/app/utils";
import { useMediaQuery } from "react-responsive";
import { useSearchParams, usePathname } from "next/navigation";
import Script from "next/script";
function Home() {
  const pathname = usePathname();
  const parentRef = useRef(null);
  const childRef = useRef(null);
  const servicesRef = useRef(null);
  const animateRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 800px)" });
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const [data, setData] = useState([]);

  useEffect(() => {
    const parentRect = parentRef?.current?.getBoundingClientRect();
    parentRect?.current?.scrollTop(0);
  }, [data]);

  useEffect(() => {
    const handleScroll = () => {
      const parentRect = parentRef?.current?.getBoundingClientRect();
      const childRect = childRef?.current?.getBoundingClientRect();
      const animateRect = animateRef?.current?.getBoundingClientRect();
      if (parentRef.current.scrollTop > 250) {
        setHeaderVisible(true);
      } else {
        setHeaderVisible(false);
      }
      if (parentRef.current.scrollTop > 1000) {
        setScrollToTopVisible(true);
      } else {
        setScrollToTopVisible(false);
      }
      if (isSmallScreen) {
        const animateTop = animateRect?.top || 0;
        const animateBottom = animateRect?.bottom || 0;
        const isChildVisible =
          animateTop <= window.innerHeight &&
          animateBottom >= window.innerHeight;
        if (isChildVisible) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      } else {
        const isChildVisible =
          animateRect.top >= parentRect.top &&
          animateRect.bottom - 300 <= parentRect.bottom;
        if (isChildVisible) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      }

      if (isSmallScreen) {
        const isChildVisible =
          childRect.top >= 0 &&
          childRect.top <= window.innerHeight - (childRect.height - 100);
        if (isChildVisible) {
          setIsVisible(true);
        }
      } else {
        const isChildVisible =
          childRect.top >= parentRect.top ||
          childRect.bottom + 300 <= parentRect.bottom;

        if (!isChildVisible) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    if (isSmallScreen) {
      window.addEventListener("scroll", handleScroll);
    } else {
      parentRef?.current?.addEventListener("scroll", handleScroll);
    }

    return () => {
      parentRef?.current?.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSmallScreen]);

  useEffect(() => {
    if (params.get("services")) {
      const serviceRect = servicesRef?.current?.getBoundingClientRect();
      parentRef.current.scrollTop = serviceRect.top;
    }
  }, [searchParams]);

  return (
    <>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="canonical" content={metadata.canonical} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta name="google-site-verification" content="iHXuTgH9REkt-943HIQIAAZJMM0iwx-1e6lIoNDaJ4A" />
        {/* <meta property="og:title" content={metadata.openGraph.title} /> */}
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.images[0].height}
        />
        <meta
          property="og:image:alt"
          content={metadata.openGraph.images[0].alt}
        />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta name="twitter:card" content={metadata.twitter.cardType} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:creator" content={metadata.twitter.handle} />
      </head>
      <div
        className={classNames(styles.home_scroll_container, "scroll_container")}
        ref={parentRef}
      >
        <GetInTouch headerVisible={headerVisible} />
        <Commitments animateRef={animateRef} animate={animate} />
        <Technical servicesRef={servicesRef} />
        <Odoo />
        <Overview childRef={childRef} isVisible={isVisible} />
        <ProudProduct />
        <OurPeople />
        <Ideabox />
        <OurWork isHomePage={true} />
        <Clientele />
        <Testimonials />
        <Faqs />
        <Footer />
        <ScrollToTop visible={scrollToTopVisible} parentRef={parentRef} />
      </div>
    </>
  );
}

export default Home;

const metadata = {
  title: "Ideabox | Official Website ® | Tech Solution Provider",
  description: "",
  canonical: "https://ideabox.com.pk/contact-us",
  openGraph: {
    url: "https://ideabox.com.pk/contact-us",
    title: "Ideabox | Official Website ® | Tech Solution Provider",
    description: "Open Graph Description",
    images: [
      {
        url: "../../../../public/footer/ideabox.png",
        width: 800,
        height: 600,
        alt: "Ideabox Logo",
        type: "image/png",
      },
    ],
    siteName: "Ideabox",
  },
  twitter: {
    handle: "@IdeaboxPakistan",
    site: "@IdeaboxPakistan:Obaid Rehman",
    cardType: "summary_large_image",
  },
};
