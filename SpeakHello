// STEP 1: Wrap in IIFE
(function (window) {

  // STEP 2: Create helloSpeaker object
  var helloSpeaker = {};

  // STEP 3: Attach speak method to helloSpeaker
  var speakWord = "Hello";
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 4: Expose helloSpeaker to the global scope
  window.helloSpeaker = helloSpeaker;

})(window);
