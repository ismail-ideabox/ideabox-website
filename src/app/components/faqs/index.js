"use client";
import React, { useState } from "react";
import layout from "../../styles/layout.module.css";
import styles from "./faqs.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { classNames } from "@/app/utils";

function Faqs() {
  const [faqsData, setFaqsData] = useState([
    {
      question: "What is SEO?",
      answers:
        "A	SEO is the process of improving your site to increase its visibility when people search for products or services related to your business in Google, Bing and other engines. The better that you can make sure these pages show up on the first page results list; the easier it will be to attract prospective customers and keep them coming back again because they found what best suited their needs through us!",
      istoggle: false,
    },
    {
      question: "What is SEO?",
      answers:
        "A	SEO is the process of improving your site to increase its visibility when people search for products or services related to your business in Google, Bing and other engines. The better that you can make sure these pages show up on the first page results list; the easier it will be to attract prospective customers and keep them coming back again because they found what best suited their needs through us!",
      istoggle: false,
    },
    {
      question: "What is SEO?",
      answers:
        "A	SEO is the process of improving your site to increase its visibility when people search for products or services related to your business in Google, Bing and other engines. The better that you can make sure these pages show up on the first page results list; the easier it will be to attract prospective customers and keep them coming back again because they found what best suited their needs through us!",
      istoggle: false,
    },
    {
      question: "What is SEO?",
      answers:
        "A	SEO is the process of improving your site to increase its visibility when people search for products or services related to your business in Google, Bing and other engines. The better that you can make sure these pages show up on the first page results list; the easier it will be to attract prospective customers and keep them coming back again because they found what best suited their needs through us!",
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
                    <p>
                      A
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {faq.answers}
                    </p>
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
