let weight = document.querySelector("#weight"),
  btn = document.querySelector("#btn"),
  out = document.querySelector("#out"),
  vol = document.querySelector("#vol"),
  load = document.querySelector("#load"),
  del = document.querySelector("#del"),
  frag = document.querySelector("#frag"),
  range = document.querySelector("#range"),
  distance = (document.querySelector(".distance").innerHTML = 500),
  kg = 5.5,
  kub = 3500,
  km = 2;
// range
range.onchange = function () {
  document.querySelector(".distance").innerHTML = range.value;
};
//function
btn.onclick = function () {
  if (weight.value != "" && vol.value != "") {
    if (load.checked) {
      load.value = 1500;
    } else {
      load.value = 0;
    }
    if (del.checked) {
      del.value = 3500;
    } else {
      del.value = 0;
    }
    if (frag.checked) {
      frag.value = 2000;
    } else {
      frag.value = 0;
    }
    let sum =
      weight.value * kg +
      vol.value * kub +
      range.value * km +
      Number(frag.value) +
      Number(del.value) +
      Number(load.value);
    out.innerHTML = sum;
  } else {
    alert("Where weight and vol?");
  }
};
