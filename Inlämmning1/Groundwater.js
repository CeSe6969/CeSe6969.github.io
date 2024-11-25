  // Scroll to Top Button
  window.onscroll = function() {scrollFunction()};
    
  function scrollFunction() {
      const scrollButton = document.getElementById("scrollBtn");
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollButton.style.display = "block";
      } else {
          scrollButton.style.display = "none";
      }
  }
  
  function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  

  document.addEventListener('DOMContentLoaded', () => {
      
    const rubrik = document.getElementById('Rubrik')
      const hem = document.getElementById('Hem')
      const drop1 = document.getElementById('Drop1')
      const drop2 = document.getElementById('Drop2')
      const drop3 = document.getElementById('Drop3')
      const om = document.getElementById('Om')
      const over = document.getElementById('Over')
      const detail = document.getElementById('Detail')
      const history = document.getElementById('History')
      var svenska = document.getElementById('svenska')
      const english = document.getElementById('English')
      const authors = document.getElementById('Authors')
      const sponsor = document.getElementById('Sponsor')
      const sponsor1 = document.getElementById('Sponsor1')
      const sponsor2 = document.getElementById('Sponsor2')
      const sponsor3 = document.getElementById('Sponsor3')
      const image = document.getElementById('Image')
      const firsttext = document.getElementById('Firsttext')
      const text1 = document.getElementById('Text1')
      const störretext = document.getElementById('Störretext')
      const studora = document.getElementById('Studora')
      const rubrik2 = document.getElementById('Rubrik2')
      const förstå = document.getElementById('Förstå')
      const texten = document.getElementById('Texten')
      const stortext = document.getElementById('Stortext')
      const Länk2 = document.getElementById('Länk2')
      const rättigheter = document.getElementById('Rättigheter')
      const heading = document.getElementById('heading');
      const text = document.getElementById('text');


  
      fetch('settings.json')
          .then(response => response.json())
          .then(data => {
  
              // Add event listeners to buttons
              svenska.addEventListener('click', () => {
              firsttext.textContent = data.languages.swedish.firsttext
              

            
                
  
              });
  
              english.addEventListener('click', () => {
                  heading.textContent = data.languages.english.heading;
                  text.textContent = data.languages.english.text;
                  
                  for(i = 0; i < test.length; i++){
                      test[i].textContent = data.languages.english.test;
                  }
  
              });
  
              
          })
          .catch(error => console.error('Error fetching data:', error));
  
        });
