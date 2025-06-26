document.addEventListener('DOMContentLoaded', () => {
  const b = document.querySelector('button#print');
  b.addEventListener('click', greeting);
});

function greeting() {
  const i = document.querySelector('input[name="shimei"]');

  const shimei = i.value;

  const aisatsu = 'こんにちは，' + shimei + 'さん';

  const p = document.querySelector('#message');

  p.textContent = aisatsu;
}
