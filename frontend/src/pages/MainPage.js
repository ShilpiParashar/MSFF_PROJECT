import { Fragment, React } from "react";
import { Link } from "react-router-dom";
import styles from "./MainPage.module.css";
import ParticipantForm from "./ParticipantForm";

const HomePage = () => {
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
            showcasing, and honoring their work at MSFF 2024.
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
          <h2>MSFF Short Film Entries Open Now!</h2>
          <div className={styles.box}>
            <Link className={styles["btn--full"]}>Get started</Link>
            <Link className={styles["btn--outline"]}>Get in Touch!</Link>
          </div>
        </div>
      </section>

      <div className={styles["form-section"]}>
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

      <div className={styles["footer-section"]}>
        <div className={styles.textbox}>
          <img src="img/omnifood-logo.png" class="logo" alt="logo" />
          <nav>
            <h4>Connect with us</h4>
            <nav className={styles["logo-flex"]}>
              <a href="https://www.instagram.com/movie_capture_studio/">
                <ion-icon
                  name="logo-instagram"
                  style={{
                    fontSize: "1.5rem",
                    color: "#e13272",
                    marginRight: "0.2rem",
                  }}
                ></ion-icon>
              </a>
              <a href="https://wa.me/7259265736" target="_blank">
                <ion-icon
                  name="logo-whatsapp"
                  style={{
                    fontSize: "1.5rem",
                    color: "#66c873",
                    marginRight: "0.2rem",
                  }}
                ></ion-icon>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100079736436940&mibextid=LQQJ4d">
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
              Copyright <span className="year "> 2024 </span> by msff.com.
              <br />
              All rights reserved.
            </p>
          </nav>
        </div>

        <div className={styles.textbox}>
          <ul className={styles["footer-item"]}>
            <h4>Contact us</h4>
            <li className={styles["footer-item"]}>
              #16, 12th Cross Ramamandira Road Sarakki, <br />
              JP Nagar, 1st phase
              <br />
              Bengaluru, 560078
            </li>
            <li>
              <a className={styles["footer-item"]} href="7259265736">
                +91 7259265736
              </a>
            </li>
            <li>
              <a
                className={styles["footer-item"]}
                href="dosthiproductions@gmail.com "
              >
                dosthiproductions@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};
export default HomePage;
