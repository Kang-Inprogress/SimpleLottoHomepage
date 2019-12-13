module.exports = {
  HTML : function(LottoNumber, dataform){
    return `
    <!doctype html>
      <html>
      <head>
        <title></title>
        <meta charset="utf-8">
      </head>
      <body>
        New number in this time : <span style="font-weight: bold; text-font: 12px;">${LottoNumber}</span><br>
        ${dataform}
      </body>
    </html>
    `;
  }
}
