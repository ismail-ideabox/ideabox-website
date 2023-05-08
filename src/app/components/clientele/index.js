import React from "react";
import Image from "next/image";
import styles from "./clientele.module.css";
import layout from "../../styles/layout.module.css";
import { images } from "../../../../public/clientele";
import { classNames } from "@/app/utils";

function Clientele() {
  return (
    <section
      className={classNames(
        layout.grid,
        layout.grid_col80,
        styles.clientele_section
      )}
    >
      <div className={layout.block__inner}>
        <div className={styles.clientele_container}>
          <div className={styles.clientele_heading}>
            <h4 className={"heading"}>CLIENTELE</h4>
          </div>
          <div className={styles.trusted_client}>
            <h2 className="main-heading">
              Our Trusted
              <br /> Clients
            </h2>
          </div>
          <div className={styles.clientele_images}>
            <div className={styles.clientele_brands}>
              <Image src={images.cokestudio} alt="Coke Studio" />
            </div>
            <div className={styles.clientele_brands}>
              <Image src={images.byco} alt="Byco" />
            </div>
            <div className={styles.clientele_brands}>
              <Image src={images.hubco} alt="Hubco" />
            </div>
            <div className={styles.clientele_brands}>
              <Image src={images.silkbank} alt="SilkBank" />
            </div>
            <div className={styles.clientele_brands}>
              <Image src={images.hbl} alt="HBL" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clientele;
