var userName = document.querySelector('#Username');
var email = document.querySelector('#email');
var passWorld = document.querySelector('#Passworld');
var confirmPass = document.querySelector('#confrimPass');
var formss = document.querySelector('form');
console.log(formss);

function CheckError(input, mess) {
   let parent = input.parentNode;
   let error = parent.querySelector('.error--span');
   if (!input.value.trim()) {
      parent.classList.add('error');
      error.innerText = mess;
   } else {
      parent.classList.remove('error');
      error.innerText = '';
   }
}
function CheckEmty(listarrr) {
   listarrr.forEach((element, index) => {
      CheckError(element, 'Không được để trống !!!');
   });
}

function isValidEmail(email) {
   const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
   if (!emailRegex.test(email.value)) {
      let parent = email.parentNode;
      let error = parent.querySelector('.error--span');
      parent.classList.add('error');
      error.innerText = 'Email không hợp lệ';
   }
   return !emailRegex.test(email.value);
}
function checkPass(pass, confirmPass) {
   if (pass.value.trim() !== confirmPass.value.trim()) {
      let parent = confirmPass.parentNode;
      let error = parent.querySelector('.error--span');
      parent.classList.add('error');
      error.innerText = 'Mật khẩu không trùng nhau';
   }
}
formss.addEventListener('submit', function methodName(e) {
   e.preventDefault();
   let listarrr = [userName, email, passWorld, confirmPass];
   CheckEmty(listarrr);
   checkPass(passWorld, confirmPass);
   isValidEmail(email);
});
