var elements = document.getElementsByClassName("navigation-link");
var navToggle = document.getElementById('navi-toggle')
Array.prototype.slice.call(elements)
  .forEach(function (el) {
      el.addEventListener('click', function (e) {
          navToggle.checked = false
      })
  })