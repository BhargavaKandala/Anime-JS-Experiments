// Make sure anime.min.js is loaded in your HTML
const $time = document.querySelector('.value.time');
const $count = document.querySelector('.value.count');

let iteration = 0;

function startAnimeTimer(duration = 1000) {
  anime({
    targets: { value: 0 },
    value: 1,
    duration: duration,
    easing: 'linear',
    update: function(anim) {
      const currentTime = (anim.progress / 100 * duration / 1000).toFixed(2);
      if ($time) $time.innerHTML = currentTime;
    },
    complete: function() {
      iteration++;
      if ($count) $count.innerHTML = iteration;
      startAnimeTimer(duration); // Loop
    }
  });
}

// Start the looping timer
startAnimeTimer(1000);