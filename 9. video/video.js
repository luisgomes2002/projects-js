const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", () => {
  if(!btn.classList.contains("slide")){
    btn.classList.add("slide");
    video.pause();
  }else{
    btn.classList.remove("slide");
    video.play();
  }
});

const gif = document.querySelector(".preloader");

window.addEventListener("load", () => {
  gif.classList.add("hide-preloader");
});