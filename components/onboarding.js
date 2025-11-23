class CustomOnboarding extends HTMLElement {
  connectedCallback() {
    const steps = [
      { n: 1, title: 'Tải app', desc: 'Tải MoMo từ App Store hoặc Google Play.', img: 'https://picsum.photos/seed/step1/300/200' },
      { n: 2, title: 'Đăng ký/Đăng nhập', desc: 'Đăng ký bằng số điện thoại và xác thực OTP.', img: 'https://picsum.photos/seed/step2/300/200' },
      { n: 3, title: 'Liên kết ngân hàng', desc: 'Liên kết để nạp/rút và tăng hạn mức.', img: 'https://picsum.photos/seed/step3/300/200' },
      { n: 4, title: 'Giao dịch đầu tiên', desc: 'Chuyển tiền, thanh toán hóa đơn hoặc mua sắm.', img: 'https://picsum.photos/seed/step4/300/200' }
    ];

    this.innerHTML = `
      <section id="onboarding" class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-10">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Bắt đầu với MoMo trong 4 bước</h2>
            <p class="mt-3 text-lg text-gray-600">Nhanh chóng, an toàn và cực kỳ đơn giản.</p>
          </div>
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            ${steps.map(s => `
              <div class="bg-white rounded-2xl shadow p-6 flex flex-col">
                <div class="flex items-center mb-4">
                  <div class="w-8 h-8 rounded-full text-white flex items-center justify-center mr-3" style="background: linear-gradient(135deg, #a50064 0%, #8a0054 100%);">${s.n}</div>
                  <div class="font-semibold text-gray-900">${s.title}</div>
                </div>
                <img loading="lazy" decoding="async" src="${s.img}" alt="${s.title}" class="rounded-lg mb-3 object-cover w-full h-36"/>
                <div class="text-gray-600 text-sm">${s.desc}</div>
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
customElements.define('custom-onboarding', CustomOnboarding);
