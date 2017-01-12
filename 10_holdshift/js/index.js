let shiftDown;
let lastClicked;

document.addEventListener('keydown', (e)=> {
  if (e.shiftKey) {
    shiftDown = true;
  }
  
}, false)
  
document.addEventListener('keyup', (e) => {
    if (!e.shiftKey) {
      shiftDown = false;
    }
  }, false)


let items = Array.from(document.getElementsByClassName('item'))


items.map((item, index, array) => {
  item.children[0].addEventListener('click', () => {
    
  item.children[0].checked == false ? true : false;  item.children[1].classList.toggle('line')
    console.log(lastClicked)
   if (shiftDown && Number.isInteger(lastClicked)) {
              console.log(lastClicked, index);
    let newArr =
        array.slice(lastClicked +1, index);
      newArr.map((item) => {
        item.children[0].checked = !item.children[0].checked;
        item.children[1].classList.toggle('line') 
      
        
        
      })
      
      
    
    }
    
  if (!shiftDown) {
    lastClicked = index;
  }
    
    
   
  }, false)
});