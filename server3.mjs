import fetch from 'node-fetch';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
import bodyParser from 'body-parser';


const app = express();
const port = 5000;


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files (including CSS file) from the "public" directory
app.use(express.static('public'));

// parse application/json
app.use(bodyParser.json());

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index2.html');
});

app.use(express.json());





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
        fetch("https://maker.ifttt.com/trigger/email/json/with/key/OMJ1aYgV34g7k5KCA2sFh", {
          method: "GET" 
        })
        
        
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
        fetch("https://maker.ifttt.com/trigger/email/json/with/key/OMJ1aYgV34g7k5KCA2sFh", {
          method: "GET" 
        })
       
       
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


          } else if(selectedAction1 === "<span></span>Play Music"){

            fetch("https://maker.ifttt.com/trigger/music/json/with/key/OMJ1aYgV34g7k5KCA2sFh", {
          method: "GET" 
        })
        
        
        res.send(`Music played at ${new Date().toLocaleString()}`);
      } else {
        res.status(400).send('Invalid action');
      }
    } else if (postData === "NFC2") {
      if(selectedAction3 === "<span></span>Play Music"){
        fetch("https://maker.ifttt.com/trigger/music/json/with/key/OMJ1aYgV34g7k5KCA2sFh", {
          method: "GET" 
        })
        
        
        res.send(`Music played at ${new Date().toLocaleString()}`);
        
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