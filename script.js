let random = document.querySelector("#ramdom");

const url = "https://game-of-thrones-quotes.herokuapp.com/v1/random/5";
async function getData(){
    let response = await fetch(url);
    let data = await response.json();

    let randomWord =  Math.floor(Math.random() * data.length)

    random.innerHTML = data[randomWord].sentence;

}

getData();

function skip(){
    getData();    
}

let typedWord = document.querySelector("#typedWord");
let displayScore = document.querySelector("#score");
let score = 0 ;

typedWord.addEventListener("keyup", () => {
    if(typedWord.value.trim() === random.innerText){
        score++;
        displayScore.innerHTML = score;
        getData();
        typedWord.value = "";
        let extraTime = [10,11,12,13,14,15,16,17];
        let randomNumber = Math.floor(Math.random() * extraTime.length);
        let randomTime = extraTime[randomNumber];
        time+= randomTime;
    }
})


//javascript timing event
let time = 60;
function displayTime(){
    let showtime = document.querySelector("#time");
    time--;
    showtime.innerHTML = time + "s";
    if(time == 0){
        clearInterval(counter);
        gameOver();
    }if (score >= 10){
        gameWin();
    }
}

let counter = setInterval(displayTime, 1000)
let playAgain = document.querySelector("#playAgain")
let skipButton = document.querySelector("#skip")
let gameStatus = document.getElementById("gameStatus")
function gameOver(){
    gameStatus.innerHTML = "You lose, Time Run Out !!"
    typedWord.style.display = "none";
    playAgain.style.display = "inline-block";
    skipButton.style.display = "none";
    random.style.display = "none";
    clearInterval(counter)
 }

function gameWin(){
    if(score >= 10)
    gameStatus.innerHTML = "You Won !!!!!!!! You are a normal typer !!!!!!!"
    typedWord.style.display = "none";
    playAgain.style.display = "inline-block";
    skipButton.style.display = "none";
    random.style.display = "none";
    clearInterval(counter)
}

playAgain.addEventListener("click", () => {
    window.location.reload();
    playAgain.style.display = "none";
});

let data = new Date();
let hours = data.getHours();
let timeInterval = document.getElementById("timeInterval");

if (hours >= 1 && hours <=5){
    timeInterval.innerHTML = "Hello, Early Morning 🥱";
}else if(hours >= 6 && hours < 12){
    timeInterval.innerHTML = "Hello, Good Morning 🌞";
}else if(hours >= 12 && hours < 14){
    timeInterval.innerHTML = "Hello, Good Afternoon ☀️";
}else if(hours >= 15 && hours < 18){
    timeInterval.innerHTML = "Hello, Good Evening 🌤️";
}else if(hours >= 19 && hours < 24){
    timeInterval.innerHTML = "Hello, Good Night 🌜";
}else {
    timeInterval.innerHTML = "Hello, Warmly welcome";
}

let showUser = document.querySelector("#show")
function popUp(){
    let username = prompt("What is your name?");
    localStorage.setItem("storedUser", username );
    showUser.innerHTML.username;
}
let storedUser = localStorage.getItem("storedUser");
if(storedUser){
    showUser.innerHTML = storedUser;
}else{
    showUser.innerHTML = "User";
}
