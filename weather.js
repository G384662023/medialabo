
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log("経度: " + data.coord.lon);
  console.log("緯度: " + data.coord.lat);
  console.log("天気: " + data.weather[0].description);
  console.log("最低気温: " + data.main.temp_min);
  console.log("最高気温: " + data.main.temp_max);
  console.log("湿度: " + data.main.humidity);
  console.log("風速: " + data.wind.speed);
  console.log("風向: " + data.wind.deg);
  console.log("都市名: " + data.name);
}



// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let div = document.createElement('div');
  div.setAttribute('id', 'result');

  document.body.appendChild(div);


  let p = document.createElement('p');
  p.textContent = "経度: " + data.coord.lon;
  div.appendChild(p);

  p = document.createElement('p');
  p.textContent = "緯度: " + data.coord.lat;
  div.appendChild(p);

  p = document.createElement('p');
  p.textContent = "天気: " + data.weather[0].description;
  div.appendChild(p);

  p = document.createElement('p');
  p.textContent = "最低気温: " + data.main.temp_min;
  div.appendChild(p);

  p = document.createElement('p');
  p.textContent = "最高気温: " + data.main.temp_max;
  div.appendChild(p);

  p = document.createElement('p');
  p.textContent = "湿度: " + data.main.humidity;
  div.appendChild(p);

  p = document.createElement('p');
  p.textContent = "風速: " + data.wind.speed;
  div.appendChild(p);

  p = document.createElement('p');
  p.textContent = "風向: " + data.wind.deg;
  div.appendChild(p);

  p = document.createElement('p');
  p.textContent = "都市名: " + data.name;
  div.appendChild(p);
}


// 課題6-1 のイベントハンドラ登録処理は以下に記述

// イベントハンドラの登録
let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);

// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  const id = document.querySelector('#cityIdInput').value;
  if (!id) {
        alert("都市IDを入力してください");
        return;
    }
    const url = `https://www.nishita-lab.org/web-contents/jsons/openweather/${id}.json`;
    axios.get(url)
        .then(showResult)   
        .catch(showError)  
        .then(finish);      
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;
if (typeof data === 'string') {
        data = JSON.parse(data);
    }
    console.log(data);
    console.log(data.x);
    const oldResult = document.querySelector('#result');
    if (oldResult) {
        oldResult.remove();
    }
    printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}