import Link from "next/link";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footerWhole}>
      <div className={styles.footerComponent}>
        <div className={styles.footerComponentEach}>
          <h2>LOGO</h2>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </div>
          <h3>@Logo</h3>
        </div>
        <div className={styles.footerComponentEach}>
          <h3>About us</h3>
          <div className={styles.footerComponentEachAbout}>
            <div>Zeux</div>
            <div>Portfolio</div>
            <div>Careers</div>
            <div>Contact us</div>
          </div>
        </div>
        <div className={styles.footerComponentEach}>
          <h3>Contact us</h3>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </div>
          <div>+908 89097 890</div>
        </div>
        <div className={styles.footerComponentEachgrid}>
          <div></div>
          <div></div>

          <Image
            alt="image"
            className={styles.footerImage}
            src={require(`./../public/Homepage/InternetMedia.png`)}
            // className="iconImage"
          ></Image>
        </div>
      </div>
      <div className={styles.secondpart}>
        <div>Copyright ® 2022 prodesigner All rights Rcerved</div>
      </div>
    </div>
  );
};

export default Footer;
