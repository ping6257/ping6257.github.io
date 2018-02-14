
//-------drap start-------
//for the cookie1

let dragSource_giftone =document.getElementById('cookie_1');

dragSource_giftone.addEventListener('dragstart',dragStart1);


function dragStart1(e){

    let gift1='姊姊選了~原味海鹽餅乾!';//'<img src="img/cookie_milk.jpg">';
     console.log('dragstart');

  e.dataTransfer.setData('text',gift1);//setData('text/plain',gift1);

}

//for the cookie2
let dragSource_gifttwo =document.getElementById('cookie_2');

dragSource_gifttwo.addEventListener('dragstart',dragStart2);


function dragStart2(e){

    let gift2='hi';//<img src="img/cookie_honey.jpg
    console.log('dragstart');
    e.dataTransfer.setData('text',gift2);

}

//-------------drop start-----------


let dropTarget =document.getElementById('put_thegifthere');
let addbutton=document.getElementById('addbutton');

dropTarget.addEventListener('drop',dropped);
dropTarget.addEventListener('dragenter',function (e) {e.preventDefault();},false);
dropTarget.addEventListener('dragover' ,function (e) {e.preventDefault();},false);


function dropped(e)
{
    //條件選擇
    e.preventDefault();

    console.log('dropped');
    //addbutton.innerHTML=e.dataTransfer.getData('text');

    let text=e.dataTransfer.getData('text');

    addbutton.innerHTML="姊姊選了:     ";

    //取得欲加入button的位置
    let orginaldiv=document.getElementById('addbutton');
    //orginaldiv.insertBefore(newdiv,orginaldiv.childNodes[2]);
    //創建Button
    let newbutton=document.createElement("BUTTON");
    newbutton.id='newbutton';
    let textnode=document.createTextNode(text);
    newbutton.appendChild(textnode);
    orginaldiv.appendChild(newbutton);




    //button click
    document.getElementById('newbutton').addEventListener("click",function () {
        window.location.href="index2.html";


    })


    /*

    let creatbutton=document.getElementById('addbutton');
    creatbutton.innerHTML='<button></button>';
    creatbutton.id='button_type';
    document.getElementById('button_type').style.backgroundColor='red';
*/

    //let creatbutton=document.getElementById('addbutton');



}




/*
//----------onmouseiopen--------------////
let openthegift=()=>{

};

//----------change background-img--------////////

*/