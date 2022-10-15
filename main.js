document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.querySelector('.start')
  let buttPoss = {poss : false};
  startButton.addEventListener('click', () => {
    if (buttPoss.poss === false) {
    startButton.innerText = 'End Session'
    buttPoss.poss = true;
    getTime(buttPoss);
    }
    else {
      startButton.innerText = 'Start Session'
      buttPoss.poss = false;
    }

  })
});

/*
START button
if value = true (started), do 3 things
1. change START button text to STOP
2. start Work Time timer
*/

/* Work time

*/








/* store user data  https://developer.chrome.com/docs/extensions/reference/storage/

data stored
1. goals - active and archived goals
2. microtasks/microwins for each goal
3. number of pomodoros for each goal
*/

// Time function 
function getTime (bool) {
  let wTime = document.querySelector('.work').value;
  if (wTime > 60) wTime = 60;
  let wTimeInSec = wTime * 60
  let decrementTime = setInterval(() => {
    if (wTimeInSec === 1 || bool.poss === false) clearInterval(decrementTime);
      wTimeInSec--;
      console.log(wTimeInSec);
    }, 1000);
}