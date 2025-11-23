class CustomShortcuts extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="shortcuts" class="py-10 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Tiện ích nhanh</h2>
          <div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
            ${[
              { icon: 'send', label: 'Chuyển tiền' },
              { icon: 'smartphone', label: 'Nạp điện thoại' },
              { icon: 'file-text', label: 'Hóa đơn' },
              { icon: 'shopping-bag', label: 'Mua sắm' },
              { icon: 'tv', label: 'Internet/TV' },
              { icon: 'shield', label: 'Bảo hiểm' },
              { icon: 'credit-card', label: 'Thẻ' },
              { icon: 'gift', label: 'Quà tặng' },
              { icon: 'coffee', label: 'Ăn uống' },
              { icon: 'activity', label: 'Sức khỏe' },
              { icon: 'navigation-2', label: 'Vé máy bay' },
              { icon: 'map-pin', label: 'Gần bạn' },
              { icon: 'truck', label: 'Vé xe khách' },
              { icon: 'trending-up', label: 'Chứng khoán' },
              { icon: 'dollar-sign', label: 'vay nhanh' },
              { icon: 'more-horizontal', label: 'Xem thêm' }
            ].map(item => `
              <a href="#" class="group flex flex-col items-center rounded-xl p-3 hover:bg-gray-50 transition">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-white"
                     style="background: linear-gradient(135deg, #a50064 0%, #8a0054 100%); box-shadow: 0 8px 20px rgba(165,0,100,0.25)">
                  <i data-feather="${item.icon}" class="w-6 h-6"></i>
                </div>
                <span class="mt-2 text-xs text-center text-gray-700 group-hover:text-gray-900">${item.label}</span>
              </a>
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
customElements.define('custom-shortcuts', CustomShortcuts);

