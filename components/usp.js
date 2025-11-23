class CustomUSP extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="usp" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-10">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900" data-i18n="usp_title">Vì sao chọn MoMo?</h2>
            <p class="mt-3 text-lg text-gray-600" data-i18n="usp_subtitle">3–5 lợi ích then chốt giúp bạn thanh toán an toàn, nhanh chóng và tiện lợi.</p>
          </div>
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            ${[
              { icon: 'zap', title: 'Nhanh chóng', desc: 'Thanh toán và chuyển tiền tức thời.' },
              { icon: 'shield', title: 'An toàn', desc: 'Bảo mật đa lớp, mã hóa chuẩn ngân hàng.' },
              { icon: 'shopping-bag', title: 'Tiện lợi', desc: 'Hàng nghìn điểm chấp nhận thanh toán.' },
              { icon: 'gift', title: 'Ưu đãi', desc: 'Hoàn tiền và khuyến mãi thường xuyên.' },
              { icon: 'smartphone', title: 'Dễ dùng', desc: 'Trải nghiệm mượt trên mọi thiết bị.' }
            ].map(i => `
              <div class="feature-card bg-gray-50 rounded-2xl p-6 shadow-sm hover:bg-white">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4"
                     style="background: linear-gradient(135deg, #a50064 0%, #8a0054 100%); box-shadow: 0 8px 18px rgba(165,0,100,0.25)">
                  <i data-feather="${i.icon}" class="w-6 h-6"></i>
                </div>
                <div class="font-semibold text-gray-900">${i.title}</div>
                <div class="mt-1 text-gray-600 text-sm">${i.desc}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;

    if (window.feather && typeof window.feather.replace === 'function') {
      window.feather.replace();
    }
    if (window.I18N && typeof window.I18N.apply === 'function') {
      window.I18N.apply();
    }
  }
}
customElements.define('custom-usp', CustomUSP);
