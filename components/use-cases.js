class CustomUseCases extends HTMLElement {
  connectedCallback() {
    const cases = [
      { icon: 'file-text', title: 'Thanh toán hóa đơn', desc: 'Điện, nước, internet, truyền hình... trong vài chạm.' },
      { icon: 'users', title: 'Chuyển tiền nhóm', desc: 'Chia bill ăn uống, du lịch dễ dàng, lịch sử rõ ràng.' },
      { icon: 'shopping-bag', title: 'Hoàn tiền mua sắm', desc: 'Săn ưu đãi và hoàn tiền tại nhiều đối tác.' },
      { icon: 'bus', title: 'Vé xe/vé xem phim', desc: 'Đặt vé nhanh chóng, không cần xếp hàng.' }
    ];

    this.innerHTML = `
      <section id="use-cases" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-10">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Tình huống sử dụng nổi bật</h2>
            <p class="mt-3 text-lg text-gray-600">Những gì người dùng yêu thích khi dùng MoMo mỗi ngày</p>
          </div>
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            ${cases.map(c => `
              <div class="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4"
                     style=\"background: linear-gradient(135deg, #a50064 0%, #8a0054 100%); box-shadow: 0 8px 18px rgba(165,0,100,0.25)\">
                  <i data-feather="${c.icon}" class="w-6 h-6"></i>
                </div>
                <div class="font-semibold text-gray-900">${c.title}</div>
                <div class="mt-1 text-gray-600 text-sm">${c.desc}</div>
              </div>
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
customElements.define('custom-use-cases', CustomUseCases);
