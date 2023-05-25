"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./getInTouch.module.css";
// import ReCAPTCHA from "react-google-recaptcha";
import layout from "../../styles/layout.module.css";
import { classNames, verifyRecaptcha } from "@/app/utils";
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
  const [isSuccess, setIsSuccess] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const recaptchaRef = useRef();
  const [errors, setErrors] = useState({
    fullName: false,
    emailAddress: false,
    phoneNo: false,
  });
  const swiperRef = useRef(null);
  const toSlide = (num) => {
    setCurrentSlide(num);
    swiperRef.current?.swiper.slideTo(num);
  };
  const bannerBg = "banner_bg_" + currentSlide;
  const { values, isLoading } = state;
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    if (!errors.emailAddress && !errors.fullName && !errors.phoneNo) {
      if (isMounted) {
        postGetInTouch();
      }
    }
  }, [errors]);

  useEffect(() => {
    setisMounted(true);
  }, []);

  const postGetInTouch = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      const response = await fetch("http://localhost:5000/api/mailer", {
        method: "POST",
        body: JSON.stringify({
          name: state.values.fullName,
          email: state.values.emailAddress,
          companyName: state.values.companyName,
          phone: state.values.phoneNo,
          message: state.values.message,
        }),
      });

      const data = await response.json();
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
      setIsSuccess(true);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };

  const handleChange = (event) => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [event.target.name]: event.target.value,
      },
    }));
  };

  const onSubmit = async (e) => {
    const recaptchaResponse = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset();

    const response = await fetch("/api/validateRecaptcha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ recaptchaResponse }),
    });
    if (response.ok) {
      checkFormValidity();
    } else {
      console.log("Invalid User");
    }
  };

  const resetForm = () => {
    setIsSuccess(false);
    setErrors({
      fullName: false,
      emailAddress: false,
      phoneNo: false,
    });
    setState({
      values: {
        fullName: "",
        companyName: "",
        emailAddress: "",
        phoneNo: "",
        message: "",
      },
      isLoading: false,
    });
    setisMounted(false);
  };

  const checkFormValidity = () => {
    if (!state.values.fullName.trim()) {
      setErrors((prevValue) => ({ ...prevValue, fullName: true }));
    } else {
      setErrors((prevValue) => ({ ...prevValue, fullName: false }));
    }
    if (!state.values.phoneNo.trim()) {
      setErrors((prevValue) => ({ ...prevValue, phoneNo: true }));
    } else {
      setErrors((prevValue) => ({ ...prevValue, phoneNo: false }));
    }
    if (validateEmail()) {
      setErrors((prevValue) => ({ ...prevValue, emailAddress: true }));
    } else {
      setErrors((prevValue) => ({ ...prevValue, emailAddress: false }));
    }
  };

  const validateEmail = () => {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return !state.values.emailAddress.match(validRegex);
  };
  useEffect(() => {
    setisMounted(toggle);
  }, [toggle]);
  const handleRecaptcha = (token) => {
    setRecaptchaToken(token);
  };
  return (
    <>
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
                        resetForm();
                      }}
                    >
                      <FontAwesomeIcon icon={faClose} />
                    </div>
                    <div
                      className={
                        isSuccess ? styles.form_submit : styles.display_block
                      }
                    >
                      <form action="">
                        {/* <ReCAPTCHA
                          ref={recaptchaRef}
                          sitekey={"6LfFcswkAAAAAGlybf-de5_XXvbBXyOcZXllBmPT"}
                        /> */}

                        <div className={styles.input_flex}>
                          <Input
                            isError={errors.fullName}
                            message={"Name Required"}
                            onChange={handleChange}
                            name="fullName"
                            id={"full-name"}
                            type="text"
                            placeholder="Full Name"
                            value={values.fullName}
                          />
                          <Input
                            onChange={handleChange}
                            name="companyName"
                            id={"company-name"}
                            type="text"
                            placeholder="Company Name"
                            value={values.companyName}
                          />
                        </div>
                        <div className={styles.input_flex}>
                          <Input
                            isError={errors.emailAddress}
                            message={"Enter Valid Email"}
                            onChange={handleChange}
                            name="emailAddress"
                            id={"email-address"}
                            type="email"
                            placeholder="Email Address"
                            value={values.emailAddress}
                          />
                          <Input
                            onChange={handleChange}
                            name="phoneNo"
                            id={"phone-no"}
                            type="text"
                            isError={errors.phoneNo}
                            message={"Phone Number Required"}
                            placeholder="Phone No."
                            value={values.phoneNo}
                          />
                        </div>
                        <div className={styles.text_area}>
                          <TextArea
                            onChange={handleChange}
                            name="message"
                            input_type="text"
                            placeholder="Tell us about your project"
                            id="message"
                            value={values.message}
                          />
                          <Button
                            loadingText={"SENDING..."}
                            isLoading={state.isLoading}
                            redirect={""}
                            text={"SEND"}
                            type="primary"
                            onClick={() => onSubmit()}
                          />
                        </div>
                      </form>
                    </div>

                    <div
                      className={
                        isSuccess
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
