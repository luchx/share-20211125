document.addEventListener('DOMContentLoaded', () => {
  selectAll('css-doodle', doodle => {
    if (doodle.hasAttribute('click-to-update')) {
      doodle.addEventListener('click', e => {
        doodle.update();
      });
    }
    if (doodle.hasAttribute('auto-update')) {
      let timer;
      let intersectionObserver = new IntersectionObserver(entries => {
        if (entries[0].intersectionRatio <= 0) {
          clearInterval(timer);
        } else {
          doodle.update();
          let auto = doodle.getAttribute('auto-update');
          if (auto !== 'once') {
            let delay = +auto || 3e3;;
            timer = setInterval(() => {
              doodle.update();
            }, delay);
          }
        }
      });
      intersectionObserver.observe(doodle);
    }
  });

  document.addEventListener('dblclick', e => {
    document.documentElement.webkitRequestFullscreen();
  });

  function selectAll(selector, fn) {
    let elments = document.querySelectorAll(selector);
    if (fn) {
      Array.from(elments || []).forEach(fn);
    }
    return elments;
  }

});
