document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".site-section");

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      // убираем active у всех ссылок и секций
      navLinks.forEach(l => l.classList.remove("active"));
      sections.forEach(sec => sec.classList.remove("active"));

      // активируем выбранную ссылку
      link.classList.add("active");

      // находим нужный блок
      const targetId = link.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        target.classList.add("active");
      }
    });
  });
});
