/****************************************************
*      Calling a Function From Another Function     *
****************************************************/
function doFirst() {
  document.write("I am first bo!");
}

function doSecond() {
  document.write(" 22222222!!! ");
}

function start() {
  doFirst();
  doSecond();
}

start();
