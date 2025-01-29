const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion, index) => {
  const header = accordion.querySelector(".accordion__header");
  const content = accordion.querySelector(".accordion__content");
  const icon = accordion.querySelector("#accordion-icon");

  header.addEventListener("click", () => {
    const isOpen = content.style.height === `${content.scrollHeight}px`;

    accordions.forEach((a, i) => {
      const c = a.querySelector(".accordion__content");
      const ic = a.querySelector("#accordion-icon");

      c.style.height = i === index && !isOpen ? `${c.scrollHeight}px` : "0px";
      ic.classList.toggle("ri-add-line", i !== index || !isOpen);
      ic.classList.toggle("ri-subtract-fill", i === index && !isOpen);
    });
  });
});


$(document).ready(function($) {
  $('.count-number').counterUp({
      delay: 10,
      time: 10000
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const langButton = document.getElementById("langToggle");
  const langText = document.getElementById("langText");

  let currentLang = localStorage.getItem("language") || "EN";

  function updateLanguageUI() {
      langText.textContent = currentLang;
      document.documentElement.lang = currentLang === "EN" ? "en" : "ar";
  }

  langButton.addEventListener("click", function () {
      currentLang = currentLang === "EN" ? "AR" : "EN";
      localStorage.setItem("language", currentLang);
      updateLanguageUI();
  });

  updateLanguageUI(); // Set initial state
});
