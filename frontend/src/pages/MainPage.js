import { Fragment, React } from "react";
import { Link } from "react-router-dom";
import styles from "./MainPage.module.css";
// import FilmForm from "./FilmForm";
import ParticipantForm from "./ParticipantForm";
//import { useContext } from "react";
//import AuthContext from "../store/auth-context";

const HomePage = () => {
  // const authCtx = useContext(AuthContext);
  // const isLoggedIn = authCtx.isLoggedIn;

  return (
    <Fragment>
      <div className={styles.container}>
        <section className={styles["hero-section"]}>
          <div className={styles.textbox}>
            <h1>Movie Capture Short Film Fest</h1>

            <h3>
              Movie Capture Short Film Fest Film Festival is proud to introduce
              a special category award dedicated to Short Films. Recognizing the
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
              <Link className={styles["btn--outline"]}>Learn more &rarr;</Link>
            </div>
          </div>
        </section>

        <div className={styles["form-section"]}>
          <div className={styles.textbox}>
            <h3>
              Movie Capture Short Film Fest Film Festival is proud to introduce
              a special category award dedicated to Short Films. Recognizing the
              vast reservoir of talent among short film creators, we aim to
              celebrate their creative brilliance by carefully evaluating,
              showcasing, and honoring their work at MSFF 2024.
            </h3>
          </div>
          <div className={styles.textbox}>
            <ParticipantForm />
          </div>
        </div>

        <div className={styles.textbox}>
          <nav className={styles["icon-flex"]}>
            <img src="img/omnifood-logo.png" class="logo" alt="Omnifood logo" />

            <h3 className={styles["footer-item"]}>
              <strong>Connect with us</strong>
            </h3>
            <a href="https://www.instagram.com/movie_capture_studio/">
              <ion-icon name="logo-instagram" className="logo-icons"></ion-icon>
            </a>
            <ion-icon name="logo-whatsapp" className="logo-icons"></ion-icon>
            <ion-icon name="logo-facebook" className="logo-icons"></ion-icon>

            <p className={styles["footer-item"]}>
              Copyright <span className="year "> 2021 </span> by Omnifood.inc.
              All rights reserved.
            </p>
          </nav>

          <nav className={styles["footer-grid"]}>
            <p className={styles["footer-item"]}>
              <strong>Contact us</strong>
            </p>
            <ul className={styles["footer-item"]}>
              <li className={styles["footer-item"]}>
                623 Harrison St., 2nd Floor, San Francisco, CA 94107
              </li>
              <li>
                <a className={styles["footer-item"]} href="tel:415-201-6370">
                  415-201-6370
                </a>
              </li>
              <li>
                <a
                  className={styles["footer-item"]}
                  href="mailto:hello@msff.com"
                >
                  hello@msff.com
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Fragment>
  );
};
export default HomePage;
