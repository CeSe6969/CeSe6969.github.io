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
