const current = location.pathname.split('/').pop() || 'index.html';
const navItems = [
  ['index.html','Home'],['problem.html','The Problem'],['cases.html','Real Cases'],['solution.html','Our Solution'],['impact.html','SDG 15 Impact']
];

document.querySelector('[data-header]').innerHTML = `
<header class="site-header">
  <a class="brand" href="index.html" aria-label="TerraTrace home">
    <span class="brand-mark">⌁</span><span>TerraTrace</span>
  </a>
  <nav class="nav">${navItems.map(([href,label])=>`<a href="${href}" class="${current===href?'active':''}">${label}</a>`).join('')}</nav>
  <button class="menu-btn" aria-label="Open menu">☰</button>
</header>`;

document.querySelector('[data-footer]').innerHTML = `
<footer><div class="container footer-inner"><div>TerraTrace — Protecting the ground beneath our history.</div><div>Academic concept · SDG 15 · 2026</div></div></footer>`;
