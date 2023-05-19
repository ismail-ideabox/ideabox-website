"use client";
import React, { useState } from "react";
import styles from "./faqs.module.css";
import layout from "../../styles/layout.module.css";
import { classNames } from "@/app/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

function Faqs() {
  const [faqsData, setFaqsData] = useState([
    {
      question: "What services do you provide?",
      answers:
        "We offer a range of software development services, including custom software development, web application development, mobile app development, business process re-engineering, MVP’s for startup’s, CRM & ERP development, ODOO implementation, software testing, maintenance, and support",
      istoggle: false,
    },
    {
      question:
        "What technologies and programming languages do you specialise in?",
      answers:
        "We specialise in various technologies and programming languages, such as Java, Python, .NET, PHP, JavaScript, React.JS, React.Native, Angular, Node.js, and more. We stay up to date with the latest industry trends and continuously expand our skill set",
      istoggle: false,
    },
    {
      question: "What is your development process like?",
      answers:
        "Our development process follows agile methodologies. We collaborate closely with clients, conduct regular meetings for requirement gathering, provide regular progress updates, and incorporate feedback throughout the development cycle",
      istoggle: false,
    },
    {
      question: "How do you handle scalability and future growth?",
      answers:
        "We design our software solutions with scalability in mind. Our architecture and infrastructure allow for seamless scalability, ensuring that your software can accommodate future growth and increased user demand",
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

export default Faqs;
