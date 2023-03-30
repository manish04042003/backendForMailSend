const express = require("express");
const app = express();
const cors = require("cors");
const bodyParse = require("body-parser");
const sgMail = require("@sendgrid/mail");
require('dotenv').config();
const API_KEY = process.env.API_KEY ;
app.use(cors());
app.use(bodyParse.json());

console.log(API_KEY)
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
      from: 'manish@webscoop.in',

      subject: "Hello from send Grid",
      text: "Hello grom fnjwfb wfwe fhwei",
      html: `   <main style="max-width: 500px;">
      <div style="max-width: 600px ;">
          <h1 style="display: initial; padding: 0;">Wohoo! your video call is confirmed</h1><img
              style="width: 2.5rem; margin-left: 10px;" src="https://cdn.webscoop.in/demo/socialMediaIcon/72.png"
              alt="">
      </div>
      <div style="display: flex;
      gap: 5px;">
          <p style="font-weight: 600;
      font-size: 1.2rem;
      width: 90px; font-size: 1.2rem;">When:</p>
          <p style="font-size: 1.2rem;">Mon, 27-Mar-2023, 05:00 PM (Asia/Kolkata)</p>
      </div>
      <div style="display: flex;
      gap: 5px;">
          <p style="font-weight: 600;
      font-size: 1.2rem;
      width: 90px; font-size: 1.2rem;">With:</p>
          <p style="font-size: 1.2rem;">Aditya</p>
      </div>
      <div style="">
          <p style="font-weight: 600;
      font-size: 1.2rem;
      width: 90px; font-size: 1.2rem; display: inline-block;">Call link:</p>
          <div style="padding: 10px 2rem; color: white; font-weight: 500; background-color: black; border-radius: 10px; cursor: pointer; display: inline-block;"> <a style="text-decoration: none; color: white; font-size: 1rem;" href="">Join call</a></div>
      </div>

      <div style="margin-top: 2rem;
      border-top: 2px solid black;
      padding-top: 2rem;
      border-bottom: 8px solid red;
      padding-bottom: 1rem;">
          <div style=" width: fit-content; margin: auto;">
              <a href=""><img src="https://cdn.webscoop.in/demo/socialMediaIcon/icons8-instagram-48.png" alt=""></a>
              <a href=""><img src="https://cdn.webscoop.in/demo/socialMediaIcon/icons8-linkedin-45.png" alt=""></a>
              <a href=""><img src="https://cdn.webscoop.in/demo/socialMediaIcon/icons8-twitter-48.png" alt=""></a>
          </div>
          <p style="  color: grey;
      margin-top: 1rem;
      text-align: center;">
              548 Market St PMB 30073, San Francisco
          </p>
          <p style="  color: grey;
      margin-top: 1rem;
      text-align: center;">
              Copyright ©2023 Webscoop, All rights reserved.
          </p>
      </div>
  </main>`,
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
