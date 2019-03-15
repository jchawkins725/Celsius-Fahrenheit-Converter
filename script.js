function convertTemp(degree) {
  let x;
  if (degree == "c") {
    x = document.getElementById("celsius").value;
    document.getElementById("fahrenheit").value = x * 9 / 5 + 32;
  }
  else {
    x = document.getElementById("fahrenheit").value;
    document.getElementById("celsius").value = (x - 32) * 5/9;
  }
}


document.getElementById("celsius").addEventListener("keyup", function(){convertTemp("c")});
document.getElementById("fahrenheit").addEventListener("keyup", function(){convertTemp("f")});

