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
                <Image src={images.worklogo} alt="Work Logo" />
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
                <Link href="" className={styles.founder_linkedin_icon}>
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
