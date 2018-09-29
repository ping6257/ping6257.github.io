
let pagewidth = document.querySelector(".page").offsetWidth
console.log(pagewidth)
//get first page
let page1 = document.querySelector('.page1')
let mouse = document.querySelector('#card')
mouse.addEventListener('mousedown',flipstart)

function flipstart(e){
  e.preventDefault();  //prevent derag effect
  //mousemove event
  page1.classList.add('start')
  let flip =  document.querySelector('.start')
 
  mouse.addEventListener('mousemove',flippage)


    //use  arctangent check
    function flippage(e){
     e.preventDefault();
     let length = e.offsetX;
     let rad = Math.acos(length / pagewidth);
     let deg = rad * 180 / Math.PI ;
      

        if(deg <= 70){
         
         flip.style.transform = "rotateY("+deg+"deg)";
        
        }else{

          flip.style.transform = "rotateY(180deg)";
          flip.style.transition = "all 2s";
          flip.classList.add('inverse')
          flip.classList.remove('start')
          mouse.removeEventListener('mousemove',flippage)
        }
  }
}

/* 0924 flip first page  
---change first page   div classname flip_over
---trigger second page div classname flip_on
so on and so forth

*/