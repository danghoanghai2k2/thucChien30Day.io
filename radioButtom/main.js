var rangButtom = document.querySelector('.rangButtom');
var spanRang = document.querySelector('.rangButtom span');
setPercent(30);
rangButtom.addEventListener('mousemove', e => {
   let x = e.pageX - rangButtom.offsetLeft;
   let perrcent = (x / rangButtom.offsetWidth) * 100;
   setPercent(perrcent);
});
function setPercent(pc) {
   pc = Math.ceil(pc);
   spanRang.innerText = `${pc}%`;
   spanRang.style.width = `${pc}%`;
   document.body.style.backgroundColor = `rgba(0, 0, 0, ${pc / 100})`;
}
