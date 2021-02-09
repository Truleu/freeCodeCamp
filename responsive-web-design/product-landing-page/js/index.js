let plus = document.getElementById('counter'), count = 0;
let button = document.getElementsByClassName('btn');

button[0].onclick = function() {
    count += 1;
    plus.innerHTML = count;
}

button[1].onclick = function() {
    count += 1;
    plus.innerHTML = count;
}

button[2].onclick = function() {
    count += 1;
    plus.innerHTML = count;
}
