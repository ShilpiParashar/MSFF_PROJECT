import { Fragment, useState } from "react";
// import { useNavigate } from "react-router-dom";
import classes from "./ParticipantForm.module.css";
import styles from "./MainPage.module.css";
import axios from "axios";

const ParticipantForm = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [number, setnumber] = useState();
  const [sfn, setsfn] = useState();
  const [lng, setlng] = useState();
  const [sfs, setsfs] = useState();
  const [dl, setdl] = useState();

  const submitForm = () => {
    console.log(name, sfn, dl, lng);

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
      .then(
        (response) => {
          console.log(response);
          if (response.status === 201) {
            alert("participant created Successfully");
          } else {
            alert("Unable to create participant");
          }
        },
        (err) => {
          console.log(err);
        }
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(name, sfn, dl, lng);
    // check if the form is filled correctly
    if (!name || !email || !number || !sfn || !lng || !sfs || !dl) {
      alert("Complete the form before submit!");
      return;
    }
    //Payment Process
    // 1st step - create order and get order id
    var result;
    try {
      result = await axios.get("http://localhost:4000/order");
      console.log(result);
    } catch (err) {
      console.log(result);
    }

    // other way to handle - .then
    // axios.get("http://localhost:4000/order")
    // .then(
    //   (res) => {
    //   },
    //   (err) => {
    //   }
    // )

    // check if orderId is there (double check)
    if (!result.data || result.data == "") {
      alert("order not found");
      return;
    }

    // 2nd step: create payment modal - call razorPay
    var options = {
      key: "rzp_test_OSpUlHLgpGxkyt",
      amount: result.data.order.amount,
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: result.data.order.id,
      // callback_url: "http://localhost:4000/verifypayment",
      handler: function (response) {
        console.log(
          response.razorpay_payment_id,
          response.razorpay_order_id,
          response.razorpay_signature
        );

        axios
          .post("http://localhost:4000/verifypayment", {
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
          })
          .then(
            (res) => {
              console.log(res);
              submitForm();
            },
            (err) => {
              console.error(err);
            }
          );
      },
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
          <input
            name="enteredLng"
            type="text"
            id="Enter language"
            onChange={(e) => setlng(e.target.value)}
          />
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
          <h2>Nomination Fees is &#8377; 2000/-</h2>
          <div className={styles.box}>
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
