// window.onload = function(){
//     let milSec = 00;
//     let sec = 00;
   
//     const linkMilSec = document.getElementById('msHundreds');
//     const linkSec = document.getElementById('msTens');
  

//     let startButton = document.getElementById('startButton');
//     let resetButton = document.getElementById('resetButton');
    
//     const Interval;

//     startButton.onclick = function() {
//         clearInterval(Interval);
//         Interval = setInterval(startWatch, 10);
//     }
//     resetButton.onclick = function() {
//         clearInterval(Interval);
//         milSec = '00';
//         linkmil.innerHTML = msHun;

      

//         sec = '00';
//         linkSecOne.innerHTML = secOne;

       


//     }

//     function startTimer() {
//         msHun++;

//         if(msHun <9){
//             linkMsHun.innerHTML = '0' + 
//         }
//     }
// }

window.onload = function () {
  
    var seconds = 00; 
    var tens = 00; 
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('startButton');
    var buttonStop = document.getElementById('stopButton');
    var buttonReset = document.getElementById('resetButton');
    var Interval ;
  
    buttonStart.onclick = function() {
      
       clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
      tens = "00";
        seconds = "00";
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }
    
     
    
    function startTimer () {
      tens++; 
      
      if(tens < 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
    }
    
  
  }