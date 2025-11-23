class CustomTestimonials extends HTMLElement {
  connectedCallback() {
    const items = [
      { name: 'Nguyễn Minh Anh', role: 'Nhân viên văn phòng', avatar: 'https://i.pravatar.cc/96?img=1', quote: 'Thanh toán hóa đơn và chuyển tiền nhanh, an tâm vì có bảo mật đa lớp.' },
      { name: 'Trần Hải Long', role: 'Chủ cửa hàng', avatar: 'https://i.pravatar.cc/96?img=5', quote: 'Chấp nhận MoMo giúp doanh số tăng rõ rệt, đối soát đơn giản.' },
      { name: 'Lê Thu Hà', role: 'Người dùng lâu năm', avatar: 'https://i.pravatar.cc/96?img=15', quote: 'Ưu đãi hoàn tiền hấp dẫn, lại dễ dùng cho cả ba mẹ mình.' },
      { name: 'Phạm Quốc Bảo', role: 'Sinh viên', avatar: 'https://i.pravatar.cc/96?img=11', quote: 'Nạp điện thoại, mua vé xem phim trong vài chạm. Rất tiện.' },
      { name: 'Võ Gia Hân', role: 'Chuyên viên marketing', avatar: 'https://i.pravatar.cc/96?img=9', quote: 'App mượt, trải nghiệm tốt, chăm sóc khách hàng phản hồi nhanh.' }
    ];

    this.innerHTML = `
      <section id="testimonials" class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-10">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Khách hàng nói gì</h2>
            <p class="mt-3 text-lg text-gray-600">Cảm nhận thực tế từ cộng đồng người dùng MoMo</p>
          </div>
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            ${items.map((t) => `
              <figure class="bg-white rounded-2xl shadow p-6">
                <div class="flex items-center mb-4">
                  <img loading="lazy" decoding="async" src="${t.avatar}" alt="${t.name}" class="w-12 h-12 rounded-full object-cover" />
                  <div class="ml-3">
                    <figcaption class="font-semibold text-gray-900">${t.name}</figcaption>
                    <div class="text-sm text-gray-500">${t.role}</div>
                  </div>
                </div>
                <blockquote class="text-gray-700">
                  <i data-feather="quote" class="inline w-4 h-4 text-momo mr-1"></i>
                  <span>${t.quote}</span>
                </blockquote>
              </figure>
            `).join('')}
          </div>
        </div>
      </section>
    `;

    if (window.feather && typeof window.feather.replace === 'function') {
      window.feather.replace();
    }
  }
}
customElements.define('custom-testimonials', CustomTestimonials);
