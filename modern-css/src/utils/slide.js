document.addEventListener('DOMContentLoaded', () => {
  selectAll('[textarea][code]', block => {
    let content = normalizeIndent(block.innerHTML).trim();
    let sample = document.createElement('div');
    sample.className = 'box-source';
    block.parentNode.replaceChild(sample, block);

    let live = block.hasAttribute('live');
    let doodle = sample.parentNode.querySelector('css-doodle');

    let options = {
      mode: block.getAttribute('code') || 'css',
      value: content,
      theme: 'dracula',
      tabSize: 2
    };

    let editor = window.CodeMirror(sample, options)

    if (live && doodle) {
      let timer = null;
      doodle.update(editor.getValue());
      editor.on('change', (_, obj) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          doodle.update(editor.getValue());
        }, 300);
      });
    }
  });

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

  function normalizeIndent(input) {
    let temp = input.replace(/^\n+/g, '');
    let len = temp.length - temp.replace(/^\s+/g, '').length;
    let result = input.split('\n').map(n => (
      n.replace(new RegExp(`^\\s{${len}}`, 'g'), '')
    ));
    console.log({
      input,
      result
    });
    return result.join('\n');
  }

  function selectAll(selector, fn) {
    let elments = document.querySelectorAll(selector);
    if (fn) {
      Array.from(elments || []).forEach(fn);
    }
    return elments;
  }

});
