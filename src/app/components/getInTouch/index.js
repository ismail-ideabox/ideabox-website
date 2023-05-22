"use client";
import React, { useRef, useState } from "react";
import styles from "./getInTouch.module.css";
import layout from "../../styles/layout.module.css";
import { classNames } from "@/app/utils";
import Image from "../image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Button from "../button/button";
import { images } from "../../../../public/getInTouch";
import Link from "next/link";
import Header from "../header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import Input from "./input";
import TextArea from "./textarea";

// const nodemailer = require("nodemailer");

// let transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "noreply.ideabox.pk@gmail.com",
//     pass: "Hello@Ideabox",
//   },
// });

// const sendEmail = () => {
//   // Get the input and textarea values
//   const fullName = document.getElementById("full-name").value;
//   const companyName = document.getElementById("company-name").value;
//   const emailAddress = document.getElementById("email-address").value;
//   const phoneNo = document.getElementById("phone-no").value;
//   const message = document.getElementById("message").value;

//   // Validate the input and textarea values
//   if (!fullName || !companyName || !emailAddress || !phoneNo || !message) {
//     alert("Please fill in all the fields");
//     return;
//   }

//   // Create the email message
//   let mailOptions = {
//     from: emailAddress,
//     to: "noreply.ideabox.pk@gmail.com",
//     subject: "New message from Ideabox website",
//     html: `
//       <p><strong>Full Name:</strong> ${fullName}</p>
//       <p><strong>Company Name:</strong> ${companyName}</p>
//       <p><strong>Email Address:</strong> ${emailAddress}</p>
//       <p><strong>Phone No.:</strong> ${phoneNo}</p>
//       <p><strong>Message:</strong> ${message}</p>
//     `,
//   };

//   // Send the email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//       alert("An error occurred while sending the email");
//     } else {
//       console.log("Email sent: " + info.response);
//       alert("Your message has been sent");
//       setToggle(false);
//     }
//   });
// };

const initValues = {
  fullName: "",
  companyName: "",
  emailAddress: "",
  phoneNo: "",
  message: "",
};

const initState = { values: initValues };

