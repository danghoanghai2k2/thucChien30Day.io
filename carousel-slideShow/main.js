var imgShow = document.querySelector('.slidShow__imgMain img');
var btnNext = document.querySelector('.next');
var btnPrevious = document.querySelector('.previous');
var listImg = document.querySelectorAll('.listImg__item img');
var count = 0;
function ShowImg(index, animationText) {
   var slide = document.querySelector('.slidShow__imgMain');
   listImg.forEach(function (item) {
      item.parentElement.classList.remove('active');
      slide.style.animation = animationText;
   });
   count = index;
   imgShow.src = listImg[index].src;
   listImg[index].parentElement.classList.add('active');
   slide.style.animation = animationText;
}
listImg.forEach((elemnet, index) => {
   elemnet.addEventListener('click', function (e) {
      var slide = document.querySelector('.slidShow__imgMain');
      slide.style.animation = 'none';
      setTimeout(() => {
         ShowImg(index, 'Clickslide 0.25s linear forwards');
      }, 100);
   });
});
btnPrevious.addEventListener('click', function methodName() {
   var slide = document.querySelector('.slidShow__imgMain');
   slide.style.animation = 'none';
   if (count === 0) {
      count = listImg.length - 1;
   } else {
      count--;
   }
   setTimeout(() => {
      ShowImg(count, 'slidePrevious 0.25s linear forwards');
   }, 100);
});
btnNext.addEventListener('click', function methodName() {
   var slide = document.querySelector('.slidShow__imgMain');
   slide.style.animation = 'none';
   if (count === listImg.length - 1) {
      count = 0;
   } else {
      count++;
   }
   setTimeout(() => {
      ShowImg(count, 'slideNext 0.25s linear forwards');
   }, 100);
});
