const form = document.querySelector(".form");
const komment = document.querySelector(".komment");
const bodyNotShow = document.querySelector("body");
const pass = 0868;
let flag = false;

for (let i = 0; i < 1; i++) {
    bodyNotShow.style.display = "none";
    const userPass = +prompt("Введите пароль");
    if (userPass != pass) {
        i--;
    }else {
        bodyNotShow.style.display = "block";
        flag = true;
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(flag) {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    console.log(day);
    const hours = date.getHours();
    const minut = date.getMinutes();

    const auditor = e.target[0].value;
    const message = e.target[1].value;
    // const pass = e.target[2].value;
        if (auditor && message && auditor.length >= 4 && message.length >= 4 ) {
            komment.innerHTML += `
        <div class="sms">
            <h3>${auditor}</h3>
            <p>${message}</p>
            <span>${year}.${month}.${day}<br>${hours}:${minut}</span>
        </div>`;
        }else if (!auditor && !messagegit ) {
            alert("Заполни поля");
        }
        else {
            alert("Поля должны быть не меньше 4 символов");
        }
        e.target.reset();
    }else {
        alert("Дозревай");
    }
}) 

const flocksOfSheep = [true, true, true, true, false, true, false, false, true, true, true, true, false];

function numberOfSheep(arr) {
    const num = []; 
    arr.forEach(item => {
        if(item) {
            num.push(item)
        }
    })
    return `${num.length} овец присутствуют`;
}

console.log(numberOfSheep(flocksOfSheep));
const myGame = document.querySelector(".game");

myGame.addEventListener("click", () => {
    function game() {
        const K = "Камень";
        const N = "Ножницы";
        const B = "Бумага";
        const playerOne = prompt('playerOne какаой твой выбор "Камень", "Ножницы", "Бумага"');
        const playerTwo = prompt('playerTwo какаой твой выбор "Камень", "Ножницы", "Бумага"');
    
        if (playerOne == K && playerTwo == N || playerOne == N && playerTwo == B || playerOne == B && playerTwo == K) {
            alert("Победил playerOne");
        }else if (playerOne == N && playerTwo == K || playerOne == B && playerTwo == N || playerOne == K && playerTwo == B) {
            alert("Победил playerTwo");
        }else if (playerOne == K && playerTwo == K || playerOne == N && playerTwo == N || playerOne == B && playerTwo == B) {
            alert("Ничья");
        }
    }
    
    game();
});

const arr = ["Привет", "Досведания", 'Hello', "Bojure", "Hello", "Hello", "Hello"];
            
const newArr = function(arr, str) {
    const list = [];
    arr.map(item => {
        if (item == str) {
            list.push(item);
        }
    });
    return list;
}
console.log(newArr(arr, "Hello"));

