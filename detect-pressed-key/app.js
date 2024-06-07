var detitle = document.querySelector('.detitle');
var key = document.getElementById('key');
var locations = document.getElementById('location');
var which = document.getElementById('which');
var code = document.getElementById('code');
var keyDown__press = function (e) {
   detitle.innerText = e.which;
   key.innerText = e.ctrlKey;
   locations.innerText = e.shiftKey;
   which.innerText = e.code;
   code.innerText = e.altKey;
};

window.addEventListener('keydown', keyDown__press);
