var btnOpen = document.querySelector('.btn__model--open');
console.log(btnOpen);
var modal__model = document.querySelector('.modal__model');
console.log(modal__model);
var btnClosed = document.querySelector('.model__footer--close');
var btnX = document.querySelector('.iconX');
var model__inner = document.querySelector('.model__inner');
openModel = function (e) {
   modal__model.classList.toggle('hidden');
};

btnOpen.addEventListener('click', openModel);
btnClosed.addEventListener('click', openModel);
btnX.addEventListener('click', openModel);
modal__model.addEventListener('click', openModel);
model__inner.onclick = e => {
   e.stopPropagation();
   console.log(e.currentTarget());
};
