//1.Kiem tra thuoc tinh NaN
var x = 20 / 'acbc';
console.log(isNaN(x));
//2.Lam viec voi number
//-tostring
//-to Fixed: lam tron
var y = 20.158;
console.log(y.toString());
console.log(y.toFixed(2));
// Đối tượng Number trong JavaScript
// - Trong JavaScript có một đối tượng được xây dựng sẵn tên là Number.
// - Đối tượng Number có các phương thức và thuộc tính, với việc truy cập vào các phương thức và thuộc tính đó, ta sẽ có thể làm được một số công việc như:

// Kiểm tra một giá trị nào đó có phải là số nguyên hay không.
// Kiểm tra một giá trị nào đó có phải là NaN hay không.
// Lấy số lớn nhất có thể trong JavaScript.
// ....
// - Dưới đây là danh các thuộc tính của đối tượng Number:

// Thuộc tính	Mô tả chức năng
// MAX_VALUE	Trả về số lớn nhất có thể trong JavaScript
// MIN_VALUE	Trả về số gần với số 0 nhất trong JavaScript
// POSITIVE_INFINITY	Trả về giá trị dương vô cực (Infinity)
// NEGATIVE_INFINITY	Trả về giá trị âm vô cực (-Infinity)
// - Dưới đây là danh các phương thức của đối tượng Number:

// Phương thức	Mô tả chức năng
// isFinite()	Kiểm tra xem một giá trị nào đó có phải là số hữu hạn hay không
// isInteger()	Kiểm tra xem một giá trị nào đó có phải là số nguyên hay không
// isNaN()	Kiểm tra xem một giá trị nào đó có phải là NaN hay không
// 1) Thuộc tính MAX_VALUE
// - Thuộc tính MAX_VALUE trả về số lớn nhất có thể trong JavaScript.

// Ví dụ:
// <script>
//     var a = Number.MAX_VALUE; //Biến a sẽ có giá trị là 1.7976931348623157e+308
// </script>
// Xem ví dụ
// - Lưu ý: Nếu một số nào đó lớn hơn MAX_VALUE thì nó chỉ có thể là dương vô cực (Infinity)

// 2) Thuộc tính MIN_VALUE
// - Thuộc tính MIN_VALUE trả về số gần với số 0 nhất.

// Ví dụ:
// <script>
//     var a = Number.MIN_VALUE; //Biến a sẽ có giá trị là 5e-324
// </script>
// Xem ví dụ
// - Lưu ý: Nếu một số nào đó gần với số 0 hơn MIN_VALUE thì số đó chính là số 0.

// 3) Thuộc tính POSITIVE_INFINITY
// - Thuộc tính POSITIVE_INFINITY trả về giá trị dương vô cực (Infinity)

// (Giá trị dương vô cực được xem là giá trị lớn hơn tất cả các số trong JavaScript)

// Ví dụ:
// <script>
//     var a = Number.POSITIVE_INFINITY; //Biến a sẽ có giá trị là Infinity
// </script>
// Xem ví dụ
// 4) Thuộc tính NEGATIVE_INFINITY
// - Thuộc tính NEGATIVE_INFINITY trả về giá trị âm vô cực (-Infinity)

// (Giá trị âm vô cực được xem là giá trị nhỏ hơn tất cả các số trong JavaScript)

// Ví dụ:
// <script>
//     var a = Number.NEGATIVE_INFINITY; //Biến a sẽ có giá trị là -Infinity
// </script>
// Xem ví dụ
// 5) Phương thức isFinite()
// - Phương thức isFinite() dùng để kiểm tra xem một giá trị nào đó có phải là số hữu hạn hay không.

// Nếu phải thì trả về giá trị true.
// Nếu không thì trả về giá trị false.
// Ví dụ:
// <script>
//     var a = Number.isFinite(1993); //true
//     var b = Number.isFinite(-1993); //true
//     var c = Number.isFinite(0); //true
//     var d = Number.isFinite(Infinity); //false
//     var e = Number.isFinite(-Infinity); //false
//     var f = Number.isFinite(0/0); //false
// </script>
// Xem ví dụ
// - Phương thức isFinite() của đối tượng Number khác với hàm isFinite() toàn cục:

// Hàm isFinite() toàn cục sẽ chuyển giá trị về dạng số rồi mới kiểm tra xem giá trị đó có phải là số hữu hạn hay không.
// Phương thức isFinite() của đối tượng Number thì không chuyển giá trị về dạng số, do đó sẽ không trả về true cho bất kỳ giá trị nào không thuộc kiểu dữ liệu number.
// Ví dụ:
// <script>
//     var a = Number.isFinite("1993"); //false
//     var b = isFinite("1993"); //true
// </script>
// Xem ví dụ
// 6) Phương thức isInteger()
// - Phương thức isInteger() dùng để kiểm tra xem một giá trị nào đó có phải là số nguyên hay không.

// Nếu phải thì trả về giá trị true.
// Nếu không thì trả về giá trị false.
// Ví dụ:
// <script>
//     var a = Number.isInteger(1993); //true
//     var b = Number.isInteger(-1993); //true
//     var c = Number.isInteger(1993.5); //false
//     var d = Number.isInteger("1993"); //false
//     var e = Number.isInteger(Infinity); //false
//     var f = Number.isInteger(-Infinity); //false
// </script>
// Xem ví dụ
// 7) Phương thức isNaN()
// - Phương thức isNaN() dùng để kiểm tra xem một giá trị nào đó có phải là NaN hay không.

// Nếu phải thì trả về giá trị true.
// Nếu không thì trả về giá trị false.
// Ví dụ:
// <script>
//     var a = Number.isNaN(1993) //false
//     var b = Number.isNaN(-19.93) //false
//     var c = Number.isNaN(50-20) //false
//     var d = Number.isNaN(0) //false
//     var e = Number.isNaN("1993") //false
//     var f = Number.isNaN("JavaScript") //false
//     var g = Number.isNaN("2016/03/03") //false
//     var h = Number.isNaN("") //false
//     var i = Number.isNaN(true) //false
//     var j = Number.isNaN(undefined) //false
//     var k = Number.isNaN("NaN") //false
//     var l = Number.isNaN(NaN) //true
//     var m = Number.isNaN(0 / 0) //true
// </script>
// Xem ví dụ
// - Lưu ý: Giá trị phải có kiểu dữ liệu là number, phương thức isNaN() sẽ không trả về giá trị true cho bất kỳ giá trị nào không có kiểu dữ liệu là number.