import styles from "./technical.module.css";
import layout from "../../styles/layout.module.css";
import { classNames } from "@/app/utils";
import React, { useRef } from "react";
import Image from "../image";
import { image } from "../../../../public/gifs";
import { useRouter } from "next/navigation";

function Technical({ servicesRef }) {
  const router = useRouter();
  const isHomePage = router.pathname === "/" && !childRef;
  return (
    <section
      id="services"
      // ref={serviceRef}
      ref={servicesRef}
      className={classNames(
        layout.grid,
        layout.grid_col80,
        styles.tech_section
      )}
    >
      <div
        className={classNames(styles.technical_section, layout.block__inner)}
      >
        <div className={styles.technical_services}>
          <h3 className="heading">TECHNICAL SERVICES</h3>
        </div>
        <div className={styles.bespoke_things}>
          <div className={styles.be_spoke}>
            <p>
              From bespoke web platforms and mobile apps, to big data analytics
              - we have the experience and expertise to develop & deliver
              complex systems.
            </p>
          </div>
          <div className={styles.things_we_do}>
            <h2 className="main-heading">
              Thing We Gladly
              <br /> Do For Money
            </h2>
          </div>
        </div>
        <div className={styles.gifs_container}>
          <div className={styles.gifs_inner}>
            <Image
              loading="lazy"
              src={image.software}
              alt="Software Development gif"
            />
            <p>Software Development</p>
          </div>
          <div className={styles.gifs_inner}>
            <Image
              loading="lazy"
              src={image.ecommerce}
              alt="Ecommerce Integration gif"
            />
            <p>E-Commerce Integration</p>
          </div>
          <div className={styles.gifs_inner}>
            <Image
              loading="lazy"
              src={image.enterprise}
              alt="Enterprise Service gif"
            />
            <p>Emterprise Services & Consultancy</p>
          </div>
          <div className={styles.gifs_inner}>
            <Image
              loading="lazy"
              src={image.crms}
              alt="CRMs & Support Services gif"
            />
            <p>CRMs & Support Services</p>
          </div>
          <div className={styles.gifs_inner}>
            <Image loading="lazy" src={image.bigdata} alt="Big Data gif" />
            <p>Big Data Analytics</p>
          </div>
          <div className={styles.gifs_inner}>
            <Image
              loading="lazy"
              src={image.devops}
              alt="DEVOPS & Cloud Services gif"
            />
            <p>DEVOPS & Cloud Services</p>
          </div>
          <div className={styles.gifs_inner}>
            <Image
              loading="lazy"
              src={image.mobIcon}
              alt="Mobile App Development gif"
            />
            <p>Mobile App Development</p>
          </div>
          <div className={styles.gifs_inner}>
            <Image
              loading="lazy"
              src={image.artificial}
              alt="Artificial Intelligence gif"
            />
            <p>Artificial Intelligence</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technical;
