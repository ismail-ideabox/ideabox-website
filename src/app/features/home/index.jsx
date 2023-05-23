"use client";
import React, { useEffect, useRef, useState } from "react";
import GetInTouch from "../../components/getInTouch";
import Technical from "../../components/technical";
import Odoo from "../../components/odoo";
import Overview from "../../components/overview";
import Commitments from "../../components/commitments";
import Advisor from "../../components/advisor";
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
import Blogs from "@/app/components/blogs";
import blogsData from "@/app/data/blogs";
import { useMediaQuery } from "react-responsive";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Router } from "next/router";
import { faL } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const pathname = usePathname();
  const parentRef = useRef(null);
  const childRef = useRef(null);
  const servicesRef = useRef(null);
  const animateRef = useRef(null);
  // const scrollRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 800px)" });
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const [data, setData] = useState([]);

  useEffect(() => {
    const parentRect = parentRef?.current?.getBoundingClientRect();
    parentRect?.current?.scrollTop(0);
  }, [data]);

  // useEffect(() => {
  //   const parentRect = parentRef?.current?.getBoundingClientRect();
  //   const animateRect = animateRef?.current?.getBoundingClientRect();
  //   if (isSmallScreen) {
  //     const isAnimateVisible =
  //       animateRect.top >= 0 &&
  //       animateRect.top <= window.innerHeight - (animateRect.height - 100);
  //     if (isAnimateVisible) {
  //       setAnimate(true);
  //     }
  //   } else {
  //     const isAnimateVisible =
  //       animateRect.top >= parentRect.top ||
  //       animateRect.bottom + 300 <= parentRect.bottom;
  //     if (!isAnimateVisible) {
  //       setAnimate(true);
  //     } else {
  //       setAnimate(false);
  //     }
  //   }
  // });

  useEffect(() => {
    const handleScroll = () => {
      const parentRect = parentRef?.current?.getBoundingClientRect();
      const childRect = childRef?.current?.getBoundingClientRect();
      const animateRect = animateRef?.current?.getBoundingClientRect();
      // console.log(parentRect, "parent Rect");
      // console.log(animateRect, "animate Rect");
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
        // console.log(animateRect, "animateRect Mobile");
        // console.log(window.innerHeight, "window.innerheight");
        const isChildVisible =
          animateTop <= window.innerHeight &&
          animateBottom >= window.innerHeight;
        // console.log(isChildVisible, "mobile child visible");
        if (isChildVisible) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      } else {
        const isChildVisible =
          animateRect.top >= parentRect.top &&
          animateRect.bottom - 300 <= parentRect.bottom;
        // console.log(isChildVisible, "isChildVisible");
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

  // useEffect(() => {
  //   const parentRect = parentRef?.current?.getBoundingClientRect();
  //   const handleRouteChangeStart = () => {
  //     scrollRef.current = parentRect.scrollY;
  //   };
  //   if (router.events) {
  //     router.events.on("routeChangeStart", handleRouteChangeStart);
  //   }
  //   router.events.on("routeChangeStart", handleRouteChangeStart);
  //   const handleRouteChangeComplete = () => {
  //     if (router.pathname === "/") {
  //       parentRect.scrollTo(0, scrollRef.current);
  //     }
  //   };
  //   router.events.on("routeChangeComplete", handleRouteChangeComplete);
  //   return () => {
  //     router.events.off("routeChangeStart", handleRouteChangeStart);
  //     router.events.off("routeChangeComplete", handleRouteChangeComplete);
  //   };
  // }, [router]);

  return (
    <>
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
        {/* <Advisor /> */}
        <Ideabox />
        <OurWork isHomePage={true} />
        <Clientele />
        <Testimonials />
        {/* <Blogs blogsCard={blogsData.slice(0, 3)} /> */}
        <Faqs />
        <Footer />
        <ScrollToTop visible={scrollToTopVisible} parentRef={parentRef} />
      </div>
    </>
  );
}

export default Home;
