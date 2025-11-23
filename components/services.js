class CustomServices extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .service-card {
          transition: all 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
      </style>
      <section id="services" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Dịch vụ của chúng tôi</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="service-card bg-white p-6 rounded-lg shadow-md text-center">
              <div class="text-momo mb-4">
                <i data-feather="dollar-sign" class="w-12 h-12 mx-auto"></i>
              </div>
              <h3 class="text-xl font-semibold mb-2">Chuyển tiền</h3>
              <p class="text-gray-600">Chuyển tiền nhanh chóng, dễ dàng đến mọi tài khoản</p>
            </div>
            <div class="service-card bg-white p-6 rounded-lg shadow-md text-center">
              <div class="text-momo mb-4">
                <i data-feather="shopping-cart" class="w-12 h-12 mx-auto"></i>
              </div>
              <h3 class="text-xl font-semibold mb-2">Thanh toán</h3>
              <p class="text-gray-600">Thanh toán hóa đơn, mua sắm trực tuyến</p>
            </div>
            <div class="service-card bg-white p-6 rounded-lg shadow-md text-center">
              <div class="text-momo mb-4">
                <i data-feather="smartphone" class="w-12 h-12 mx-auto"></i>
              </div>
              <h3 class="text-xl font-semibold mb-2">Nạp tiền</h3>
              <p class="text-gray-600">Nạp tiền điện thoại, internet, truyền hình</p>
            </div>
            <div class="service-card bg-white p-6 rounded-lg shadow-md text-center">
              <div class="text-momo mb-4">
                <i data-feather="credit-card" class="w-12 h-12 mx-auto"></i>
              </div>
              <h3 class="text-xl font-semibold mb-2">Rút tiền</h3>
              <p class="text-gray-600">Rút tiền mặt tại các điểm giao dịch</p>
            </div>
          </div>
        </div>
      </section>
    `;
    if (window.feather && typeof window.feather.replace === 'function') {
      window.feather.replace();
    }
  }
}
customElements.define('custom-services', CustomServices);