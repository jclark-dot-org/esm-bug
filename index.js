// This module isn't using ES6 syntax on purpose.  I'm reproducing a bug that occurred
// when I started converting pre-ES6 syntax to ES6, and I started in the test class
// by converting require statements to import.  Not sure if that's relevant, so I used
// pre-ES6 module syntax here
function EsmBug() {
  if (!(this instanceof EsmBug)) {
    return new EsmBug();
  }

}

EsmBug.prototype.testMe = function() {
  return 42;
}
