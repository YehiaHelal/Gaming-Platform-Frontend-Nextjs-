"use client";

import Image from "next/image";
// import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import Footer from "../../comps/footer";
// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SubscribeEmail from "../../comps/subscribe";

// const inter = Inter({ subsets: ["latin"] });

function Home() {
  const [itemCollection, setItemCollection] = useState([]);

  // show only the first 8 items

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(
        "https://gaming-platform-backend-node-git-master-enstein01.vercel.app/api/items"
      );

      const item = await response.json();
      // console.log("there");

      if (response.ok) {
        // dispatcho({ type: "FETCHED-ALL", payload: json });
        // console.log("there");
      }

      // console.log(item);

      setItemCollection(item.slice(0, 8));
    };

    fetchItems();
  }, []);

  return (
    <div className={styles.homepageComponent}>
      <div className={styles.homepageFirstPart}>
        <div className={styles.homepageFirstPartRight}>
          <h3>Proved By prodesigner</h3>
          <h1>Work that we produce for our clients</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>

          <Link href={"/collections/"} className={styles.firstPartButton}>
            <button className={styles.homepageFirstPartRightbutton}>
              Get more details
              {/* FA8305 */}
            </button>
          </Link>
        </div>
        <Image
          alt="image"
          className={styles.homepageImage}
          src={require(`./../../public/Homepage/joy_stick-2.svg`)}
        ></Image>
      </div>
      <div className={styles.homepageSecondPart}>
        <div className={styles.homepageSecondPartPartZero}>
          <h2>Currently Trending Games</h2>
          <button>SEE ALL</button>
        </div>
        <div className={styles.homepageSecondPartFirst}>
          <div className={styles.homepageSecondPartFirstEach}>
            <Image
              alt="image"
              className={styles.homepageImage}
              src={require(`./../../public/Homepage/lol.jpg`)}

              // className="iconImage"
            ></Image>
            <div>
              <div className={styles.homepageSecondPartFirstText}>
                <Image
                  alt="image"
                  className={styles.homepageImageFireImage}
                  src={require(`./../../public/Homepage/fire.svg`)}
                ></Image>
                <div>40 Followers</div>
              </div>
            </div>
          </div>
          <div className={styles.homepageSecondPartFirstEach}>
            <Image
              alt="image"
              className={styles.homepageImage}
              src={require(`./../../public/Homepage/osrs.jpg`)}

              // className="iconImage"
            ></Image>
            <div className={styles.homepageSecondPartFirstText}>
              <Image
                alt="image"
                className={styles.homepageImageFireImage}
                src={require(`./../../public/Homepage/fire.svg`)}
              ></Image>
              <div>40 Followers</div>
            </div>
          </div>
          <div className={styles.homepageSecondPartFirstEach}>
            <Image
              alt="image"
              className={styles.homepageImage}
              src={require(`./../../public/Homepage/pubg.jpg`)}
              // className="iconImage"
            ></Image>
            <div className={styles.homepageSecondPartFirstText}>
              <Image
                alt="image"
                className={styles.homepageImageFireImage}
                src={require(`./../../public/Homepage/fire.svg`)}
              ></Image>
              <div>40 Followers</div>
            </div>
          </div>
          <div className={styles.homepageSecondPartFirstEach}>
            <Image
              alt="image"
              className={styles.homepageImage}
              src={require(`./../../public/Homepage/sliding4.png`)}
              // className="iconImage"
            ></Image>
            <div className={styles.homepageSecondPartFirstText}>
              <Image
                alt="image"
                className={styles.homepageImageFireImage}
                src={require(`./../../public/Homepage/fire.svg`)}
              ></Image>
              <div>40 Followers</div>
            </div>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <section>
        <div className={styles.sectionthreeTitle}>
          <h1>Lorem Ipsum is simply dummy text of the</h1>
          <h1>printing and typesetting industry.</h1>
        </div>

        <div className={styles.sectionthreeTitleComponent}>
          <div className={styles.sectionthreeTitlepart2Text}>
            <h2>Lorem Ipsum</h2>
            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </h3>
          </div>
        </div>

        <Image
          alt="image"
          className={styles.sectionthreeTitlepart2Image}
          src={require(`./../../public/Homepage/SpiderMan.png`)}
        ></Image>
      </section>

      {/* section 4 */}
      <section>
        <div className={styles.sectionfourComponent}>
          <div className={styles.sectionfourText}>
            <h1>Lorem Ipsum is simply dummy text of the printing </h1>
            <h1>and typesetting industry.</h1>

            <div className={styles.sectionfourTextSecondPart}>
              <h2>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the
              </h2>
              <h2>industry's standard dummy text ever since the 1500s,</h2>
            </div>

            <div className={styles.sectionfourTextThirdpart}>
              <div>
                <Image
                  alt="image"
                  className={styles.sectionfourImageMain}
                  src={require(`./../../public/Homepage/icon1.png`)}
                ></Image>
                <div>Mobile Game Development</div>
                <Image
                  alt="image"
                  className={styles.sectionfourImageArrow}
                  src={require(`./../../public/Homepage/arrow.png`)}
                ></Image>
              </div>
              <div>
                <Image
                  alt="image"
                  className={styles.sectionfourImageMain}
                  src={require(`./../../public/Homepage/icon2.png`)}
                ></Image>
                <div>PC Game Development</div>
                <Image
                  alt="image"
                  className={styles.sectionfourImageArrow}
                  src={require(`./../../public/Homepage/arrow.png`)}
                ></Image>
              </div>
              <div>
                <Image
                  alt="image"
                  className={styles.sectionfourImageMain}
                  src={require(`./../../public/Homepage/icon3.png`)}
                ></Image>
                <div>PS4 Game Development</div>
                <Image
                  alt="image"
                  className={styles.sectionfourImageArrow}
                  src={require(`./../../public/Homepage/arrow.png`)}
                ></Image>
              </div>
              <div>
                <Image
                  alt="image"
                  className={styles.sectionfourImageMain}
                  src={require(`./../../public/Homepage/icon4.png`)}
                ></Image>
                <div>AR/VR Solutions</div>
                <Image
                  alt="image"
                  className={styles.sectionfourImageArrow}
                  src={require(`./../../public/Homepage/arrow.png`)}
                ></Image>
              </div>
            </div>

            <div className={styles.sectionfourTextFourthpart}>
              <div>
                <Image
                  alt="image"
                  className={styles.sectionfourImageMain}
                  src={require(`./../../public/Homepage/icon5.png`)}
                ></Image>
                <div>AR/ VR design</div>
                <Image
                  alt="image"
                  className={styles.sectionfourImageArrow}
                  src={require(`./../../public/Homepage/arrow.png`)}
                ></Image>
              </div>
              <div>
                <Image
                  alt="image"
                  className={styles.sectionfourImageMain}
                  src={require(`./../../public/Homepage/icon6.png`)}
                ></Image>
                <div>3D Modelings</div>
                <Image
                  alt="image"
                  className={styles.sectionfourImageArrow}
                  src={require(`./../../public/Homepage/arrow.png`)}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 5 */}
      <section>
        <div className={styles.sectionfiveComponent}>
          <div className={styles.sectionfiveTextContent}>
            <h1>Our Recent Projects</h1>
            <h2>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h2>
          </div>

          <div className={styles.sectionfiveImages}>
            <div className={styles.sectionfiveImageseach}>
              <Image
                alt="image"
                // className={styles.homepageImage}
                src={require(`./../../public/Homepage/fifth1.png`)}
                // className="iconImage"
              ></Image>
              <Image
                alt="image"
                // className={styles.homepageImage}
                src={require(`./../../public/Homepage/fifth2.png`)}
                // className="iconImage"
              ></Image>
              <Image
                alt="image"
                // className={styles.homepageImage}
                src={require(`./../../public/Homepage/fifth3.png`)}
                // className="iconImage"
              ></Image>
            </div>
            <div className={styles.sectionfiveImageseach2}>
              <Image
                alt="image"
                // className={styles.homepageImage}
                src={require(`./../../public/Homepage/fifth4.png`)}
                // className="iconImage"
              ></Image>
              <Image
                alt="image"
                // className={styles.homepageImage}
                src={require(`./../../public/Homepage/fifth5.png`)}
                // className="iconImage"
              ></Image>
              <Image
                alt="image"
                // className={styles.homepageImage}
                src={require(`./../../public/Homepage/fifth6.png`)}
                // className="iconImage"
              ></Image>
            </div>
          </div>

          <div className={styles.sectionfiveTextButton}>
            <button>SEE ALL</button>
          </div>
        </div>
      </section>

      {/* section 6 */}

      <SubscribeEmail />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
