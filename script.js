/* ==========================================================================
   Preeti Kapoor — site behaviour
   Progressive enhancement only: every section renders without JS.
   Loaded with `defer`, so the DOM is parsed before this runs.
   (Initial theme + the `.js` flag are set by a tiny inline script in <head>
    to avoid a flash of the wrong theme.)
   ========================================================================== */
(function () {
  'use strict';

  /* ---- Theme toggle (persists choice in localStorage) ---- */
  var root = document.documentElement;
  var toggle = document.getElementById('themeToggle');
  var themeMeta = document.querySelector('meta[name=theme-color]');

  function syncToggle() {
    var dark = root.classList.contains('dark');
    if (toggle) toggle.setAttribute('aria-pressed', String(dark));
    if (themeMeta) themeMeta.setAttribute('content', dark ? '#0a0a0a' : '#ffffff');
  }
  syncToggle();

  if (toggle) {
    toggle.addEventListener('click', function () {
      root.classList.toggle('dark');
      try { localStorage.setItem('pk-theme', root.classList.contains('dark') ? 'dark' : 'light'); } catch (e) {}
      syncToggle();
    });
  }

  /* ---- Scroll progress bar + condensed nav ---- */
  var nav = document.getElementById('nav');
  var bar = document.getElementById('progress');
  function onScroll() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    if (bar) bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 24);
  }
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Hero entrance ---- */
  var heroGrid = document.getElementById('heroGrid');
  if (heroGrid) requestAnimationFrame(function () { requestAnimationFrame(function () { heroGrid.classList.add('run'); }); });

  /* ---- Count-up (honours reduced-motion; real numbers live in the HTML) ---- */
  var reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion) document.querySelectorAll('.count').forEach(function (c) { c.textContent = '0'; });

  function countUp(el) {
    if (reduceMotion) { el.textContent = el.dataset.target; return; }
    var t = +el.dataset.target, start = performance.now(), dur = 1100;
    function tick(n) {
      var p = Math.min((n - start) / dur, 1), e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(e * t);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ---- Reveal-on-scroll + count + stagger ---- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      el.classList.add('in');
      el.querySelectorAll('.count').forEach(countUp);
      io.unobserve(el);
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  /* ---- Active nav link while scrolling ---- */
  var navLinks = [].slice.call(document.querySelectorAll('.nav-links a'));
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var link = navLinks.find(function (a) { return a.getAttribute('href') === '#' + e.target.id; });
      if (!link) return;
      navLinks.forEach(function (a) { a.classList.remove('active'); });
      link.classList.add('active');
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  ['about', 'work', 'skills', 'education'].forEach(function (id) {
    var s = document.getElementById(id);
    if (s) spy.observe(s);
  });

  /* ---- Footer year ---- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
