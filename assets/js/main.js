/* ==========================================================
   CASABLANCA STORE — main.js
   Header scroll · Mobile menu · Cart drawer · Animations
   ========================================================== */

(() => {
  const header = document.querySelector('.site-header');
  const heroPresent = document.querySelector('[data-hero-transparent]');

  /* ---- Header transparent → solide au scroll ---- */
  const setHeaderState = () => {
    const y = window.scrollY;
    if (heroPresent) {
      if (y < 80) {
        header.classList.add('is-transparent');
        header.classList.remove('is-scrolled');
      } else {
        header.classList.remove('is-transparent');
        header.classList.add('is-scrolled');
      }
    } else {
      if (y > 4) header.classList.add('is-scrolled');
      else header.classList.remove('is-scrolled');
    }
  };
  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });

  /* ---- Mobile menu ---- */
  const menuBtn = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('is-open');
      document.body.style.overflow = mobileMenu.classList.contains('is-open') ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---- Reveal au scroll ---- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  }

  /* ---- Panier (localStorage) ---- */
  const CART_KEY = 'cs_cart_v1';
  const getCart = () => {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
    catch { return []; }
  };
  const setCart = (cart) => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount();
    renderCartDrawer();
  };
  const cartCount = () => getCart().reduce((n, i) => n + i.qty, 0);
  const cartTotal = () => getCart().reduce((n, i) => n + i.price * i.qty, 0);

  const updateCartCount = () => {
    document.querySelectorAll('.cart-count').forEach(el => {
      const n = cartCount();
      el.textContent = n;
      el.style.display = n > 0 ? 'inline-flex' : 'none';
    });
  };

  const fmt = (n) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(n);

  const renderCartDrawer = () => {
    const body = document.querySelector('[data-cart-body]');
    const totalEl = document.querySelector('[data-cart-total]');
    if (!body) return;
    const cart = getCart();
    if (!cart.length) {
      body.innerHTML = `
        <div class="cart-drawer__empty">
          <p>Votre panier est vide.</p>
          <a href="/collections/homme.html" class="btn-link">Découvrir l'homme</a>
        </div>`;
      if (totalEl) totalEl.textContent = fmt(0);
      const checkoutBtn = document.querySelector('[data-checkout]');
      if (checkoutBtn) checkoutBtn.disabled = true;
      return;
    }
    body.innerHTML = cart.map((item, i) => `
      <article class="cart-line" style="display:grid;grid-template-columns:80px 1fr auto;gap:1rem;padding:1rem 0;border-bottom:1px solid var(--color-line);">
        <div style="aspect-ratio:4/5;background:var(--color-cream);overflow:hidden;">
          ${item.image ? `<img src="${item.image}" alt="" style="width:100%;height:100%;object-fit:cover;">` : ''}
        </div>
        <div>
          <p style="font-family:var(--font-display);font-size:1rem;margin:0 0 4px;">${item.title}</p>
          <p style="font-size:.75rem;color:var(--color-muted);margin:0 0 8px;letter-spacing:.08em;text-transform:uppercase;">${item.variant || ''}</p>
          <div style="display:flex;align-items:center;gap:8px;">
            <button data-cart-dec="${i}" aria-label="-" style="width:24px;height:24px;border:1px solid var(--color-line-strong);">−</button>
            <span>${item.qty}</span>
            <button data-cart-inc="${i}" aria-label="+" style="width:24px;height:24px;border:1px solid var(--color-line-strong);">+</button>
          </div>
        </div>
        <div style="text-align:right;">
          <p style="margin:0 0 6px;font-weight:500;">${fmt(item.price * item.qty)}</p>
          <button data-cart-rm="${i}" style="font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;color:var(--color-muted);text-decoration:underline;">Retirer</button>
        </div>
      </article>
    `).join('');
    if (totalEl) totalEl.textContent = fmt(cartTotal());
    const checkoutBtn = document.querySelector('[data-checkout]');
    if (checkoutBtn) checkoutBtn.disabled = false;
  };

  /* ---- Drawer open/close ---- */
  const drawer = document.querySelector('.cart-drawer');
  const overlay = document.querySelector('.drawer-overlay');
  const openDrawer = () => {
    if (!drawer) return;
    drawer.classList.add('is-open');
    overlay && overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    renderCartDrawer();
  };
  const closeDrawer = () => {
    drawer && drawer.classList.remove('is-open');
    overlay && overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  };
  document.querySelectorAll('[data-cart-open]').forEach(b => b.addEventListener('click', (e) => { e.preventDefault(); openDrawer(); }));
  document.querySelectorAll('[data-cart-close]').forEach(b => b.addEventListener('click', closeDrawer));
  overlay && overlay.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

  /* ---- Add / inc / dec / rm ---- */
  document.addEventListener('click', (e) => {
    const addBtn = e.target.closest('[data-add-to-cart]');
    if (addBtn) {
      e.preventDefault();
      const card = addBtn.closest('[data-product]') || addBtn;
      const item = {
        id: card.dataset.id || addBtn.dataset.id,
        title: card.dataset.title || addBtn.dataset.title,
        price: parseFloat(card.dataset.price || addBtn.dataset.price),
        image: card.dataset.image || addBtn.dataset.image || '',
        variant: card.dataset.variant || addBtn.dataset.variant || '',
        qty: 1,
      };
      const cart = getCart();
      const found = cart.find(i => i.id === item.id && i.variant === item.variant);
      if (found) found.qty += 1; else cart.push(item);
      setCart(cart);
      openDrawer();
      return;
    }
    const inc = e.target.closest('[data-cart-inc]');
    if (inc) {
      const cart = getCart(); cart[+inc.dataset.cartInc].qty += 1; setCart(cart);
    }
    const dec = e.target.closest('[data-cart-dec]');
    if (dec) {
      const cart = getCart();
      const i = +dec.dataset.cartDec;
      cart[i].qty -= 1;
      if (cart[i].qty <= 0) cart.splice(i, 1);
      setCart(cart);
    }
    const rm = e.target.closest('[data-cart-rm]');
    if (rm) {
      const cart = getCart(); cart.splice(+rm.dataset.cartRm, 1); setCart(cart);
    }
  });

  /* ---- Drawer "Passer commande" → cart.html ---- */
  document.querySelectorAll('[data-checkout]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (btn.disabled) return;
      e.preventDefault();
      // Détecter le bon chemin selon la profondeur de la page
      const depth = window.location.pathname.split('/').filter(Boolean).length;
      const inSubdir = depth > 1 || /\/(collections|products|pages|blog)\//.test(window.location.pathname);
      window.location.href = inSubdir ? '../cart.html' : 'cart.html';
    });
  });

  /* ---- Sync cart count quand mis à jour depuis cart.html ---- */
  window.addEventListener('cart-updated', () => {
    updateCartCount();
    renderCartDrawer();
  });

  /* ---- Init ---- */
  updateCartCount();
  renderCartDrawer();

  /* ---- Newsletter (placeholder) ---- */
  document.querySelectorAll('[data-newsletter]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (!input || !input.value.includes('@')) return;
      form.innerHTML = `<p style="padding:1rem 0;color:var(--color-success);font-weight:500;">Merci, vous êtes inscrit·e à la liste privée.</p>`;
    });
  });

  /* ==========================================================
     COOKIE BANNER (RGPD compliant)
     ========================================================== */
  const COOKIE_KEY = 'cs_cookie_consent_v1';
  const getConsent = () => {
    try { return JSON.parse(localStorage.getItem(COOKIE_KEY)); }
    catch { return null; }
  };
  const setConsent = (consent) => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ ...consent, timestamp: Date.now() }));
    applyConsent(consent);
  };
  const applyConsent = (consent) => {
    // Hooks pour les vrais scripts (Meta Pixel, GA4, etc.)
    if (consent.analytics) {
      // window.gtag && window.gtag('consent', 'update', { analytics_storage: 'granted' });
      document.documentElement.setAttribute('data-consent-analytics', '1');
    }
    if (consent.marketing) {
      // window.fbq && window.fbq('consent', 'grant');
      document.documentElement.setAttribute('data-consent-marketing', '1');
    }
  };

  const buildBanner = () => {
    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Préférences de cookies');
    banner.innerHTML = `
      <div class="cookie-banner__inner">
        <div class="cookie-banner__main" data-cookie-view="main">
          <div class="cookie-banner__text">
            <h4>Cookies & vie privée</h4>
            <p>Nous utilisons des cookies pour assurer le bon fonctionnement du site, mesurer son audience et améliorer votre expérience. Vous pouvez accepter, refuser ou personnaliser à tout moment.</p>
          </div>
          <div class="cookie-banner__actions">
            <button class="btn-cookie btn-cookie--ghost" data-cookie="customize">Personnaliser</button>
            <button class="btn-cookie btn-cookie--ghost" data-cookie="refuse">Tout refuser</button>
            <button class="btn-cookie btn-cookie--primary" data-cookie="accept">Tout accepter</button>
          </div>
          <p class="cookie-banner__legal"><a href="/pages/cookies.html">Politique cookies</a> · <a href="/pages/confidentialite.html">Politique de confidentialité</a></p>
        </div>
        <div class="cookie-banner__custom" data-cookie-view="custom" hidden>
          <h4>Personnaliser mes choix</h4>
          <ul class="cookie-list">
            <li>
              <div class="cookie-list__head">
                <span><strong>Cookies nécessaires</strong> · toujours actifs</span>
                <span class="cookie-toggle" data-on></span>
              </div>
              <p>Indispensables au fonctionnement du site (panier, sécurité, préférences). Ne peuvent pas être désactivés.</p>
            </li>
            <li>
              <div class="cookie-list__head">
                <span><strong>Cookies analytiques</strong></span>
                <label class="cookie-toggle"><input type="checkbox" data-toggle="analytics" /><span></span></label>
              </div>
              <p>Mesure d'audience anonymisée (Google Analytics 4) pour comprendre les pages les plus consultées et améliorer le site.</p>
            </li>
            <li>
              <div class="cookie-list__head">
                <span><strong>Cookies marketing</strong></span>
                <label class="cookie-toggle"><input type="checkbox" data-toggle="marketing" /><span></span></label>
              </div>
              <p>Permettent de vous proposer des publicités pertinentes sur Meta (Facebook/Instagram), Google Ads, TikTok et de mesurer leur efficacité.</p>
            </li>
          </ul>
          <div class="cookie-banner__actions" style="margin-top:1rem;">
            <button class="btn-cookie btn-cookie--ghost" data-cookie="back">← Retour</button>
            <button class="btn-cookie btn-cookie--primary" data-cookie="save">Enregistrer mes choix</button>
          </div>
        </div>
      </div>`;
    document.body.appendChild(banner);

    const showView = (name) => {
      banner.querySelectorAll('[data-cookie-view]').forEach(v => v.hidden = v.dataset.cookieView !== name);
    };

    banner.addEventListener('click', (e) => {
      const action = e.target.closest('[data-cookie]')?.dataset.cookie;
      if (!action) return;
      if (action === 'accept') {
        setConsent({ necessary: true, analytics: true, marketing: true });
        banner.remove();
      } else if (action === 'refuse') {
        setConsent({ necessary: true, analytics: false, marketing: false });
        banner.remove();
      } else if (action === 'customize') {
        showView('custom');
      } else if (action === 'back') {
        showView('main');
      } else if (action === 'save') {
        const analytics = banner.querySelector('[data-toggle="analytics"]')?.checked || false;
        const marketing = banner.querySelector('[data-toggle="marketing"]')?.checked || false;
        setConsent({ necessary: true, analytics, marketing });
        banner.remove();
      }
    });

    requestAnimationFrame(() => banner.classList.add('is-open'));
  };

  const consent = getConsent();
  if (!consent) {
    setTimeout(buildBanner, 600);
  } else {
    applyConsent(consent);
  }

  // Lien "Gérer mes cookies" (footer ou ailleurs)
  document.querySelectorAll('[data-cookie-reopen]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem(COOKIE_KEY);
      buildBanner();
    });
  });
})();

