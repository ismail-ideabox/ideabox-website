"use client";
import React, { useEffect, useState } from "react";
import styles from "./contactus.module.css";
import layout from "../../styles/layout.module.css";
import Image from "../../components/image";
import { images } from "../../../../public/contactUs";
import Button from "../../components/button/button";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import ContactUsForm from "@/app/components/getInTouch/input";
import TextArea from "@/app/components/getInTouch/textarea";
import Input from "@/app/components/getInTouch/input";
import Link from "next/link";

const initValues = {
  fullName: "",
  companyName: "",
  emailAddress: "",
  phoneNo: "",
  message: "",
};
const initState = { values: initValues };

function ContactUs() {
  const [state, setState] = useState(initState);
  const [isSuccess, setIsSuccess] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { values, isLoading } = state;
  const [isMounted, setisMounted] = useState(false);
  const [errors, setErrors] = useState({
    fullName: false,
    emailAddress: false,
    phoneNo: false,
  });
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
                  <Link href={"mailto:info@ideabox.pk"}>info@ideabox.pk</Link>
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
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
