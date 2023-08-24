document.addEventListener('click', function(event) {
    const numBubbles = 20;
    for (let i = 0; i < numBubbles; i++) {
      createBackgroundBubble(event.clientX, event.clientY);
    }
  });

  function createBackgroundBubble(x, y) {
    const bubble = document.createElement('div');
    bubble.classList.add('background-bubble');
    const randomX = Math.random() * window.innerWidth; 
    const randomY = Math.random() * window.innerHeight; 
    bubble.style.left = randomX + 'px';
    bubble.style.top = randomY + 'px';
    document.body.appendChild(bubble);
    setTimeout(function() {
      document.body.removeChild(bubble);
    }, 2000);
  }

  function copyIp() {
    const ipText = 'mc.3mine.eu';
    
    navigator.clipboard.writeText(ipText).then(() => {
      const ipAddressElement = document.getElementById('ip-address');
      const ipElement = document.getElementById('server-ip');
      
      ipElement.classList.add('copied');
      ipAddressElement.innerText = 'Zkopírováno';
      
      setTimeout(() => {
        ipElement.classList.remove('copied');
        ipAddressElement.innerText = ipText;
      }, 1000);
    });
  }