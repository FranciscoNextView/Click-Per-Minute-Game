let clickCount = 0;
let clickCount2 = 0;
let startTime;
let endTime;
let timerInterval;
let selectedTime = 10;

document.getElementById('timerselect').addEventListener('change', function(){
    console.log('select'); 
    selectedTime = parseInt(this.value);
    document.getElementById('timer').innerText = `Time: ${selectedTime}s`;
});

document.getElementById('timerselect2').addEventListener('change', function(){
    console.log('select'); 
    selectedTime = parseInt(this.value);
    document.getElementById('timer').innerText = `Time: ${selectedTime}s`;
});

function handleClick() {
    if (!startTime) {
        startTime = Date.now();
        updateTimer();
        timerInterval = setInterval(updateTimer, 1000);
    }

    clickCount++;
    updateClickCounter();
}

function updateClickCounter() {
    document.getElementById('clickCounter').innerText = `${clickCount} clicks`;
}


function updateTimer() {
    const currentTime = Math.floor((Date.now() - startTime) / 1000);
    const remainingTime = selectedTime - currentTime;

    if (remainingTime <= 0) {
        clearInterval(timerInterval);
        endTime = Date.now();
        const elapsedTimeInSeconds = (endTime - startTime) / 1000;
        const cpm = Math.round((clickCount / elapsedTimeInSeconds) * 60);
        const cps = (clickCount / elapsedTimeInSeconds).toFixed(2);
        document.getElementById('timer').innerText = 'Time\'s up!';
        document.getElementById('clickText2').innerText = `CPM: ${cpm}`;
        document.getElementById('clickText3').innerText = `CPS: ${cps}`;
        document.getElementById('clickArea').style.display = 'none';
        document.getElementById('clickArea').style.cursor = 'default';
        document.getElementById('divrestart').style.display = '';
    } else {
        document.getElementById('timer').innerText = `Time: ${remainingTime}s`;
    }
}


function restartGame(){
    location.href = location.href;
}



// Define Mobile ou desk functions

function menu(){
    const isMobile = window.innerWidth < 1000;
    const singlePlayer = document.getElementById('singlePlayer');
    const multiPlayer = document.getElementById('multiPlayer');
    const menu = document.getElementById('menu');
    if(isMobile){
        $(menu).show();
    }else{
        $(singlePlayer).show();
    }
}


function start(id){
    const singlePlayer = document.getElementById('singlePlayer');
    const multiPlayer = document.getElementById('multiPlayer');
    const menu = document.getElementById('menu');
    if(id === 'single'){
        $(singlePlayer).show();
        $(menu).hide();
    }else{
        $(multiPlayer).show();
        $(menu).hide();
    }
}

// MULTIPLAYER LOGIC PLAYER ONE

function handleClickmulti(){
    if (!startTime) {
        startTime = Date.now();
        updateTimermulti();
        timerInterval = setInterval(updateTimermulti, 1000);
    }

    clickCount++;
    updateClickCountermulti();
}

function updateClickCountermulti() {
    document.getElementById('clickCounter22').innerText = `${clickCount} clicks`;
}


function updateTimermulti() {
    const currentTime = Math.floor((Date.now() - startTime) / 1000);
    const remainingTime = selectedTime - currentTime;

    if (remainingTime <= 0) {
        clearInterval(timerInterval);
        endTime = Date.now();
        const elapsedTimeInSeconds = (endTime - startTime) / 1000;
        const cpm = Math.round((clickCount / elapsedTimeInSeconds) * 60);
        const cps = (clickCount / elapsedTimeInSeconds).toFixed(2);
        document.getElementById('timer2').innerText = 'Time\'s up!';
        document.getElementById('timer22').innerText = 'Time\'s up!';
        document.getElementById('clickText22').innerText = `CPM: ${cpm}`;
        document.getElementById('clickText33').innerText = `CPS: ${cps}`;
        document.getElementById('clickArea2').style.display = 'none';
        document.getElementById('clickArea2').style.cursor = 'default';
        document.getElementById('divrestart2').style.display = '';
    } else {
        document.getElementById('timer2').innerText = `Time: ${remainingTime}s`;
        document.getElementById('timer22').innerText = `Time: ${remainingTime}s`;
    }
}

// MULTIPLAYER LOGIC PLAYER TWO

function handleClickmulti2(){
    if (!startTime) {
        startTime = Date.now();
        updateTimermulti2();
        timerInterval = setInterval(updateTimermulti2, 1000);
    }

    clickCount2++;
    updateClickCountermulti2();
}

function updateClickCountermulti2() {
    document.getElementById('clickCounter222').innerText = `${clickCount2} clicks`;
}


function updateTimermulti2() {
    const currentTime = Math.floor((Date.now() - startTime) / 1000);
    const remainingTime = selectedTime - currentTime;

    if (remainingTime <= 0) {
        clearInterval(timerInterval);
        endTime = Date.now();
        const elapsedTimeInSeconds = (endTime - startTime) / 1000;
        const cpm = Math.round((clickCount2 / elapsedTimeInSeconds) * 60);
        const cps = (clickCount2 / elapsedTimeInSeconds).toFixed(2);
        document.getElementById('timer2').innerText = 'Time\'s up!';
        document.getElementById('timer22').innerText = 'Time\'s up!';
        document.getElementById('clickText222').innerText = `CPM: ${cpm}`;
        document.getElementById('clickText333').innerText = `CPS: ${cps}`;
        document.getElementById('clickArea3').style.display = 'none';
        document.getElementById('clickArea3').style.cursor = 'default';
        document.getElementById('divrestart22').style.display = '';
    } else {
        document.getElementById('timer2').innerText = `Time: ${remainingTime}s`;
        document.getElementById('timer22').innerText = `Time: ${remainingTime}s`;
    }
}




$(document).ready(function(){
    menu();
});