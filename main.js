let nums = document.querySelectorAll(".num");
let section = document.getElementById("info");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetWidth) {
    if (!started) {
      nums.forEach((num) => startcount(num));
    }
    started = true;
  }
};

function startcount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
