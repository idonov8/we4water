(function(){
  const words = ['Create', 'Build', 'Cultivate', 'Connect'];
  const el = document.getElementById('verb');
  let index = 0;
  let animating = false;

  function setWord(next){
    el.textContent = next;
  }

  function nextWord(){
    index = (index + 1) % words.length;
    return words[index];
  }

  function animateChange(){
    if (animating) return;
    animating = true;
    // flip out
    el.classList.remove('flip-in');
    el.classList.add('flip-out');
    const handleOut = () => {
      el.removeEventListener('animationend', handleOut);
      setWord(nextWord());
      el.classList.remove('flip-out');
      el.classList.add('flip-in');
      const handleIn = () => {
        el.removeEventListener('animationend', handleIn);
        animating = false;
      };
      el.addEventListener('animationend', handleIn, { once: true });
    };
    el.addEventListener('animationend', handleOut, { once: true });
  }

  // initial kick so first transition happens after delay
  setInterval(animateChange, 1800);
})();
