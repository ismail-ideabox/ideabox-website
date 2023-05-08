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

function Home() {
  const parentRef = useRef(null);
  const childRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);

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
      const isChildVisible =
        childRect.top >= parentRect.top ||
        childRect.bottom + 300 <= parentRect.bottom;

      if (!isChildVisible) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    parentRef?.current?.addEventListener("scroll", handleScroll);

    return () => {
      parentRef?.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={classNames(styles.home_scroll_container, "scroll_container")}
        ref={parentRef}
      >
        <GetInTouch headerVisible={headerVisible} />
        <Commitments />
        <Technical />
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
