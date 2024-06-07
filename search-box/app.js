var btnSearch = document.querySelector('.search__box button');
var seachBox = document.querySelector('.search__box');
var input = seachBox.querySelector('.input__text');
btnSearch.addEventListener('mouseover', () => {
   seachBox.classList.toggle('click');
   input.focus();
});
