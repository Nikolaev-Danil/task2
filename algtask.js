function alg() {
  console.log("inputA, inputD");
  let A = parseInt(inputA.value);
  let D = parseInt(inputD.value);
  console.log(A, D);
  return [A, D];
}

const inputA = document.getElementById("A");
inputA.addEventListener("input", alg);
const inputD = document.getElementById("D");
inputD.addEventListener("input", alg);
const button = document.getElementById("verify");
button.addEventListener("click", lol);
const submitButton = document.getElementById("send");
submitButton.addEventListener("click", send);
let result = "не определен";
function lol() {
  let x = alg();
  if (x[0] * Math.sqrt(2) <= x[1]) {
    result = "можно";
    document.getElementsByName("result")[0].value = "можно";
  } else {
    document.getElementsByName("result")[0].value = "нельзя";
    result = "нельзя";
  }
}

function send() {
  let textCondition = document.getElementsByTagName("p")[0].innerText;
  document.getElementsByName("formulation")[0].value = textCondition;
  document.getElementsByName("result")[0].value = result;
  document.getElementById("UserEnter").submit();
}
