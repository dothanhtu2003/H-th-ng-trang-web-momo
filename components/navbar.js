class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .navbar {
          background-color: #a50064;
          color: white;
        }
        .nav-link { display: inline-flex; align-items: center; line-height: 1; text-transform: capitalize; letter-spacing: 0.01em; }
        .nav-link:hover { opacity: 0.8; }
        .mobile-menu {
          background-color: #8a0054;
        }
      </style>
      <nav class="navbar sticky top-0 z-50 shadow-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0 flex items-center">
                <a href="#" class="brand text-white font-bold text-xl flex items-center">
                  <i  class="mr-2"><img src="https://homepage.momocdn.net/fileuploads/svg/momo-file-240411162904.svg" alt="" class="h-6 w-auto"></i>
                  <span data-i18n="MoMo">MoMo</span>
                </a>
              </div>
            </div>
            <div class="hidden sm:flex flex-1 justify-center items-center space-x-8">
              <a href="#" class="nav-link inline-flex items-center text-white px-3 py-2 rounded-md text-sm font-medium" data-i18n="home">Trang chủ</a>
              <a href="#shortcuts" class="nav-link inline-flex items-center text-white px-3 py-2 rounded-md text-sm font-medium" data-i18n="shortcuts">Tiện ích</a>
              <a href="#promos" class="nav-link inline-flex items-center text-white px-3 py-2 rounded-md text-sm font-medium" data-i18n="promos">Khuyến mãi</a>
              <a href="#partners" class="nav-link inline-flex items-center text-white px-3 py-2 rounded-md text-sm font-medium" data-i18n="partners">Đối tác</a>
              <a href="#services" class="nav-link inline-flex items-center text-white px-3 py-2 rounded-md text-sm font-medium" data-i18n="services">Dịch vụ</a>
              <a href="#news" class="nav-link inline-flex items-center text-white px-3 py-2 rounded-md text-sm font-medium" data-i18n="news">Tin tức</a>
              <a href="#faq" class="nav-link inline-flex items-center text-white px-3 py-2 rounded-md text-sm font-medium" data-i18n="faq">FAQ</a>
              <a href="#app-cta" class="nav-link inline-flex items-center text-white px-3 py-2 rounded-md text-sm font-medium" data-i18n="download">Tải app</a>
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:items-center space-x-2">
              <button id="toggle-dark" class="px-3 py-2 rounded-md text-sm font-medium bg-white/20 hover:bg-white/25" aria-label="Dark Mode">
                <i data-feather="moon"></i>
              </button>
              <button class="btn-momo px-4 py-2 rounded-md text-sm font-medium">
                <span data-i18n="login">Đăng nhập</span>
              </button>
            </div>
            <div class="-mr-2 flex items-center sm:hidden">
              <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none">
                <i data-feather="menu"></i>
              </button>
            </div>
          </div>
        </div>
        
        <div class="mobile-menu hidden sm:hidden" id="mobile-menu">
          <div class="pt-2 pb-3 space-y-1">
            <a href="#" class="block px-3 py-2 text-white text-sm font-medium" data-i18n="home">Trang chủ</a>
            <a href="#shortcuts" class="block px-3 py-2 text-white text-sm font-medium" data-i18n="shortcuts">Tiện ích</a>
            <a href="#promos" class="block px-3 py-2 text-white text-sm font-medium" data-i18n="promos">Khuyến mãi</a>
            <a href="#partners" class="block px-3 py-2 text-white text-sm font-medium" data-i18n="partners">Đối tác</a>
            <a href="#services" class="block px-3 py-2 text-white text-sm font-medium" data-i18n="services">Dịch vụ</a>
            <a href="#news" class="block px-3 py-2 text-white text-sm font-medium" data-i18n="news">Tin tức</a>
            <a href="#faq" class="block px-3 py-2 text-white text-sm font-medium" data-i18n="faq">FAQ</a>
            <a href="#app-cta" class="block px-3 py-2 text-white text-sm font-medium" data-i18n="download">Tải app</a>
            <a href="#" class="block px-3 py-2 text-white text-sm font-medium" data-i18n="login">Đăng nhập</a>
          </div>
        </div>
      </nav>
    `;

    const toggleBtn = this.querySelector('[data-collapse-toggle="mobile-menu"]');
    const mobileMenu = this.querySelector('#mobile-menu');
    if (toggleBtn && mobileMenu) {
      toggleBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    if (window.feather && typeof window.feather.replace === 'function') {
      window.feather.replace();
    }

    const brandEl = this.querySelector('.brand');
    if (brandEl && window.ASSETS && window.ASSETS.logo) {
      brandEl.innerHTML = `<img src="${window.ASSETS.logo}" alt="Logo" class="h-6 w-auto"/>`;
    }

    // Dark mode persistence
    const applyDark = (on) => {
      const root = document.documentElement;
      root.classList.toggle('dark', !!on);
      document.body.classList.toggle('dark', !!on);
      if (window.feather && typeof window.feather.replace === 'function') window.feather.replace();
    };
    const savedTheme = localStorage.getItem('theme');
    applyDark(savedTheme === 'dark');
    const darkBtn = this.querySelector('#toggle-dark');
    if (darkBtn) {
      darkBtn.addEventListener('click', () => {
        const nowDark = !document.documentElement.classList.contains('dark');
        applyDark(nowDark);
        localStorage.setItem('theme', nowDark ? 'dark' : 'light');
      });
    }

    // Simple i18n
    const dict = {
      vi: { brand: 'MoMo Clone', home: 'Trang chủ', shortcuts: 'Tiện ích', promos: 'Khuyến mãi', partners: 'Đối tác', services: 'Dịch vụ', news: 'Tin tức', faq: 'FAQ', download: 'Tải app', login: 'Đăng nhập' },
      en: { brand: 'MoMo Clone', home: 'Home', shortcuts: 'Shortcuts', promos: 'Promos', partners: 'Partners', services: 'Services', news: 'News', faq: 'FAQ', download: 'Get App', login: 'Sign in' }
    };
    const setLang = (lang) => {
      const map = dict[lang] || dict.vi;
      this.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.getAttribute('data-i18n');
        if (map[k]) el.textContent = map[k];
      });
      localStorage.setItem('lang', lang);
      document.documentElement.setAttribute('lang', lang);
    };
    const langSel = this.querySelector('#lang-select');
    const savedLang = localStorage.getItem('lang') || 'vi';
    if (langSel) { langSel.value = savedLang; langSel.addEventListener('change', () => setLang(langSel.value)); }
    setLang(savedLang);
  }
}
customElements.define('custom-navbar', CustomNavbar);