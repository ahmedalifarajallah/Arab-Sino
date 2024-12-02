const openIcon = document.getElementById("mob-icon");
const closeIcon = document.getElementById("custom-close-icon");
const mobMenu = document.getElementById("products-menu");

openIcon.addEventListener("click", () => {
  console.log("Asa");
  
  mobMenu.style.display = "block";
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    mobMenu.classList.add("open");
  }, 10);
});

closeIcon.addEventListener("click", () => {
  mobMenu.classList.remove("open");
  setTimeout(() => {
    mobMenu.style.display = "none";
    document.body.style.overflow = "";
  }, 400);
});
