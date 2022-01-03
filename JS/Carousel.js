var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 6) {
    counter = 1;
  }
}, 6000);
