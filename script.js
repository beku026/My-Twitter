const form = document.querySelector(".form");
const komment = document.querySelector(".komment");
const pass = 0868;
let flag = false;
const userPass = +prompt("Введите пароль");

if (userPass === pass) {
    flag = true;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(flag) {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDay();
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
        }else if (!auditor && !message) {
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
const arr = ["sfsf", "agsr", 'ger', "agsr", "agsr",]
            
function isAdult(arr, str) {
    arr.map(item => {
        if (item == str) {
            console.log(item);
        }
    });
}
isAdult(arr, "agsr");