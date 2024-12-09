import { classNames } from '@/app/utils';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from '../getInTouch/input';
import TextArea from '../getInTouch/textarea';
import Button from '../button/button';
import { image } from "../../../../public/odoo";
import styles from "../getInTouch/getInTouch.module.css"
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';


const initValues = {
    fullName: "",
    companyName: "",
    emailAddress: "",
    phoneNo: "",
    message: "",
};

const initState = { values: initValues };

export default function FormModal({toggle,setToggle}) {
    const [state, setState] = useState(initState);
    const [isSuccess, setIsSuccess] = useState(false);
    const [gReCaptchaToken, setGReCaptchaToken] = useState("");
    const [errors, setErrors] = useState({
        fullName: false,
        emailAddress: false,
        phoneNo: false,
    });
    const { executeRecaptcha } = useGoogleReCaptcha();
    const { values } = state;
  const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (!errors.emailAddress && !errors.fullName && !errors.phoneNo) {
            if (isMounted) {
                if (!executeRecaptcha) {
                    console.log("Execute recaptcha not yet available");
                    return;
                }
                executeRecaptcha("enquiryFormSubmit").then(async (gReCaptchaToken) => {
                    try {
                        await postGetInTouch(gReCaptchaToken);
                    } catch (error) {
                        console.log("hello", error);
                    }
                });
            }
        }
    }, [errors]);
    useEffect(() => {
        setIsMounted(true);
    }, []);

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
            if (data.status === "success") {
                setState((prev) => ({
                    ...prev,
                    isLoading: false,
                }));
                setIsSuccess(true);
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

    const onSubmit = async (e) => {
        checkFormValidity();
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
        setIsMounted(false);
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
        setIsMounted(toggle);
    }, [toggle]);
    return (
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
                            <Image
                                src={image.modalImage}
                                alt="ideabox image of the homepage contact form"
                            />
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
                                    isSuccess ? styles.form_submitted : styles.form_notSubmitted
                                }
                            >
                                <div className={styles.form_submit_flex}>
                                    <h2>Thank You</h2>
                                    <p>
                                        for submitting your request with Ideabox. We appreciate
                                        your interest and will review it promptly. We will be in
                                        touch with you soon.
                                    </p>
                                    <p>
                                        In case of an emergency, please feel free to contact us on
                                        <br />
                                        <Link
                                            className={styles.mail_at}
                                            href={"mailto:hello@ideabox.technology"}
                                        >
                                            hello@ideabox.technology
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
