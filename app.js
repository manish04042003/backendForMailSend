const express = require("express");
const app = express();
const cors = require("cors");
const { json } = require("body-parser");
const sgMail = require("@sendgrid/mail");
const API_KEY =
  "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";
app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

sgMail.setApiKey(API_KEY);

app.post("/sendEmail", async (req, res) => {
  try {
    console.log(req.body);

    const message = {
      to: "manishjaiswal98765@gmail.com",
      from: "manishkumar817835@gmail.com",

      subject: "Hello from send Grid",
      text: "Hello grom fnjwfb wfwe fhwei",
      html: "<h1>Hello grom fnjwfb wfwe fhwei</h1>",
    };

    sgMail
      .send(message)
      .then((response) => {
        console.log(response);
        console.log("message has been send");
      })
      .catch((error) => {
        console.log(error.message);
      });

    res.status(200).json({ response: "data send" });
  } catch {
    console.log(err);
  }
});

app.listen(4400, () => {
  console.log("app is runing on port number 4400");
});
