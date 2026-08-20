document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelectorAll(".filter");
  const projects = document.querySelectorAll(".project-detail");
  if (!filters.length) return;

  filters.forEach(button => {
    button.addEventListener("click", () => {
      filters.forEach(b => b.classList.remove("active"));
      button.classList.add("active");
      const filter = button.dataset.filter;
      projects.forEach(project => {
        const categories = project.dataset.category || "";
        project.classList.toggle("hidden", filter !== "all" && !categories.includes(filter));
      });
    });
  });
});
