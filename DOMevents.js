// DOM events
//1.Attribute events
//2.Assign event using the element node
//ex:
//1.Input /select
//2.Key up /down
//events
//1. preventDefault : bỏ đi hành vi mặc định của trang trên thẻ HTML
//2. stopPropagation :

//EVENT LISTENER : xử lí nhiều việc khi 1 event xảy ra ,lắng nghe ,hủy bỏ listener
var inputElement =
    document.querySelector('input[type ="text"]');
inputElement.oninput = function(e) { // oninput : lay du lieu ngay lap tuc
    console.log(e.target.value);
}
var inputElement2 =
    document.querySelector('input[type ="checkbox"]');
inputElement2.onchange = function(e) { // oninput : lay du lieu ngay lap tuc
    console.log(e.target.checked);
}
var inputElement3 =
    document.querySelector('select');
inputElement3.onchange = function(e) { // oninput : lay du lieu ngay lap tuc
    console.log(e.target.value);
}
document.onkeydown = function(e) { // nhan biet phim nhan : onkeydown : nhan dl khi di phim xuong
    //onkeyup:nhac len
    //onkeypress  : nhan va giu
    switch (e.which) {
        case 27:
            console.log('EXIT');
            break;
        case 13:
            console.log("SEND CHAT");
            break;
    }
}