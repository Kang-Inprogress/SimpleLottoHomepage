var ML = {
  getRandomIntArray: function () {
    var returnArr = [];
    for(var i=0; i<6; i++){
      returnArr[i] = Math.floor(Math.random() * (45 - 1)) + 1;
    }
    return returnArr;
  }, getLottoNumbers: function() {
    var arr = ML.getRandomIntArray();
    var returnstr = '';
    var duplicateFlag = false;

    for(var i=0; i<arr.length; i++){
      if (i>0){
        for(var j=0; j<i; j++){
          if(arr[i] == arr[j]){
            duplicateFlag = true;
            if (duplicateFlag == true) {
              arr[i] = Math.floor(Math.random() * (45 - 1)) + 1;
            }
          } else if (arr[i] != arr[j]) {
            duplicateFlag = false;
          }
        }
      }
      returnstr += arr[i] + '\t';
    }
    return returnstr
  }
}

module.exports = ML;
