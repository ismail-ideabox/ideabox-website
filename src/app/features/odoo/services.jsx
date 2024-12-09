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
      "As an Odoo partner, we provide comprehensive technical and functional consultancy. Our technical understanding ensures custom designed modules, seamless integrations, and device scalability, whilst our purposeful consultancy aligns Odoo’s functions with your business processes. Together, we deliver tailor-made ERP solutions, enhancing productiveness, streamlining workflows, and empowering records-driven decision-making.",
  },
  {
    id: 2,
    isActive: false,
    icon: image.usageIcon1,
    title: "CUSTOMIZATION",
    description:
      "As an Odoo service provider, we specialize in custom modifications to match Odoo to your unique business needs. From modifying modules and workflows to integrating third-party systems, our expertise ensures a seamless and efficient ERP experience. We deliver customized solutions, increasing usability, functionality and efficiency to",
  },
  {
    id: 3,
    isActive: false,
    icon: image.usageIcon1,
    title: "IMPLEMENTATION",
    description:
      "We deliver end-to-end Odoo CRM and ERP implementation tailored to your business needs. Our expertise ensures seamless integration, optimized workflows, and user-friendly configurations. From data migration to staff training, we streamline processes, enhance customer management, and improve overall efficiency, empowering your business for sustained growth.",
  },
  {
    id: 4,
    isActive: false,
    icon: image.usageIcon1,
    title: "INTEGRATION",
    description:
      "We offer seamless Odoo integration services, connecting Odoo with third-party applications, APIs, and custom structures. Our understanding guarantees records synchronization, streamlined workflows, and improved capability. By integrating Odoo with your current infrastructure, we assist optimize operations, enhance efficiency, and create a unified surroundings for business growth.",
  },
  {
    id: 5,
    isActive: false,
    icon: image.usageIcon1,
    title: "TESTING & DEPLOYMENTS",
    description:
      "Our standard approach in ODOO is unit testing for all features, integration testing to make sure seamless connectivity between all apps and modules, and consumer acceptance trying out (UAT) for functionality validation. We also carry out performance and security  making sure a strong, stable & scalable system. During deployment, we control configurations, records migration, and environment setup, handing over a reliable, prepared-to-use ERP gadget tailored to your business desires for seamless operations.",
  },
  {
    id: 6,
    isActive: false,
    icon: image.usageIcon1,
    title: "TRAINING & SUPPORT",
    description:
      "We provide complete Odoo schooling and support to make adoption and success. Our education classes empower users with the know-how to navigate and make use of Odoo effectively. We offer ongoing help, addressing technical issues, upgrades, and customizations, ensuring seamless operations and maximizing the value of your Odoo funding.",
  },
];

export default function Services() {
  const [odooServices, setOdooServices] = useState(servicesData);

  const handleActiveService = (id)=> {
    const updatedServices = odooServices.map((service) => ({
        ...service,
        isActive: service.id === id, 
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
                    {/* <Button
                      redirect={""}
                      text={"Explore Now"}
                      type="primary"
                      componentType="button"
                      //   onClick={() => setToggle(true)}
                    /> */}
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
