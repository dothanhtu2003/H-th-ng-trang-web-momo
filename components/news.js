class CustomNews extends HTMLElement {
  connectedCallback() {
    const data = [
      { id: 1, title: 'Khuyến mãi hóa đơn điện', cat: 'Khuyến mãi', tags: ['hoadon','khuyenmai'], img: 'https://picsum.photos/seed/news1/600/300', time: '2 ngày trước', body: 'Trong tháng này, khi thanh toán hóa đơn điện qua MoMo, bạn sẽ nhận ưu đãi hoàn tiền lên đến 20% cùng nhiều quà tặng hấp dẫn.' },
      { id: 2, title: 'Mẹo an toàn khi giao dịch', cat: 'Bảo mật', tags: ['baomat','meo'], img: 'https://picsum.photos/seed/news2/600/300', time: '3 ngày trước', body: 'Không chia sẻ OTP và mật khẩu, luôn kiểm tra người nhận, bật xác thực sinh trắc học để bảo vệ tài khoản của bạn.' },
      { id: 3, title: 'Đối tác mới tham gia', cat: 'Đối tác', tags: ['doitac'], img: 'https://picsum.photos/seed/news3/600/300', time: '5 ngày trước', body: 'Hàng loạt đối tác bán lẻ và dịch vụ mới đã tham gia hệ sinh thái của MoMo, mang lại nhiều tiện ích hơn cho người dùng.' },
      { id: 4, title: 'Hoàn tiền cuối tuần', cat: 'Khuyến mãi', tags: ['khuyenmai'], img: 'https://picsum.photos/seed/news4/600/300', time: '1 tuần trước', body: 'Cuối tuần này, mua sắm tại các cửa hàng đối tác sẽ được hoàn tiền trực tiếp vào ví MoMo.' },
      { id: 5, title: 'Cập nhật ứng dụng', cat: 'Cập nhật', tags: ['capnhat','ungdung'], img: 'https://picsum.photos/seed/news5/600/300', time: '2 tuần trước', body: 'Phiên bản mới cải thiện hiệu năng, sửa lỗi và bổ sung tính năng đặt vé tiện lợi.' }
    ];
    const cats = ['Tất cả','Khuyến mãi','Bảo mật','Đối tác','Cập nhật'];

    this.innerHTML = `
      <section id="news" class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row md:items-end md:justify-between mb-6 gap-4">
            <h2 class="text-3xl font-bold text-gray-900" data-i18n="news_title">Tin tức & Chuyên mục</h2>
            <div class="flex items-center gap-3">
              <input id="news-search" type="search" data-i18n-placeholder="news_search" placeholder="Tìm bài viết" class="px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-600" />
              <a href="#" class="hidden md:inline text-momo hover:underline" data-i18n="news_view_all">Xem tất cả</a>
            </div>
          </div>
          <div class="flex flex-wrap items-center gap-2 mb-6" id="news-cats">
            ${cats.map((c,i)=>`<button data-cat="${c}" class="px-3 py-1 rounded-full text-sm ${i===0?'text-white':'text-gray-700'} ${i===0?'bg-fuchsia-700':'bg-gray-100'}">${c}</button>`).join('')}
          </div>
          <div class="grid md:grid-cols-3 gap-6" id="news-list"></div>
          <div class="hidden" id="news-detail"></div>
        </div>
      </section>
    `;

    const listEl = this.querySelector('#news-list');
    const searchEl = this.querySelector('#news-search');
    const catWrap = this.querySelector('#news-cats');
    const detailEl = this.querySelector('#news-detail');
    let currentCat = 'Tất cả';
    let query = '';

    // read URL state
    const params = new URLSearchParams(location.search);
    const urlCat = params.get('cat');
    const urlQ = params.get('q');
    const urlNews = params.get('news');
    if (urlCat && cats.includes(urlCat)) currentCat = urlCat;
    if (urlQ) { query = urlQ; searchEl.value = urlQ; }

    const render = () => {
      const q = query.trim().toLowerCase();
      const items = data.filter(it => (currentCat==='Tất cả' || it.cat===currentCat) && (!q || it.title.toLowerCase().includes(q) || it.tags.some(t=>t.includes(q))));
      listEl.innerHTML = items.map(i => `
        <article class="bg-white rounded-2xl shadow overflow-hidden cursor-pointer" data-open="${i.id}">
          <img loading="lazy" decoding="async" class="w-full h-40 object-cover" src="${i.img}" alt="${i.title}" />
          <div class="p-5">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">${i.cat}</span>
              <div class="text-xs text-gray-500">${i.time}</div>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">${i.title}</h3>
            <div class="flex flex-wrap gap-2">
              ${i.tags.map(t=>`<span class="text-xs text-gray-500">#${t}</span>`).join('')}
            </div>
          </div>
        </article>
      `).join('');
      // apply i18n on re-render
      if (window.I18N && typeof window.I18N.apply==='function') window.I18N.apply();
    };

    catWrap.querySelectorAll('button[data-cat]').forEach(btn => {
      btn.addEventListener('click', () => {
        currentCat = btn.getAttribute('data-cat');
        catWrap.querySelectorAll('button').forEach(b=>{
          b.classList.remove('bg-fuchsia-700','text-white');
          b.classList.add('bg-gray-100','text-gray-700');
        });
        btn.classList.remove('bg-gray-100','text-gray-700');
        btn.classList.add('bg-fuchsia-700','text-white');
        // update URL
        const p = new URLSearchParams(location.search);
        if (currentCat && currentCat!=='Tất cả') p.set('cat', currentCat); else p.delete('cat');
        if (query) p.set('q', query); else p.delete('q');
        p.delete('news');
        history.pushState({}, '', `${location.pathname}?${p.toString()}`);
        render();
      });
    });

    searchEl.addEventListener('input', () => {
      query = searchEl.value || '';
      const p = new URLSearchParams(location.search);
      if (currentCat && currentCat!=='Tất cả') p.set('cat', currentCat); else p.delete('cat');
      if (query) p.set('q', query); else p.delete('q');
      p.delete('news');
      history.pushState({}, '', `${location.pathname}?${p.toString()}`);
      render();
    });

    const openDetail = (id) => {
      const item = data.find(x=> String(x.id)===String(id));
      if (!item) return;
      listEl.classList.add('hidden');
      detailEl.classList.remove('hidden');
      // fake gallery images from seed
      const gallery = [1,2,3].map(n => item.img.replace(/\/seed\/news\d+\//, match => match).replace(/\/(\d+\/\d+)/, '/800/400'));
      detailEl.innerHTML = `
        <nav class="text-sm text-gray-500 mb-3 px-1" aria-label="Breadcrumb">
          <ol class="flex items-center space-x-1">
            <li><a href="${location.pathname}" class="hover:underline">Home</a></li>
            <li>/</li>
            <li><a href="#news" class="hover:underline">News</a></li>
            <li>/</li>
            <li class="text-gray-700 truncate max-w-[60ch]">${item.title}</li>
          </ol>
        </nav>
        <article class="bg-white rounded-2xl shadow overflow-hidden">
          <img class="w-full h-64 object-cover" src="${item.img}" alt="${item.title}">
          <div class="p-6">
            <button class="inline-flex items-center text-momo hover:underline mb-4" id="news-back"><i data-feather="arrow-left" class="w-4 h-4 mr-2"></i><span data-i18n="back">Quay lại</span></button>
            <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">${item.title}</h1>
            <div class="text-sm text-gray-500 mb-4">${item.time} • ${item.cat}</div>
            <div class="grid md:grid-cols-3 gap-3 mb-4">
              ${gallery.map(src=>`<img loading="lazy" decoding="async" class="w-full h-40 object-cover rounded-xl" src="${src}" alt="${item.title}">`).join('')}
            </div>
            <div class="prose max-w-none text-gray-800">${item.body}</div>
            <div class="mt-4 flex flex-wrap gap-2">${item.tags.map(t=>`<span class=\"text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700\">#${t}</span>`).join('')}</div>
            <div class="mt-8">
              <h3 class="text-lg font-semibold text-gray-900 mb-3">Bài viết liên quan</h3>
              <div class="grid md:grid-cols-3 gap-4" id="news-related"></div>
            </div>
          </div>
        </article>
      `;
      if (window.feather && typeof window.feather.replace==='function') window.feather.replace();
      if (window.I18N && typeof window.I18N.apply==='function') window.I18N.apply();
      // JSON-LD for article
      const ld = document.createElement('script');
      ld.type = 'application/ld+json';
      ld.textContent = JSON.stringify({
        '@context': 'https://schema.org', '@type': 'NewsArticle',
        headline: item.title, image: [item.img], datePublished: new Date().toISOString(),
        author: { '@type': 'Organization', name: 'MoMo Clone' }
      });
      detailEl.appendChild(ld);
      // Breadcrumb JSON-LD
      const bc = document.createElement('script');
      bc.type = 'application/ld+json';
      bc.textContent = JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: location.origin + location.pathname },
          { '@type': 'ListItem', position: 2, name: 'News', item: location.origin + location.pathname + '#news' },
          { '@type': 'ListItem', position: 3, name: item.title }
        ]
      });
      detailEl.appendChild(bc);
      // related posts
      const related = data.filter(x => x.id !== item.id && (x.cat === item.cat || x.tags.some(t => item.tags.includes(t)))).slice(0,3);
      const relEl = detailEl.querySelector('#news-related');
      if (relEl) {
        relEl.innerHTML = related.map(r => `
          <article class="bg-white rounded-xl shadow overflow-hidden cursor-pointer" data-open="${r.id}">
            <img loading="lazy" decoding="async" class="w-full h-28 object-cover" src="${r.img}" alt="${r.title}" />
            <div class="p-3">
              <div class="text-xs text-gray-500 mb-1">${r.cat}</div>
              <div class="font-medium text-gray-900 line-clamp-2">${r.title}</div>
            </div>
          </article>
        `).join('');
      }

      // back handler
      const backBtn = detailEl.querySelector('#news-back');
      if (backBtn) backBtn.addEventListener('click', () => {
        const p = new URLSearchParams(location.search);
        p.delete('news');
        history.pushState({}, '', `${location.pathname}?${p.toString()}`);
        detailEl.classList.add('hidden');
        listEl.classList.remove('hidden');
      });
    };

    // delegate click to open detail and update URL
    this.addEventListener('click', (e) => {
      const card = e.target.closest('[data-open]');
      if (!card || !this.contains(card)) return;
      const id = card.getAttribute('data-open');
      const p = new URLSearchParams(location.search);
      p.set('news', id);
      history.pushState({}, '', `${location.pathname}?${p.toString()}`);
      openDetail(id);
    });

    // if news in URL, open directly
    if (urlNews) openDetail(urlNews);

    render();
  }
}
customElements.define('custom-news', CustomNews);
