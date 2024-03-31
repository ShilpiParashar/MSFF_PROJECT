import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./FilmForm.module.css";
import styles from "./MainPage.module.css";
import axios from "axios";

const ParticipantForm = () => {
  const navigate = useNavigate();

  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [number, setnumber] = useState();
  const [sfn, setsfn] = useState();
  const [lng, setlng] = useState();
  const [sfs, setsfs] = useState();
  const [dl, setdl] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, sfn, dl, lng);
    if (lng === "") alert("Select a language");
    else {
      axios
        .post("http://localhost:4000/participant", {
          name: name,
          email: email,
          mobileNumber: number,
          shortFilmName: sfn,
          language: lng,
          shortFilmSummary: sfs,
          driveLink: dl,
        })
        .then((response) => {
          console.log(response);
          if (Object.keys(response.data).length === 0) {
            alert("Can't create participant");
          } else {
            alert("done");
          }
        });
    }
  };

  const paymentHandler = async () => {
    const amount = 239;
    console.log("shilpiiiiii");
    // 1st step - create order and get order id
    const result = await axios.post("http://localhost:4000/order", {
      amount: amount,
    });
    // get orderID
    console.log(result);
    // const orderID = result.data.order.id;
    console.log("test here");

    // 2nd step: create payment modal - call razorPay
    var options = {
      key: "rzp_test_OSpUlHLgpGxkyt", // Enter the Key ID generated from the Dashboard
      amount: result.data.order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: result.data.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:4000/verifypayment",
      prefill: {
        name: "Shilpi Parashar",
        email: "shilpi@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Shilpi Corporate Office",
      },
      theme: {
        color: "#653173",
      },
    };

    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <Fragment>
      <form className={classes.card} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="Name">Name</label>
          <input
            name="enteredfullname"
            type="text"
            id="name"
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email Address</label>
          <input
            name="enteredEmail"
            type="email"
            id="email"
            title="Please enter a valid e-mail Address"
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="phoneNumber">Mobile Number</label>
          <input
            name="enteredPhoneNumber"
            type="text"
            id="phoneNumber"
            maxLength="10"
            title="Please enter a valid contact number!"
            pattern="[1-9]{1}[0-9]{9}"
            onChange={(e) => setnumber(e.target.value)}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="short film name">Short Film Name</label>
          <input
            name="enteredsfn"
            type="text"
            id="Enter the name of Short Film"
            onChange={(e) => setsfn(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="lng">Language</label>
          <select
            name="enteredlanguage"
            id="lng"
            defaultValue={"Select a Language"}
            onChange={(e) => setlng(e.target.value)}
          >
            <option value="" disabled>
              Select a language
            </option>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="Kannada">Kannada </option>
            <option value="Malayalam">Malayalam</option>
            <option value="Tamil">Tamil</option>
            <option value="Telegu">Telegu</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="summary">Summary</label>
          <input
            name="enteredSummary"
            type="text"
            id="Write summary of the Short Film"
            onChange={(e) => setsfs(e.target.value)}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="videolink">Short Film Video Link</label>
          <input
            name="enteredVideoLink"
            type="text"
            alt="second hand book"
            id="Enter video link"
            onChange={(e) => setdl(e.target.value)}
          />
        </div>

        <div className={classes.actions}>
          <h2>Nomination Fees is 2000rs.</h2>
          <div className={styles.box}>
            <button
              type="button"
              className={styles.paybtn}
              onClick={paymentHandler}
            >
              Pay Now!
            </button>
            <button className={`${styles.submitbtn} ${styles["btn--outline"]}`}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default ParticipantForm;
