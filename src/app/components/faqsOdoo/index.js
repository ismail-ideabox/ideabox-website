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
        "Odoo is an open-source ERP solution offering incorporated packages & apps like CRM, stock, sales, ecommerce, marketing, manufacturing and accounting. It streamlines operations, improves performance, and gives a unified platform for dealing with enterprise processes.",
      istoggle: false,
    },
    {
      question:
        "How do you customize Odoo for specific business needs?",
      answers:
        "We tailor Odoo modules as per client’s need which includes editing workflows, adding custom functions, and integrating third-softwares to align with your business requirements.",
      istoggle: false,
    },
    {
      question: "Why do you need a certified Odoo consultant?",
      answers:
        "Although Odoo is praised for intuitiveness and ease of use, setting up the Odoo platform to bring maximum profitability to your business requires significant time and effort. Odoo consultants help support companies at all stages of the Odoo implementation, customization, integration, and migration projects to help them get the most out of the software and improve efficiency enterprise-wide.",
      istoggle: false,
    },
    {
      question: "How to choose the best Odoo consultant?",
      answers:
        `<strong>Odoo functional consulting competency</strong> - if a consultant has profound knowledge across various industries and functional areas to help you elicit your business requirements and specifics and conceptualize the solution accordingly.<br/><br/>
        <strong>Odoo tech competency</strong> - if an Odoo technical consultant has a solid understanding of the Odoo platform, can customize it, build new Odoo apps, create custom connections, and run tests. The consultant should be able to share case studies and references of previous Odoo implementations to showcase their expertise. 
        `,
      istoggle: false,
    },
    {
      question:
        "How do you ensure the security and confidentiality of our project?",
      answers:
        "We prioritise the security of our clients' projects. We follow industry-standard best practices for data protection, implement secure coding practices, and maintain strict confidentiality agreements with our team members",
      istoggle: false,
    },
    {
      question:
        "What kind of support and maintenance do you provide post development?",
      answers:
        "We offer ongoing support and maintenance services to address any issues or updates that may arise after the development phase. Our team is available for timely bug fixes, performance optimizations, and feature enhancements. Majority of our clients do sign up a retainer with us.",
      istoggle: false,
    },
    {
      question: "What is your pricing structure?",
      answers:
        "Our pricing structure is based on various factors such as project complexity, scope, and duration. We provide detailed project proposals with transparent pricing, ensuring that you have a clear understanding of the cost involved.",
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
                    <p>{faq.answers}</p>
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
