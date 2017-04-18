let video = document.getElementsByTagName('video')[0];
console.log(video.playbackRate)
console.log(video.paused)
document.getElementsByClassName('player__button')[0].addEventListener('click', function() {
  video.paused ? playMovie() : pauseMovie()
})


//Play and pause
function playMovie() {
  video.play();
  document.getElementsByClassName('player__button')[0].innerHTML = '&#10074;&#10074;'
}

function pauseMovie() {
  video.pause();
  document.getElementsByClassName('player__button')[0].innerHTML = '&#9658;'
}

//Progress bar
let progressBar = document.getElementsByClassName('progress')[0];
let progressFill =
document.getElementsByClassName('progress__filled')[0];
//console.log(progressBar)
video.addEventListener('timeupdate', function() {
  progressFill.style.flexBasis = ((this.currentTime/this.duration)*100).toString()+'%'
})
progressBar.addEventListener('click', function(e) {
  console.log(e)
  let clickLoc = (e.clientX/e.path[3].clientWidth)*100;
  progressFill.style.flexBasis = clickLoc.toString()+'%'
  video.currentTime = (clickLoc/100)*video.duration;
  playMovie()
})

//Volume slider
let volume = document.getElementsByName('volume')[0];
video.volume = 0.5;
volume.addEventListener('change', function() {
  video.volume = this.value;
})

//Speed slider
let speedSlider = document.getElementsByName('playbackRate')[0];

speedSlider.addEventListener('change', function() {
  let newRate;
  if (this.value == 1) {
    newRate = 1;
  }
  else if (this.value < 1) {
    newRate = 0.7*this.value;
  }
  else {
    newRate = 2*this.value;
  }
  video.playbackRate = newRate;
})

//Skip buttons
let skipButtons = document.getElementsByName('skip')
skipButtons.forEach(function(button) {
  button.addEventListener('click', function() {
  video.currentTime += Number(this.dataset.skip);
})
});