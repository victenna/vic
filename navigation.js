const links = document.querySelectorAll("nav a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    links.forEach((link) => {
      link.classList.remove("active");
    });

    link.classList.add("active");
  });
});
