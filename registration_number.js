var button = document.getElementById('add');
var input = document.querySelector('#regNum');
var regNumbers = document.querySelector('.regNumbers');

button.onclick = function() {

    var text = input.value;
    var li = document.createElement('li');
    li.textContent = text;

    regNumbers.appendChild(li)
}
