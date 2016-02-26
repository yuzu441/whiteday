(function() {
  var chocoBox = document.querySelector('.choco-box');
  chocoBox.addEventListener('click', function(e) {
    chocoBox.classList.add('hide-ani');
  });

  chocoBox.addEventListener('webkitAnimationEnd', function(e) {
    chocoBox.classList.add('hide');
  });
})();