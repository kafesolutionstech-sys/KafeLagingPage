/* ==========================================================
   Kafé · Landing page
   1. Topo: faíscas e pedidos de exemplo chegando
   2. Faixa que desliza
   3. Demonstração "a internet caiu"
   4. Conversa de exemplo da IA
   5. Blocos que aparecem ao rolar
   6. Carrossel de projetos
   7. Links do WhatsApp com mensagem pronta
   8. Botão fixo do WhatsApp
   Sem dependências. Os tempos vêm das variáveis --slide-ms e --feed-ms do CSS.
   Com prefers-reduced-motion, tudo fica parado e com o conteúdo inteiro à mostra.
   ========================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.classList.add('js');

  function cssMs(name, fallback) {
    var v = parseInt(getComputedStyle(document.documentElement).getPropertyValue(name), 10);
    return isNaN(v) ? fallback : v;
  }

  /* ---------- 1. Topo ---------- */
  function initSparks(canvas) {
    var ctx = canvas.getContext('2d');
    var w, h;
    var sparks = [];
    for (var i = 0; i < 60; i++) {
      sparks.push({ x: Math.random(), y: Math.random(), v: .0006 + Math.random() * .0016, r: .6 + Math.random() * 2, a: Math.random() });
    }

    function resize() {
      var ratio = window.devicePixelRatio || 1;
      w = canvas.offsetWidth; h = canvas.offsetHeight;
      canvas.width = w * ratio; canvas.height = h * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      sparks.forEach(function (p) {
        p.y -= p.v;
        p.x += Math.sin(p.y * 20 + p.a * 6) * .0006;
        if (p.y < 0) { p.y = 1; p.x = Math.random(); }
        ctx.globalAlpha = .25 + .55 * p.y; // apagam conforme sobem
        ctx.fillStyle = p.a > .7 ? '#F4EADB' : '#E4572E';
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function frame() {
      if (!document.hidden) draw();
      requestAnimationFrame(frame);
    }

    resize();
    window.addEventListener('resize', function () { resize(); draw(); });
    if (reduceMotion) draw(); else requestAnimationFrame(frame);
  }

  // Pedidos de exemplo: [sigla, cor, origem, itens, classe do status, status]
  var ORDERS = [
    ['WA', '#7FD69B', 'WhatsApp', '2 itens', 'pill--new', 'Novo'],
    ['M4', '#F4EADB', 'Mesa 4', '3 itens', 'pill--prep', 'Em preparo'],
    ['iF', '#F4A3A8', 'iFood · em breve', '1 item', 'pill--new', 'Novo'],
    ['B', '#E4572E', 'Balcão', '1 item', 'pill--out', 'Pago'],
    ['M9', '#F4EADB', 'Mesa 9', '5 itens', 'pill--prep', 'Em preparo'],
    ['99', '#FFDD00', '99Food · em breve', '2 itens', 'pill--new', 'Novo'],
    ['S', '#E4572E', 'Pedido do site', '3 itens', 'pill--out', 'Saiu']
  ];

  function initFeed(list) {
    var next = 0;
    var number = 231;

    function add() {
      var o = ORDERS[next++ % ORDERS.length];
      var el = document.createElement('div');
      el.className = 'order';
      el.innerHTML = '<span class="order__src" style="background:' + o[1] + '">' + o[0] + '</span>' +
        '<span class="order__info"><strong>#0' + (number++) + ' · ' + o[2] + '</strong><span>' + o[3] + '</span></span>' +
        '<span class="pill ' + o[4] + '">' + o[5] + '</span>';
      list.insertBefore(el, list.firstChild);
      while (list.children.length > 5) list.removeChild(list.lastChild);
    }

    for (var i = 0; i < 4; i++) add();
    if (reduceMotion) return;
    setInterval(function () { if (!document.hidden) add(); }, cssMs('--feed-ms', 2200));
  }

  /* ---------- 2. Faixa que desliza ---------- */
  // duplica os itens para a animação dar a volta sem buraco
  function initTicker(track) {
    if (!reduceMotion) track.innerHTML += track.innerHTML;
  }

  /* ---------- 3. A internet caiu ---------- */
  function initOffline(root) {
    var toggle = root.querySelector('[data-offline-toggle]');
    var label = root.querySelector('[data-offline-label]');
    var status = root.querySelector('[data-offline-status]');

    toggle.addEventListener('click', function () {
      var off = root.classList.toggle('is-off');
      toggle.setAttribute('aria-pressed', off ? 'false' : 'true');
      label.textContent = off ? 'Internet caiu' : 'Internet ligada';
      status.innerHTML = off
        ? '<strong>O caixa continua.</strong> Garçom lança, cozinha imprime, cliente paga. Só o backup espera a internet voltar.'
        : '<strong>Tudo funcionando.</strong> Pedidos, cozinha e pagamento normais.';
    });
  }

  /* ---------- 4. Conversa de exemplo da IA ---------- */
  function initChat(chat) {
    if (reduceMotion) return; // fica a conversa inteira, parada
    var msgs = Array.prototype.slice.call(chat.querySelectorAll('.msg'));
    var typing = document.createElement('div');
    typing.className = 'typing';
    typing.innerHTML = '<i></i><i></i><i></i>';

    function play() {
      msgs.forEach(function (m) { m.classList.add('is-waiting'); m.classList.remove('is-new'); });
      var t = 500;
      msgs.forEach(function (m) {
        if (m.classList.contains('msg--out')) {
          setTimeout(function () { chat.appendChild(typing); }, t);
          t += 1000;
        }
        setTimeout(function () {
          if (typing.parentNode) chat.removeChild(typing);
          m.classList.remove('is-waiting');
          m.classList.add('is-new');
        }, t);
        t += 1400;
      });
      setTimeout(play, t + 3500);
    }

    play();
  }

  /* ---------- 5. Aparece ao rolar ---------- */
  function initReveal(items) {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      });
    }, { threshold: .15 });
    items.forEach(function (el, i) {
      el.style.transitionDelay = (i % 4) * .08 + 's';
      io.observe(el);
    });
  }

  /* ---------- 6. Carrossel de projetos ---------- */
  function initCarousel(root) {
    var slides = Array.prototype.slice.call(root.querySelectorAll('[data-slide]'));
    var dotsBox = document.querySelector('[data-carousel-dots]');
    var prev = document.querySelector('[data-carousel-prev]');
    var next = document.querySelector('[data-carousel-next]');
    if (!slides.length) return;

    var DURATION = cssMs('--slide-ms', 6000);
    var current = 0;
    var timer = null;
    var hovering = false;
    var dots = [];

    slides.forEach(function (slide, i) {
      var name = slide.querySelector('.slide__name');
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'dot';
      dot.setAttribute('aria-label', 'Ver projeto ' + (i + 1) + (name ? ': ' + name.textContent : ''));
      dot.innerHTML = '<span></span>';
      dot.addEventListener('click', function () { go(i); restart(); });
      dotsBox.appendChild(dot);
      dots.push(dot);
    });

    function go(i) {
      slides[current].classList.remove('is-active');
      current = (i + slides.length) % slides.length;
      void slides[current].offsetWidth; // reinicia as animações de entrada
      slides[current].classList.add('is-active');
      dots.forEach(function (d, j) { d.setAttribute('aria-current', j === current ? 'true' : 'false'); });
    }

    function restart() {
      clearInterval(timer);
      if (reduceMotion) return;
      timer = setInterval(function () {
        if (!hovering && !document.hidden) go(current + 1);
      }, DURATION);
    }

    prev.addEventListener('click', function () { go(current - 1); restart(); });
    next.addEventListener('click', function () { go(current + 1); restart(); });
    root.addEventListener('mouseenter', function () { hovering = true; });
    root.addEventListener('mouseleave', function () { hovering = false; });
    root.addEventListener('focusin', function () { hovering = true; });
    root.addEventListener('focusout', function () { hovering = false; });

    // links da faixa "Quem já toma kafé com a gente" abrem o slide do cliente
    document.querySelectorAll('[data-slide-link]').forEach(function (a) {
      a.addEventListener('click', function () { go(parseInt(a.getAttribute('data-slide-link'), 10)); restart(); });
    });

    // arrastar com o dedo no celular
    var startX = null;
    root.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
    root.addEventListener('touchend', function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) { go(current + (dx < 0 ? 1 : -1)); restart(); }
      startX = null;
    });

    go(0);
    restart();
  }

  /* ---------- 7. Links do WhatsApp ---------- */
  var WA_NUMBER = '5514981861140';

  function initWhatsApp() {
    document.querySelectorAll('[data-wa]').forEach(function (a) {
      a.href = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(a.getAttribute('data-wa'));
    });
  }

  /* ---------- 8. Botão fixo do WhatsApp ---------- */
  // some enquanto o topo ou o contato estão na tela, que já têm o próprio botão
  function initFloat(btn) {
    var watched = Array.prototype.slice.call(document.querySelectorAll('[data-wa-hide]'));
    if (!watched.length || !('IntersectionObserver' in window)) return;
    var onScreen = watched.map(function () { return false; });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { onScreen[watched.indexOf(e.target)] = e.isIntersecting; });
      btn.classList.toggle('is-hidden', onScreen.indexOf(true) !== -1);
    });
    watched.forEach(function (el) { io.observe(el); });
  }

  document.querySelectorAll('[data-sparks]').forEach(initSparks);
  document.querySelectorAll('[data-feed]').forEach(initFeed);
  document.querySelectorAll('[data-ticker]').forEach(initTicker);
  document.querySelectorAll('[data-offline]').forEach(initOffline);
  document.querySelectorAll('[data-chat]').forEach(initChat);
  initReveal(Array.prototype.slice.call(document.querySelectorAll('.reveal')));
  document.querySelectorAll('[data-carousel]').forEach(initCarousel);
  initWhatsApp();
  document.querySelectorAll('[data-wa-float]').forEach(initFloat);

  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
