import React from "react";
import styles from "./ourTeam.module.css";
import layout from "../../styles/layout.module.css";
import Image from "../../components/image";
import { images } from "../../../../public/ourTeam";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Faqs from "@/app/components/faqs";
import { classNames } from "@/app/utils";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
const metadata = {
  title: "News & Blogs | Ideabox",
  description: "",
  canonical: "https://ideabox.technology/news-and-blogs",
  openGraph: {
    url: "https://ideabox.technology/news-and-blogs",
    title: "News & Blogs | Ideabox",
    description: "Open Graph Description",
    images: [
      {
        url: "../../../public/footer/ideabox.png",
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

function OurTeam() {
  return (
    <>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="canonical" content={metadata.canonical} />
        <meta property="og:url" content={metadata.openGraph.url} />
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

      <div className={styles.header_container}>
        <Header innerPage={true} />
        <div className={styles.banner_bg}>
          <div className={styles.banner_container}>
            <div className={styles.banner_heading}>
              <div className="heading">OUR TEAM</div>
              <h2>Dreams And Team Work Together</h2>
            </div>
            <div className={styles.banner_image_1}>
              <Image src={images.arrow} alt="Arrow on Our Team Banner" />
            </div>
            <div className={styles.banner_image}>
              <Image src={images.banner} alt="Our Team Banner" />
            </div>
          </div>
        </div>
        <section
          className={[
            styles.ourteam_section,
            layout.grid,
            layout.grid_col80,
          ].join(" ")}
        >
          <div className={layout.block__inner}>
            <div className={styles.team_container}>
              <div className={styles.team_card}>
                <div className={styles.team_image}>
                  <Image src={images.team} alt="Ideabox Team Member Image" />
                  <div className={styles.team_linkedin}>
                    <Link
                      rel="nofollow"
                      href=""
                      className={styles.team_linkedin_icon}
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </Link>
                  </div>
                </div>
                <div className={styles.team_name}>
                  <h2>Omer Sajid</h2>
                </div>
                <div className={styles.team_skill}>
                  <h4>UI/UX Developer</h4>
                </div>
                <div className={styles.team_para}>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iste, doloribus reiciendis! Illo facere voluptatibus nostrum
                    molestiae provident at numquam aliquam! Nisi, minus esse
                    repudiandae eaque officia perferendis fugiat! Quisquam totam
                    beatae cumque natus labore. Eius ad mollitia necessitatibus?
                    Quas vero neque obcaecati adipisci atque, ab totam culpa
                    ipsum harum quidem.
                  </p>
                </div>
              </div>
              <div className={styles.team_card}>
                <div className={styles.team_image}>
                  <Image src={images.team} alt="Ideabox Team Member Image" />
                  <div className={styles.team_linkedin}>
                    <Link
                      rel="nofollow"
                      href=""
                      className={styles.team_linkedin_icon}
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </Link>
                  </div>
                </div>
                <div className={styles.team_name}>
                  <h2>Syed Amir</h2>
                </div>
                <div className={styles.team_skill}>
                  <h4>UI/UX Developer</h4>
                </div>
                <div className={styles.team_para}>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iste, doloribus reiciendis! Illo facere voluptatibus nostrum
                    molestiae provident at numquam aliquam! Nisi, minus esse
                    repudiandae eaque officia perferendis fugiat! Quisquam totam
                    beatae cumque natus labore. Eius ad mollitia necessitatibus?
                    Quas vero neque obcaecati adipisci atque, ab totam culpa
                    ipsum harum quidem.
                  </p>
                </div>
              </div>
              <div className={styles.team_card}>
                <div className={styles.team_image}>
                  <Image src={images.team} alt="Ideabox Team Member Image" />
                  <div className={styles.team_linkedin}>
                    <Link
                      rel="nofollow"
                      href=""
                      className={styles.team_linkedin_icon}
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </Link>
                  </div>
                </div>
                <div className={styles.team_name}>
                  <h2>Umair Vadria</h2>
                </div>
                <div className={styles.team_skill}>
                  <h4>UI/UX Developer</h4>
                </div>
                <div className={styles.team_para}>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iste, doloribus reiciendis! Illo facere voluptatibus nostrum
                    molestiae provident at numquam aliquam! Nisi, minus esse
                    repudiandae eaque officia perferendis fugiat! Quisquam totam
                    beatae cumque natus labore. Eius ad mollitia necessitatibus?
                    Quas vero neque obcaecati adipisci atque, ab totam culpa
                    ipsum harum quidem.
                  </p>
                </div>
              </div>
              <div className={styles.team_card}>
                <div className={styles.team_image}>
                  <Image src={images.team} alt="Ideabox Team Member Image" />
                  <div className={styles.team_linkedin}>
                    <Link
                      rel="nofollow"
                      href=""
                      className={styles.team_linkedin_icon}
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </Link>
                  </div>
                </div>
                <div className={styles.team_name}>
                  <h2>Omer Sajid</h2>
                </div>
                <div className={styles.team_skill}>
                  <h4>UI/UX Developer</h4>
                </div>
                <div className={styles.team_para}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iste, doloribus reiciendis! Illo facere voluptatibus nostrum
                    molestiae provident at numquam aliquam! Nisi, minus esse
                    repudiandae eaque officia perferendis fugiat! Quisquam totam
                    beatae cumque natus labore. Eius ad mollitia necessitatibus?
                    Quas vero neque obcaecati adipisci atque, ab totam culpa
                    ipsum harum quidem.
                  </p>{" "}
                </div>
              </div>
              <div className={styles.team_card}>
                <div className={styles.team_image}>
                  <Image src={images.team} alt="Ideabox Team Member Image" />
                  <div className={styles.team_linkedin}>
                    <Link
                      rel="nofollow"
                      href=""
                      className={styles.team_linkedin_icon}
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </Link>
                  </div>
                </div>
                <div className={styles.team_name}>
                  <h2>Syed Amir</h2>
                </div>
                <div className={styles.team_skill}>
                  <h4>UI/UX Developer</h4>
                </div>
                <div className={styles.team_para}>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iste, doloribus reiciendis! Illo facere voluptatibus nostrum
                    molestiae provident at numquam aliquam! Nisi, minus esse
                    repudiandae eaque officia perferendis fugiat! Quisquam totam
                    beatae cumque natus labore. Eius ad mollitia necessitatibus?
                    Quas vero neque obcaecati adipisci atque, ab totam culpa
                    ipsum harum quidem.
                  </p>
                </div>
              </div>
              <div className={styles.team_card}>
                <div className={styles.team_image}>
                  <Image src={images.team} alt="Ideabox Team Member Image" />
                  <div className={styles.team_linkedin}>
                    <Link
                      rel="nofollow"
                      href=""
                      className={styles.team_linkedin_icon}
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </Link>
                  </div>
                </div>
                <div className={styles.team_name}>
                  <h2>Umair Vadria</h2>
                </div>
                <div className={styles.team_skill}>
                  <h4>UI/UX Developer</h4>
                </div>
                <div className={styles.team_para}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iste, doloribus reiciendis! Illo facere voluptatibus nostrum
                    molestiae provident at numquam aliquam! Nisi, minus esse
                    repudiandae eaque officia perferendis fugiat! Quisquam totam
                    beatae cumque natus labore. Eius ad mollitia necessitatibus?
                    Quas vero neque obcaecati adipisci atque, ab totam culpa
                    ipsum harum quidem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Faqs />
        <Footer />
      </div>
    </>
  );
}

export default OurTeam;
