const https = require("https");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const port = 3000;
import fetch from 'node-fetch';


// Serve static files (including CSS file) from the "public" directory
app.use(express.static('public'));

// parse application/json
app.use(bodyParser.json());

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index2.html');
});

app.use(express.json());

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'ariel.will52@ethereal.email',
      pass: 'wvDs3RB19bhzdbPWZM'
  }
});

// Function to send email
function sendMail(emailAddress) {
  // Set up email content
  const mailOptions = {
    from: 'ariel.will52@ethereal.email',
    to: emailAddress,
    subject: 'Alarm is triggered',
    text: 'This is a notification email sent by Smart alarm system to notify that alarm is activated'
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response} at ${new Date().toLocaleString()}`);
    }
  });
}

let selectedAction1 = '';

app.post('/button-action1', (req, res) => {
  selectedAction1 = req.body.action;
  console.log(`Selected action Button1: ${selectedAction1}`);

  // Store the selected action on the server-side (e.g. in a database)
  // ...

  res.json({ status: 'ok' });
});



let selectedAction2 = '';

app.post('/nfc-action1', (req, res) => {
  selectedAction2 = req.body.action;
  console.log(`Selected action NFC 1: ${selectedAction2}`);

  // Store the selected action on the server-side (e.g. in a database)
  // ...

  res.json({ status: 'ok' });
});

  

let selectedAction3 = '';

app.post('/nfc-action2', (req, res) => {
  selectedAction3 = req.body.action;
  console.log(`Selected action NFC 2: ${selectedAction3}`);

  // Store the selected action on the server-side (e.g. in a database)
  // ...

  res.json({ status: 'ok' });
});



  app.post('/submit-form', (req, res) => {
    const postData = req.body.action;
    console.log(postData);
    
    if (postData === "NFC1") {
      if(selectedAction2 === "<span></span>Send Email"){
        const emailAddress = 'ariel.will52@ethereal.email';
        sendMail(emailAddress);
        
        
        res.send(`Email sent at ${new Date().toLocaleString()}`);
        
      } else if(selectedAction2 === "<span></span>Send Text"){
          
        fetch("https://maker.ifttt.com/trigger/Text/json/with/key/cOb-Fgm0AdE3MvsFVxc0cB", {
          method: "GET" 
        })
          
          res.send(`Text sent at ${new Date().toLocaleString()}`);
        } else if(selectedAction2 === "<span></span>Send Call"){
          
          fetch("https://maker.ifttt.com/trigger/call/json/with/key/cOb-Fgm0AdE3MvsFVxc0cB", {
            method: "GET" 
          })
            
            res.send(`Call sent at ${new Date().toLocaleString()}`);
        }else {
        res.status(400).send('Invalid action');
       }
    } else if (postData === "Button1") {
      if(selectedAction1 === "<span></span>Send Email"){
        const emailAddress = 'ariel.will52@ethereal.email';
        sendMail(emailAddress);
       
       
        res.send(`Email sent at ${new Date().toLocaleString()}`);

      } else if(selectedAction1 === "<span></span>Send Text"){
          
        fetch("https://maker.ifttt.com/trigger/Text/json/with/key/cOb-Fgm0AdE3MvsFVxc0cB", {
          method: "GET" 
        })
          
          res.send(`Text sent at ${new Date().toLocaleString()}`);
        } else if(selectedAction1 === "<span></span>Send Call"){
          
          fetch("https://maker.ifttt.com/trigger/call/json/with/key/cOb-Fgm0AdE3MvsFVxc0cB", {
            method: "GET" 
          })
            
            res.send(`Call sent at ${new Date().toLocaleString()}`);
           
      } else {
        res.status(400).send('Invalid action');
      }
    } else if (postData === "NFC2") {
      if(selectedAction3 === "<span></span>Send Email"){
        const emailAddress = 'ariel.will52@ethereal.email';
        sendMail(emailAddress);
        
        
        res.send(`Email sent at ${new Date().toLocaleString()}`);
        
      } else {
        res.status(400).send('Invalid action');
      }
    } else {
      res.status(400).send('Invalid request');
    }
    
    
  });

  




// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});