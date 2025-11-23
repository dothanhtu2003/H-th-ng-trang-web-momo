class CustomSupportFAB extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="fixed z-50 right-5 bottom-6">
        <div id="fab-panel" class="hidden mb-3 w-64 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                 style="background: linear-gradient(135deg, #a50064 0%, #8a0054 100%);">
              <i data-feather="headphones"></i>
            </div>
            <div class="ml-2 font-semibold">Hỗ trợ 24/7</div>
          </div>
          <div class="space-y-2">
            <a href="#" class="flex items-center px-3 py-2 rounded-lg hover:bg-gray-50">
              <i data-feather="phone" class="mr-2 text-momo"></i> Gọi hỗ trợ
            </a>
            <a href="#" class="flex items-center px-3 py-2 rounded-lg hover:bg-gray-50">
              <i data-feather="life-buoy" class="mr-2 text-momo"></i> Trung tâm trợ giúp
            </a>
          </div>
        </div>
        <button id="fab-button" class="relative group w-14 h-14 rounded-full shadow-lg text-white flex items-center justify-center"
                aria-label="Hỗ trợ"
                style="background: linear-gradient(135deg, #a50064 0%, #8a0054 100%); box-shadow: 0 14px 28px rgba(165,0,100,0.35)">
          <i data-feather="message-circle"></i>
          <span class="absolute right-16 opacity-0 group-hover:opacity-100 transition bg-gray-900 text-white text-xs rounded px-2 py-1">
            Hỗ trợ 24/7
          </span>
        </button>
      </div>
    `;

    if (window.feather && typeof window.feather.replace === 'function') {
      window.feather.replace();
    }

    const btn = this.querySelector('#fab-button');
    const panel = this.querySelector('#fab-panel');
    if (btn && panel) {
      btn.addEventListener('click', () => {
        panel.classList.toggle('hidden');
      });
      document.addEventListener('click', (e) => {
        if (!this.contains(e.target)) {
          panel.classList.add('hidden');
        }
      });
    }
  }
}
customElements.define('custom-support-fab', CustomSupportFAB);
