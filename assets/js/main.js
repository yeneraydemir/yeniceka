document.addEventListener("DOMContentLoaded", () => {
  const interactiveSelector = "a, button, input, textarea, select, label, summary, [role='button']";

  document.querySelectorAll("[data-card-link]").forEach((card) => {
    const target = card.getAttribute("data-card-link");
    if (!target) {
      return;
    }

    const openTarget = () => {
      window.location.href = target;
    };

    card.addEventListener("click", (event) => {
      if (event.target.closest(interactiveSelector)) {
        return;
      }
      if (window.getSelection && window.getSelection().toString()) {
        return;
      }
      openTarget();
    });

    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }
      event.preventDefault();
      openTarget();
    });
  });
});
