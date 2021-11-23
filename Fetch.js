var postApi = 'http://localhost:3000/cousers';
fetch(postApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(posts) {
        var htmls = posts.map(function(post) {
            return `<li>
            <p>${post.id}</p>
            <h2>${post.name}</h2>
            <p>${post.description}</p></li>`;

        });
        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;
    })
    .catch(function(err) {
        console.log('ERR');
    })

// view

var couserApi = 'http://localhost:3000/cousers';


function start() {
    getCousers(function(cousers) { //getCousers(renderCousers)
        renderCousers(cousers)
    });


}
start();
// function
function getCousers(callback) {
    fetch(couserApi)
        .then(function(response) {
            return response.json();

        })
        .then(callback);
    // .then(function (response) {

    // })

}

function renderCousers(cousers) {
    var listCousersBlock = document.querySelector('#list-cousers');
    var htmls = cousers.map(function(cousers) {
        return `<li>
            <h3>${cousers.name}</h3>
            <p>${cousers.description}</p>
        </li>`
    });
    var html = htmls.join('');
    listCousersBlock.innerHTML = html;

}