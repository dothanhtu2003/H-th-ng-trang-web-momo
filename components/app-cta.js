class CustomAppCTA extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="app-cta" class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tải ứng dụng MoMo</h2>
              <p class="text-lg text-gray-600 mb-6">Trải nghiệm thanh toán không tiền mặt, an toàn và tiện lợi.</p>
              <div class="flex items-center space-x-4">
                <a href="#" class="inline-flex items-center bg-black text-white px-4 py-3 rounded-xl shadow hover:opacity-90">
                  <i data-feather="download" class="mr-2"></i> App Store
                </a>
                <a href="#" class="inline-flex items-center bg-black text-white px-4 py-3 rounded-xl shadow hover:opacity-90">
                  <i data-feather="play" class="mr-2"></i> Google Play
                </a>
              </div>
              <div class="mt-6">
                <div class="bg-white inline-flex items-center p-3 rounded-xl shadow">
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://momo.vn" alt="QR MoMo" class="w-20 h-20" />
                  <div class="ml-3">
                    <p class="text-sm text-gray-500">Quét mã để tải app</p>
                    <p class="font-semibold">MoMo - Siêu ứng dụng tài chính</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="order-first md:order-last">
              <img id="app-mockup" src="https://picsum.photos/600/500" alt="MoMo App Mockup" class="rounded-2xl shadow-xl"/>
            </div>
          </div>
        </div>
      </section>
    `;

    if (window.feather && typeof window.feather.replace === 'function') {
      window.feather.replace();
    }

    const mock = this.querySelector('#app-mockup');
    if (mock && window.ASSETS && window.ASSETS.appMockup) {
      mock.src = window.ASSETS.appMockup;
    }
  }
}
customElements.define('custom-app-cta', CustomAppCTA);
