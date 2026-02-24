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
  {
    id: 10,
    image: image.belgium,
    name: "BELGIUM",
  },
  {
    id: 11,
    image: image.indonesia,
    name: "INDONESIA",
  },
  {
    id: 12,
    image: image.ireland,
    name: "IRELAND",
  },
  {
    id: 13,
    image: image.kuwait,
    name: "KUWAIT",
  },
  {
    id: 14,
    image: image.malaysia,
    name: "MALAYSIA",
  },
  {
    id: 15,
    image: image.netherlands,
    name: "NETHERLANDS",
  },
  {
    id: 16,
    image: image.qatar,
    name: "QATAR",
  },
  {
    id: 17,
    image: image.saudi,
    name: "SAUDI ARABIA",
  },
  {
    id: 18,
    image: image.singapore,
    name: "SINGAPORE",
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
                <Image src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
