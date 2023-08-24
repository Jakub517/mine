
    function showModal() {
      var modal = document.getElementById('modal');
      modal.style.display = 'flex';
    }

    function hideModal() {
      var modal = document.getElementById('modal');
      modal.style.display = 'none';
    }

    function showBuyPopup(button) {
      var popup = button.nextElementSibling;
      popup.style.display = "block";
      setTimeout(function() {
        popup.style.display = "none";
      }, 3000);
    }