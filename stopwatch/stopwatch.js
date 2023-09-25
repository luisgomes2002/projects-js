const time = document.querySelector("#time");
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const reset = document.querySelector("#reset");

let startTime = 0;
let currentTime = 0;
let elapsedTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let min = 0;
let secs = 0;

start.addEventListener("click", () => {
  if(paused){
    paused = false;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 1000);
  }
});

pause.addEventListener("click", () => {
  if(!paused){
    paused = true;
    startTime = Date.now() - elapsedTime;
    clearInterval(intervalId);
  }
});

reset.addEventListener("click", () => {
  paused = true;
  clearInterval(intervalId);
  startTime = 0;
  currentTime = 0;
  elapsedTime = 0;
  hrs = 0;
  min = 0;
  secs = 0;

  time.textContent = "00:00:00"
});

function updateTime(){
  elapsedTime = Date.now() - startTime;
  
  secs = Math.floor((elapsedTime / 1000) % 60);
  min = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hrs = Math.floor((elapsedTime / (1000 * 3600)) % 60);

  secs = pad(secs)
  min = pad(min)
  hrs = pad(hrs)

  time.textContent = `${hrs}:${min}:${secs}`
}

function pad(unit){
  return (("0") + unit).length > 2 ? unit : "0" + unit;
}