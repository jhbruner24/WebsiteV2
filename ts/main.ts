const time = document.getElementById('time');
const timeSecond = document.getElementById('timeSecond');
const greeting = document.getElementById('greeting');
const userName = document.getElementById('userName');
const userFocus = document.getElementById('userFocus');

function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    second = today.getSeconds();

    const amPm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}`;
    timeSecond.innerHTML = `<span>:</span>${addZero(second)}`
    setTimeout(showTime, 1000);
    
}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function setGreet() {
    let today = new Date(),
    hour = today.getHours();

    if (hour < 12) {
        document.body.style.backgroundImage = "url('img/morning.jpg')";
        greeting.textContent = 'Good Morning';
        document.body.style.backgroundSize = "cover"
    } else if (hour < 18) {
        greeting.textContent = 'Good Aftenoon';
        document.body.style.backgroundImage = "url('img/afternoon.jpg')";
        document.body.style.backgroundSize = "cover"
    } else {
        greeting.textContent = 'Good Evening';
        document.body.style.backgroundImage = "url('img/evening.jpg')";
        document.body.style.backgroundSize = "cover"
    }
}

function getName() {
    if (localStorage.getItem('userName') == null) {
        userName.textContent = '[Enter Name]';
    } else {
        userName.textContent = localStorage.getItem('userName');
    }
}

function setName(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('userName', e.target.innerText);
            userName.blur();
            console.log('1');
        }
        console.log('2');
    } else { 
        console.log('here');
        localStorage.setItem('userName', e.target.innerText);
    }
}

userName.addEventListener('keypress', setName);
userName.addEventListener('blur', setName);

showTime();
setGreet();
getName();