import React from "react";
import styles from "./contactus.module.css";
import layout from "../../styles/layout.module.css";
import Image from "next/image";
import { images } from "../../../../public/contactUs";
import Button from "../../components/button/button";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import ContactUsForm from "@/app/components/getInTouch/input";
import TextArea from "@/app/components/getInTouch/textarea";
import Input from "@/app/components/getInTouch/input";

function ContactUs() {
  return (
    <>
      <Header innerPage={true} />
      <div className={styles.banner_bg}>
        <div className={[layout.grid, layout.grid_col80].join(" ")}>
          <div className={layout.block__inner}>
            <div className={styles.banner_container}>
              <div className={styles.banner_heading}>
                <div className="heading">GET IN TOUCH</div>
                <h2>Let's Make Something Awesome Together</h2>
              </div>
              <div className={styles.banner_image}>
                <div className={styles.banner_image_arrow}>
                  <Image src={images.arrow} alt="" />
                </div>
                <div className={styles.banner_image_girl}>
                  <Image src={images.banner} alt="Banner" />
                </div>
                <div className={styles.banner_image_clock}>
                  <Image src={images.clock} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={[
          styles.location_container,
          layout.grid,
          layout.grid_col80,
        ].join(" ")}
      >
        <div className={layout.block__inner}>
          <div className={styles.margin_top}>
            <div className={styles.flex}>
              <div className={styles.location_map}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.959398979597!2d67.07270061566327!3d24.831062052548955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c53f5ced18b%3A0xb527f2354c7936a6!2sIdeabox%20Pakistan!5e0!3m2!1sen!2s!4v1680993933348!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className={styles.loaction_address}>
                <h2>
                  We are available <br /> 24 hours a day, <br /> 7 days a week.
                </h2>
                <p>
                  2nd floor, Plot 1C Khayaban-e-Saadi, Phase 7 Defence Housing
                  Authority, Karachi, Karachi City, Sindh 75500
                  <br />
                  <br />
                  info@ideabox.com.pk
                </p>
                <Button
                  target="_blank"
                  redirect="https://goo.gl/maps/gSrSbqHuWHtipGmj6"
                  text="GET DIRECTIONS"
                  type="primary"
                />
              </div>
            </div>
          </div>
          <div className={styles.contact_form}>
            <h2>Contact Us</h2>
            <Input input_type="text" placeholder="Full Name" />
            <Input input_type="text" placeholder="Email Address" />
            <Input input_type="text" placeholder="Subject" />
            <Input input_type="text" placeholder="Phone No." />
            <TextArea placeholder={"Message"} name="" id="" />
            <Button redirect={""} text={"SEND"} type="primary" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
