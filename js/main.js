


document.getElementById('buttonclick').addEventListener('click',buttonclick);

function buttonclick() {

  let deg = -90;

  document.getElementById('card_mid').style.transform='rotateY('+deg+'deg)';


}


document.getElementById('closebutton').addEventListener('click',closebutton);

function closebutton() {

    let deg = 0;

    document.getElementById('card_mid').style.transform='rotateY('+deg+'deg)';


}





