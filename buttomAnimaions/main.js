var success = document.querySelector('.btn__success');
var warring = document.querySelector('.btn__warting');
var error = document.querySelector('.btn__error');

success.addEventListener('click', function methodName(e) {
   ShowToast('success', 'This is a success message !', 3000, 3500);
});
error.addEventListener('click', function methodName(e) {
   ShowToast('error', 'This is a error message !', 3000, 3500);
});
warring.addEventListener('click', function methodName(e) {
   ShowToast('warring', 'This is a warring message !', 3000, 3500);
});
function ShowToast(status, message, timeOut, timeRemove) {
   let div = document.createElement('div');
   div.classList.add('toast__show');
   var toast = document.querySelector('.toast');
   if (status == 'success') {
      div.classList.add('toast__show--success');
      div.innerHTML = `<i class="fa-solid fa-circle-check"></i>
            <span>${message}</span>
            <div class="bottom__toast bottom__toast--success"></div>`;
   } else if (status == 'warring') {
      div.classList.add('toast__show--warting');
      div.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>
            <span>${message}</span>
            <div class="bottom__toast bottom__toast--waitng"></div>`;
   } else if (status == 'error') {
      div.classList.add('toast__show--error');
      div.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>
            <span>${message}</span>
            <div class="bottom__toast bottom__toast--error"></div>`;
   }
   toast.appendChild(div);
   setTimeout(() => {
      setTimeout(() => {
         div.remove();
      }, timeOut);
      div.style.animation = `HideToast 2s ease-in-out forwards`;
   }, timeRemove);
}
