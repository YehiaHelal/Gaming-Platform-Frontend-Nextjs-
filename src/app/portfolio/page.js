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
    <div className={styles.PortfolioComponent}>
      <div className={styles.PortfolioFirstPart}>
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
            <div>Portfolio</div>
          </div>

          <h1>Lorem Ipsum is simply dummy text of the printing and.</h1>
          <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h3>
        </div>

        <div className={styles.SecondPartImage}>
          <Image
            alt="image"
            className={styles.sectionfourImageMain}
            src={require(`./../../../public/portfolio/Group.png`)}
          ></Image>
        </div>
      </div>

      <div className={styles.PortfolioSecondPart}>
        <Image
          alt="image"
          className={styles.PortfolioSecondPartMainImage}
          src={require(`./../../../public/portfolio/spider.png`)}
        ></Image>
        <div className={styles.PortfolioSecondPartText}>
          <h1>Lorem Ipsum is simply dummy text.</h1>
          <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy .
          </h3>
          <div>
            <Image
              alt="image"
              src={require(`./../../../public/portfolio/rightmark.svg`)}
            ></Image>
            <div>Lorem Ipsum is simply</div>
          </div>
          <div>
            <Image
              alt="image"
              src={require(`./../../../public/portfolio/rightmark.svg`)}
            ></Image>
            <div>Lorem Ipsum is simply</div>
          </div>
          <div>
            <Image
              alt="image"
              src={require(`./../../../public/portfolio/rightmark.svg`)}
            ></Image>
            <div>Lorem Ipsum is simply</div>
          </div>
          <div>
            <Image
              alt="image"
              src={require(`./../../../public/portfolio/rightmark.svg`)}
            ></Image>
            <div>Lorem Ipsum is simply</div>
          </div>
        </div>
      </div>

      <div className={styles.PortfolioThirdPart}>
        <div className={styles.PortfolioThirdPartText}>
          <h1>Lorem Ipsum is simply dummy text dummy text </h1>
          <h2>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </h2>
          <h2>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h2>
          <button>Read more</button>
        </div>
        <Image
          alt="image"
          className={styles.sectionfourImageMain}
          src={require(`./../../../public/portfolio/osrs2.jpg`)}
        ></Image>
      </div>

      <div className={styles.PortfolioFourthPart}>
        <Image
          alt="image"
          className={styles.sectionfourImageMain}
          src={require(`./../../../public/portfolio/pubg2.jpg`)}
        ></Image>
        <div className={styles.PortfolioThirdPartText}>
          <h1>Lorem Ipsum is simply dummy text dummy text </h1>
          <h2>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </h2>
          <h2>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h2>
          <button>Read more</button>
        </div>
      </div>

      <div className={styles.PortfolioThirdPart}>
        <div className={styles.PortfolioThirdPartText}>
          <h1>Lorem Ipsum is simply dummy text dummy text </h1>
          <h2>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </h2>
          <h2>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h2>
          <button>Read more</button>
        </div>
        <Image
          alt="image"
          className={styles.sectionfourImageMain}
          src={require(`./../../../public/portfolio/cyberpink2.jpg`)}
        ></Image>
      </div>

      <div className={styles.PortfolioFifthPart}>
        <div className={styles.FifthpartTextdirection}>
          <h1>Trusted by Thousands of Happy Customer</h1>
          <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy .
          </h3>
        </div>

        <div className={styles.PortfolioFifthCardsAllThree}>
          <div className={styles.PortfolioFifthCardsEach}>
            <div className={styles.PortfolioFifthCardsParts}>
              <div className={styles.PortfolioFifthCardsTitle}>
                <div className={styles.PortfolioFifthCardsName}>
                  <Image
                    alt="image"
                    className={styles.sectionfifthdefaultImageUser}
                    src={require(`./../../../public/portfolio/default.jpeg`)}
                  ></Image>
                  <div>
                    <h2>Viezh Robert</h2>
                    <h3>Poland</h3>
                  </div>
                </div>

                <div className={styles.PortfolioFifthCardsRating}>
                  <div>4.5</div>
                  <Image
                    alt="image"
                    className={styles.sectionfourImageMain}
                    src={require(`./../../../public/portfolio/star.svg`)}
                  ></Image>
                </div>
              </div>
              <div className={styles.PortfolioFifthcomment}>
                <h3>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </h3>
              </div>
            </div>
          </div>
          <div className={styles.PortfolioFifthCardsEach}>
            <div className={styles.PortfolioFifthCardsParts}>
              <div className={styles.PortfolioFifthCardsTitle}>
                <div className={styles.PortfolioFifthCardsName}>
                  <Image
                    alt="image"
                    className={styles.sectionfifthdefaultImageUser}
                    src={require(`./../../../public/portfolio/default.jpeg`)}
                  ></Image>
                  <div>
                    <h2>Yessica Christy</h2>
                    <h3>Shanxi, China</h3>
                  </div>
                </div>

                <div className={styles.PortfolioFifthCardsRating}>
                  <div>4.5</div>
                  <Image
                    alt="image"
                    className={styles.sectionfourImageMain}
                    src={require(`./../../../public/portfolio/star.svg`)}
                  ></Image>
                </div>
              </div>
              <div className={styles.PortfolioFifthcomment}>
                <h3>Lorem Ipsum is simply dummy text of the printing and</h3>
              </div>
            </div>
          </div>
          <div className={styles.PortfolioFifthCardsEach}>
            <div className={styles.PortfolioFifthCardsParts}>
              <div className={styles.PortfolioFifthCardsTitle}>
                <div className={styles.PortfolioFifthCardsName}>
                  <Image
                    alt="image"
                    className={styles.sectionfifthdefaultImageUser}
                    src={require(`./../../../public/portfolio/default.jpeg`)}
                  ></Image>
                  <div>
                    <h2>Kim Young Jou</h2>
                    <h3>Seoul, South Korea</h3>
                  </div>
                </div>
                <div className={styles.PortfolioFifthCardsRating}>
                  <div>4.5</div>
                  <Image
                    alt="image"
                    className={styles.sectionfourImageMain}
                    src={require(`./../../../public/portfolio/star.svg`)}
                  ></Image>
                </div>
              </div>
              <div className={styles.PortfolioFifthcomment}>
                <h3>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 6 */}

      <SubscribeEmail />

      <Footer />
    </div>
  );
};

export default BlogPage;
