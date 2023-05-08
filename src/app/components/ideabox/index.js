import React from "react";
import styles from "./ideabox.module.css";
import layout from "../../styles/layout.module.css";
import { classNames } from "@/app/utils";

function Ideabox() {
  return (
    <section
      className={classNames(
        layout.grid,
        layout.grid_col80,
        styles.ideabox_section
      )}
    >
      <div className={layout.block__inner}>
        <div className={styles.ideabox_container}>
          <div className={styles.why_ideabox}>
            <h2 className="main-heading">Why Ideabox?</h2>
          </div>
          <div className={styles.ideabox_features}>
            <div className={styles.features}>
              <h3>
                STRATEGIC <br /> APPROACH
              </h3>
              <p>
                Purpose Path helps you reach your goals faster with insightful
                market research.
              </p>
            </div>
            <div className={styles.features}>
              <h3>
                CREATIVE <br /> GUIDANCE
              </h3>
              <p>
                Work on your most outrageously creative ideas, with a team of
                seasoned creatives at your disposal.
              </p>
            </div>
            <div className={styles.features}>
              <h3>
                FAST <br /> TURNAROUNDS
              </h3>
              <p>
                A dedicated project manager ensures your projects are delivered
                before your deadlines.
              </p>
            </div>
            <div className={styles.features}>
              <h3>
                PAY AS <br /> YOU GO
              </h3>
              <p>
                Flexible payment plans and no-monthly commitments for all
                services.
              </p>
            </div>
            <div className={styles.features}>
              <h3>
                ALWAYS <br /> AVAILABLE
              </h3>
              <p>
                24/7 support with a real person is standard when you work with
                Purpose Path.
              </p>
            </div>
            <div className={styles.features}>
              <h3>REVENUE DRIVEN</h3>
              <p>
                Numbers never lie. Purpose Path focuses on relevant metrics, not
                empty numbers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ideabox;
