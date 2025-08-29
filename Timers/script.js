const $time = document.querySelector('.time');

// Timer starts after a 2 second delay
let timerInterval = null;
let startTime = null;

function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(() => {
    const currentTime = Math.floor((Date.now() - startTime) / 1000);
    if ($time) {
      $time.innerHTML = currentTime;
    }
  }, 1000);
}

// Start the timer after a 2 second delay
setTimeout(startTimer, 2000);

// anime({
//   targets: '.value',
//   innerHTML: [0, 100],
//   round: 1,
//   duration: 2000,
//   easing: 'linear'
// });

// createTimer({
//   duration: 1000,
//   frameRate: true, 
//   loop: true,       
//   onBegin: () => {},
//   onLoop: () => {},
//   onUpdate: () => {},
// });

// const [ $time, $count ] = document.querySelectorAll('.value');

// // createTimer({
// //   duration: 1000,
// //   loop: true,
// //   frameRate: 30,
// //   onUpdate: self => $time.innerHTML = self.currentTime,
// //   onLoop: self => $count.innerHTML = self._currentIteration
// // });