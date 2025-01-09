import { Fragment, React } from "react";
import { Link } from "react-router-dom";
import styles from "./MainPage.module.css";
import ParticipantForm from "./ParticipantForm";
import { useRef } from "react";

const HomePage = () => {
  const footerRef = useRef(null);
  const formRef = useRef(null);
  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Fragment>
      <section className={styles["hero-section"]}>
        <div className={styles.textbox}>
          <h1>Movie Capture Short Film Fest</h1>

          <h3>
            Movie Capture Short Film Fest Film Festival is proud to introduce a
            special category award dedicated to Short Films. Recognizing the
            vast reservoir of talent among short film creators, we aim to
            celebrate their creative brilliance by carefully evaluating,
            showcasing, and honoring their work.
          </h3>
        </div>
        {/* <div className={styles["hero-img-box"]}>
            <img
              src={movieSnap}
              className={styles["hero-img"]}
              alt="movie theme wallpapaer"
            />
          </div> */}
        <div className={styles.textbox}>
          <h2> Short Film Entries Open Now!</h2>
          <div className={styles.box}>
            <Link onClick={scrollToForm} className={styles["btn--full"]}>
              Get started
            </Link>
            <Link onClick={scrollToFooter} className={styles["btn--outline"]}>
              Get in Touch!
            </Link>
          </div>
        </div>
      </section>

      <div ref={formRef} className={styles["form-section"]}>
        <div className={styles.textbox}>
          <h2>Rules for participation!</h2>
          <div className={styles.rules}>
            <h4>
              <ion-icon
                name="alert-circle"
                style={{
                  fontSize: "2rem",
                  color: "#653173",
                  marginRight: "0.2rem",
                }}
              ></ion-icon>
              Any Indian Language (English subtitles compulsory)
            </h4>

            <h4>
              <ion-icon
                name="document-text"
                style={{
                  fontSize: "1.5rem",
                  color: "#653173",
                  marginRight: "0.2rem",
                }}
              ></ion-icon>
              Any Subject
            </h4>
            <h4>
              <ion-icon
                name="time"
                style={{
                  fontSize: "1.5rem",
                  color: "#653173",
                  marginRight: "0.2rem",
                }}
              ></ion-icon>
              1 min to 20 min Duration
            </h4>
            <h4>
              <ion-icon
                name="Film"
                style={{
                  fontSize: "1.5rem",
                  color: "#653173",
                  marginRight: "0.2rem",
                }}
              ></ion-icon>
              Selected Top 20 short film will be screened
            </h4>

            <h4>
              <ion-icon
                name="medal"
                style={{
                  fontSize: "1.5rem",
                  color: "#653173",
                  marginRight: "0.2rem",
                }}
              ></ion-icon>
              Trophy and certificate for 20 categories
            </h4>
          </div>
        </div>
        <div className={styles.textbox}>
          <ParticipantForm />
        </div>
      </div>

      <div ref={footerRef} className={styles["footer-section"]}>
        <div className={styles.textbox}>
          <img src="img/omnifood-logo.png" class="logo" alt="logo" />
          <nav>
            <h4>Connect with us</h4>
            <nav className={styles["logo-flex"]}>
              <a href="https://www.instagram.com/demo_profile/">
                <ion-icon
                  name="logo-instagram"
                  style={{
                    fontSize: "1.5rem",
                    color: "#e13272",
                    marginRight: "0.2rem",
                  }}
                ></ion-icon>
              </a>
              <a href="https://wa.me/+1234567890" target="_blank">
                <ion-icon
                  name="logo-whatsapp"
                  style={{
                    fontSize: "1.5rem",
                    color: "#66c873",
                    marginRight: "0.2rem",
                  }}
                ></ion-icon>
              </a>
              <a href="https://www.facebook.com/johndoe.demo">
                <ion-icon
                  name="logo-facebook"
                  style={{
                    fontSize: "1.5rem",
                    color: "blue",
                    marginRight: "0.2rem",
                  }}
                ></ion-icon>
              </a>
            </nav>
            <p className={styles["footer-item"]}>
              Copyright <span className="year "> 2024 </span> by sff.com.
              <br />
              All rights reserved.
            </p>
          </nav>
        </div>

        <div className={styles.textbox}>
          <ul className={styles["footer-item"]}>
            <h4>Contact us</h4>
            <li className={styles["footer-item"]}>
              10 MG Road,
              <br />
              Bengaluru, 560078, India
            </li>
            <li>
              <a className={styles["footer-item"]} href="1234567899">
                +91 1234567899
              </a>
            </li>
            <li>
              <a
                className={styles["footer-item"]}
                href="spproductions@gmail.com "
              >
                spproductions@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};
export default HomePage;
