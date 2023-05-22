var myStopwatch = setInterval(changeTime, 1000);
var seconds = 0
var minutes = 20
var display_seconds = "00"
var display_minutes = "20"
var stop = true
var timer = document.getElementById("timer")
var stopbutton = document.getElementById("stopbutton")
timer.innerText = `${display_minutes}:${display_seconds}`

function changeTime(){
  if (stop == false){
    if (seconds == 0){
      seconds = 60
      minutes = minutes - 1
    }
    seconds = seconds - 1
    if (seconds < 10){
      display_seconds = "0" + seconds
    } else {
      display_seconds = seconds
    }
    if (minutes < 10){
      display_minutes = "0" + minutes
    } else {
      display_minutes = minutes
    }
    timer.innerText = `${display_minutes}:${display_seconds}`
    if (seconds == 0 && minutes == 0){
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Break time!!!";
      window.speechSynthesis.speak(msg);
      clearTimeout(myStopwatch)
    }
  }
}

function stoptimer(){
  if (stop == false){
    stop = true
    stopbutton.innerText = "Start"
  } else {
    stop = false
    stopbutton.innerText = "Stop"
  }
}

function reset(){
  window.location.replace("https://break-time.vulcanwm.repl.co")
}