let input = document.getElementsByTagName('input')[0];




function getCities() {
  let cities;
  fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json').then(response => response.json()).then((data) => { 

input.addEventListener('keyup', function() { 
  document.getElementById('list').innerHTML = "";
  let typedVal = this.value;  
  data.map((item) => {
    if (this.value == "") {
      document.getElementById('list').innerHTML = "";
    }
    else if (item.city.toLowerCase().includes(typedVal.toLowerCase())) {
      let city = document.createElement('div');
      city.className="result";
      
      /*
      if (typedVal[0].toUpperCase() === item.city[0]) {
      typedVal = typedVal.charAt(0).toUpperCase() + typedVal.slice(1);
      };*/
      city.innerHTML = item.city;
      let test = new RegExp(typedVal, 'i')
      let matchArr = item.city.match(test);
      matchArr.map((item)=> {
        city.innerHTML = city.innerHTML.replace(item, '<span class="highlight">'+item+'</span>')
        return city.innerHTML
      });
      /*
      city.innerHTML = item.city.replace(test, '<span class="highlight">'+typedVal+'</span>')
      //console.log(city.innerHTML)
      */
      
      document.getElementById('list').appendChild(city);
      //console.log(item.city)
        }
      })  
  
  function selectClick() {
    let input = document.getElementsByTagName('input')[0];
  input.value = this.innerText;
  document.getElementById('list').innerHTML = "";
}

let resultArr = Array.from(document.getElementsByClassName('result'));
resultArr.map((item)=>{
  item.addEventListener('click', selectClick, false);
})
    }, false);
  
  }).catch(err => console.log(err));
  
  
  
}

getCities();