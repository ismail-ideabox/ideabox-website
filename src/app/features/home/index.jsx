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
import { classNames } from "@/app/utils";
import { useMediaQuery } from "react-responsive";
import { useSearchParams, usePathname } from "next/navigation";

function Home() {
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

  useEffect(() => {
    const removeFouc = (foucElement) => {
      foucElement.className = foucElement.className.replace("no-fouc", "fouc");
    };

    removeFouc(document.documentElement);
  }, []);

  return (
    <>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.canonical} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta
          name="google-site-verification"
          content="iHXuTgH9REkt-943HIQIAAZJMM0iwx-1e6lIoNDaJ4A"
        />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width}
        />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta name="twitter:card" content={metadata.twitter.cardType} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:creator" content={metadata.twitter.handle} />
        <script type="application/ld+json">
          {`
              {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ideabox",
  "image": "https://ideabox.com.pk/footer/ideabox.png",
  "@id": "",
  "url": "https://www.ideabox.com.pk/",
  "telephone": "+92 21 37234945",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2nd floor, Plot 1C Khayaban-e-Saadi, Phase 7 Defence Housing Authority, Karachi, Karachi City, Sindh 75500",
    "addressLocality": "Sindh",
    "postalCode": "75500",
    "addressCountry": "PK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 24.831027967090243,
    "longitude": 67.07490002377298
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "10:00",
    "closes": "20:00"
  },
  "sameAs": [
    "https://pk.linkedin.com/company/ideaboxpakistan",
    "https://twitter.com/IdeaboxPakistan"
  ]
          }`}
        </script>
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
  description:
    "We Hand-Craft creative tech solutions with solid strategies & powerful technologies. We have the experience & expertise to develop & deliver complex applications",
  canonical: "https://ideabox.com.pk",
  openGraph: {
    type: "website",
    locale: "en_Us",
    url: "https://ideabox.com.pk",
    title: "Ideabox | Official Website ® | Tech Solution Provider",
    description:
      "We Hand-Craft creative tech solutions with solid strategies & powerful technologies. We have the experience & expertise to develop & deliver complex applications",
    images: [
      {
        url: "https://ideabox.com.pk/footer/ideabox.png",
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
