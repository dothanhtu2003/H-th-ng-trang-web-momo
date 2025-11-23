class CustomPricing extends HTMLElement {
  connectedCallback() {
    const fees = [
      { name: 'Chuyển tiền nội bộ', price: 'Miễn phí', note: 'Áp dụng trong hệ sinh thái MoMo' },
      { name: 'Chuyển tiền liên ngân hàng', price: '2.000 – 10.000đ', note: 'Tùy giá trị giao dịch' },
      { name: 'Thanh toán hóa đơn', price: 'Miễn phí', note: 'Một số dịch vụ có thể có phí theo nhà cung cấp' },
      { name: 'Rút tiền mặt', price: '3.300 – 11.000đ', note: 'Tùy kênh rút/điểm giao dịch' },
      { name: 'Nạp tiền', price: 'Miễn phí', note: 'Từ ngân hàng liên kết' },
    ];

    this.innerHTML = `
      <section id="pricing" class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-end justify-between mb-8">
            <div>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Biểu phí & Hạn mức</h2>
              <p class="mt-2 text-gray-600">Minh bạch chi phí dịch vụ và hạn mức giao dịch.</p>
            </div>
            <a href="#" class="hidden md:inline-flex items-center px-4 py-2 rounded-xl text-white" style="background: linear-gradient(135deg, #a50064 0%, #8a0054 100%)">
              <i data-feather="download" class="w-4 h-4 mr-2"></i> Tải PDF biểu phí
            </a>
          </div>

          <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            ${fees.map(f => `
              <div class="bg-white rounded-2xl shadow p-6">
                <div class="flex items-center justify-between">
                  <div class="font-semibold text-gray-900">${f.name}</div>
                  <div class="text-momo font-bold">${f.price}</div>
                </div>
                <div class="mt-2 text-sm text-gray-600">${f.note}</div>
              </div>
            `).join('')}
          </div>

          <div class="mt-8 text-sm text-gray-500">Hạn mức có thể thay đổi theo mức định danh và chính sách từng đối tác/nhà cung cấp.</div>
          <div class="mt-4 md:hidden">
            <a href="#" class="inline-flex items-center px-4 py-2 rounded-xl text-white" style="background: linear-gradient(135deg, #a50064 0%, #8a0054 100%)">
              <i data-feather="download" class="w-4 h-4 mr-2"></i> Tải PDF biểu phí
            </a>
          </div>
        </div>
      </section>
    `;

    if (window.feather && typeof window.feather.replace === 'function') {
      window.feather.replace();
    }
  }
}
customElements.define('custom-pricing', CustomPricing);
