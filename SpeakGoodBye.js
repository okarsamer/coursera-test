(function (window) {

  // STEP 6: Create byeSpeaker object
  var byeSpeaker = {};

  // STEP 7: Attach speak method to byeSpeaker
  var speakWord = "Good Bye";
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 8: Expose byeSpeaker to the global scope
  window.byeSpeaker = byeSpeaker;

})(window);
