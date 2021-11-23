// ArrayMethods :
// forEach(); duyệt qua từng phần tử của mảng
// every(); kiểm tra tất cả phần tử của mảng phải thỏa mãn điều kiênk
//trả về boolean 
//some() ngược lại với every(),trả lại phần tử duyệt qua,  chỉ cần 1 phần tử  trong mảng thỏa mãn
// find() tìm kiếm trả về chỉ 1 phần tử hoặc null undefine
//filter() tìm kiếm trả về tất cả phần tử hoặc null undefine thỏa mãn đkien
//map() thay đổi element của array trả về mảng mới,lặp qua từng phần tử và gọi function
//reduce() nhận về giá trị duy nhất
object1 = [{
    name: 'loc',
    id: 2,
    hs: 12

}]
var find = object1.find(function(find, index) {
    return find.name === "loc"

})
console.log(find);
var newObject = object1.map(function() {

});
// 21. Function
// 21.1:
//     Tạo hàm showMessage
// Trong hàm vừa tạo, thêm alert('Học JS tại F8');
// Gọi tới hàm vừa tạo

// // Làm bài tập tại đây

// function showMessage() {
//     alert('Học JS tại F8');
// }
// 21.2:
//     Tạo hàm showLog
// Thêm mã console.log('Học JS tại F8!');
// vào nội dung của hàm
// Gọi tới hàm vừa định nghĩa
// Gọi tới hàm vừa định nghĩa một lần nữa
// // Làm bài tập tại đây

// function showLog() {
//     console.log('Học JS tại F8!');
// }

// showLog();
// showLog();
// 22. Tham số trong
// function
// 22.1:
// Tạo hàm showMessage và định nghĩa tham số message cho hàm này
// Trong cặp {}
// của hàm vừa tạo thêm mã sau: alert(message);
// Gọi hàm showMessage và truyền đối số cho tham số message là một chuỗi bất kì

// // Làm bài tập tại đây

// function showMessage(message) {
//     alert(message);
// }
// showMessage('thng811')
// 22.2:
//     Tạo hàm writeLog, định nghĩa 2 tham số là prefix và message
// Thêm vào trong cặp {}
// của hàm nội dung: console.log(prefix + ': ' + message);
// Gọi hàm writeLog và truyền đối số cho hai tham số đã định nghĩa phía trên với nội dung là các chuỗi tùy ý.
//     // Làm bài tập tại đây

// function writeLog(prefix, message) {
//     console.log(prefix + ': ' + message);
// }

// writeLog('prepare', 'thng811')
// 23. Return trong
// function
// 23.1:
// Tạo hàm tính tổng hai số a và b:
//     Tạo hàm sum và định nghĩa hai tham số a và b
// Trong trường hợp giá trị của a và b hợp lệ để thực hiện phép tính thì
// return tổng của a và b
// Trường hợp a và b không hợp lệ để thực hiện phép tính thì
// return false
//     // Làm bài tập tại đây
// function sum(a, b) {
//     if (Number.isInteger(a) && Number.isInteger(b)) {
//         return a + b;
//     } else
//         return false;
// }
// 24. Hiểu hơn về
// function
// 24.1:
// Tạo hàm checkPositiveInteger có tham số là number, hàm này dùng để kiểm tra một số có phải là số nguyên dương hay không.
// Nếu number là số nguyên dương hàm sẽ
// return true
// Nếu number không phải số nguyên dương hàm sẽ
// return false
//     // Làm bài tập tại đây

// function checkPositiveInteger(number) {
//     if (number > 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// 24.2:
//     Viết hàm calculateTriangleArea để tính diện tích tam giác.
// Hàm này nhận hai tham số là a(cạnh đáy), h(chiều cao) và hàm sẽ trả về giá trị là diện tích của tam giác
// được tính từ hai tham số đã cho.
// a và h sẽ được truyền các giá trị số nguyên bất kì từ hệ thống test
// case .
// // Làm bài tập tại đây

// function calculateTriangleArea(a, h) {
//     if (a > 0 && h > 0) {
//         return (a * h) / 2;
//     } else {
//         return false;
//     }
// }
// 24.3:
//     Viết hàm kiểm tra một chuỗi có nằm trong một chuỗi khác hay không.
//     Đặt tên hàm này là stringInString, hàm có hai tham số lần lượt là needle(chuỗi muốn tìm)
//     và haystack(chuỗi gốc, giá trị của needle sẽ được tìm xem có tồn tại trong haystack hay không)
//     Tạo hàm stringInString theo mô tả trên
//     Nếu needle được tìm thấy trong haystack hàm sẽ trả về true
//     Nếu không tìm thấy needle trong haystack hàm sẽ trả về false
//     Nếu một trong các giá trị đầu vào không phải chuỗi hàm sẽ trả về false
//     // Làm bài tập tại đây
//     function stringInString(needle, haystack) {
//         if (typeof needle === 'string' && typeof haystack === 'string') {
//             if (haystack.indexOf(needle) != -1) {
//                 return true;
//             } else {
//                 return false;
//             }
//         } else {
//             return false;
//         }
//     }
// 25. Làm việc mới mảng - Phần 2
//   25.1:
//     Cho trước hàm getRequestBodyFromValues và tham số formValues, 
//     các test case sẽ gọi hàm này và truyền đối số có định dạng tương tự như sau:
//             [
//                 { field: 'name', value: 'Sơn Đặng' },
//                 { field: 'age', value: 18 },
//                 { field: 'address', value: 'Hà Nội' },
//                 // ...
//              ]
//     Như các bạn thấy, formValues là một mảng có thể chứa nhiều objects. Mỗi object chứa 2 keys là field và value.

