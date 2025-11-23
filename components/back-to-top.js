class CustomBackToTop extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <button id="back-to-top" aria-label="Lên đầu trang"
        class="fixed left-5 bottom-6 z-40 hidden w-12 h-12 rounded-full text-white flex items-center justify-center"
        style="background: linear-gradient(135deg, #a50064 0%, #8a0054 100%); box-shadow: 0 14px 28px rgba(165,0,100,0.35)">
        <i data-feather="arrow-up"></i>
      </button>
    `;

    if (window.feather && typeof window.feather.replace === 'function') {
      window.feather.replace();
    }

    const btn = this.querySelector('#back-to-top');
    const onScroll = () => {
      if (window.scrollY > 300) btn.classList.remove('hidden');
      else btn.classList.add('hidden');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
customElements.define('custom-back-to-top', CustomBackToTop);
