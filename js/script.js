const cursor = document.getElementById('cursor');
const main = document.querySelector('html');

const myName = document.querySelector('#myName');
let content = myName.innerHTML;
// au debut le nom disparait
myName.innerHTML = " ";

let index = 0;

let timer = setInterval(function () {
    if(index < content.length) {
        myName.innerHTML += content.charAt(index);
        index++;
    } else {
        // arreter le setInterval
        clearInterval(timer);
    }
}, 100)

// Effet point qui suit le curseur
main.addEventListener("mousemove", function (value) {
    cursor.style.left = value.x -8 + "px";
    cursor.style.top = value.y - 8 + "px";
});

