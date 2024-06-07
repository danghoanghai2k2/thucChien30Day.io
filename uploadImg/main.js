var inputFile = document.getElementById('myImgage');
var uploadImg = document.querySelector('.uploadImg');
inputFile.addEventListener('change', function (e) {
   var file = this.files[0];
   var sizeImg = file.size / (1024 * 1024);
   var error = document.querySelector('.error');
   if (file.name.endsWith('.jpg') || file.name.endsWith('.png')) {
      var img = document.createElement('img');
      if (sizeImg > 0.4) {
         error.innerText = 'Ảnh phải nhỏ hơn 400 kb';
      } else {
         Object.assign(img.style, {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
         });
         img.setAttribute('src', URL.createObjectURL(file));
         img.setAttribute('alt', 'ảnh này không tồn tại');
         uploadImg.appendChild(img);
         error.innerText = '';
      }
   } else {
      error.innerText = 'Ảnh phải có đuôi là jpg hoặc png';
   }
});
