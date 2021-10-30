var navEl = document.getElementById("navContainer")
var navBtn = navEl.getElementsByClassName('navBtn')

for (var i = 0; i < navBtn.length; i++) {
    navBtn[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

  $(document).ready(function() {
    $('body').scrollspy({
      target: '#navContainer',
      offset: 100
    })
  })