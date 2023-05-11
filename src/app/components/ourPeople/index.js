import React from "react";
import Image from "next/image";
import styles from "./ourpeople.module.css";
import layout from "../../styles/layout.module.css";
import { images } from "../../../../public/ourPeople";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Button from "../button/button";
import Link from "next/link";
import { classNames } from "@/app/utils";
import { image } from "../../../../public/gifs";

function OurPeople() {
  return (
    <section
      className={classNames(
        styles.ourpeople_section,
        layout.grid,
        layout.grid_col80
      )}
    >
      <div className={layout.block__inner}>
        <div className={styles.ourpeople_container}>
          <div className="">
            <h3 className="heading">OUR PEOPLE</h3>
          </div>
          <div className={styles.leaderboard}>
            <h2 className="main-heading">Leaderboard</h2>
          </div>
          <div className={styles.founder_container}>
            <div className={styles.founder_content}>
              <div className={styles.founder_name}>
                <h2>Obaid Rehman</h2>
              </div>
              <div className={styles.founder_ceo}>
                <h4>Founder & CEO</h4>
              </div>
              <div className={styles.founder_flags}>
                <Image src={images.flags} alt="Flags" />
              </div>
              <div className={styles.founder_para}>
                <p>
                  With a keen understanding of business analytics and scope,
                  Obaid leads business development and client relations at
                  Ideabox. He ensures clients get top quality service for all
                  their projects.
                </p>
              </div>
              <div className={styles.founder_work_logo}>
                <div className={styles.work_image_container}>
                  <div className={styles.work_image}>
                    <Link
                      target="_blank"
                      href={"https://www.hilton.com/en/corporate/"}
                    >
                      <Image
                        className={styles.work_image_img}
                        src={images.hilton}
                      />
                    </Link>
                  </div>
                  <div className={styles.work_image}>
                    <Link
                      target="_blank"
                      href={"https://www.networkrail.co.uk/"}
                    >
                      <Image
                        className={styles.work_image_img}
                        src={images.networkrail}
                      />
                    </Link>
                  </div>
                  <div className={styles.work_image}>
                    <Link
                      target="_blank"
                      href={"https://sports.ladbrokes.com/"}
                    >
                      <Image
                        className={styles.work_image_img}
                        src={images.ladbrokes}
                      />
                    </Link>
                  </div>
                  <div className={styles.work_image}>
                    <Link target="_blank" href={"https://shop.zod.media/"}>
                      <Image
                        className={styles.work_image_img}
                        src={images.zod}
                      />
                    </Link>
                  </div>
                  <div className={styles.work_image}>
                    <Link target="_blank" href={"https://www.nhs.uk/"}>
                      <Image
                        className={styles.work_image_img}
                        src={images.nhs}
                      />
                    </Link>
                  </div>
                  <div className={styles.work_image}>
                    <Link target="_blank" href={"https://www.ke.com.pk/"}>
                      <Image
                        className={styles.work_image_img}
                        src={images.ke}
                      />
                    </Link>
                  </div>
                  <div className={styles.work_image}>
                    <Link target="_blank" href={"https://temasek.com.sg/"}>
                      <Image
                        className={styles.work_image_img}
                        src={images.temasek}
                      />
                    </Link>
                  </div>
                </div>
                <Button
                  redirect={"/our-team"}
                  text={"VIEW OUR TEAM"}
                  type="primary"
                />
              </div>
            </div>
            <div className={styles.founder_image}>
              <Image src={images.founder} alt="Obaid Rehman" />
              <div className={styles.founder_linkedin}>
                <Link
                  target="_blank"
                  href="https://pk.linkedin.com/in/obaidrehman"
                  className={styles.founder_linkedin_icon}
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurPeople;
