const Buttons = document.querySelectorAll('.btn');
const Back = document.querySelector('.back');

const body = document.querySelector('body');
const heading = document.getElementsByTagName('h1');
const heading2 = document.getElementById('change');
// Store the original background color and text content
const originalBackgroundColor = body.style.backgroundColor;
const originalTextContent = heading.textContent;


Buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'red') {
      body.style.backgroundColor = e.target.id;
    
          heading2.textContent = "You have changed the background color to Red";
     
    }
    if (e.target.id === 'green') {
      body.style.backgroundColor = e.target.id;
      for (let i = 0; i < heading.length; i++) {
          heading[i].style.color = 'white';
      }
        heading2.textContent = "You have changed the background color to Green";
      for (let i = 0; i < heading.length; i++) {
          heading[i].style.color = 'white';
      }
    }
 
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
        heading2.textContent = "You have changed the background color to Yellow";
      for (let i = 0; i < heading.length; i++) {
          heading[i].style.color = 'white';
      }
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
        heading2.textContent = "You have changed the background color to Blue";
      for (let i = 0; i < heading.length; i++) {
          heading[i].style.color = 'white';
      }
    }

  


    
      });
  Back.addEventListener('click', function (e) {
    body.style.backgroundColor = 'white'; // Reverting to the original background color of the body
    heading2.textContent = "You have changed the Page into its Original State";
    for (let i = 0; i < heading.length; i++) {
        heading[i].style.color = 'black';
    }
  });
 
    });
