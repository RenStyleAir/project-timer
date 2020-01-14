
var minute = 0;
var second = 0;
var display; 
var countDown = false; 
var stopt = true;

var beep = document.getElementById("beep")
beep.loop = true;

function beepbeep(){
  beep.play();
}

function beepPause(){
  beep.pause();
}

// button clicks and counting

function minPlus(){
  if(minute < 90){
    minute += 1; 
    countDown = true;
    setTime();    
  }
}

function minMin(){
  if(minute > 0){
    minute -= 1; 
    setTime();
    if(minute == 0){
      stopIt();
      countDown = false;        
    }
  }
}
        
function secPlus(){
  if(second < 59){
          second += 1; 
        } else {
          minute += 1; 
          second = 0;
        }
  if (minute == 90){
    stopIt()
        }     
  setTime();    
}

function secMin(){
  if(second > 0){
          second -= 1; 
        } else if(minute > 0) {
          minute -= 1; 
          second = 59;
        } else {
          beepbeep();
          setInterval(beepPause, 10000);
          stopIt();
          countDown = false;
        }
  setTime();    
}

function reset(){
    minute = 0;
    second = 0;
    stopIt();
    setTime();
    beepPause();
    stopt = true;   
    countDown = false;
}

// button holds

var handler;
function holdPlus() {
  handler = setInterval(aMinPlus, 150);
    }
function aMinPlus() {
  minPlus()
    }
function holdMin() {
    handler = setInterval(aMinMin, 150);
  } 
  function aMinMin() {
    minMin()
  }

// set time

function setTime(){
    if(minute < 10  && second < 10){
      display = "0" +  minute + ":0" + second;
    } else if (second < 10){
      display = "" +  minute + ":0" + second;
    } else if (minute < 10){
      display = "0" +  minute + ":" + second;
    }
    else {
      display = "" +  minute + ":" + second;
    }
    document.getElementById("display").innerHTML = display;   
}

  // countDown= false; 
  // stopt = true; 
    
  function startTimer() {
    if(countDown){
      if(stopt){
        handler = setInterval(bMinMin, 1000);
        function bMinMin() {
          secMin()
        }
        stopt = false;
      } else {
        stopIt();
        stopt = true;
      }

    }else if(stopt){
        handler = setInterval(bMinPlus, 1000);
        stopt = false;
        }else {
            stopIt();
            stopt = true;
        }
        function bMinPlus() {
          secPlus()
          countDown = false;
        }
      }
        function stopIt(){
          clearInterval(handler);
          stopt = true;
        }

