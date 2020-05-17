var urls = [
  "img/flags/gerardveringa.jpg",
  "img/flags/gerbenwagenaar.jpg",
  "img/flags/henrikdeman.jpg",
  "img/flags/jaapburger.jpg",
  "img/flags/jkmgevers.jpg",
  "img/flags/jlanser.jpg",
  "img/flags/koosvorrink.jpg",
  "img/flags/louisdevisser.jpg",
  "img/flags/pauldegroot.jpg",
  "img/flags/siccomansholt.jpg",
  "img/flags/theovandriesten.jpg",
  "img/flags/willybrandt.jpg",
  "img/flags/wimschermerhorn.jpg",
]

showRandomImage();
var t = setInterval(showRandomImage,2000);
function showRandomImage() {
  var index = Math.floor(Math.random() * urls.length);
  // index = index + 1;
  var new_url = urls[index];
  $("#flag1").attr("src",new_url);
}

showRandomImage2();
var t = setInterval(showRandomImage2,2000);
function showRandomImage2() {
  var index = Math.floor(Math.random() * urls.length);
  // index = index + 1;
  var new_url = urls[index];
  $("#flag2").attr("src",new_url);
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
