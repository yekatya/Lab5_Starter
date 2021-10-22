// explore.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  voiceList;
  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = voiceList;
  }
  var selectedVoice = document.getElementById("voice-select");
  selectedVoice.addEventListener("change", changeVoice);
  var pressToTalkBtn = document.querySelector("button");
  pressToTalkBtn.addEventListener("click", speakFunc);
  var img = document.querySelector("img");
  img.src = "/assets/images/smiling.png";
  img.alt = "Smiling Face";
}

function voiceList() {
  var voices = speechSynthesis.getVoices();
  var voiceVar = document.getElementById("voice-select");
  for (var i = 0; i < voices.length; i++) {
    var option = document.createElement("option");
    option.textContent = voices[i].name + " (" + voices[i].lang + ")";

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceVar.appendChild(option);
  }
}

function changeVoice() {}

function speakFunc() {
  var voices = speechSynthesis.getVoices();
  var textAreaResult = document.getElementById("text-to-speak");
  var utter = new SpeechSynthesisUtterance(textAreaResult.value);
  var selectedVoice = document.getElementById("voice-select");
  var selectedOption =
    selectedVoice.selectedOptions[0].getAttribute("data-name");
  for (var i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utter.voice = voices[i];
    }
  }
  var smileyImage = document.querySelector("img");
  speechSynthesis.speak(utter);
  var synth = window.speechSynthesis;
  if (synth.speaking) {
    smileyImage.src = "/assets/images/smiling-open.png";
    smileyImage.alt = "Smiling Open Face";
  }
  setTimeout(function () {
    smileyImage.src = "/assets/images/smiling.png";
    smileyImage.alt = "Smiling Face";
  }, 3000);
}
