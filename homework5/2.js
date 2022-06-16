var n = parseInt(prompt("請輸入一下正整數"));

var fa= 1;

for(var i = n; i >= 1; i–){

fa*= i;

}

console.log(n + "的階乘是" + fa);
