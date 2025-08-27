// no import needed
anime({
  targets: '.value',
  innerHTML: [0, 100],
  round: 1,
  duration: 2000,
  easing: 'linear'
});

createTimer({
  duration: 1000,
  frameRate: true, 
  loop: true,       
  onBegin: () => {},
  onLoop: () => {},
  onUpdate: () => {},
});

const [ $time, $count ] = document.querySelectorAll('.value');

// createTimer({
//   duration: 1000,
//   loop: true,
//   frameRate: 30,
//   onUpdate: self => $time.innerHTML = self.currentTime,
//   onLoop: self => $count.innerHTML = self._currentIteration
// });