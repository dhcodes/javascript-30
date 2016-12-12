'use strict';

var keys = ['a', 's', 'd', 'f', 'j', 'k', 'l', ';'];

var _loop = function _loop(i) {
  var node = document.createElement('button');
  var textNode = document.createTextNode(keys[i]);
  node.appendChild(textNode);
  document.getElementById('keys').appendChild(node);
  document.addEventListener('keydown', function (event) {
    if (event.key == keys[i]) {
      node.classList.add('clicked');
      sounds[i].play();
    }
  }, false);
  document.addEventListener('keyup', function (event) {
    if (event.key == keys[i]) {
      node.classList.remove('clicked');
    }
  }, false);

  node.addEventListener('mousedown', function (event) {
    node.classList.add('clicked');
    sounds[i].play();
    node.addEventListener('mouseup', function (event) {
      node.classList.remove('clicked');
    });
  }, false);
};

for (var i = 0; i < keys.length; i++) {
  _loop(i);
}

var sound1 = new Audio('http://audiosoundclips.com/wp-content/uploads/2011/12/Drum1.mp3');
var sound2 = new Audio('http://audiosoundclips.com/wp-content/uploads/2011/12/Drum2.mp3');
var sound3 = new Audio('http://audiosoundclips.com/wp-content/uploads/2011/12/Drum3.mp3');
var sound4 = new Audio('http://audiosoundclips.com/wp-content/uploads/2011/12/Drum4.mp3');
var sound5 = new Audio('http://audiosoundclips.com/wp-content/uploads/2011/12/Drum5.mp3');
var sound6 = new Audio('http://audiosoundclips.com/wp-content/uploads/2011/12/Drum6.mp3');
var sound7 = new Audio('http://audiosoundclips.com/wp-content/uploads/2011/12/Drum7.mp3');
var sound8 = new Audio('http://audiosoundclips.com/wp-content/uploads/2011/12/Drum8.mp3');

var sounds = [sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8];