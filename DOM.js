//DOM: DOCCUMENT OBJECT MODEL -mô hình tài liệu đối tượng
//Có 3 thành phần: 
//1.element :ID, class.tag, CSS selector, HTML collection
//2.atribute
//3.text

let boxHTMLCollection = document.getElementsByClassName("box");
let box1Element = document.querySelector(".box");
let box2Element = document.querySelector(".box:nth-child(2)");
let allItemElements = document.getElementsByTagName("li");
let box1ItemElements = document.querySelectorAll(".container .box:first-child li");
let box2ItemElements = document.querySelectorAll(".container .box:nth-child(2) li");
var h1Element = document.querySelector('h1');
var h2Element = document.querySelector('section h2');
var h3Element = document.querySelector('div>h3');

// Làm bài tập tại đây
var checkboxNodes = document.getElementsByTagName('input');
var checkbox1Nodes = document.getElementsByTagName('input')[0];
var checkboxCheckedAndNotDisabled = document.getElementsByTagName('input')[1];
var checkboxDisabledAndNotChecked = document.getElementsByTagName('input')[2];
var checkboxCheckedAndDisabled = document.getElementsByTagName('input')[3];


// Làm bài tập tại đây
let checkboxNodes = document.querySelectorAll('input[type="checkbox"]');
let checkbox1Element = document.querySelector('input[type="checkbox"][value="1"]');
let checkboxCheckedAndNotDisabled = document.querySelector('[checked]:not([disabled])');
let checkboxDisabledAndNotChecked = document.querySelector('[disabled]:not([checked])');
let checkboxCheckedAndDisabled = document.querySelector('[disabled][checked]');

let listItems1 = document.querySelectorAll(".parent > li");
let listItems2 = document.querySelectorAll('.parent > ul > li');
let listItems3 = document.querySelectorAll(".parent > li, .parent > ul > li");