//     Yêu cầu:Từ array formValues đã cho, hãy trả về một object có các keys tương ứng với các fields 
//             của các objects nằm trong array formValues.

//           // Làm bài tập tại đây
//       function getRequestBodyFromValues(formValues) {
//           return formValues.reduce((result, item) => {
//               result[item.field] = item.value;
//               return result;
//           }, {});
//       }
//    25.2:
//     Cho trước hàm checkPositiveNumbers có tham số numbers sẽ nhận một mảng gồm các phần tử là những số bất kì. 
//     Hàm này được tạo ra với mục đích kiểm tra toàn bộ các chữ số trong mảng numbers có phải là số dương hay không.
//           Nếu toàn bộ phần tử trong mảng numbers là số dương hàm sẽ trả về true
//           Nếu một trong các phần tử của mảng numbers không phải số dương hàm sẽ trả về false

//     // Làm bài tập tại đây
//           function checkPositiveNumbers(numbers) {
//               let a = numbers.every(function(x) {
//                   return x > 0;
//               })
//               return a;
//           }
//    25.3:
//     Cho hàm hasFreeCourses để kiểm tra một danh sách khóa học có khóa học nào miễn phí hay không.
//     Cho biến courses là tham số của hàm trên, biến này là một array chứa nhiều object đại diện cho khóa học có định dạng như sau:
//             [
//                 { name: 'Javascript', vnd: 1000000 },
//                 { name: 'PHP', vnd: 990000 },
//                 { name: 'HTML, CSS', vnd: 0 }
//                 // ...
//             ]
//     Yêu cầu:
//         Hàm hasFreeCourses sẽ trả về true nếu đối số truyền vào có chứa khóa học miễn phí
//         Hàm hasFreeCourses sẽ trả về false nếu đối số truyền vào không chứa khóa học miễn phí
//       // Làm bài tập tại đây
//         function hasFreeCourses(courses) {
//             let a = courses.some(function(x) {
//                 return x.vnd === 0;
//             });
//             return a;
//         }
//   25.4:
//     Cho trước biến monsters là một danh sách các con thú trong game có định dạng như sau:
//           [
//               {
//                   name: 'Cá heo',
//                   attack: 50,
//                   speed: 100,
//                   hitpoint: 100,
//               },
//               {
//                   name: 'Khủng long',
//                   attack: 150,
//                   speed: 80,
//                   hitpoint: 180,
//               },
//               // ...
//           ]
//     Yêu cầu: 
//           Tìm thú có chỉ số attack bằng 150 và trả về thú đó trong hàm findAMonsterByAttack đã cho trước
//           Trường hợp trong danh sách monsters không có thú phù hợp thì hàm findAMonsterByAttack trả về null
//     // Làm bài tập tại đây
//           function findAMonsterByAttack(monsters) {
//               return monsters.find((monster, index) => {
//                   return monster.attack == 150;
//               }) || null
//           }
//   25.5:
//     Cho trước hàm findStringsInArrayByKeyword và tham số thứ nhất có tên keyword sẽ là một chuỗi bất kỳ.
//     Tham số thứ hai có tên strings sẽ là một array chứa các chuỗi bất kì, array này có định dạng như sau:
//         ['hi', 'abc', 'chuỗi', '123']
//     Yêu cầu
//           Trong hàm cho trước, hãy trả về một array mới gồm các phần tử trong array strings có chứa giá trị của biến keyword. 
//           Trường hợp không có phần tử phù hợp trả về mảng rỗng.
//   // Làm bài tập tại đây
//           function findStringsInArrayByKeyword(keyword, strings) {
//             return strings.filter(function(x) {
//               if (x.includes(keyword)) {
//                 return x;
//               }
//             })
//           }
//   25.6:
//   Tại bài tập này chúng ta sẽ cùng nhau tạo hàm findEqualValues để tìm ra các giá trị bằng nhau giữa hai array.
//     Yêu cầu
//       - Tạo hàm findEqualValues có hai tham số là array1 và array2 
//             (Hai tham số này sẽ được test case tại F8 truyền đối số là các array chứa nhiều các giá trị số hoặc chuỗi bất kì).
//       - Trường hợp array1 và array2 có các giá trị bằng nhau thì hàm findEqualValues sẽ trả về mảng mới 
//             chứa các giá trị đó (mỗi giá trị là một phần tử trong array mới)
//       - Trường hợp không có giá trị bằng nhau giữa hai tham số thì hàm trả về array rỗng []
//       // Làm bài tập tại đây

