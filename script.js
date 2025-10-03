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

// Water Bubbles Animation
(function(){
  const bubblesContainer = document.getElementById('bubbles-container');
  
  function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    // Random size between 10px and 60px
    const size = Math.random() * 50 + 10;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    
    // Random horizontal position
    bubble.style.left = `${Math.random() * 100}%`;
    
    // Random duration between 6s and 12s (larger bubbles rise slower)
    const duration = 6 + (size / 10);
    bubble.style.animationDuration = `${duration}s`;
    
    // Random horizontal drift
    const drift = (Math.random() - 0.5) * 100;
    bubble.style.setProperty('--drift', `${drift}px`);
    
    // Random delay for more organic feel
    bubble.style.animationDelay = `${Math.random() * 2}s`;
    
    bubblesContainer.appendChild(bubble);
    
    // Remove bubble after animation completes
    setTimeout(() => {
      bubble.remove();
    }, (duration + 2) * 1000);
  }
  
  // Create bubbles at intervals
  function startBubbles() {
    createBubble();
    // Random interval between 300ms and 800ms
    const nextInterval = Math.random() * 500 + 300;
    setTimeout(startBubbles, nextInterval);
  }
  
  // Start after page loads
  if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    setTimeout(startBubbles, 500);
  }
})();
