//Kiem tra array
console.log(Array.isArray(new Array))
    //Lam viec voi mang
var arr = ['gs', 'gv', 'nb'];
//1. toString
//2. Join : ngan cach phan tu bang ki tu
console.log(arr.join("-"));
//3. Pop: xoa phan tu cuoi mang,tra lai chinh phan tu da xoa
console.log(arr.pop()); // mang trong tra ve undefined

console.log(arr);
//4.push: them phan tu vao cuoi mang,tra ve do dai moi cua mang
console.log(arr.push('HN', 'BG'));
console.log(arr);
//5.shift :xoa phan tu dau mang><pop
console.log(arr.shift());
console.log(arr);
//6. unshift :them 1 hoac nhieu pha tu vao dau mang
console.log(arr.unshift("GL"));
console.log(arr);
//.splicing :xoa element bat ki trong mang,chen element
//xoa
arr.splice(1, 3) //tu vi tri 1  dat con tro xoa 3 phan tu
console.log(arr);
//chen vao mang 
arr.splice(1, 0, 'HOALU') //* khong duoc de so phan tu xoa khac 0
console.log(arr);
//8. concat : noi array
var arr2 = ['hcm', 'bd'];
console.log(arr.concat(arr2));
//9. Slicing: cat element cua mang
console.log(arr.slice(1, 2)); // cat tu vi tri so 1 den so 2
console.log(arr.slice(0)); // copy mang,truyen so am de lay cuoi mang
console.log(arr.slice(-2));