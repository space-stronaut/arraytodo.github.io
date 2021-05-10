// defining array
let todo = [];

// defining input function
function input() {

    $('.array').html('');

    todo.push($('#todo-input').val());

    $('#todo-input').val('');

    for (let i = 0; i  < todo.length; i++) {
        let append = $('.array').append(`<h1 class="todo-array">${todo[i]}</h1>`);

        let head = document.querySelectorAll('.todo-array');

        head.forEach(e => {
            if (e.textContent == todo[i]) {
                e.addEventListener('click', function() {
                    delete todo[i];
                    e.classList.add('delete')
                })
            }
            else if(e.textContent === "undefined"){
                e.classList.add('delete')
            }
        })
    }
}

// declare button onclick
$('#button-input').click(function () { 
    input()
});

// declare input onkeyup
$('#todo-input').keyup(function (e) { 
    if (e.keyCode == 13) {
        input()
    }
});
