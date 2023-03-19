window.onload = function() {
    const form = document.getElementById('my-form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const formData = new FormData(form);
        
        try {
          const response = await fetch('/submit-form', {
            method: 'POST',
            body: formData,
          });
          
          const responseText = await response.text();
          const responseMessage = `Response: ${responseText}`;
          document.getElementById('response-message').textContent = responseMessage;
        } catch (error) {
          console.error(error);
        }
      });
  const button1 = document.getElementById("button1");

  button1.addEventListener("click", function(event) {
    const target = event.target;
    if (target.nodeName === "BUTTON") {
      const buttonAction1 = target.innerHTML;

      // Send the selected action to the server
      fetch('/button-action1', {
        method: 'POST',
        body: JSON.stringify({ action: buttonAction1 }),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });

      // Store the selected action locally in the client's browser
      localStorage.setItem("buttonAction1", buttonAction1);
    }
  });
  const nfc1 = document.getElementById("nfc1");

  nfc1.addEventListener("click", function(event) {
    const target1 = event.target;
    if (target1.nodeName === "BUTTON") {
      const nfcAction1 = target1.innerHTML;

      // Send the selected action to the server
      fetch('/nfc-action1', {
        method: 'POST',
        body: JSON.stringify({ action: nfcAction1 }),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
        // Store the selected action locally in the client's browser
      localStorage.setItem("nfcAction1", nfcAction1);
      }
  });
  const nfc2 = document.getElementById("nfc2");

  nfc2.addEventListener("click", function(event) {
    const target2 = event.target;
    if (target2.nodeName === "BUTTON") {
      const nfcAction2 = target2.innerHTML;

      // Send the selected action to the server
      fetch('/nfc-action2', {
        method: 'POST',
        body: JSON.stringify({ action: nfcAction2 }),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
        // Store the selected action locally in the client's browser
      localStorage.setItem("nfcAction2", nfcAction2);
      }

  });
}
    window.addEventListener("load", function() {
      var buttonAction1 = localStorage.getItem("buttonAction1");
      if (buttonAction1) {
        document.getElementById("display").innerHTML =
          "Selected action: " + buttonAction1;
      }
    },
    window.addEventListener("load", function() {
      var nfcAction1 = localStorage.getItem("nfcAction1");
      if (nfcAction1) {
        document.getElementById("display1").innerHTML =
          "Selected action: " + nfcAction1;
      }
    },
    window.addEventListener("load", function() {
      var nfcAction2 = localStorage.getItem("nfcAction2");
      if (nfcAction2) {
        document.getElementById("display2").innerHTML =
          "Selected action: " + nfcAction2;
      }
    }
    )))

    


    

      
        