function GetInTouch({ headerVisible }) {
  const [state, setState] = useState(initState);
  const { values, isLoading } = state;

  const handleChange = (target) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
    }));
    try {
      const response = await fetch("src/pages/api/server", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          subject: subject,
          phone: phone,
          message: message,
        }),
      });

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const [toggle, setToggle] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);
  const toSlide = (num) => {
    setCurrentSlide(num);
    swiperRef.current?.swiper.slideTo(num);
  };
  const bannerBg = "banner_bg_" + currentSlide;

  return (
    <>
      {/* <Head>
        <link rel="stylesheet" href="./getInTouch.module.css" />
      </Head> */}
      <div className={classNames(styles.getInTouchWrapper, bannerBg)}>
        <Header headerVisible={headerVisible} />
        <div className={styles.pagination_container}>
          <ul>
            <li
              style={{ background: currentSlide === 0 ? "#CF4A28" : "#ACAAA6" }}
              onClick={() => toSlide(0)}
            ></li>
            <li
              style={{ background: currentSlide === 1 ? "#A02021" : "#ACAAA6" }}
              onClick={() => toSlide(1)}
            ></li>
            <li
              style={{ background: currentSlide === 2 ? "#CF4A28" : "#ACAAA6" }}
              onClick={() => toSlide(2)}
            ></li>
          </ul>
        </div>
        <section
          className={classNames(
            styles[bannerBg],
            layout.grid,
            layout.grid_col80,
            styles.GetInTouch_section
          )}
        >
          <div className={layout.block__inner}>
            <div className={styles.GetInTouch_container}>
              <div className={styles.GetInTouch_content}>
                <div className={styles.content_heading_container}>
                  <Swiper
                    ref={swiperRef}
                    pagination={false}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                    autoplay={{
                      delay: 3500,
                      pauseOnMouseEnter: true,
                      disableOnInteraction: false,
                    }}
                    onSlideChange={(swiper) => {
                      setCurrentSlide(swiper.activeIndex);
                    }}
                  >
                    <SwiperSlide>
                      <div className={styles.slider_content}>
                        <h2
                          className={[
                            "main-heading",
                            styles.slider_content_h2,
                          ].join(" ")}
                        >
                          AGGRESSIVE GROWTH <br /> FOR FORWARD THINKING <br />{" "}
                          BUSINESSES
                        </h2>
                        <p>Ditch the unnecessary marketing jargon. </p>
                        <p>
                          At Ideabox, we focus on the thing that <br /> matters
                          most:
                          <Link href={""}> RESULTS.</Link>
                        </p>
                        <Button
                          redirect={""}
                          text={"GET IN TOUCH"}
                          type="primary"
                          onClick={() => setToggle(true)}
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={styles.slider_content}>
                        <h2
                          className={[
                            "main-heading",
                            styles.slider_content_h2,
                          ].join(" ")}
                        >
                          Success <br /> Together
                        </h2>
                        <p>
                          We believe in our clients and our strength <br /> lies
                          in developing close working relationships <br /> to
                          help them succeed.
                        </p>
                        <Button
                          redirect={""}
                          text={"GET IN TOUCH"}
                          type="secondary"
                          onClick={() => setToggle(true)}
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={styles.slider_content}>
                        <h2
                          className={[
                            "main-heading",
                            styles.slider_content_h2,
                          ].join(" ")}
                        >
                          Bespoke Services FOR <br /> THE NEXT GENERATION <br />{" "}
                          of BUSINESSES.
                        </h2>
                        <p>
                          From bespoke web platforms and mobile <br /> apps, to
                          big data analytics - we have the <br /> experience and
                          expertise to develop & <br /> deliver complex systems.
                        </p>
                        <Button
                          redirect={""}
                          text={"GET IN TOUCH"}
                          type="secondary"
                          onClick={() => setToggle(true)}
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className={styles.GetInTouch_images_container}>
                <div className={styles.image_up}>
                  <Image
                    loading="eager"
                    src={images.up}
                    onClick={() => toSlide(1)}
                    alt=""
                  />
                </div>
                <div className={styles.image_right}>
                  <Image
                    loading="eager"
                    src={images.left}
                    onClick={() => toSlide(2)}
                    alt=""
                  />
                  <Image
                    loading="eager"
                    src={images.right}
                    onClick={() => toSlide(0)}
                    alt=""
                  />
                </div>
                <div className={styles.image_box}>
                  <Image loading="eager" src={images.box} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggle
                ? classNames(styles.modal_container, styles.modal_active)
                : styles.modal_container
            }
          >
            <div className={styles.form_container}>
              <div className={styles.modal}>
                <div className={styles.form}>
                  <div className={styles.form_image}>
                    <Image src={images.modal} alt="" />
                  </div>
                  <div className={styles.form_input}>
                    <div
                      className={styles.close_btn}
                      onClick={() => {
                        setToggle(false);
                        setFormSubmit(false);
                      }}
                    >
                      <FontAwesomeIcon icon={faClose} />
                    </div>
                    <div
                      className={
                        formSubmit ? styles.form_submit : styles.display_block
                      }
                    >
                      <div className={styles.input_flex}>
                        <Input
                          onChange={handleChange}
                          name="full-name"
                          id={"full-name"}
                          type="text"
                          placeholder="Full Name"
                          // value={values.fullName}
                        />
                        <Input
                          onChange={handleChange}
                          name="company-name"
                          id={"company-name"}
                          type="text"
                          placeholder="Company Name"
                          // value={values.companyName}
                        />
                      </div>
                      <div className={styles.input_flex}>
                        <Input
                          onChange={handleChange}
                          name="email-address"
                          id={"email-address"}
                          type="email"
                          placeholder="Email Address"
                          // value={values.emailAddress}
                        />
                        <Input
                          onChange={handleChange}
                          name="phone-no"
                          id={"phone-no"}
                          type="text"
                          placeholder="Phone No."
                          // value={values.phoneNo}
                        />
                      </div>
                      <div className={styles.text_area}>
                        <TextArea
                          onChange={handleChange}
                          name="message"
                          input_type="text"
                          placeholder="Tell us about your project"
                          id="message"
                          // value={values.message}
                        />
                        <Button
                          isLoading={isLoading}
                          redirect={""}
                          text={"SEND"}
                          type="primary"
                          onClick={() => setFormSubmit(true)}
                        />
                      </div>
                    </div>
                    <div
                      className={
                        formSubmit
                          ? styles.form_submitted
                          : styles.form_notSubmitted
                      }
                    >
                      <div className={styles.form_submit_flex}>
                        <h2>Thank You</h2>
                        <p>
                          for submitting your request with Ideabox. We
                          appreciate your interest and will review it promptly.
                          We will be in touch with you soon.
                        </p>
                        <p>
                          In case of an emergency, please feel free to contact
                          us on
                          <br />
                          <Link
                            className={styles.mail_at}
                            href={"mailto:info@ideabox.pk"}
                          >
                            hello@ideabox.pk
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default GetInTouch;
