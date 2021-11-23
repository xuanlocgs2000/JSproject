// 1.EVENT listener
//2. JSON : 
//Là một định dạng dữ liệu(chuỗi)- JS Object Notation
// Thể hiện dạng dữ liệu : Number,String, Boolean, Null, Array, Object
// 2 thao tác : mã hóa-Encode / giải mã - decode
//Stringify-chuyển đổi từ JS type ->JSON / Parse- về nguyên dạng

//3.Promise:
//Sync /Async
//setTimeout,setInerval ,fetch, XMLHttpRequest, File reading, request animation frame : ASYNC
var promise = new Promise(
    //Executor: thuc thi
    function(resolve, reject) {
        //Logic
        //Thành công : resolve();
        //Thất bại : reject();
        resolve();

    }
);
//3 trạng thái 
// -pending:chờ thành công or thất bại, gây rò rỉ bộ nhớ
// - fulfilled : thành công
// - reject : thất bại

promise
    .then(function() { //thành công
        console.log('Success');
    })
    .catch(function() { //thất bại bắt lỗi
        console.log('Fail');
    })
    .finally(function() {
        console.log('Done');
    })