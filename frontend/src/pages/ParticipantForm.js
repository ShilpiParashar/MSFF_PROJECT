// import { Fragment, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// import classes from "./ParticipantForm.module.css";
// import styles from "./MainPage.module.css";
// import axios from "axios";

// const ParticipantForm = () => {
//   const [name, setname] = useState();
//   const [email, setemail] = useState();
//   const [number, setnumber] = useState();
//   const [sfn, setsfn] = useState();
//   const [lng, setlng] = useState();
//   const [sfs, setsfs] = useState();
//   const [dl, setdl] = useState();

//   const submitForm = () => {
//     console.log(name, sfn, dl, lng);
//     axios.defaults.withCredentials = true;
//     axios
//       .post("https://msff-project-backend.vercel.app/participant", {
//         name: name,
//         email: email,
//         mobileNumber: number,
//         shortFilmName: sfn,
//         language: lng,
//         shortFilmSummary: sfs,
//         driveLink: dl,
//       })
//       .then(
//         (response) => {
//           console.log(response);
//           if (response.status === 201) {
//             alert("Participant details saved successfully!");
//             window.location.reload();
//           } else {
//             alert("Unable to save participant details");
//           }
//         },
//         (err) => {
//           console.log(err);
//         }
//       );
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     console.log(name, sfn, dl, lng);
//     // check if the form is filled correctly
//     if (!name || !email || !number || !sfn || !lng || !sfs || !dl) {
//       alert("Complete the form before submitting!");
//       return;
//     }
//     //Payment Process
//     // 1st step - create order and get order id
//     var result;
//     try {
//       result = await axios.get("https://msff-project-backend.vercel.app/order");
//       console.log(result);
//     } catch (err) {
//       console.log(result);
//     }

//     // other way to handle - .then
//     // axios.get("http://localhost:4000/order")
//     // .then(
//     //   (res) => {
//     //   },
//     //   (err) => {
//     //   }
//     // )

//     // check if orderId is there (double check)
//     if (!result.data || result.data == "") {
//       alert("order not found");
//       return;
//     }

//     // 2nd step: create payment modal - call razorPay
//     var options = {
//       key: "rzp_test_OSpUlHLgpGxkyt",
//       amount: result.data.order.amount,
//       currency: "INR",
//       name: "Film Festival",
//       description: "Nomination Fee",
//       image: "https://example.com/your_logo",
//       order_id: result.data.order.id,
//       // callback_url: "http://localhost:4000/verifypayment",
//       handler: function (response) {
//         console.log(
//           response.razorpay_payment_id,
//           response.razorpay_order_id,
//           response.razorpay_signature
//         );

//         axios
//           .post("https://msff-project-backend.vercel.app//verifypayment", {
//             razorpay_payment_id: response.razorpay_payment_id,
//             razorpay_order_id: response.razorpay_order_id,
//             razorpay_signature: response.razorpay_signature,
//           })
//           .then(
//             (res) => {
//               console.log(res);
//               submitForm();
//             },
//             (err) => {
//               console.error(err);
//             }
//           );
//       },
//       prefill: {
//         name: "Shilpi Parashar",
//         email: "shilpi@example.com",
//         contact: "9000090000",
//       },
//       notes: {
//         address: "Shilpi Corporate Office",
//       },
//       theme: {
//         color: "#653173",
//       },
//     };

//     const rzp1 = new window.Razorpay(options);
//     rzp1.open();
//   };

//   return (
//     <Fragment>
//       <form className={classes.card} onSubmit={handleSubmit}>
//         <div className={classes.control}>
//           <label htmlFor="Name">Name</label>
//           <input
//             name="enteredfullname"
//             type="text"
//             id="name"
//             onChange={(e) => setname(e.target.value)}
//           />
//         </div>
//         <div className={classes.control}>
//           <label htmlFor="email">Email Address</label>
//           <input
//             name="enteredEmail"
//             type="email"
//             id="email"
//             title="Please enter a valid e-mail Address"
//             onChange={(e) => setemail(e.target.value)}
//           />
//         </div>
//         <div className={classes.control}>
//           <label htmlFor="phoneNumber">Mobile Number</label>
//           <input
//             name="enteredPhoneNumber"
//             type="text"
//             id="phoneNumber"
//             maxLength="10"
//             title="Please enter a valid contact number!"
//             pattern="[1-9]{1}[0-9]{9}"
//             onChange={(e) => setnumber(e.target.value)}
//           />
//         </div>

