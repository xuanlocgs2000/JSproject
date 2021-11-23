var coursesApi = 'http://localhost:3000/cousers';


function start() {
    getCoursers(renderCoursers);
    handlerCreate();



}
start();

function getCoursers(callback) {
    fetch(coursesApi)
        .then(function(response) {
            return response.json();

        })
        .then(callback);

}

function renderCoursers(courses) {
    var listCoursesBlock = document.querySelector('#list-cousers');
    var htmls = courses.map(function(courses) {
        return `<li class ="course-item-${courses.id}">
            <h3 class="course-name-${courses.id}">${courses.name}</h3>
            <p class="description-name-${courses.id}">${courses.description}</p>
            <button onclick ="handleDeleteCourse(${courses.id})">Xóa</button>
            <button onclick ="updateCourse(${courses.id})">Edit</button>

            
        </li>`
    });
    listCoursesBlock.innerHTML = htmls.join('');
}

function handlerCreate() {
    var createBtn = document.querySelector('#submit');
    createBtn.onclick = function() {
        var name = document.querySelector('input[name = "name"]').value;
        var description = document.querySelector('input[name = "description"]').value;

        var formData = {
            name: name,
            description: description
        };
        createCourse(formData, function() {
            getCoursers(renderCoursers);
        });

    }
}

function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }
    fetch(coursesApi, options)
        .then(function(response) {
            response.json();

        })
        .then(callback);
}

function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
        },

    };
    fetch(coursesApi + '/' + id, options)
        .then(function(response) {
            response.json();

        })
        .then(function() {
            var courseItem = document.querySelector('.course-item-' + id);
            if (courseItem) {
                courseItem.remove();
            }
        });

}

// function updateCourse(id) {
//     var name = document.querySelector('.course-name-' + id).innerText;
//     var description = document.querySelector('.description-name-' + id).innerText;

//     var nameInput = document.querySelector('input[name="name"]').value = name;
//     var descriptionInput = document.querySelector('input[name="description"]').value = description;

//     document.querySelector('#create').style.display = 'none';
//     document.querySelector('#save').style.display = 'block';

//     document.querySelector('#save').onclick = function() {
//         var newName = document.querySelector('input[name="name"]').value;
//         var newDescription = document.querySelector('input[name="description"]').value;

//         var data = {
//             name: newName,
//             description: newDescription,
//         }
//         handleUpdateCourse(id, data, function() {
//             getCourses(renderCourses);
//         })
//     }

// }

// function handleUpdateCourse(id, data, callback) {
//     var options = {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json'
//                 // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: JSON.stringify(data)
//     }
//     fetch(courseApi + '/' + id, options)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(callback)
// }

function fnEdit(id) {
    // hiển thị dòng cần chỉnh sửa xuống 2 input
    var name = document.getElementById(id).querySelector('course-name-' + id).innerText;
    var description = document.getElementById(id).querySelector('description-name-' + id).innerText;
    document.querySelector('input[name="name"]').value = name;
    document.querySelector('input[name="description"]').value = description;
    // Đổi tên button Từ Submit → Save
    document.querySelector('#submit').innerText = 'Save';
    // đổi id của Nút Submit thành id của Save
    document.querySelector('#submit').setAttribute('id', 'save');
    // xét sự kiện onclick cho nút Save sau khi đổi
    document.querySelector('#save').setAttribute('onclick', `fnSave(${id})`);
}

function fnSave(id) {
    {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        var bodyReq = { name: `${name}`, description: `${description}` }
            //var bodyData = `{"name": "${name}", "description": "${description}"}`
        var request = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PATCH",
            body: JSON.stringify(bodyReq)
                //body: bodyData
        };
        console.log(request)
        var urlUpdate = urlData + '/' + id;
        fetch(urlUpdate, request)
            .then(function(res) {
                console.log(res);
                if (res.status === 200) {
                    // Đoạn code dùng để thêm vào sau node cuối mà không cần load lại trang;
                    // var id = '';
                    // var html = htmlList(id,name,description)
                    // var divBlock = document.querySelector('#posts-block');
                    // divBlock.insertAdjacentHTML('beforeend',html);
                    document.querySelector('input[name="name"]').value = '';
                    document.querySelector('input[name="description"]').value = '';
                    getData(handleViewData);
                    // Đổi tên button Từ Submit → Save
                    document.querySelector('#save').innerText = 'Submit';
                    // remove onclick của nút Save và đổi id của Nút Save thành id của Submit như cũ
                    document.querySelector('#save').removeAttribute('onclick');
                    document.querySelector('#save').setAttribute('id', 'submit');
                    handleCreate();
                } else
                    alert('HTTP code: ' + res.status);

            })
            .catch(function(err) {
                console.log(err);
            })
    }
}