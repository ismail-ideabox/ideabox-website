import Header from "@/app/components/header";
import Image from "../../components/image";
import React from "react";
import styles from "./ourWorkDetails.module.css";
import layout from "../../styles/layout.module.css";
import Button from "@/app/components/button/button";
import { classNames } from "@/app/utils";
import Projectcard from "@/app/components/ourWork/projectcard";
import Faqs from "@/app/components/faqs";
import Footer from "@/app/components/footer";
import { ScrollToTop } from "@/app/components/scrollToTop";
import workDetail from "@/app/data/work";
import workData from "@/app/data/work";
function OurWorkDetails({ workTitle }) {
  const filteredWork = workData.find(
    (ele) =>
      ele.projectName.toLocaleLowerCase() === workTitle.toLocaleLowerCase()
  );
  return (
    <>
      <head>
        <title>{filteredWork?.projectName + " | Ideabox"}</title>
        <meta name="description" content={filteredWork?.metaDescription} />
        <link rel="canonical" href={filteredWork?.canonicalTag} />
      </head>
      <div className={styles.header_bg}>
        <Header innerPage={true} />
      </div>
      <div className={styles.banner_container}>
        <div className={styles.banner_image}>
          <Image src={filteredWork?.cardImage} alt="Case Study Card Image" />
        </div>
        <div className={styles.work_logo}>
          <Image src={filteredWork?.workLogo} alt="Client Case Study Logo" />
        </div>
      </div>
      <div className={styles.content_bg}>
        <div className={classNames(layout.grid, layout.grid_col80)}>
          <div
            className={classNames(
              styles.content_container,
              layout.block__inner
            )}
          >
            <div className={styles.button_byco}>
              <Button
                target={"_blank"}
                redirect={filteredWork?.url ? filteredWork?.url :""}
                text={filteredWork?.buttontext}
                type="primary"
              />
            </div>
            <div className={styles.byco_information}>
              <pre>{filteredWork?.workInfo}</pre>
              <h3>Implementation</h3>
              <pre>{filteredWork?.implementation}</pre>
              <h3>Technologies</h3>
              <pre>{filteredWork?.technologies}</pre>
            </div>
            <div className={styles.more_casestudies}>
              <div className={styles.case_studies_heading}>
                <h3>More Case Studies</h3>
              </div>
              <div className={styles.case_studie_cards}>
                <div className={styles.projectcard}>
                  <Projectcard
                    workData={workDetail.filter(
                      (ele) => ele.id !== filteredWork?.id
                    )}
                    isHomePage={true}
                  />
                </div>
                <div className={styles.load_more_btn}>
                  <Button
                    redirect={"/our-work"}
                    text={"VIEW MORE WORK"}
                    type="primary"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Faqs />
      </div>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default OurWorkDetails;
