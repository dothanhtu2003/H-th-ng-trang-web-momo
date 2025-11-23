class CustomStats extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="stats" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">Những con số nổi bật</h2>
          <p class="text-gray-600 mb-10 max-w-3xl">MoMo phục vụ hàng chục triệu người dùng trên toàn quốc với mạng lưới đối tác rộng khắp. Dưới đây là các chỉ số tiêu biểu (mang tính minh hoạ).</p>
          <div class="grid grid-cols-2 md:grid-cols-5 gap-6">
            ${[
              { value: '31+ triệu', label: 'Người dùng' },
              { value: '150.000+', label: 'Điểm chấp nhận thanh toán' },
              { value: '4.000+', label: 'Dịch vụ thanh toán' },
              { value: '10.000+', label: 'Đối tác liên kết' },
              { value: '24/7', label: 'Hỗ trợ khách hàng' },
            ].map(i => `
              <div class="bg-gray-50 rounded-2xl p-6 text-center shadow-sm">
                <div class="text-2xl md:text-3xl font-extrabold text-momo">${i.value}</div>
                <div class="mt-1 text-gray-600">${i.label}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define('custom-stats', CustomStats);
