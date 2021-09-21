document.addEventListener('DOMContentLoaded', main)

function horizontal(value) {
    let arr = [];

    for (let i = 0; i < 3; i++) {
        arr.push(value + (i));
    }

    return arr;
}

function vertical(value) {
    let arr = [];

    for (let i = 0; i < 3; i++) {
        arr.push(value + (i * 3));
    }

    return arr;
}

function main() {
    let player = Math.ceil(Math.random() * 2); // User = 1 & Comp = 2

    let divs = document.getElementsByClassName('col-4');
    
    for (let div of divs) {
        div.onclick = () => {
            if (div.classList.contains('clicked')) {
                alert('Already clicked');
            }
            else {
                if (player == 1) {
                    div.innerText = 'X';
                    div.classList.add('clicked');
                    player = 2;
                } 
                else {
                    div.innerHTML = '0';
                    div.classList.add('clicked');
                    player = 1;
                }
            }
        };
    }

    console.log(horizontal(0));
    console.log(horizontal(3));
    console.log(horizontal(6));
    console.log(vertical(0));
    console.log(vertical(1));
    console.log(vertical(2));
}