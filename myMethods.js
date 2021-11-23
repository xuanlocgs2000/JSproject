var courses = [
        'javascipt',
        'PHP',
        'Ruby'
    ]
    // courses.forEach(function(course, index, array) {// chi quan tam phan tu thuc,khong quan tam empty element
    //     console.log(course, index, array);

// });
//forEach
Array.prototype.forEach2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this)

        }
    }

}
courses.forEach2(function(course, index, array) { // chi quan tam phan tu thuc,khong quan tam empty element
    console.log(course, index, array);

});
//FILTER
var course2 = [{
        name: 'JS',
        coin: 680
    },
    {
        name: 'PHP',
        coin: 800
    },
    {
        name: 'Ruby',
        coin: 980
    }

];
Array.prototype.filter2 = function(callback) {
    var output = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this)
            if (result) {
                output.push(this[index])
            }
        }
    }
    return output;

}
var filterCourses = course2.filter2(function(course, index, array) {
    return course.coin > 700;

});
console.log(filterCourses);
//some 
var course3 = [{
        name: 'JS',
        coin: 680,
        isFinish: false

    },
    {
        name: 'PHP',
        coin: 800,
        isFinish: false
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: false
    }

];
Array.prototype.some2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this)) {
                return true;
            }
        }
    }
    return false;
}
var result = course3.some2(function(course, index, array) {
    return course.isFinish;
});
console.log(result);
//EVERY  : true / false
Array.prototype.every2 = function(callback) {
    var output = true;
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (!result) {
                output = false;
                break;
            }
        }
    }
    return output;
}
var result1 = course3.every2(function(course, index, array) {
    return course.coin > 900;

});
console.log(result1);