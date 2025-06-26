document.addEventListener('DOMContentLoaded', () => {
  const b = document.querySelector('#calc');
  b.addEventListener('click', calc);
});

function calc() {
  const i1 = document.querySelector('#left');
  const i2 = document.querySelector('#right');
  
  const v1 = parseInt(i1.value);
  const v2 = parseInt(i2.value);
  
  const sum = v1 + v2;
  
  const ans = document.querySelector('#answer');
  ans.textContent = sum;
}
