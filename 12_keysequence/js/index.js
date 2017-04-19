let array = [];
let keybox = document.querySelector('#keybox');
let log = document.querySelector('#log');

window.addEventListener('keyup', (e)=>{
  if (e.key == "Backspace") {
    array = array.slice(0,array.length-1)
    log.innerHTML = '['+array+']';
  }
  else {
  keybox.innerHTML = e.key;
  array.push(e.key)
  log.innerHTML = '['+array+']';
  console.log(array)
  }
  if (array.toString() == ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"]) {
  console.log('hey')
  keybox.innerHTML = "<iframe width='80%' height='720px' src='https://www.youtube.com/embed/J---aiyznGQ?rel=0&autoplay=1' frameborder='0' allowfullscreen></iframe>"
}
})