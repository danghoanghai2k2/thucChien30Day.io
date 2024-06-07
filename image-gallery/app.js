var images = document.querySelectorAll('.image img');
console.log(images);
var iconPre = document.querySelector('.control__pre i');
var iconNext = document.querySelector('.control__next i');
var img__slided__outline = document.querySelector('.img__slided__outline');
var icon__close = document.querySelector('#icon__close');
var image__outline = document.querySelector('.image__outline img');
console.log(image__outline);
var currentIdex = 0;
function slideImage() {
   if (currentIdex == 0) {
      iconPre.style.display = 'none';
   } else {
      iconPre.style.display = 'block';
   }
   if (currentIdex == images.length - 1) {
      iconNext.style.display = 'none';
   } else {
      iconNext.style.display = 'block';
   }
   image__outline.src = images[currentIdex].src;
   img__slided__outline.classList.add('show');
}
images.forEach((element, index) => {
   element.addEventListener('click', () => {
      currentIdex = index;
      slideImage();
   });
});
var hiden = function hideShow(e) {
   if (e.keyCode == 27) {
      img__slided__outline.classList.remove('show');
   } else {
      img__slided__outline.classList.remove('show');
   }
};
icon__close.addEventListener('click', hiden);
document.addEventListener('keydown', hiden);
iconPre.addEventListener('click', () => {
   currentIdex--;
   slideImage();
});
iconNext.addEventListener('click', () => {
   currentIdex++;
   slideImage();
});
