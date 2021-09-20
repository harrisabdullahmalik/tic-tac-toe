document.addEventListener('DOMContentLoaded', main)

function main() {
    let player = 1;

    let divs = document.getElementsByClassName('col-4');
    
    for (let div of divs) {
        div.onclick = () => {
            if (player == 1) {
                div.innerText = 'X';
                player = 2;
            } 
            else {
                div.innerHTML = '0';
                player = 1;
            }
        };
    }
}