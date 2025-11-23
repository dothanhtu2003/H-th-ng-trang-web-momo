class CustomPromos extends HTMLElement {
  connectedCallback() {
    const promos = (window.ASSETS && Array.isArray(window.ASSETS.promos) && window.ASSETS.promos.length)
      ? window.ASSETS.promos
      : [1,2,3,4,5].map(i => `https://picsum.photos/1200/500?random=${i}`);

    this.innerHTML = `
      <section id="promos" class="py-10 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-end justify-between mb-6">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800">Khuyến mãi</h2>
            <div class="hidden md:flex space-x-2">
              <button class="swiper-button-prev p-2 rounded-full bg-white shadow hover:bg-gray-100" aria-label="Prev">
                <i data-feather="chevron-left"></i>
              </button>
              <button class="swiper-button-next p-2 rounded-full bg-white shadow hover:bg-gray-100" aria-label="Next">
                <i data-feather="chevron-right"></i>
              </button>
            </div>
          </div>

          <div class="swiper">
            <div class="swiper-wrapper">
              ${promos.map((url, i) => `
                <div class="swiper-slide">
                  <div class="overflow-hidden rounded-2xl shadow bg-white skeleton" data-skel>
                    <img src="${url}" alt="Promo ${i+1}" class="w-full h-48 md:h-64 object-cover"/>
                  </div>
                </div>
              `).join('')}
            </div>
            <div class="swiper-pagination mt-4"></div>
          </div>
        </div>
      </section>
    `;

    if (window.feather && typeof window.feather.replace === 'function') {
      window.feather.replace();
    }

    const containerEl = this.querySelector('.swiper');
    const paginationEl = this.querySelector('.swiper-pagination');
    const nextEl = this.querySelector('.swiper-button-next');
    const prevEl = this.querySelector('.swiper-button-prev');

    const init = () => {
      if (!window.Swiper || !containerEl || !paginationEl) return false;

      const start = () => {
        const swiper = new Swiper(containerEl, {
          loop: true,
          autoplay: { delay: 3000, disableOnInteraction: false },
          pagination: { el: paginationEl, clickable: true },
          navigation: nextEl && prevEl ? { nextEl, prevEl } : undefined,
          slidesPerView: 1,
          spaceBetween: 16,
          breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }
        });

        const once = new IntersectionObserver((entries) => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              swiper.update();
              once.disconnect();
            }
          });
        }, { threshold: 0.1 });
        once.observe(containerEl);
      };

      // Wait for images load to avoid wrong sizing and remove skeletons
      const imgs = Array.from(containerEl.querySelectorAll('img'));
      if (imgs.length) {
        let left = imgs.length;
        const done = (img) => {
          // remove skeleton on parent container
          if (img && img.parentElement && img.parentElement.hasAttribute('data-skel')) {
            img.parentElement.classList.remove('skeleton');
            img.parentElement.removeAttribute('data-skel');
          }
          left--; if (left <= 0) requestAnimationFrame(start);
        };
        imgs.forEach(img => {
          if (img.complete) { done(img); } else { img.addEventListener('load', () => done(img)); img.addEventListener('error', () => done(img)); }
        });
      } else {
        requestAnimationFrame(start);
      }
      return true;
    };

    // If Swiper not ready, dynamically load from CDN then init
    if (!window.Swiper) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js';
      script.onload = () => init();
      document.head.appendChild(script);
    } else {
      init();
    }
  }
}
customElements.define('custom-promos', CustomPromos);
