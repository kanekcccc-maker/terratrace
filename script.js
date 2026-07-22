const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => nav.classList.toggle('open'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .14 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('a[href$=".html"]').forEach(link => {
  link.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey) return;
    event.preventDefault();
    document.body.classList.add('is-leaving');
    setTimeout(() => location.href = link.href, 330);
  });
});
