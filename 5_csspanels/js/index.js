let panels = Array.from(document.getElementsByClassName('panels')[0].childNodes);

panels.map((item) => {
  if (item.tagName == 'DIV') {
    item.addEventListener('mouseenter', textToggle, false)
  
  item.addEventListener('mouseleave', textToggle, false)
  }
})
    
function textToggle(e) {
  
  if (e.target.tagName == "DIV") {
  e.target.childNodes[1].firstElementChild.classList.toggle('top-mod');
      
e.target.childNodes[1].lastElementChild.classList.toggle('bottom-mod');
  }
}