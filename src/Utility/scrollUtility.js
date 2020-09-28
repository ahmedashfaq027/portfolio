function smoothScroll(target, duration) {
  var targetEl = document.querySelector(target);

  var offset = 49;
  window.scroll({
    top: targetEl.offsetTop - offset,
    left: 0,
    behavior: "smooth",
  });
}

export default smoothScroll;
