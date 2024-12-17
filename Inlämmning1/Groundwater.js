  // Scroll to Top Button
  // window.onscroll = function() {scrollFunction()};
    
  // function scrollFunction() {
  //     const scrollButton = document.getElementById("scrollBtn");
  //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //         scrollButton.style.display = "block";
  //     } else {
  //         scrollButton.style.display = "none";
  //     }
  // }
  
  // function topFunction() {
  //     document.body.scrollTop = 0; // For Safari
  //     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  // }

  

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
      const firsttext = document.getElementById('Firsttext')
      const text1 = document.getElementById('Text1')
      const störretext = document.getElementById('Störretext')

      const hej = document.querySelector('.minklass')

      const studora = document.getElementById('Studora')
      const rubrik2 = document.getElementById('Rubrik2')
      const förstå = document.getElementById('Förstå')
      const texten = document.getElementById('Texten')
      const stortext = document.getElementById('Stortext')
      const länk2 = document.getElementById('Länk2')
      const rättigheter = document.getElementById('Rättigheter')


  
      fetch('settings.json')
          .then(response => response.json())
          .then(data => {
  
              // Add event listeners to buttons
              svenska.addEventListener('click', () => {
              firsttext.textContent = data.languages.swedish.firsttext
              drop1.textContent = data.languages.swedish.drop1
              drop2.textContent = data.languages.swedish.drop2
              drop3.textContent = data.languages.swedish.drop3
              over.textContent = data.languages.swedish.over
              detail.textContent = data.languages.swedish.detail
              history.textContent = data.languages.swedish.history
              english.textContent = data.languages.swedish.english
              authors.textContent = data.languages.swedish.authors
              om.textContent = data.languages.swedish.om
              sponsor.textContent = data.languages.swedish.sponsor
              sponsor1.textContent = data.languages.swedish.sponsor1
              sponsor2.textContent = data.languages.swedish.sponsor2
              sponsor3.textContent = data.languages.swedish.sponsor3
              text1.textContent = data.languages.swedish.text1
              stortext.textContent = data.languages.swedish.stortext
              hej.textContent = data.languages.swedish.störretext
              // störretext.textContent = data.languages.swedish.störretext
              studora.textContent = data.languages.swedish.studora
              rubrik2.textContent = data.languages.swedish.rubrik2
              förstå.textContent = data.languages.swedish.förstå
              texten.textContent = data.languages.swedish.texten
              länk2.textContent = data.languages.swedish.länk2
              rättigheter.textContent = data.languages.swedish.rättigheter


            
                
  
              });
  
              english.addEventListener('click', () => {
                firsttext.textContent = data.languages.english.firsttext
                drop1.textContent = data.languages.english.drop1
                drop2.textContent = data.languages.english.drop2
                over.textContent = data.languages.english.over
                detail.textContent = data.languages.english.detail
                history.textContent = data.languages.english.history
                svenska.textContent = data.languages.english.svenska
                english.textContent = data.languages.english.english
                authors.textContent = data.languages.english.authors
                sponsor1.textContent = data.languages.english.sponsor1
                sponsor2.textContent = data.languages.english.sponsor2
                sponsor3.textContent = data.languages.english.sponsor3
                text1.textContent = data.languages.english.text1
                störretext.textContent = data.languages.english.störretext
                studora.textContent = data.languages.english.studora
                rubrik2.textContent = data.languages.english.rubrik2
                förstå.textContent = data.languages.english.förstå
                texten.textContent = data.languages.english.texten
                Länk2.textContent = data.languages.english.Länk2
                rättigheter.textContent = data.languages.english.rättigheter
                  
        
                  
  
              });
  
              
          })
          .catch(error => console.error('Error fetching data:', error));
  
        });
