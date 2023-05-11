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
import { useRouter } from "next/navigation";

function Home() {
  const parentRef = useRef(null);
  const childRef = useRef(null);
  const bottomRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 800px)" });
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      const parentRect = parentRef?.current?.getBoundingClientRect();
      const childRect = childRef?.current?.getBoundingClientRect();
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
    console.log(router);
  }, [router]);

  return (
    <>
      <div
        className={classNames(styles.home_scroll_container, "scroll_container")}
        ref={parentRef}
      >
        <GetInTouch headerVisible={headerVisible} />
        <Commitments />
        <Technical bottomRef={bottomRef} />
        <Odoo />
        <Overview childRef={childRef} isVisible={isVisible} />
        <ProudProduct />
        <OurPeople />
        <Advisor />
        <Ideabox />
        <Clientele />
        <OurWork isHomePage={true} />
        <Testimonials />
        <Blogs blogsCard={blogsData.slice(0, 3)} />
        <Faqs />
        <Footer />
        <ScrollToTop visible={scrollToTopVisible} parentRef={parentRef} />
      </div>
    </>
  );
}

export default Home;
