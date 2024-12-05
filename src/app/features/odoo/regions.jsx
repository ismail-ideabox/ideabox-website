import React from "react";
import layout from "../../styles/layout.module.css";
import styles from "./odoo.module.css";
import { classNames } from "@/app/utils";
import { image } from "../../../../public/odoo";
import Image from "next/image";

const regionsData = [
  {
    id: 1,
    image: image.usa,
    name: "USA",
  },
  {
    id: 2,
    image: image.uk,
    name: "UK",
  },
  {
    id: 3,
    image: image.southAfrica,
    name: "SOUTH AFRICA",
  },
  {
    id: 4,
    image: image.uae,
    name: "UAE",
  },
  {
    id: 5,
    image: image.germany,
    name: "GERMANY",
  },
  {
    id: 6,
    image: image.oman,
    name: "OMAN",
  },
  {
    id: 7,
    image: image.pakistan,
    name: "PAKISTAN",
  },
  {
    id: 8,
    image: image.scotland,
    name: "SCOTLAND",
  },
  {
    id: 9,
    image: image.india,
    name: "INDIA",
  },
];

export default function Regions() {
  return (
    <section
      className={classNames(
        layout.grid,
        layout.grid_col80,
        styles.primary_color_section
      )}
    >
      <div className={layout.block__inner}>
        <div className={styles.section_container}>
          <h2 className="main-heading">
            Ideabox ODOO
            <br />
            Implementation Regions
          </h2>
          <div className={styles.regions_container}>
            {regionsData.map((item, index) => (
              <div className={styles.Images} key={index}>
                <Image src={item.image} alt="" />
                <h3>{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
