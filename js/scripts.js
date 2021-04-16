var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

let transform = 0;
let table = document.querySelector('table');
let slides = table.querySelectorAll('tr').length;
let singleRotation = 360 / slides;

setInterval(() => {
  table.style.setProperty('--rotate', `${-transform}deg`);
  transform = transform + singleRotation;
}, 1000);
