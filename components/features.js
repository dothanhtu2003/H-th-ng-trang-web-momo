class CustomFeatures extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .feature-card {
          transition: all 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
      </style>
      <section id="features" class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:text-center">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">Tại sao chọn MoMo?</h2>
            <p class="max-w-2xl lg:mx-auto text-lg text-gray-600">Những lý do bạn nên sử dụng ví điện tử MoMo</p>
          </div>
          <div class="mt-10">
            <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              <div class="feature-card bg-white p-6 rounded-lg shadow-md">
                <div class="flex items-center mb-4">
                  <div class="flex-shrink-0 bg-momo-primary rounded-md p-3">
                    <i data-feather="zap" class="text-white w-6 h-6"></i>
                  </div>
                  <h3 class="ml-3 text-lg font-medium text-gray-900">Nhanh chóng</h3>
                </div>
                <p class="text-gray-600">Giao dịch được xử lý ngay lập tức, tiết kiệm thời gian</p>
              </div>
              <div class="feature-card bg-white p-6 rounded-lg shadow-md">
                <div class="flex items-center mb-4">
                  <div class="flex-shrink-0 bg-momo-primary rounded-md p-3">
                    <i data-feather="shield" class="text-white w-6 h-6"></i>
                  </div>
                  <h3 class="ml-3 text-lg font-medium text-gray-900">Bảo mật</h3>
                </div>
                <p class="text-gray-600">Hệ thống bảo mật đa lớp, đảm bảo an toàn tuyệt đối</p>
              </div>
              <div class="feature-card bg-white p-6 rounded-lg shadow-md">
                <div class="flex items-center mb-4">
                  <div class="flex-shrink-0 bg-momo-primary rounded-md p-3">
                    <i data-feather="dollar-sign" class="text-white w-6 h-6"></i>
                  </div>
                  <h3 class="ml-3 text-lg font-medium text-gray-900">Tiện lợi</h3>
                </div>
                <p class="text-gray-600">Mọi giao dịch chỉ với vài thao tác đơn giản</p>
              </div>
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
customElements.define('custom-features', CustomFeatures);