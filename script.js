let width = document.querySelector('#input-width'),
    height = document.querySelector('#input-height'),
    btn = document.querySelector('#btn');

btn.onclick = function(event) {
   let res = (width.value * height.value) / 25;

   if (width.value == '' || height.value == '') {
    alert('Введите параметры')
   }
   if (isNaN(res)) {
    alert('Введите числовое значение')
   } else {
    out.innerHTML = res;
    outplus.innerHTML = res + 2;
   }
    };