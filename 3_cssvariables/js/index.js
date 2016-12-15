'use strict';

var imgInput = document.getElementById('url');

function changeImage() {
  var url = this.value;
  if (isImage(url)) {
    document.querySelector('img').src = url;
  } else {
    return;
  }
}

function isImage(url) {
  var fileTypes = ['png', 'jpg', 'jpeg', 'gif', 'tiff'];
  for (var i = 0; i < fileTypes.length; i++) {
    if (url.substr(url.length - 3, url.length) === fileTypes[i]) {
      return true;
    }
  }
}

imgInput.addEventListener('input', changeImage, false);

var accentColor = document.getElementsByName('accentcolor')[0];
var bgColor = document.getElementsByName('bgcolor')[0];
var blur = document.getElementsByName('blur')[0];
var washout = document.getElementsByName('washout')[0];

function changeAccentColor() {
  document.getElementsByTagName('html')[0].style.setProperty('--accent-color', accentColor.value);
}

function changeBgColor() {
  document.getElementsByTagName('html')[0].style.setProperty('--bg-color', bgColor.value);
}

function changeBlur() {
  document.getElementsByTagName('html')[0].style.setProperty('--blur', blur.value + 'px');
}

function changeWashOut() {
  document.getElementsByTagName('html')[0].style.setProperty('--washout', washout.value + '%');
}

accentColor.addEventListener('change', changeAccentColor, false);

bgColor.addEventListener('change', changeBgColor, false);

blur.addEventListener('change', changeBlur, false);

washout.addEventListener('change', changeWashOut, false);