//         <div className={classes.control}>
//           <label htmlFor="short film name">Short Film Name</label>
//           <input
//             name="enteredsfn"
//             type="text"
//             id="Enter the name of Short Film"
//             onChange={(e) => setsfn(e.target.value)}
//           />
//         </div>
//         <div className={classes.control}>
//           <label htmlFor="lng">Language</label>
//           <input
//             name="enteredLng"
//             type="text"
//             id="Enter language"
//             onChange={(e) => setlng(e.target.value)}
//           />
//         </div>
//         <div className={classes.control}>
//           <label htmlFor="summary">Summary</label>
//           <input
//             name="enteredSummary"
//             type="text"
//             id="Write summary of the Short Film"
//             onChange={(e) => setsfs(e.target.value)}
//           />
//         </div>

//         <div className={classes.control}>
//           <label htmlFor="videolink">Short Film Video Link</label>
//           <input
//             name="enteredVideoLink"
//             type="text"
//             alt="second hand book"
//             id="Enter video link"
//             onChange={(e) => setdl(e.target.value)}
//           />
//         </div>

//         <div className={classes.actions}>
//           <h2>Nomination Fees is &#8377; 2000/-</h2>
//           <div className={styles.box}>
//             <button className={`${styles.submitbtn} ${styles["btn--outline"]}`}>
//               Submit
//             </button>
//           </div>
//         </div>
//       </form>
//     </Fragment>
//   );
// };

// export default ParticipantForm;

import { Fragment, useState } from "react";
import axios from "axios";
import classes from "./ParticipantForm.module.css";
import styles from "./MainPage.module.css";

const ParticipantForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [sfn, setSfn] = useState(""); // Short Film Name
  const [lng, setLng] = useState(""); // Language
  const [sfs, setSfs] = useState(""); // Short Film Summary
  const [dl, setDl] = useState(""); // Drive Link

  const submitForm = async () => {
    try {
      console.log("Submitting participant details...");
      const response = await axios.post(
        "https://msff-project-backend.vercel.app/participant",
        {
          name,
          email,
          mobileNumber: number,
          shortFilmName: sfn,
          language: lng,
          shortFilmSummary: sfs,
          driveLink: dl,
        }
      );
      if (response.status === 201) {
        alert("Participant details saved successfully!");
        window.location.reload();
      } else {
        alert("Unable to save participant details.");
      }
    } catch (err) {
      console.error("Error saving participant details:", err);
      alert("An error occurred while saving participant details.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!name || !email || !number || !sfn || !lng || !sfs || !dl) {
      alert("Complete the form before submitting!");
      return;
    }

    let orderResult;
    try {
      console.log("Fetching order details...");
      orderResult = await axios.get(
        "https://msff-project-backend.vercel.app/order",
        {
          withCredentials: true,
        }
      );
      if (!orderResult?.data?.order) {
        alert("Order not found. Please try again later.");
        return;
      }
    } catch (err) {
      console.error("Error fetching order details:", err);
      alert("Failed to fetch order details. Please try again later.");
      return;
    }

    // Extract order details
    const order = orderResult.data.order;
    const options = {
      key: "rzp_test_OSpUlHLgpGxkyt",
      amount: order.amount,
      currency: "INR",
      name: "Film Festival",
      description: "Nomination Fee",
      order_id: order.id,
      handler: async (response) => {
        try {
          console.log("Verifying payment...");
          await axios.post(
            "https://msff-project-backend.vercel.app/verifypayment",
            {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            }
          );
          submitForm(); // Submit participant details after successful payment
        } catch (err) {
          console.error("Payment verification failed:", err);
          alert("Payment verification failed. Please contact support.");
        }
      },
      prefill: {
        name,
        email,
        contact: number,
      },
      theme: {
        color: "#653173",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <Fragment>
      <form className={classes.card} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="number">Mobile Number</label>
          <input
            type="text"
            id="number"
            maxLength="10"
            pattern="[1-9]{1}[0-9]{9}"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="sfn">Short Film Name</label>
          <input
            type="text"
            id="sfn"
            value={sfn}
            onChange={(e) => setSfn(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="lng">Language</label>
          <input
            type="text"
            id="lng"
            value={lng}
            onChange={(e) => setLng(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="sfs">Summary</label>
          <input
            type="text"
            id="sfs"
            value={sfs}
            onChange={(e) => setSfs(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="dl">Short Film Video Link</label>
          <input
            type="text"
            id="dl"
            value={dl}
            onChange={(e) => setDl(e.target.value)}
          />
        </div>
        <div className={classes.actions}>
          <h2>Nomination Fees is ₹2000/-</h2>
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
