document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".content");
  const navLinks = document.querySelectorAll(".href");

  // Intersection Observer to track visible sections
  const observerOptions = {
    root: null, // viewport
    threshold: 0.6, // Trigger when 60% of the section is visible
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      const link = document.querySelector(`.href[href="#${entry.target.id}"]`);

      if (entry.isIntersecting) {
        // Highlight the active link
        navLinks.forEach((link) => link.classList.remove("active"));
        link.classList.add("active");
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  sections.forEach((section) => observer.observe(section));
});



// const scrollTopBtn = document.getElementById("scrollTopBtn");

// // Show the button when the user scrolls down
// window.onscroll = function () {
//   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//     scrollTopBtn.style.display = "block";
//   } else {
//     scrollTopBtn.style.display = "none";
//   }
// };

// // Scroll to the top when the button is clicked
// scrollTopBtn.onclick = function () {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth"
//   });
// };

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".href");

  elements.forEach((element) => {
    element.addEventListener("click", () => {
      element.classList.toggle("underlined");
    });
  });
});
