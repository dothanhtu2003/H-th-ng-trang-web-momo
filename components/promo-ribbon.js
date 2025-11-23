class CustomPromoRibbon extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="promo-ribbon" class="w-full bg-gradient-to-r from-pink-600 to-fuchsia-700 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-sm flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
              <i data-feather="gift" class="w-4 h-4"></i>
            </span>
            <span class="font-medium">Ưu đãi tuần này: Hoàn tiền đến 20% khi thanh toán hóa đơn!</span>
          </div>
          <a href="#promos" class="hidden sm:inline-block underline decoration-white/60 hover:decoration-white">Xem chi tiết</a>
        </div>
      </div>
    `;
    if (window.feather && typeof window.feather.replace === 'function') {
      window.feather.replace();
    }
  }
}
customElements.define('custom-promo-ribbon', CustomPromoRibbon);
