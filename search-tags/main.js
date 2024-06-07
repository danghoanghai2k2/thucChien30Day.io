var box__search = document.querySelector('.box__search');
var input = box__search.querySelector('.search__input');
var btnRemove = document.querySelector('.btn_remove__all');
var arrayExmable = ['Php', 'hải', 'Java'];
function reNameTag() {
   box__search.innerHTML = '';
   arrayExmable.forEach((element, index) => {
      box__search.innerHTML += `<p class="exambabel">
               ${element}
               <i onclick = "removeITem(${index})" class="bi bi-x-lg"></i>
            </p>`;
   });
   box__search.appendChild(input);
   input.focus();
}
reNameTag();
function removeITem(index) {
   arrayExmable.splice(index, 1);
   reNameTag();
}
btnRemove.addEventListener('click', e => {
   arrayExmable = [];
   reNameTag();
});
function addTag() {
   var check = arrayExmable.some(function (item) {
      return item.trim() == input.value.trim();
   });
   if (input.value.trim() != '' && check == false) {
      arrayExmable.push(input.value.trim());
      reNameTag();
   }
   input.value = '';
}
input.addEventListener('keydown', function methodName(arguments) {
   if (arguments.which == 13) {
      addTag();
   }
});
