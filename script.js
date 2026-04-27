
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.18 }
  );

  document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));

  const parallaxNodes = document.querySelectorAll('.parallax');
  const handleMouseMove = (event) => {
    const { innerWidth, innerHeight } = window;
    const x = (event.clientX / innerWidth - 0.5) * 2;
    const y = (event.clientY / innerHeight - 0.5) * 2;

    parallaxNodes.forEach((node) => {
      const depth = Number(node.dataset.depth || 8);
      node.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0)`;
    });
  };

  window.addEventListener('mousemove', handleMouseMove);
} else {
  document.querySelectorAll('.reveal').forEach((node) => node.classList.add('show'));
}
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
