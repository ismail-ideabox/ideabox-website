"use client";
import React, { useEffect, useState } from "react";
import TextArea from "@/app/components/getInTouch/textarea";
import Input from "@/app/components/getInTouch/input";
import Button from "../../components/button/button";
import layout from "../../styles/layout.module.css";
import styles from "./odoo.module.css";
import { classNames } from "@/app/utils";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const initValues = {
    fullName: "",
    companyName: "",
    emailAddress: "",
    phoneNo: "",
    message: "",
  };
  const initState = { values: initValues };

export default function Contact() {
  const [state, setState] = useState(initState);
  const [isSuccess, setIsSuccess] = useState(false);
  const [gReCaptchaToken, setGReCaptchaToken] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [errors, setErrors] = useState({
    fullName: false,
    emailAddress: false,
    phoneNo: false,
  });
  const { values } = state;
  const { executeRecaptcha } = useGoogleReCaptcha();

  useEffect(() => {
    if (isMounted) {
      if (!errors.emailAddress && !errors.fullName && !errors.phoneNo) {
        if (!executeRecaptcha) {
          console.log("Execute recaptcha not yet available");
          return;
        }
        executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
          console.log(gReCaptchaToken, "response Google reCaptcha server");
          setGReCaptchaToken(gReCaptchaToken);
          postGetInTouch(gReCaptchaToken);
        });
      }
    }
  }, [errors]);

  const postGetInTouch = async (gReCaptchaToken) => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_API_URL + "mailer",
        {
          method: "POST",
          body: JSON.stringify({
            name: state.values.fullName,
            email: state.values.emailAddress,
            companyName: state.values.companyName,
            phone: state.values.phoneNo,
            message: state.values.message,
            gReCaptchaToken: gReCaptchaToken,
          }),
        }
      );

      const data = await response.json();
      if (data) {
        setState((prev) => ({
          ...prev,
          isLoading: false,
        }));
        setIsSuccess(true);
        setToggle(true);
        resetForm();
      }
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

  const onSubmit = (e) => {
    checkFormValidity();
  };

  const resetForm = () => {
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
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setToggle(false);
      }, 3000);
    }
  }, [isSuccess]);
  return (
    <section
      className={classNames(
        layout.grid,
        layout.grid_col80,
        styles.primary_color_section
      )}
    >
      <div className={layout.block__inner}>
        <h2 className="main-heading">GET IN TOUCH</h2>
        <div className={styles.contact_container}>
          <div>
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
              text={"SEND"}
              type="primary"
              componentType="button"
              onClick={() => onSubmit()}
            />
            {/* <button >send</button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
