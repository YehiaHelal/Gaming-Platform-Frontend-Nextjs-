"use client";

import Image from "next/image";
// import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import Footer from "../../../comps/footer";
// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SubscribeEmail from "../../../comps/subscribe";

const BlogPage = () => {
  return (
    <div className={styles.AboutComponent}>
      <div className={styles.AboutComponentFirstPart}>
        <div className={styles.FirstpartText}>
          <div className={styles.FirstpartTextdirection}>
            <h3>Home</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
            <div>About us</div>
          </div>

          <h1>Lorem Ipsum is simply dummy text of the printing and.</h1>
          <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </h3>
          <button className={styles.FirstpartTextButton}>
            <div>Get in touch</div>
            <Image
              alt="image"
              src={require(`./../../../public/about/arrow.svg`)}
            ></Image>
          </button>
        </div>

        <div className={styles.SecondPartImage}>
          <Image
            alt="image"
            className={styles.sectionfourImageMain}
            src={require(`./../../../public/about/main.png`)}
          ></Image>
        </div>
      </div>

      <div className={styles.AboutComponentSecondPart}>
        <div>
          <h2>Why work with us</h2>
        </div>

        <div className={styles.AboutComponentSecondPartButtons}>
          <div className={styles.AboutComponentSecondPartEach}>
            <button className={styles.AboutComponentSecondPartEachButton1}>
              Lorem ipsum
            </button>
            <h3>Lorem Ipsum</h3>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </div>
          </div>
          <div className={styles.AboutComponentSecondPartEach}>
            <button className={styles.AboutComponentSecondPartEachButton2}>
              Lorem ipsum
            </button>
            <h3>Lorem Ipsum</h3>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </div>
          </div>
          <div className={styles.AboutComponentSecondPartEach}>
            <button className={styles.AboutComponentSecondPartEachButton3}>
              Lorem ipsum
            </button>
            <h3>Lorem Ipsum</h3>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </div>
          </div>
        </div>
      </div>

      <div className={styles.AboutComponentThirdPart}>
        <Image
          alt="image"
          className={styles.homepageImage}
          src={require(`./../../../public/Homepage/lol.jpg`)}
          // className="iconImage"
        ></Image>
        <div className={styles.AboutComponentThirdPartText}>
          <div>Lorem ipsum</div>
          <h2>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </h2>
          <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </h3>
        </div>
      </div>

      <div className={styles.AboutComponentFourthPart}>
        <h2>Our Team</h2>
        <div className={styles.AboutComponentFourthPartEach}>
          <Image
            alt="image"
            className={styles.homepageImage}
            src={require(`./../../../public/about/Group.png`)}
            // className="iconImage"
          ></Image>
        </div>
      </div>

      {/* section 6 */}

      <SubscribeEmail />

      <Footer />
    </div>
  );
};

export default BlogPage;
