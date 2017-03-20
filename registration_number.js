var button = document.getElementById('add');
var input = document.querySelector('#regNum');
var regNumbers = document.querySelector('.regNumbers');
var province = document.querySelector('#province');

button.onclick = function() {
if (input.value.length !== 0) {
    var text = input.value;
    var li = document.createElement('li');
    li.textContent = text;

    regNumbers.appendChild(li)
}
}
province.addEventListener('change', function(e) {
    var allRegnum = document.querySelectorAll('li');

    for (var i = 0; i < allRegnum.length; i++) {
        if (e.target.value === 'ALL') {

            allRegnum[i].style.display = 'block'
        } else if (allRegnum[i].innerHTML.startsWith(e.target.value)) {

            allRegnum[i].style.display = 'block';
        } else {
            allRegnum[i].style.display = 'none';
        }
    }
})
