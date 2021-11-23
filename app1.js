var urlData = 'http://localhost:3000/cousers';

// function chính
// 1. Get được Data
// 2. Xử lý Data để hiển thị trên HTML
// 3. Thực hiện Tạo Data lưu vào trong DB và load lên HTML

function start() {
    getData(handleViewData);
    handleCreate();
}

// bắt đầu chạy
start();


// Các function xử lý
function getData(callback) {
    fetch(urlData)
        .then(function(res) {
            return res.json();
        })
        .then(callback);
}
//function render list data sử dụng nhiều lần
function htmlList(id, name, description) {
    return `<ul id ="${id}"> 
    <li> ${name} </li> 
    <h4> ${description} </h4>
    <button onclick="fnEdit(${id})">Edit</button>
    <button onclick="fnDelete(${id})">Delete</button>
</ul>`
}

function handleViewData(datas) {
    var divBlock = document.querySelector('#posts-block');
    var html = datas.map(function(data) {
        return htmlList(data.id, data.name, data.description)
    })
    divBlock.innerHTML = html.join('');
}

function handleCreate() {
    var btnSubmit = document.querySelector('#submit');
    btnSubmit.onclick = function() {
        var name = document.querySelector('input[name="Name"]').value;
        var description = document.querySelector('input[name="Description"]').value;
        var bodyReq = { name: `${name}`, description: `${description}` }
            //var bodyData = `{"name": "${name}", "description": "${description}"}`
        var request = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(bodyReq)
                //body: bodyData
        };
        console.log(request)
        fetch(urlData, request)
            .then(function(res) {
                console.log(res);
                if (res.status === 201) {
                    // Đoạn code dùng để thêm vào sau node cuối mà không cần load lại trang;
                    // var id = '';
                    // var html = htmlList(id,name,description)
                    // var divBlock = document.querySelector('#posts-block');
                    // divBlock.insertAdjacentHTML('beforeend',html);
                    document.querySelector('input[name="Name"]').value = '';
                    document.querySelector('input[name="Description"]').value = '';
                    getData(handleViewData);
                } else
                    alert('HTTP code: ' + res.status);

            })
            .catch(function(err) {
                console.log(err);
            })
    }
}

function fnDelete(id) {
    var requestHeader = {
        headers: {
            'Accept': 'application/json',
        },
        method: 'DELETE'
    };
    var urlDelete = urlData + '/' + id;
    fetch(urlDelete, requestHeader)
        .then(function(res) {
            alert('Xóa thành công ! HTTP code: ' + res.status);
            getData(handleViewData);
        })
}

function fnEdit(id) {
    // hiển thị dòng cần chỉnh sửa xuống 2 input
    var name = document.getElementById(id).querySelector('li').innerText;
    var description = document.getElementById(id).querySelector('h4').innerText;
    document.querySelector('input[name="Name"]').value = name;
    document.querySelector('input[name="Description"]').value = description;
    // Đổi tên button Từ Submit → Save
    document.querySelector('#submit').innerText = 'Save';
    // đổi id của Nút Submit thành id của Save
    document.querySelector('#submit').setAttribute('id', 'save');
    // xét sự kiện onclick cho nút Save sau khi đổi
    document.querySelector('#save').setAttribute('onclick', `fnSave(${id})`);
}

function fnSave(id) {
    {
        var name = document.querySelector('input[name="Name"]').value;
        var description = document.querySelector('input[name="Description"]').value;
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
                    document.querySelector('input[name="Name"]').value = '';
                    document.querySelector('input[name="Description"]').value = '';
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