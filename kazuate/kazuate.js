let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

let kaisu = 0;

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#guess');
  btn.addEventListener('click', hantei);
});

function hantei() {
  const input = document.querySelector('#user-input');
  let yoso = parseInt(input.value);

  document.querySelector('#answer').textContent = yoso;

  kaisu++;
  document.querySelector('#kaisu').textContent = kaisu;

  const result = document.querySelector('#result');

  if (kaisu >= 4) {
    result.textContent = `答えは ${kotae} でした．すでにゲームは終わっています`;
    return;
  }
  if (yoso === kotae) {
    result.textContent = "正解です．おめでとう!";
    kaisu = 4;
  } else {
    if (kaisu === 3) {
      result.textContent = `まちがい．残念でした 答えは ${kotae} です．`;
    } else if (yoso < kotae) {
      result.textContent = "まちがい．答えはもっと大きいですよ";
    } else {
      result.textContent = "まちがい．答えはもっと小さいですよ";
    }
  }
}
