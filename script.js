(function(){
  const words = ['Create', 'Build', 'Cultivate', 'Connect'];
  const el = document.getElementById('verb');
  let i = 0;

  function setWord(next){
    el.textContent = next;
  }

  function rotate(){
    i = (i + 1) % words.length;
    setWord(words[i]);
  }

  setInterval(rotate, 1600);
})();
