const express = require("express");
const app = express();
const cors = require("cors");
const bodyParse = require("body-parser");
const sgMail = require("@sendgrid/mail");
const API_KEY = "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";
app.use(cors());
app.use(bodyParse.json());

app.get("/", (req, res) => { 
  res.send("Hello World!");
});

sgMail.setApiKey(API_KEY);

app.post("/sendEmail", async (req, res) => {
  try {
    console.log(req.body);

    const message = {
      to: req.body.email,
      // from: "manishkumar817835@gmail.com",
      from:{
        name:"Webscoop.in",
        email : "manishkumar817835@gmail.com"
      },

      subject: "Hello from send Grid",
      text: "Hello grom fnjwfb wfwe fhwei",
      html: "<h1>Hello From Webscoop</h1>",
    };
   
    sgMail
      .send(message)
      .then((response) => {
        console.log(response);
        console.log("message has been send");
        
        res.status(200).json({ response: "mail send " });
      })
      .catch((error) => {
        console.log(error);
        res.status(200).json({ response: "data send" });
      });

  } catch(e) {
    console.log(e)
    res.status(200).json({ response: " request not sedn properly" });

  }
});

app.listen(4400, () => {
  console.log("app is runing on port number 4400");
});
