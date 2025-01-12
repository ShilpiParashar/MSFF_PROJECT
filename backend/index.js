const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Razorpay = require("razorpay");
const { createHmac } = require("crypto");

mongoose
  .connect(
    "mongodb+srv://shilpi28:parashar28@cluster0.bcdslgu.mongodb.net/msff?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected!"));

//Creating the model (table structure)
var participantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    shortFilmName: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    shortFilmSummary: {
      type: String,
      required: true,
    },
    driveLink: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//Accessing the model
const Participant = mongoose.model("participant", participantSchema);

/* modal table
Participant.create
Participant.get 
*/

const app = express();
app.use(
  cors({
    origin: ["https://msff-project-frontend.vercel.app/"], // Allow these origins
    methods: ["GET", "POST"], // Allow specific HTTP methods
    credentials: true, // Allow cookies/authorization headers
  })
);
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// RAZORPAY INTEGRATION
require("dotenv").config();

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

// create order : GET  - 1st
app.get("/order", async (req, res) => {
  const amount = 5;

  var options = {
    amount: Number(amount * 100), // amount in the smallest currency unit : paise
    currency: "INR",
    receipt: "order_rcptid_11",
  };

  // async: callback function method
  instance.orders.create(options, function (err, order) {
    if (order) {
      // order recieved from razorpay
      console.log(order);

      // return order id
      res.status(200).json({ order });
    }
    if (err) {
      es.status(400).json({});
    }
  });

  // async: .then method ----
  // instance.orders.create(options)
  //  .then(
  //     (order) => {
  //       console.log(order);
  //       res.status(200).json({ order });
  //     }
  //     (err) => {
  //       res.status(400).json({ });
  //     }
  // });

  // async: await method ----
  // try{
  //  const order = await instance.orders.create(options);
  // }
  // catch(err){
  //   res.status(400).json({ });
  // }
  // res.status(200).json({ order })
});

// verify payment
app.post("/verifypayment", (req, res) => {
  console.log(req.body);
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const generated_signature = createHmac(
    "sha256",
    process.env.RAZORPAY_API_SECRET
  )
    .update(body.toString())
    .digest("hex");

  console.log(generated_signature, razorpay_signature);

  if (generated_signature == razorpay_signature) {
    res.status(200).json({ output: "Payment successful!" });
  } else {
    res.status(400).json({ output: "Payment failed!" });
  }
});

// API POST: participant data
app.post("/participant", async (req, res) => {
  // console.log(req.originalUrl);

  // recieve data from req structure
  console.log(req.body);

  const participant = await Participant.create({
    name: req.body.name,
    email: req.body.email,
    mobileNumber: req.body.mobileNumber,
    shortFilmName: req.body.shortFilmName,
    language: req.body.language,
    shortFilmSummary: req.body.shortFilmSummary,
    driveLink: req.body.driveLink,
  });

  if (participant) {
    res.status(201).json({
      result: "Created Successfully",
    });
  } else {
    res.status(400).json({
      result: "Invalid participant data",
    });
  }
});

app.get("/participants", async (req, res) => {
  Participant.find({}).then(
    (data) => {
      // console.log(data);
      res.status(200).json({ data });
    },
    (err) => {
      console.log(err);
      res.status(400).json({});
    }
  );
});

// API GET : /backend -> hello
// app.get("/backend", (req, res) => {
//   console.log(req.originalUrl);
//   res.json({ result: "ok", data: 1 });
// });

app.listen(4000, () => {
  console.log("server running...");
});

app.get("/", (req, res) => {
  res.send("API is running");
});

/*
Frontend - available testing easy

----------------------------------
Frontend - not available

get route
/backend - test with browser   /localhost:4000/backend

post route - test with browser ? how to send data
                data can't be send
                Postman
                Thunderclient

Diff - thunderclient - can send data

"firstname": "shilpi",
"lastname": "parashar",
"email": "shilpi@gmail",
"mobileNumber": "123",
"shortFilmName": "hello",
"shortFilmSummary": "kuch bhi",
"driveLink": "https://suraj.com",
*/
