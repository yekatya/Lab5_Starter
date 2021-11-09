// expose.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  var selectHornElem = document.getElementById("horn-select");
  selectHornElem.addEventListener("change", hornFunc);
  var volumeElem = document.getElementById("volume");
  volumeElem.addEventListener("input", volumeFunc);
  var playSound = document.querySelector("button");
  playSound.addEventListener("click", buttonFunc);
}

function hornFunc() {
  var noImg = document.querySelector("img");
  var audioElem = document.querySelector("audio");
  if (document.getElementById("horn-select").value == "air-horn") {
    noImg.src = "assets/images/air-horn.svg";
    noImg.alt = "Air Horn Image";
    audioElem.src = "assets/audio/air-horn.mp3";
  } else if (document.getElementById("horn-select").value == "car-horn") {
    noImg.src = "assets/images/car-horn.svg";
    noImg.alt = "Car Horn Image";
    audioElem.src = "assets/audio/car-horn.mp3";
  } else {
    noImg.src = "assets/images/party-horn.svg";
    noImg.alt = "Party Horn Image";
    audioElem.src = "assets/audio/party-horn.mp3";
  }
}

function volumeFunc() {
  var volElement = document.getElementById("volume");
  var divElement = document.getElementById("volume-controls");
  var volumeImg = divElement.querySelector("img");
  var audioElem = document.querySelector("audio");
  if (volElement.value == "0") {
    volumeImg.src = "assets/icons/volume-level-0.svg";
    volumeImg.alt = "Volume level 0";
    audioElem.volume = "0";
  }
  if (volElement.value > 1 && volElement.value < 33) {
    volumeImg.src = "assets/icons/volume-level-1.svg";
    volumeImg.alt = "Volume level 1";
    audioElem.volume = "0.33";
  }
  if (volElement.value >= 33 && volElement.value < 67) {
    volumeImg.src = "assets/icons/volume-level-2.svg";
    volumeImg.alt = "Volume level 2";
    audioElem.volume = "0.67";
  }
  if (volElement.value >= 67) {
    volumeImg.src = "assets/icons/volume-level-3.svg";
    volumeImg.alt = "Volume level 3";
    audioElem.volume = "1";
  }
}

function buttonFunc() {
  var audioElement = document.querySelector("audio");
  var horn = document.getElementById("horn-select");
  audioElement.play();
  if (horn.value == "party-horn") {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }
}
