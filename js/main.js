
document.getElementById('form1').addEventListener('submit',savebookmark);


function savebookmark(e) {
    //Get form values
var siteName=document.getElementById('siteName').value;
var siteUrl=document.getElementById('siteurl').value;

var bookmark={
    name:siteName,
    url:siteUrl

}
/*
//storage test
    localStorage.setItem('test','hello word');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));
*/


if(localStorage.getItem('bookmarks')===null){
    //initial array
    var bookmarks=[];
    //add to array
    bookmarks.push(bookmark);
    //set to LocalStorage
    // JSON.stringify 來轉換資料，產生結果如下
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    //json 建立了您的 JSON 資料，就可以非常簡單的跟其他程式溝通或交換資料，因為 JSON 就只是純文字個格式。
    //典型範例就是透過 AJAX 方式交換 JSON 資料，底下簡單舉個範例

//JSON.stringify
//When sending data to a web server, the data has to be a string.Convert a JavaScript object into a string with JSON.stringify().

//JSON.stringify
// When receiving data from a web server, the data is always a string. Parse the data with JSON.parse(), and the data becomes a JavaScript object.

} else{
    var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
}






    e.preventDefault();
}