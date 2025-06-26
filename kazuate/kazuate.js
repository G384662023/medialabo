// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

hantei();
hantei();
hantei();
hantei();

function hantei() {
  let yoso = 4;

  kaisu++;
  console.log(`${kaisu}回目の予想: ${yoso}`);

  if (kaisu >= 4) {
    console.log(`答えは ${kotae} でした．すでにゲームは終わっています`);
    return;
  }

  if (yoso === kotae) {
    console.log("正解です．おめでとう!");
    kaisu = 4;
  } else {
    if (kaisu === 3) {
      console.log(`まちがい．残念でした答えは ${kotae} です．`);
    } else if (yoso < kotae) {
      console.log("まちがい．答えはもっと大きいですよ");
    } else {
      console.log("まちがい．答えはもっと小さいですよ");
    }
  }
}
