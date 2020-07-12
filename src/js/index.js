import "../scss/main.scss";

const notepad = document.querySelector(".notepad--js");
const load = document.querySelector(".load--js");
const save = document.querySelector(".save--js");
const entry = localStorage.getItem("myMemo");

if (entry) {
  notepad.value = localStorage.getItem("myMemo");
}


save.addEventListener("click", () => {
  localStorage.setItem("myMemo", notepad.value);
});

load.addEventListener("click", () => {
  notepad.value = localStorage.getItem("myMemo");
});
