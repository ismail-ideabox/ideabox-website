import React from "react";
import styles from "./ourpeople.module.css";
import layout from "../../styles/layout.module.css";
import { classNames } from "@/app/utils";
import Image from "../image";
import { images } from "../../../../public/ourPeople";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

function OurPeople() {
  return (
    <section
      className={classNames(
        styles.ourpeople_section,
        layout.grid,
        layout.grid_col80
      )}
    >
      <div className={layout.block__inner}>
        <div className={styles.ourpeople_container}>
          <div className="">
            <h3 className="heading">OUR PEOPLE</h3>
          </div>
          <div className={styles.leaderboard}>
            <h2 className="main-heading">Leaderboard</h2>
          </div>
          <div className={styles.founder_container}>
            <div className={styles.founder_content}>
              <div className={styles.founder_name}>
                <h2>Obaid Rehman</h2>
              </div>
              <div className={styles.founder_ceo}>
                <h4>Founder & CEO</h4>
              </div>
              <div className={styles.founder_flags}>
                {/* <Image src={images.flags} alt="Flags" /> */}
                {/* UAE */}
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" fill="#ea3323"></path><path d="M10,20v8H27c2.209,0,4-1.791,4-4v-4H10Z"></path><path fill="#fff" d="M10 11H31V21H10z"></path><path d="M27,4H10V12H31v-4c0-2.209-1.791-4-4-4Z" fill="#317234"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>

                {/* Pakistan */}
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#173e1b"></rect><path d="M10,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4h5V4Z" fill="#fff"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path><path d="M26.268,19.09c-2.692,2.393-6.815,2.151-9.209-.542-2.393-2.692-2.151-6.815,.542-9.209,.113-.1,.229-.196,.346-.287-2.87,.917-4.948,3.605-4.948,6.779,0,3.93,3.186,7.116,7.116,7.116,2.878,0,5.357-1.709,6.478-4.168-.104,.106-.213,.21-.326,.311Z" fill="#fff"></path><path fill="#fff" d="M22.984 13.282L23.153 14.997 24.024 13.51 25.708 13.879 24.563 12.591 25.434 11.104 23.855 11.795 22.71 10.507 22.88 12.222 21.301 12.913 22.984 13.282z"></path></svg>

                {/* UK */}
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#071b65"></rect><path d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z" fill="#fff"></path><path d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z" fill="#b92932"></path><path d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z" fill="#b92932"></path><path d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z" fill="#fff"></path><rect x="13" y="4" width="6" height="24" fill="#fff"></rect><rect x="1" y="13" width="30" height="6" fill="#fff"></rect><rect x="14" y="4" width="4" height="24" fill="#b92932"></rect><rect x="14" y="1" width="4" height="30" transform="translate(32) rotate(90)" fill="#b92932"></rect><path d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z" fill="#b92932"></path><path d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z" fill="#b92932"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>

                {/* scotland */}
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#065db9" stroke-width="0"></rect><path d="m27.7097,4.0715l-11.7097,9.3677L4.2903,4.0715c-1.4476.2603-2.6104,1.2986-3.0678,2.6672l11.5765,9.2612L1.2225,25.2612c.4575,1.3687,1.6202,2.407,3.0678,2.6672l11.7097-9.3677,11.7097,9.3677c1.4476-.2603,2.6104-1.2986,3.0678-2.6672l-11.5765-9.2612,11.5765-9.2612c-.4575-1.3687-1.6202-2.407-3.0678-2.6672Z" fill="#fff" stroke-width="0"></path><path d="m27,4H5c-2.2091,0-4,1.7908-4,4v16c0,2.2092,1.7909,4,4,4h22c2.2092,0,4-1.7908,4-4V8c0-2.2092-1.7908-4-4-4Zm3,20c0,1.6543-1.3457,3-3,3H5c-1.6543,0-3-1.3457-3-3V8c0-1.6543,1.3457-3,3-3h22c1.6543,0,3,1.3457,3,3v16Z" opacity=".15" stroke-width="0"></path><path d="m27,5H5c-1.6569,0-3,1.3431-3,3v1c0-1.6569,1.3431-3,3-3h22c1.6569,0,3,1.3431,3,3v-1c0-1.6569-1.3431-3-3-3Z" fill="#fff" opacity=".2" stroke-width="0"></path></svg>
              </div>
              <div className={styles.founder_para}>
                <p>
                  Obaid possesses a unique blend of technical expertise and
                  business acumen. With over 20+ years of experience working
                  with start up’s, financial, energy and health sectors, Obaid
                  has a deep understanding of the software industry, emerging
                  technologies and market trends
                </p>
              </div>
              <div className={styles.founder_work_logo}>
                <div className={styles.work_image_container}>
                  <div className={styles.work_image}>
                    <Link
                      rel="nofollow"
                      target="_blank"
                      href={"https://www.hilton.com/en/corporate/"}
                    >
                      <Image
                        className={styles.work_image_img}
                        src={images.hilton}
                        alt="Hilton Logo"
                      />
                    </Link>
                  </div>
                  <div className={styles.work_image}>
                    <Link
                      rel="nofollow"
                      target="_blank"
                      href={"https://www.networkrail.co.uk/"}
                    >
                      <Image
                        className={styles.work_image_img}
                        src={images.networkrail}
                        alt="Network Rail Logo"
                      />
                    </Link>
                  </div>
                  <div className={styles.work_image}>
                    <Link
                      rel="nofollow"
                      target="_blank"
                      href={"https://sports.ladbrokes.com/"}
                    >
                      <Image
                        className={styles.work_image_img}
                        src={images.ladbrokes}
                        alt="Lad Brokes Logo"
                      />
                    </Link>
                  </div>
                  <div className={styles.work_image}>
                    <Link
                      rel="nofollow"
                      target="_blank"
                      href={"https://zod.media/"}
                    >
                      <Image
                        className={styles.work_image_img}
                        src={images.zod}
                        alt="Zod Logo"
                      />
                    </Link>
                  </div>

                  <div className={styles.work_image}>
                    <Link
                      rel="nofollow"
                      target="_blank"
                      href={"https://www.nhs.uk/"}
                    >
                      <Image
                        className={styles.work_image_img}
                        src={images.nhs}
                        alt="National Health Service (NHS) Logo"
                      />
                    </Link>
                  </div>
                  <div className={styles.work_image}>
                    <Link
                      rel="nofollow"
                      target="_blank"
                      href={"https://www.ke.com.pk/"}
                    >
                      <Image
                        className={styles.work_image_img}
                        src={images.ke}
                        alt="K-Electric (KE) Logo"
                      />
                    </Link>
                  </div>
                  <div className={styles.work_image}>
                    <Link
                      rel="nofollow"
                      target="_blank"
                      href={"https://temasek.com.sg/"}
                    >
                      <Image
                        className={styles.work_image_img}
                        src={images.temasek}
                        alt="Temasek Logo"
                      />
                    </Link>
                  </div>
                  <div className={styles.work_image}>
                    <Link
                      rel="nofollow"
                      target="_blank"
                      href={"https://temasek.com.sg/"}
                    >
                      <Image
                        className={styles.work_image_img}
                        src={images.salonlogo}
                        alt="Salon Plus Logo"
                      />
                    </Link>
                  </div>
                </div>
                {/* <Button
                  redirect={"/our-team"}
                  text={"VIEW OUR TEAM"}
                  type="primary"
                /> */}
              </div>
            </div>
            <div className={styles.founder_image}>
              <Image src={images.founder} alt="Obaid Rehman" />
              <div className={styles.founder_linkedin}>
                <Link
                  rel="nofollow"
                  target="_blank"
                  href="https://pk.linkedin.com/in/obaidrehman"
                  className={styles.founder_linkedin_icon}
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurPeople;
