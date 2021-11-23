// Làm bài tập tại đây

var f8LinkElement = document.getElementsByTagName('a')[0];
var f8ShortLink = f8LinkElement.getAttribute('href');
document.getElementsByTagName('a')[1].href = f8ShortLink;
var dat = document.querySelector('div');
dat.setAttribute('data-url', f8ShortLink)
    //innerText : tra ve nhung gi nhin thay
    //TextContent : tra ve nhung gif torng textnote