//         function findEqualValues(array1, array2){
//             return array1.filter(function(num) {
//                 return array2.includes(num);
//             })
//         }
// 26. Array map() method
//   26.1:
//     Cho trước hàm convertToBoolean có tham số inputs là một array gồm các phần tử có giá trị bất kì. Ví dụ:
//           [1, 'hi', false, 8, undefined, '', NaN]
//     Yêu cầu:
//       Hãy xử lý để hàm trên trả về một mảng mới gồm các phần tử được chuyển đổi sang kiểu dữ liệu boolean.
//   // Làm bài tập tại đây
//           function convertToBoolean(inputs) {
//               return inputs.map(function(x) {
//                 if(x) {
//                   return true;
//                 }
//                 else {
//                   return false;
//                 }
//               })
//           }
//   26.2:
//     Cho trước biến inputs là một array gồm các phần tử là các chữ số bất kì. 
//     Trong hàm run, hãy trả về array mới từ array inputs đã cho với giá trị các phần tử có giá trị x 3 lần.
//   // Làm bài tập tại đây
//         function run(inputs) {
//           return inputs.map(function(x) {
//             return x*3;
//           })
//         }
//   26.3: 
//   Cho trước hàm convertToNumber và tham số strings là một mảng gồm nhiều chuỗi chữa các số tương tự như sau:
//         ['1', '6', '2', '8']
// Yêu cầu:
//         Dựa vào kiến thức đã học hãy xử lý để hàm convertToNumber trả về một array mới từ array strings, 
//         các phần tử trong array trả về được chuyển đổi sang kiểu dữ liệu number.
//   // Làm việc tại đây
//           function convertToNumber(inputs) {
//             return inputs.map(function(x) {
//               return Number(x);
//             })
//           }
//   26.4:
//     Cho trước hàm convertToString và tham số numbers là một mảng gồm nhiều các số tương tự như sau:
//         [1, 20, -8, 0, 16]
//     Yêu cầu:
//       Dựa vào kiến thức đã học hãy xử lý để hàm convertToString trả về một array mới từ array numbers, 
//       các phần tử trong array trả về được chuyển đổi sang kiểu dữ liệu string.
//   // Làm bài tập tại đây
//         function convertToString(inputs) {
//           return inputs.map(function(x) {
//             return x.toString();
//           })
//         }
// 27. Array reduce() method
//   27.1:
//     Cho biến numbers là một mảng chứa các giá trị số bất kì. 
//     Trong hàm cho trước, hãy trả về tổng của toàn bộ giá trị của các phần tử trong mảng numbers
//     // Làm bài tập tại đây
//           function sum(numbers) {
//               return numbers.reduce(function(a, b) {
//                   return a + b;
//               }, 0)
//           }
//   27.2:
//   Cho biến inputs là một mảng chứa các giá trị có thể là bất kì kiểu dữ liệu nào. 
//   Trong hàm cho trước, hãy trả về tổng của toàn bộ giá trị số hợp lệ của các phần tử trong mảng inputs
//   // Làm bài tập tại đây
//           function sumNumbers(inputs) {
//               let filterArray = inputs.filter(element => Number(element));
//               return filterArray.reduce((a, b) => 
//               (a + b));
//           }
// 28. Ví dụ Array reduce() method
//   Cho trước biến courses có định dạng như sau:
//     [
//         { name: 'Javascript', coin: 1000 },
//         { name: 'PHP', coin: 1200 },
//         { name: 'Dart', coin: 1400 }
//     ]
//   Yêu cầu:
//   Trả về tổng coin của toàn bộ các khóa học
//   // Làm bài tập tại đây
//         function run(courses) {
//             return courses.reduce(function(a, b) {
//                 return a + b.coin;
//             }, 0)
//         }
// 29. Lệnh rẻ nhánh If else
//   Cho trước biến number có giá trị số ngẫu nhiên trong các số sau: 3, 5, 15
//     Yêu cầu
//       Nếu number chia hết cho 3 thì trả về chuỗi f
//       Nếu number chia hết cho 5 thì trả về số 8
//       Nếu number chia hết cho 15 thì trả về chuỗi f8
//   // Làm bài tập tại đây
//           function run(number) {
//           if (number % 15 === 0) {
//             return 'f8';
//           }
//           else if (number % 5 === 0) {
//             return 8;
//           }
//           else {
//             return 'f';
//           }
//         }