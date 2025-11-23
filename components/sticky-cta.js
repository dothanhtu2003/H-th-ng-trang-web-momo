class CustomStickyCTA extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="fixed inset-x-0 bottom-0 z-40 sm:hidden">
        <div class="mx-4 mb-4 rounded-2xl shadow-lg overflow-hidden">
          <a href="#app-cta" class="flex items-center justify-center py-3 text-white text-base font-semibold"
             style="background: linear-gradient(135deg, #a50064 0%, #8a0054 100%); box-shadow: 0 10px 22px rgba(165,0,100,0.35)">
            <i data-feather="download" class="w-5 h-5 mr-2"></i>
            Tải ứng dụng MoMo
          </a>
        </div>
      </div>
    `;
    if (window.feather && typeof window.feather.replace === 'function') {
      window.feather.replace();
    }
  }
}
customElements.define('custom-sticky-cta', CustomStickyCTA);
