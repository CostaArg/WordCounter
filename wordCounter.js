const textarea = document.getElementById("content");

textarea.addEventListener("input", Update);

let counter = 0;

function Update() {
  const text = this.value;

  let myArr = text.split(" ");
  let words = myArr.length;

  document.getElementById("word-count").innerHTML = words;

  if (text === "") {
    document.getElementById("word-count").innerHTML = "0";
  }
}
