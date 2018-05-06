


//選口味
//change card image
//orgin
let changeimage=document.getElementById("org_click");
var cardtext=document.getElementById('card-text')
changeimage.addEventListener('click',changetoorgin);

function changetoorgin(){
  //更換圖片
  let orgimg=document.getElementById('changeImage')
  orgimg.src="img/cookie_milk.jpg";
  //更換title
  document.getElementById('card-title').innerHTML="Salt & Camembert Cookie"
  //更換paragrapgh
  cardtext.innerHTML="The cookies made with Hokkaido milk and French Guérande salt, and a camembert cheese filling in between. Every single bite are full of rich milk and light salt flavors."
  cardtext.style.textAlign="left"

  //開啟可拖拉
  document.getElementById('changeImage').setAttribute('draggable',true);
  //新增dragtext
  let gift1='原味海鹽餅乾!';
  orgimg.addEventListener('dragstart',dragStart1);
  function dragStart1(e) {
    e.dataTransfer.setData('text',gift1);
    
  }
}



//change card image
//honey
let changeimage2=document.getElementById("honey_click");

changeimage2.addEventListener('click',changetohoney);

function changetohoney(){
  //更換圖片
  
  let honeyimg=document.getElementById('changeImage');
  honeyimg.src="img/cookie_honey.jpg";
  document.getElementById('card-title').innerHTML="Honey & Gorgonzola Cookie"
  //更換paragrapgh
  cardtext.innerHTML="Filling with an Italian gorgonzola cheese with Spanish rosemary honey in between, perfectly balance the origin flavor of blue cheese, while retaining the sweet and smooth flavors."
  cardtext.style.textAlign="left"
  //⁠☆清除互相影響的drag
   //開啟可拖拉
   document.getElementById('changeImage').setAttribute('draggable',true);
  //新增dragtext
 let gift2='蜂蜜海鹽餅乾!';
 honeyimg.addEventListener('dragstart',dragStart2);
 function dragStart2(e) {
   //e.dataTransfer.clearData();
   console.log('dragstart');
  
   e.dataTransfer.setData('text',gift2);
  console.log('e')
   
 }

}


//-------------drop start-----------


let dropTarget =document.getElementById('papehere');
var addbutton=document.getElementById('addbutton');

dropTarget.addEventListener('drop',dropped);
dropTarget.addEventListener('dragenter',function (e) {e.preventDefault();},false);
dropTarget.addEventListener('dragover' ,function (e) {e.preventDefault();},false);


function dropped(e)
{
    e.preventDefault();
    //addbutton.innerHTML=e.dataTransfer.getData('text')
    //加入文字
    let text=e.dataTransfer.getData('text');
    console.log(text);
    addbutton.innerHTML="<p> You Choose&nbsp&nbsp"+text+"!!! </p>"  ; 
   
    
    //加入禮物盒div
    let setgiftpath=document.getElementById('addbutton');
    let creategift=document.createElement("BUTTON");
   
    creategift.id='GivenGiftId';
     
     //加入圖片到button
    creategift.innerHTML='<img id="getimgID" src="../img/1.png">';

    setgiftpath.appendChild(creategift);
    
    
    
    document.getElementById('GivenGiftId').addEventListener('click',link3);
    
    function link3(){
    window.location.href="index2.html"
    }
    
  

   /*
    //取得欲加入button的位置
    let orginaldiv=document.getElementById('addbutton');
    //orginaldiv.insertBefore(newdiv,orginaldiv.childNodes[2]);
    //創建Button
    let newbutton=document.createElement("BUTTON");
    newbutton.id='newbutton';
    let textnode=document.createTextNode("submit");
    newbutton.appendChild(textnode);
    orginaldiv.appendChild(newbutton);

*/
document.getElementById('getimgID').getAttribute('draggable'); //returns the value of attr
document.getElementById('getimgID').setAttribute('draggable', 'false'); //set the value of attr  

    //set gift choose----
    localStorage.setItem("savegift",text);
} 
 

  //Link 
  document.getElementById('Reloadpage').addEventListener('click',link);
  function link(){
    window.location.href='index4.html';
  }

  document.getElementById('CardPage').addEventListener('click',link2);
  function link2(){
    window.location.href='index.html';
  }