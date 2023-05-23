import React from "react";
import styles from "./commitments.module.css";
import layout from "../../styles/layout.module.css";
import { classNames } from "@/app/utils";
import { images } from "../../../../public/commitments";
import Image from "../image";

function Secondary({ animate, animateRef }) {
  // console.log(animate, "animate");
  return (
    <section
      ref={animateRef}
      className={classNames(
        styles.section2,
        styles.section2_container,
        layout.grid,
        layout.grid_col80
      )}
    >
      <div className={layout.block__inner}>
        <div className={styles.flex}>
          <div className={styles.section2_content}>
            <h3 className="heading">OUR BELIEVES</h3>
            <h2 className="main-heading">Honoring Commitments</h2>
            <p>
              We believe in our clients and our strength lies in developing
              close working relationships to help them succeed.
            </p>
            <p>
              We foster a work environment where people can communicate openly
              and encourage feedback to help us learn and grow.
            </p>
            <p>
              At Ideabox, we don’t just talk about integrity, we demonstrate it.
              Honoring commitments, whether towards our employees or our
              clients, is something we hold in very high regard.
            </p>
          </div>
          <div className={styles.section2_image}>
            <div
              className={
                animate
                  ? classNames(
                      styles.lefthand_container,
                      styles.lefthand_container_animate
                    )
                  : styles.lefthand_container
              }
            >
              <Image
                className={
                  animate
                    ? classNames(styles.leftthumb_animate, styles.leftthumb)
                    : styles.leftthumb
                }
                src={images.leftthumb}
                alt=""
              />
              <Image className={styles.lefthand} src={images.lefthand} alt="" />
              <Image
                className={
                  animate
                    ? classNames(styles.leftfingers_animate, styles.leftfingers)
                    : styles.leftfingers
                }
                src={images.leftfingers}
                alt=""
              />
            </div>
            <div className={styles.righthand_container}>
              <Image
                className={
                  animate
                    ? classNames(styles.righthand, styles.righthand_animate)
                    : styles.righthand
                }
                src={images.righthand}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Secondary;
