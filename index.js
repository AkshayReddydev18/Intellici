document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("#container a");
  const contents = document.querySelectorAll(".container_fluid .content");
  const container = document.querySelector("#container");

  // Function to remove the underline from all links
  const removeUnderline = () => {
    links.forEach(link => {
      link.style.textDecoration = "none";
    });
  };

  // Function to add underline to the active link and scroll the container
  const addUnderline = (id) => {
    const activeLink = document.querySelector(`#container a[href="${id}"]`);
    if (activeLink) {
      activeLink.style.textDecoration = "#ff2a00 underline";
      // Scroll the container to make the active link visible
      const linkOffset = activeLink.offsetLeft;
      const linkWidth = activeLink.offsetWidth;
      const containerWidth = container.offsetWidth;
      const scrollPosition = linkOffset - (containerWidth / 2) + (linkWidth / 2);
      container.scrollTo({ left: scrollPosition, behavior: "smooth" });
    }
  };

  // Check which section is in view
  const highlightSection = () => {
    contents.forEach(content => {
      const rect = content.getBoundingClientRect();
      const id = `#${content.id}`;

      // Check if the section is visible in the viewport
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        removeUnderline();
        addUnderline(id);
      }
    });
  };

  // Attach scroll event listener
  window.addEventListener("scroll", highlightSection);

  // Initial check on page load
  highlightSection();
});
