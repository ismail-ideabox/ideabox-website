import React from 'react'
import layout from "../../styles/layout.module.css";
import styles from "./odoo.module.css";
import { image } from "../../../../public/odoo";
import Image from "next/image";

export default function OdooBannerImage() {
  return (
    <div className={styles.odooBannerImage}>
      <Image src={image.odooBannerImage} alt='odoo'/>
    </div>
  )
}
