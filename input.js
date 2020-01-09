var a = 0;
var b = 0;

function storeNum() {
  // Get Values from User Input
  a = document.querySelector(".a").value;
  b = document.querySelector(".b").value;
};

function addNum(){
  storeNum();
  // Populate Result
  document.querySelector(".answer-display").innerHTML = Number(a) + Number(b);
};

function subtractNum(){
  storeNum();
  // Populate Result
  document.querySelector(".answer-display").innerHTML = Number(a) - Number(b);
};

function multiplyNum(){
  storeNum();
  // Populate Result
  document.querySelector(".answer-display").innerHTML = Number(a) * Number(b);
};

function divisionNum(){
  storeNum();
  // Populate Result
  document.querySelector(".answer-display").innerHTML = Number(a) / Number(b);
};