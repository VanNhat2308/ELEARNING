
let numbers = document.getElementsByClassName("btnDrop");
let answers = document.getElementsByClassName("answer");

[...numbers].forEach((e, idx) => {
   e.addEventListener("click", () => {
      [...numbers].forEach(a => a.classList.remove("active"));
      [...answers].forEach(a => a.classList.remove("active"));

      e.classList.add("active");
      if (answers[idx]) {
         answers[idx].classList.add("active");
      }
   });
});