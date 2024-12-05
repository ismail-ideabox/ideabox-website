"use client"
import React, { useState } from "react";
import layout from "../../styles/layout.module.css";
import styles from "./odoo.module.css";
import { classNames } from "@/app/utils";
import Button from "@/app/components/button/button";
import Image from "next/image";
import { image } from "../../../../public/odoo";

const servicesData = [
  {
    id: 1,
    isActive: true,
    icon: image.usageIcon1,
    title: "TECHNICAL & FUNCTIONAL CONSULTANCY",
    description:
      "As an Odoo partner, we provide comprehensive technical and functional consultancy. Our technical understanding ensures custom designed modules, seamless integrations, and device scalability, whilst our purposeful consultancy aligns Odoo’s functions with your business processes. Together, we deliver tailor-made ERP solutions, enhancing productiveness, streamlining workflows, and empowering records-driven decision making.",
  },
  {
    id: 2,
    isActive: false,
    icon: image.usageIcon1,
    title: "CUSTOMIZATION",
    description:
      "As an Odoo partner, we provide comprehensive technical and functional consultancy. Our technical understanding ensures custom designed modules, seamless integrations, and device scalability, whilst our purposeful consultancy aligns Odoo’s functions with your business processes. Together, we deliver tailor-made ERP solutions, enhancing productiveness, streamlining workflows, and empowering records-driven decision making.",
  },
  {
    id: 3,
    isActive: false,
    icon: image.usageIcon1,
    title: "IMPLEMENTATION",
    description:
      "As an Odoo partner, we provide comprehensive technical and functional consultancy. Our technical understanding ensures custom designed modules, seamless integrations, and device scalability, whilst our purposeful consultancy aligns Odoo’s functions with your business processes. Together, we deliver tailor-made ERP solutions, enhancing productiveness, streamlining workflows, and empowering records-driven decision making.",
  },
  {
    id: 4,
    isActive: false,
    icon: image.usageIcon1,
    title: "INTEGRATION",
    description:
      "As an Odoo partner, we provide comprehensive technical and functional consultancy. Our technical understanding ensures custom designed modules, seamless integrations, and device scalability, whilst our purposeful consultancy aligns Odoo’s functions with your business processes. Together, we deliver tailor-made ERP solutions, enhancing productiveness, streamlining workflows, and empowering records-driven decision making.",
  },
  {
    id: 5,
    isActive: false,
    icon: image.usageIcon1,
    title: "TESTING & DEPLOYMENTS",
    description:
      "As an Odoo partner, we provide comprehensive technical and functional consultancy. Our technical understanding ensures custom designed modules, seamless integrations, and device scalability, whilst our purposeful consultancy aligns Odoo’s functions with your business processes. Together, we deliver tailor-made ERP solutions, enhancing productiveness, streamlining workflows, and empowering records-driven decision making.",
  },
  {
    id: 6,
    isActive: false,
    icon: image.usageIcon1,
    title: "TRAINING & SUPPORT",
    description:
      "As an Odoo partner, we provide comprehensive technical and functional consultancy. Our technical understanding ensures custom designed modules, seamless integrations, and device scalability, whilst our purposeful consultancy aligns Odoo’s functions with your business processes. Together, we deliver tailor-made ERP solutions, enhancing productiveness, streamlining workflows, and empowering records-driven decision making.",
  },
];

export default function Services() {
  const [odooServices, setOdooServices] = useState(servicesData);

  const handleActiveService = (id)=> {
    const updatedServices = odooServices.map((service) => ({
        ...service,
        isActive: service.id === id, // Set isActive to true only for the clicked service
      }));
      setOdooServices(updatedServices);

  }
  return (
    <section
      className={classNames(
        layout.grid,
        layout.grid_col80,
        styles.odoo_color_section
      )}
    >
      <div className={layout.block__inner}>
        <div className={styles.section_container}>
          <h4 className="heading">Services</h4>
          <h2 className="main-heading">
            Comprehensive
            <br /> Odoo Services
          </h2>
          <div className={styles.services_container}>
            {odooServices.map((item, index) => (
              <div
                className={item.isActive ? styles.main_card : styles.side_cards}
                key={index}
              >
                {!item.isActive ? (
                  <div className={styles.side_card} onClick={()=>handleActiveService(item.id)} style={{zIndex:odooServices.length-index}}>{item.title}</div>
                ) : (
                  <div className={styles.content}>
                    <Image src={image.usageIcon1} />
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <Button
                      redirect={""}
                      text={"Explore Now"}
                      type="primary"
                      componentType="button"
                      //   onClick={() => setToggle(true)}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
