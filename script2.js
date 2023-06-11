window.onload = function () {
  var slideDuration = 15; // Duration per slide in seconds
  var transitionTiming = 'linear'; // Transition timing function

  var slideshow = document.querySelector('.slideshow');
  var slideshowItems = document.querySelectorAll('.slideshow-item');

  // Calculate the total width of the slideshow
  var slideshowWidth = slideshowItems.length * 100 + '%';
  var itemWidth = 100 / slideshowItems.length + '%';

  // Set the initial styles
  slideshow.style.width = slideshowWidth;
  slideshowItems.forEach(function (item) {
    item.style.width = itemWidth;
  });

  // Start the animation
  slideshow.style.animationDuration = slideDuration + 's';
  slideshow.style.animationTimingFunction = transitionTiming;

  // Text for the typing effect
  var text = "There's a child inside everyone!\nHayao Miyazaki guards the innocence in your heart!";

  // Get the div element for the typing effect
  var typingDiv = document.getElementById('typing-effect');

  // Function to simulate typing effect
  function typeEffect (text, i, fnCallback) {
    console.log("typeEffect function is called.");
    if (i < text.length) {
      // Append the next character to the div
      if (text.charAt(i) === '\n') {
        typingDiv.innerHTML += '<br>'; // Insert line break when encountering '\n'
      } else {
        typingDiv.innerHTML += text.charAt(i);
      }

      // Call the function recursively for the next character
      setTimeout(function () {
        typeEffect(text, i + 1, fnCallback);
      }, 100); // Adjust the typing speed by changing the delay (in milliseconds)
    } else if (typeof fnCallback == 'function') {
      // Call the callback function after the typing effect is complete
      setTimeout(fnCallback, 1000); // Wait for 1 second after typing is finished
    }
  }

  // Start the typing effect
  typeEffect(text, 0, function () {

  });

};