/* ==========================================================
   MOBILE OPTIMIZATIONS — Bottom nav + scroll header + toast
   ========================================================== */
(() => {
  if (typeof window === 'undefined') return;

  /* ---------- Bottom navigation injection (mobile) ---------- */
  const buildBottomNav = () => {
    if (document.querySelector('.bottom-nav')) return;
    const isSubdir = /\/(collections|products|pages|blog)\//.test(location.pathname);
    const prefix = isSubdir ? '../' : '';
    const nav = document.createElement('nav');
    nav.className = 'bottom-nav';
    nav.setAttribute('aria-label', 'Navigation principale');
    nav.innerHTML = `
      <div class="bottom-nav__inner">
        <a class="bottom-nav__item" href="${prefix}index.html" data-bn="home">
          <svg viewBox="0 0 24 24"><path d="M3 11l9-7 9 7v10a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2V11z"/></svg>
          <span class="bottom-nav__label">Accueil</span>
        </a>
        <a class="bottom-nav__item" href="${prefix}collections/homme.html" data-bn="shop">
          <svg viewBox="0 0 24 24"><path d="M5 8h14l-1.5 11.5a2 2 0 0 1-2 1.7H8.5a2 2 0 0 1-2-1.7L5 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>
          <span class="bottom-nav__label">Boutique</span>
        </a>
        <a class="bottom-nav__item" href="${prefix}blog/index.html" data-bn="journal">
          <svg viewBox="0 0 24 24"><path d="M5 4h14v16H5z"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>
          <span class="bottom-nav__label">Journal</span>
        </a>
        <button class="bottom-nav__item" data-cart-open data-bn="cart" type="button" style="background:none;border:0;font:inherit;color:inherit;cursor:pointer;">
          <svg viewBox="0 0 24 24"><path d="M5 7h14l-1.5 11.5a2 2 0 0 1-2 1.7H8.5a2 2 0 0 1-2-1.7L5 7z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/></svg>
          <span class="bottom-nav__label">Panier</span>
          <span class="bottom-nav__badge cart-count" style="display:none;">0</span>
        </button>
      </div>`;
    document.body.appendChild(nav);

    // Active state selon page actuelle
    const path = location.pathname;
    const items = nav.querySelectorAll('.bottom-nav__item');
    if (path.endsWith('/') || path.endsWith('index.html')) items[0].classList.add('is-active');
    else if (/\/collections\//.test(path)) items[1].classList.add('is-active');
    else if (/\/blog\//.test(path)) items[2].classList.add('is-active');
  };
  buildBottomNav();

  /* ---------- Bottom nav hide-on-scroll-down, show-on-scroll-up ---------- */
  let lastY = window.scrollY;
  let ticking = false;
  const bnav = document.querySelector('.bottom-nav');
  if (bnav) {
    window.addEventListener('scroll', () => {
      if (ticking) return;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const dy = y - lastY;
        // Cache si scroll vers le bas et y > 200px
        if (dy > 4 && y > 200) bnav.classList.add('is-hidden');
        // Réaffiche si scroll vers le haut OU si proche du haut
        else if (dy < -4 || y < 100) bnav.classList.remove('is-hidden');
        lastY = y;
        ticking = false;
      });
      ticking = true;
    }, { passive: true });
  }

  /* ---------- Re-bind cart-open + cart-count après injection ---------- */
  const reinitCartHandlers = () => {
    document.querySelectorAll('[data-cart-open]').forEach(b => {
      if (b.dataset.cartBound) return;
      b.dataset.cartBound = '1';
      b.addEventListener('click', (e) => {
        e.preventDefault();
        const drawer = document.querySelector('.cart-drawer');
        const overlay = document.querySelector('.drawer-overlay');
        if (drawer) {
          drawer.classList.add('is-open');
          overlay && overlay.classList.add('is-open');
          document.body.style.overflow = 'hidden';
          window.dispatchEvent(new Event('cart-updated'));
        }
      });
    });
    // Sync count
    try {
      const cart = JSON.parse(localStorage.getItem('cs_cart_v1') || '[]');
      const n = cart.reduce((acc, i) => acc + (i.qty || 0), 0);
      document.querySelectorAll('.cart-count').forEach(el => {
        el.textContent = n;
        el.style.display = n > 0 ? 'inline-flex' : 'none';
      });
    } catch {}
  };
  reinitCartHandlers();
  window.addEventListener('cart-updated', reinitCartHandlers);

  /* ---------- Toast notification (added to cart) ---------- */
  let toastContainer = null;
  const showToast = (message) => {
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.className = 'toast-container';
      document.body.appendChild(toastContainer);
    }
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M5 12l5 5 9-9"/></svg>
      <span>${message}</span>`;
    toastContainer.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('is-shown'));
    setTimeout(() => {
      toast.classList.remove('is-shown');
      setTimeout(() => toast.remove(), 320);
    }, 2500);
  };

  // Hook sur add-to-cart
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-add-to-cart]');
    if (btn) {
      const card = btn.closest('[data-product]');
      const title = (card?.dataset.title || btn.dataset.title || 'Article').trim();
      setTimeout(() => showToast(`✓ ${title.slice(0, 40)} ajouté au panier`), 100);
    }
  });

  /* ---------- Smart hide announce bar on scroll (mobile only) ---------- */
  const announce = document.querySelector('.announce');
  if (announce && window.innerWidth <= 768) {
    let lastAnnounceY = 0;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y > 100 && y > lastAnnounceY) {
        announce.style.transform = 'translateY(-100%)';
        announce.style.transition = 'transform 320ms cubic-bezier(0.16, 1, 0.3, 1)';
      } else if (y < lastAnnounceY) {
        announce.style.transform = 'translateY(0)';
      }
      lastAnnounceY = y;
    }, { passive: true });
  }
})();
