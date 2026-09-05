// Highlight active nav link based on scroll position
const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) current = section.getAttribute("id");
  });

  // اگه به ته صفحه رسیدیم (مثلاً بخش Contact فضای کافی برای اسکرول رد شدن نداره)
  // آخرین بخش رو به‌زور فعال کن
  const reachedBottom =
    window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;
  if (reachedBottom && sections.length) {
    current = sections[sections.length - 1].getAttribute("id");
  }

  links.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`,
    );
  });
});

// Animate skill bars when they scroll into view
const fills = document.querySelectorAll(".fill");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.transition = "width 1s ease";
        entry.target.style.width = getComputedStyle(
          entry.target,
        ).getPropertyValue("--pct");
      }
    });
  },
  { threshold: 0.4 },
);

fills.forEach((fill) => {
  fill.style.width = "0%";
  observer.observe(fill);
});
