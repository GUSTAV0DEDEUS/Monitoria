export default function Expanded(index, bool) {
  const items = document.querySelectorAll(".expandable-row");

  if (bool) {
    items.forEach((el) => {
      if (el.classList.contains("active")) {
        el.classList.remove("active");
      }
    });
  } else {
    items.forEach((el, i) => {
      if (index === i) {
        el.classList.add("active");
      } else if (el.classList.contains("active")) {
        el.classList.remove("active");
      }
    });
  }
}
