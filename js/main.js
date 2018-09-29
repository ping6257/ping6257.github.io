
let pagewidth = document.querySelector(".page").offsetWidth
console.log(pagewidth)
//get first page
let page = document.querySelectorAll('.page')
let mouse = document.querySelector('#card')
mouse.addEventListener('mousedown',flipstart)
let flip =  document.querySelector('.page1')   //start from first page
let pagenumber = [1,2,3,4,5,6]                 //set object


function flipstart(e){
  console.log(page)
  e.preventDefault();  //prevent derag effect
  //mousemove event
  

  console.log(flip)
  console.log(pagenumber)
  mouse.addEventListener('mousemove',flipforward)


    //use  arctangent check
    function flipforward(e){
         e.preventDefault();
        let length = e.offsetX;    
        let rad = Math.acos(length / pagewidth);
        let deg = rad * 180 / Math.PI ;
    
     
        if(deg <= 70){
         
         flip.style.transform = "rotateY("+deg+"deg)";
        }
        
  
        else{

          flip.style.transform = "rotateY(180deg)";
          flip.style.transition = "all 2s";
          mouse.removeEventListener('mousemove',flipforward)
         

          flip.addEventListener('mousedown',preventmousedown);
         

            function preventmousedown(e){
            let pagelastnumber = pagenumber[5]
            pagenumber.pop();
            pagenumber.unshift(pagelastnumber);
            flip.classList.remove('inverse'+pagelastnumber)
            
            }

            flip.addEventListener('mouseup',saveobject);
            

            function saveobject(){
            
            let pagefirstnumber = pagenumber[0] // save first number 
              flip.classList.add('inverse'+pagefirstnumber)
              pagenumber.shift() //delete first number of object
              pagenumber.push(pagefirstnumber)
              flip = document.querySelector('.page'+pagenumber[0])

            //add inverse class
              text = document.querySelector('.forward')
              text.style.display = "none";
              
              

            
            return flip 
          }
          
        }
     }
    }
   

    //inverse page



