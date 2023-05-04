const article = document.querySelector(".popup");
const openBtn = document.querySelector(".btn-open");
const closeBtn = document.querySelector(".btn-close");

openBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup);

function openPopup() {
  article.classList.add("active");
}
function closePopup() {
  article.classList.remove("active");
}
