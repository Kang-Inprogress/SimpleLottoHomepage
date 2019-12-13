module.exports = {
  HTML : function(LottoNumber, dataform){
    return `
    <!doctype html>
      <html>
      <head>
        <title>Lotto</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1>Hello, Lotto!</h1>
        New number in this time : <span style="font-weight: bold; text-font: 12px;">${LottoNumber}</span><br>
        Press "F5" to refresh numbers or Type money that you spent for buy games
        ${dataform}
      </body>
    </html>
    `;
  }

}
