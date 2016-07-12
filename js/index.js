function rot13(str) { 
  var strArray = str.split("");
  var resArray = [];
  var resString = "";
  for(var i=0;i<strArray.length;i++){
      var res = strArray[i].charCodeAt(0);
      if(res >= 65 && res < 78){
        res = res + 13;
      }else if(res <= 90 && res > 77){
        res = res - 13;
      }
     resArray.push(String.fromCharCode(res));
  }
   resString = resArray.join("");
  return resString;
}

// V YBIR LBH


function myPrompt(){
  var message = prompt("請輸入智爵給你的密碼","請在這裡輸入密碼");
  if(message != null){
    document.getElementById("here").innerHTML = rot13(message);
  }
}