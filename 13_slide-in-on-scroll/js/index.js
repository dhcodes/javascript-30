document.addEventListener('scroll', ()=> {
  let images = Array.from(document.getElementsByTagName('img'));
  let scrollPos = document.body.scrollTop;
  console.log(scrollPos)
  
  //console.log(images);
  images.forEach((img)=>{
    if (img.offsetTop - 500 <= scrollPos) {
      console.log("offset: " + img.offsetTop)
      img.classList.add('active')
        }
    if (scrollPos - 500 >= img.offsetTop || scrollPos <= img.offsetTop - 800) {
      img.classList.remove('active')
    }    
  })
})