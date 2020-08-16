let button = document.querySelector("button");
let times = document.querySelectorAll("div select");
let hours = document.querySelector(".select_hours");
let minutes = document.querySelector(".select_minutes");
let seconds = document.querySelector(".select_seconds");
let meridian = document.querySelector(".meridian");
let p = document.querySelector("p");
let clockDiv = document.querySelector(".clock");

function displayTime() {
    var currentTime = new Date();
    var firstNum = currentTime.getHours();
    var secNum = currentTime.getMinutes();
    var thirdNum =  currentTime.getSeconds();
    let foo = true;
    var meridianTime = "";

    if (thirdNum < 10){
        thirdNum = ("0" + thirdNum);
}
    if (secNum < 10){
        secNum = ("0" + secNum);
}
    if (firstNum > 12) {
        firstNum = (firstNum - 12)
        let foo = true;
}
    if(firstNum < 10) {
        firstNum = ("0" + firstNum);
    }
        if (foo == false){
            var meridianTime = (meridianTime + "AM");
        }else{
            var meridianTime = (meridianTime + "PM");
        };

        window.clockText = clockDiv.innerText = firstNum + ":" + secNum + ":" + thirdNum + meridianTime;
    setInterval(displayTime, 1000)
 };

 displayTime();

 

 button.addEventListener('click', ()=>{
    if (times[0].hasAttribute("disabled", ""), 
        times[1].hasAttribute("disabled", ""), 
        times[2].hasAttribute("disabled", ""),
        times[3].hasAttribute("disabled", ""))
    {
      times[0].removeAttribute("disabled", "")
      times[1].removeAttribute("disabled", "")
      times[2].removeAttribute("disabled", "")
      times[3].removeAttribute("disabled", "")
      p.innerText = "";
      button.innerText = "Set Alarm";
      
    }else{
      times[0].setAttribute("disabled", "");
      times[1].setAttribute("disabled", "");
      times[2].setAttribute("disabled", "");
      times[3].setAttribute("disabled", "");
      button.innerText = "Clear Alarm";
     p.innerText = "Alarm set for " + hours.value + ":" + minutes.value + ":" + seconds.value + meridian.value;
     window.alarmTime = hours.value + ":" + minutes.value + ":" + seconds.value +  meridian.value;
    }
  });

  
  function beep () {
  if(window.alarmTime === window.clockText){
    p.innerText = "WAKE UP YOU FOOL";
    var x = true;
  };
  setInterval(beep, 1000);
  if(x = true){
      return;
  }
};

beep();






