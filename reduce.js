var cousers = [{
            id: 1,
            name: 'JS',
            coin: 50
        },
        {
            id: 2,
            name: 'NODEJS',
            coin: 50
        }, {
            id: 3,
            name: 'reactJS',
            coin: 50
        }, {
            id: 4,
            name: 'REDUXJS',
            coin: 50
        }, {
            id: 5,
            name: 'JSX',
            coin: 50
        },
    ]
    //Bien luu tru
    //thuc hien luu tru
var i = 0;

// function coinHanler(accumulator, currentValue, currentIndex, originArray) {
//     i++;
//     var total = accumulator + currentValue.coin;
//     console.table({
//         'Luot chay': i,
//         'Bien luu tru': accumulator,
//         'Gia khoa hoc': currentValue.coin,
//         'tich tru duoc': total
//     });

//     return accumulator + currentValue.coin;
// }
//Reduce là một phương thức sẵn có được sử dụng để thực thi một hàm lên các phần tử của mảng (từ trái sang phải) với một biến tích lũy để thu về một giá trị duy nhất. Là một phương thức quan trọng hay sử dụng trong lập trình hàm.
var totalCoin = cousers.reduce(function(accumulator, currentvalue) {
    return accumulator + currentvalue.coin;

}, 0); // 0 la giatrikhoitao
var totalCoin2 = cousers.reduce((a, b) => a + b.coin, 0);
console.log(totalCoin2);
Array.prototype.reduce2 = function(callback, result) {
    let i = 0
    if (arguments.length < 2) {
        i = 1;
        result = this[0];

    }
    for (; i < this.length; i++) {
        result = callback(result, this[i], i, this)
    }
    return result
}
const numbers = [1, 2, 3, 4]
const result = numbers.reduce2((total, number) => {
    return total + number
})
console.log(result)