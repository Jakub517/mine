var content = document.getElementById('content');
    
content.addEventListener('click', function() {
  content.style.transform = 'rotateX(20deg)';
  
  setTimeout(function() {
    content.style.transform = 'rotateX(0)';
  }, 500);
});