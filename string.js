// 1.length
// 2.Find index
var mystring = '        hoc vien ki thua mat ma nxl gsnb nxl';
console.log(mystring.indexOf('nxl', 28));
console.log(mystring.lastIndexOf('nxl'));
console.log(mystring.search('nxl')); //khong the tim sau vi tri
//3.cut string : slice
console.log(mystring.slice(4, 6)); //cat phai sang trai,trai sang phai la so am
//4.reaplace 
console.log(mystring.replace('nxl', 'NXL'));
console.log(mystring.replace(/nxl/g, 'NXL')); //thay toan bo dung bieu thuc chinh quy
//5.Convert to UPER case + LOWER case
console.log(mystring.toUpperCase());
//6.trim :loai bo khoang trang thua
console.log(mystring.trim());
console.log(mystring.trim().length);
//7.Split tach chuoi nhu 1 arr
var ds = 'js, php, java,golang';
console.log(ds.split(', '));
console.log(ds.split('')); // cat tung ki tu
//8.lay 1 ki tu 
const mstr = 'xuan loc';
console.log(mstr.charAt(2));
console.log(mstr[3]);

function run(commentText) {
    var commentText = 'hi';
    var textLength = commentText.length;
    return textLength;
}