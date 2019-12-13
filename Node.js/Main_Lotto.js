var http = require('http');
var ML = require('./Modules/Module_Lotto.js');
var template2 = require('./Modules/Module_template2.js');
var template = require('./Modules/Module_template.js');

var port = 3000;
var hostname = '127.0.0.1'; // localhost

http.createServer(function(request, response){
  var html = template.HTML(ML.getLottoNumbers(), `
  <form action="${hostname}:${port}" method="post">
    <p><input type="text" name="price" placeholder="how many spent moeny?" style="width: 200px;"></p>
    <p><input type="submit"></p>
  </form>
  `);
  var strData = [];
  request.on('data', (chuck) => {// 비동기
    strData.push(chuck);
  }).on('end', () => {
    strData = Buffer.concat(strData).toString(); // 'strData'에 전체 요청
    var price = strData.replace(/[^0-9]/g,''); // price=(값)에서 (값)만 추출
    var games = price / 1000; // 한 게임당 1000원 ㅋ
    if(games > 1) {
      var body ='';
      for(var i=0; i<games; i++){
        body += '[ game ' + (i+1) + ' ]' + template2.HTML(ML.getLottoNumbers(), ``);
      }
      response.end(body);
    } else {
      response.end(`WARN :: Type currently`);
    }
  });
  response.writeHead(200);
  response.write(html);
}).listen(port, hostname, function(){
  console.log(`Server is running at http://${hostname}:${port}`);
});
