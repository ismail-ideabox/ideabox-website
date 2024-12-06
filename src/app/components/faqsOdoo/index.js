"use client";
import React, { useState } from "react";
import styles from "./faqsOdoo.module.css";
import layout from "../../styles/layout.module.css";
import { classNames } from "@/app/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

function FaqsOdoo() {
  const [faqsData, setFaqsData] = useState([
    {
      question: "What is Odoo, and how can it benefit my business?",
      answers:
        `Odoo is an open-source ERP solution offering incorporated packages & apps like CRM, stock, sales, ecommerce, marketing, manufacturing and accounting. It streamlines operations, improves performance, and gives a unified platform for dealing with enterprise processes.`,
      istoggle: false,
    },
    {
      question:
        "How do you customize Odoo for specific business needs?",
      answers:
        `We tailor Odoo modules as per client’s need which includes editing workflows, adding custom functions, and integrating third-softwares to align with your business requirements.`,
      istoggle: false,
    },
    {
      question: "Why do you need a certified Odoo consultant?",
      answers:
        `Although Odoo is praised for intuitiveness and ease of use, setting up the Odoo platform to bring maximum profitability to your business requires significant time and effort. Odoo consultants help support companies at all stages of the Odoo implementation, customization, integration, and migration projects to help them get the most out of the software and improve efficiency enterprise-wide.`,
      istoggle: false,
    },
    {
      question: "How to choose the best Odoo consultant?",
      answers:
        `<b>Odoo Functional Consulting Competency:</b> If a consultant has profound knowledge across various industries and functional areas to help you elicit your business requirements and specifics and conceptualize the solution accordingly.<br><br>

<b>Odoo Technical Competency:</b> If an Odoo technical consultant has a solid understanding of the Odoo platform, can customize it, build new Odoo apps, create custom connections, and run tests. The consultant should be able to share case studies and references of previous Odoo implementations to showcase their expertise.<br><br>

<b>Change Management Practices:</b> Whether an Odoo consultant can help you develop and implement change management practices to redefine business flows and processes and increase operational efficiency with the implementation of Odoo while minimizing the risk of disruptions and downtime.<br><br>

<b>Communication Skills:</b> If Odoo consultants can elicit business needs and set effective communication with a customer and a development team for a successful implementation of the Odoo project.<br><br>

<b>Post-Implementation Support Offering:</b> So that the solution can be further upgraded in line with new objectives and market trends. 
        `,
      istoggle: false,
    },
    {
      question:
        "What is the timeline for implementing Odoo?",
      answers:
        `Implementation timelines may vary and are usually based on project scope, requirements, complexity and customization needs. A general implementation typically takes anywhere from 1-6 months.`,
      istoggle: false,
    },
    {
      question:
        "Can Odoo integrate with other software we currently use?",
      answers:
        `Yes, Odoo integrates seamlessly with third party software, which includes payment gateways, e-commerce systems, mobile apps,  custom software's and APIs, ensuring smooth data flow and operational efficiency.`,
      istoggle: false,
    },
    {
      question: "What are the key steps of the Odoo development process?",
      answers:
        `<b>•</b> Analysis of business needs that define functional and non-functional requirements for the Odoo solution<br>
<b>•</b> ERP solution conceptualization and Odoo technology selection<br>
<b>•</b> Definition of the integration scope of the Odoo platform<br>
<b>•</b> Project planning<br>
<b>•</b> Customization of the Odoo platform and platform integration using custom code, pre-built connectors, or APIs<br>
<b>•</b> Running quality assurance and testing<br>
<b>•</b> Platform deployment and handover to end-users<br>
<b>•</b> Post-launch support`,
      istoggle: false,
    },
    {
      question: "Do you provide ODOO services in the USA, South Africa, UAE and other European countries?",
      answers:
        `Yes, our team provides services in North and SOuth America, Africa, Europe and GCC countries. We have offices in the USA, UAE & Pakistan at the moment.`,
      istoggle: false,
    },
    {
      question: "Do you provide Odoo hosting services?",
      answers:
        `Yes, we offer both on-premise and cloud-based hosting solutions tailored to your business needs.`,
      istoggle: false,
    },
    {
      question: "What kind of training do you provide for Odoo?",
      answers:
        `We provide comprehensive training, covering basic navigation, advanced features, and role-specific modules to ensure users are proficient in using Odoo.`,
      istoggle: false,
    },
    {
      question: "How secure is Odoo for business operations?",
      answers:
        `Odoo ensures data security through regular updates, encrypted connections, and role-based access controls. We also implement additional security measures tailored to your business.`,
      istoggle: false,
    },
    {
      question: "How much does Odoo implementation cost?",
      answers:
        `The cost of Odoo implementation depends on various factors, such as the project’s functional scope, its integration capacity, data management activities, team composition, training requirements, and support level. Roughly, Odoo implementation cost can vary from $2,000 to $150,000 (excluding license fees & hosting services), depending on the project's complexity. For a ballpark estimate of your particular project, reach out to our Odoo consultants.`,
      istoggle: false,
    },
    {
      question: "How can I get in touch with Ideabox Technology for ODOO services",
      answers:
        `You can contact us through our website contact form, chat services and direct telephone line. Our team is always excited to engage with business and help them automate processes via the best ERP solution available in the market`,
      istoggle: false,
    },
    {
      question: "Do you offer ongoing support after ODOO implementation?",
      answers:
        `Yes we offer comprehensive support services after the implementation of ODOO.`,
      istoggle: false,
    },
  ]);

  const handleAccordionToggle = (accordion) => {
    setFaqsData((prevValue) =>
      prevValue.map((item, index) => {
        if (accordion === index) {
          return {
            ...item,
            istoggle: !item.istoggle,
          };
        } else {
          return {
            ...item,
            istoggle: false,
          };
        }
      })
    );
  };
  return (
    <section
      className={classNames(
        layout.grid,
        layout.grid_col80,
        styles.faqs_section
      )}
    >
      <div className={layout.block__inner}>
        <div className={styles.faqs_container}>
          <div className={styles.faqs_heading}>
            <h4 className="heading">FAQS</h4>
          </div>
          <div className={styles.faqs_help}>
            <h2 className="main-heading">How Can We Help?</h2>
          </div>
          <div className={styles.faqs__wrapper}>
            {faqsData.map((faq, index) => {
              return (
                <div
                  className={
                    faq.istoggle
                      ? classNames(styles.faq, styles.faq_active)
                      : styles.faq
                  }
                  key={index}
                >
                  <div
                    className={styles.faq__header}
                    onClick={() => handleAccordionToggle(index)}
                  >
                    <span>Q</span>
                    <p
                      className={faq.istoggle ? styles.faq_question_active : ""}
                    >
                      {faq.question}
                    </p>

                    {faq.istoggle ? (
                      <FontAwesomeIcon icon={faMinus} />
                    ) : (
                      <FontAwesomeIcon icon={faPlus} />
                    )}
                  </div>
                  <div className={styles.faq__body}>
                    <span>Ans.</span>
                    <p dangerouslySetInnerHTML={{ __html: faq.answers }}/>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqsOdoo;
