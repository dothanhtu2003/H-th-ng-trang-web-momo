class CustomPartners extends HTMLElement {
  connectedCallback() {
    const raw = [
      { name: "Thế Giới Di Động", logo: "https://homepage.momocdn.net/placebrand/momo-amazone-s3-api-250318104150-638778913103319133.jpg", rating: 4.6, stores: 320 },
      { name: "Điện Máy Xanh", logo: "https://homepage.momocdn.net/placebrand/momo-amazone-s3-api-250318100950-638778893903416933.jpg", rating: 4.5, stores: 280 },
      { name: "AVAKids", logo: "https://homepage.momocdn.net/placebrand/momo-amazone-s3-api-250317175951-638778311911534333.jpeg", rating: 4.4, stores: 85 },
      { name: "FPT Shop", logo: "https://homepage.momocdn.net/placebrand/momo-amazone-s3-api-250317153258-638778223787002140.jpg", rating: 4.6, stores: 210 },
      { name: "Fahasa", logo: "https://homepage.momocdn.net/placebrand/momo-amazone-s3-api-250317150656-638778208162039350.png", rating: 4.5, stores: 150 },
      { name: "Maison", logo: "https://homepage.momocdn.net/placebrand/momo-amazone-s3-api-250305162147-638767885071165140.jpg", rating: 4.3, stores: 60 },
      { name: "Con Cưng", logo: "https://homepage.momocdn.net/placebrand/momo-amazone-s3-api-250305160648-638767876084130811.jpeg", rating: 4.4, stores: 120 },
      { name: "7-Eleven", logo: "https://homepage.momocdn.net/placebrand/momo-amazone-s3-api-250226140146-638761753069328427.png", rating: 4.5, stores: 43 },
      { name: "My Mart", logo: "https://homepage.momocdn.net/placebrand/momo-upload-api-200410140140-637221241003068968.jpg", rating: 4.2, stores: 5 },
      { name: "B's mart", logo: "https://homepage.momocdn.net/placebrand/momo-upload-api-191226115119-637129578795756170.jpg", rating: 4.3, stores: 109 },
      { name: "Circle K", logo: "https://homepage.momocdn.net/placebrand/momo-upload-api-201026074107-637392948670862082.jpeg", rating: 4.4, stores: 338 },
      { name: "GS25", logo: "https://homepage.momocdn.net/placebrand/momo-upload-api-201026074134-637392948947697675.jpg", rating: 4.3, stores: 61 }
    ];

    let items = raw.map((p, i) => {
      if (typeof p === 'string') {
        return { name: `Partner ${i + 1}`, logo: p, rating: 4.5, stores: 50 };
      }
      return {
        name: p.name || `Partner ${i + 1}`,
        logo: p.logo || p.url || '',
        rating: typeof p.rating === 'number' ? p.rating : 4.5,
        stores: typeof p.stores === 'number' ? p.stores : 50,
      };
    });

    if (items.length < 12) {
      const add = 12 - items.length;
      items = items.concat(Array.from({ length: add }, (_, k) => ({
        name: `Partner ${items.length + k + 1}`,
        logo: `https://picsum.photos/seed/partner${items.length + k}/120/40`,
        rating: 4.5,
        stores: 50,
      })));
    } else if (items.length > 12) {
      items = items.slice(0, 12);
    }

    this.innerHTML = `
      <section id="partners" class="py-12 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Đối tác</h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            ${items.map((it, i) => `
              <div class="group bg-white rounded-xl shadow-sm ring-1 ring-gray-100 hover:shadow-md transition p-4">
                <div class="h-20 bg-gray-50 rounded-lg flex items-center justify-center" data-skel>
                  <img loading="lazy" decoding="async" src="${it.logo}" alt="${it.name}" class="max-h-16 object-contain"/>
                </div>
                <div class="mt-3 text-sm font-semibold text-gray-800 text-center">${it.name}</div>
                <div class="mt-1 flex items-center justify-center gap-2 text-xs text-gray-500">
                  <span class="flex items-center text-yellow-500 gap-0.5">
                    <i data-feather="star" class="w-3 h-3"></i>
                    <i data-feather="star" class="w-3 h-3"></i>
                    <i data-feather="star" class="w-3 h-3"></i>
                    <i data-feather="star" class="w-3 h-3"></i>
                    <i data-feather="star" class="w-3 h-3"></i>
                  </span>
                  <span>${Number(it.rating).toFixed(1)}</span>
                </div>
                <div class="mt-1 flex items-center justify-center gap-1 text-xs text-gray-500">
                  <i data-feather="map-pin" class="w-3 h-3"></i>
                  <span>${it.stores} cửa hàng</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;

    const imgs = Array.from(this.querySelectorAll('img'));
    const done = (img) => {
      const p = img && img.parentElement;
      if (p && p.hasAttribute('data-skel')) { p.classList.remove('skeleton'); p.removeAttribute('data-skel'); }
    };
    imgs.forEach(img => {
      if (img.complete) { done(img); }
      else { img.addEventListener('load', () => done(img)); img.addEventListener('error', () => done(img)); }
    });

    if (window.feather && typeof window.feather.replace === 'function') {
      window.feather.replace();
    }
  }
}
customElements.define('custom-partners', CustomPartners);
