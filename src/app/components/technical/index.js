import React, { useRef } from "react";
import styles from "./technical.module.css";
import layout from "../../styles/layout.module.css";
import Image from "next/image";
import { image } from "../../../../public/gifs";
import { classNames } from "@/app/utils";
import { useRouter } from "next/navigation";

function Technical({ bottomRef }) {
  const router = useRouter();
  const isHomePage = router.pathname === "/" && !childRef;
  return (
    <section
      id="services"
      // ref={serviceRef}
      ref={bottomRef}
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
            <Image src={image.software} alt="" />
            <p>Software Development</p>
          </div>
          <div className={styles.gifs_inner}>
            <Image src={image.ecommerce} alt="" />
            <p>E-Commerce Integration</p>
          </div>
          <div className={styles.gifs_inner}>
            <Image src={image.enterprise} alt="" />
            <p>Emterprise Services & Consultancy</p>
          </div>
          <div className={styles.gifs_inner}>
            <Image src={image.crms} alt="" />
            <p>CRMs & Support Services</p>
          </div>
          <div className={styles.gifs_inner}>
            <Image src={image.bigdata} alt="" />
            <p>Big Data Analytics</p>
          </div>
          <div className={styles.gifs_inner}>
            <Image src={image.devops} alt="" />
            <p>DEVOPS & Cloud Services</p>
          </div>
          <div className={styles.gifs_inner}>
            <Image src={image.mobIcon} alt="" />
            <p>Mobile App Development</p>
          </div>
          <div className={styles.gifs_inner}>
            <Image src={image.artificial} alt="" />
            <p>Artificial Intelligence</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technical;
