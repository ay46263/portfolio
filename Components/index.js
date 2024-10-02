// const { random } = require("lodash");

document.addEventListener('scroll', function() {
    const contents = document.querySelectorAll('.content');
    const trigger = window.innerHeight / 5 * 4;//window.innerHeight returns the interior height of the window in pixels
    contents.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionbottom = section.getBoundingClientRect().bottom;
    
      //content's zoom-in code needs to be removed inorder to get it zoomed in again
    if(sectionbottom < 0) {
        section.classList.remove('visible'); //this removes the content's zoom-in effect after it gets scrolled up 
      }                                      //out of the frame 
      else if(sectionTop < trigger) {
        section.classList.add('visible');//this adds the content's zoom-in effect after it gets scrolled up in frame
      } 
     
      else{
        section.classList.remove('visible');//this removes the content's zoom-in effect for other cases
                                              //that is when the content gets scrolled down out of frame
      }
    });
  });
// Function to refresh progress value when it comes into or leaves the viewport
function refreshProgress(entries) {
  entries.forEach(entry => {
      const progressBars = document.getElementsByClassName('skill')
      if (entry.isIntersecting) {
        function smooth(num, targetValue) {
          let currentValue = 0;
          const progressBar = progressBars[num];        
          function increment() {
              if (currentValue < targetValue) {
                  currentValue++;
                  progressBar.setAttribute('value', currentValue);
                  setTimeout(increment, 10); // Repeat every 10 milliseconds
              }
          }
          increment(); // Start the increment process
        }
         smooth(0,70); smooth(1,50); smooth(2,62); smooth(3,35); smooth(4,20); smooth(5,20);   
        } else {
          // Reset the progress bar values to 0 when the element leaves the viewport
          for (let i = 0; i < progressBars.length; i++) {
              progressBars[i].setAttribute('value', 0);
          }
      }
  });
}

// Create a new IntersectionObserver instance
const observer = new IntersectionObserver(refreshProgress, {
  root: null, // Use the viewport as the root
  threshold: 0.2 // Trigger when 20% of the element is visible
});
const elementsToObserve = document.querySelectorAll('.skill');
elementsToObserve.forEach(element => observer.observe(element));

      // Toggle mobile menu
      const menuBtn = document.getElementById('menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      const menuIconOpen = document.getElementById('menu-icon-open');
      const menuIconClose = document.getElementById('menu-icon-close');

      menuBtn.addEventListener('click', () => {
          // Toggle the mobile menu visibility
          mobileMenu.classList.toggle('hidden');

          // Toggle the hamburger icons
          menuIconOpen.classList.toggle('hidden');
          menuIconClose.classList.toggle('hidden');
      });