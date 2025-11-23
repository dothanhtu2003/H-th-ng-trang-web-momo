class CustomBanks extends HTMLElement {
  connectedCallback() {
    const banks = [
      { name: 'Vietcombank', logo: 'https://picsum.photos/seed/vcb/120/40' },
      { name: 'VietinBank', logo: 'https://picsum.photos/seed/vtb/120/40' },
      { name: 'BIDV', logo: 'https://picsum.photos/seed/bidv/120/40' },
      { name: 'Techcombank', logo: 'https://picsum.photos/seed/tcb/120/40' },
      { name: 'ACB', logo: 'https://picsum.photos/seed/acb/120/40' },
      { name: 'MB Bank', logo: 'https://picsum.photos/seed/mb/120/40' },
      { name: 'TPBank', logo: 'https://picsum.photos/seed/tpb/120/40' },
      { name: 'VPBank', logo: 'https://picsum.photos/seed/vpb/120/40' },
      { name: 'Sacombank', logo: 'https://picsum.photos/seed/scb/120/40' },
      { name: 'Agribank', logo: 'https://picsum.photos/seed/agb/120/40' },
      { name: 'HDBank', logo: 'https://picsum.photos/seed/hdb/120/40' },
      { name: 'SHB', logo: 'https://picsum.photos/seed/shb/120/40' }
    ];

    const faqs = [
      { q: 'Liên kết ngân hàng cần điều kiện gì?', a: 'Bạn cần CMND/CCCD, tài khoản/thẻ ngân hàng chính chủ và số điện thoại đăng ký trùng khớp.' },
      { q: 'Mất phí khi liên kết không?', a: 'Liên kết không mất phí. Một số giao dịch có thể có phí theo chính sách từng ngân hàng.' },
      { q: 'Hủy liên kết như thế nào?', a: 'Vào Tài khoản > Liên kết ngân hàng > Chọn ngân hàng > Hủy liên kết.' }
    ];

    this.innerHTML = `
      <section id="banks" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Ngân hàng liên kết</h2>
              <p class="mt-2 text-gray-600">Danh sách ngân hàng hỗ trợ và hướng dẫn liên kết nhanh chóng.</p>
            </div>
            <a href="#onboarding" class="mt-4 md:mt-0 inline-flex items-center text-momo hover:underline">
              <i data-feather="link" class="w-4 h-4 mr-2"></i> Xem hướng dẫn liên kết
            </a>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-10">
            ${banks.map(b => `
              <div class="h-14 bg-gray-50 rounded-xl p-3 flex items-center justify-center shadow-sm hover:bg-gray-100">
                <img loading="lazy" decoding="async" src="${b.logo}" alt="${b.name}" class="max-h-8 object-contain"/>
              </div>
            `).join('')}
          </div>

          <div class="grid md:grid-cols-2 gap-10">
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Hướng dẫn liên kết ngân hàng</h3>
              <ol class="space-y-3 text-gray-700">
                <li class="flex items-start"><span class="w-6 h-6 rounded-full text-white flex items-center justify-center mr-2" style="background: linear-gradient(135deg, #a50064 0%, #8a0054 100%)">1</span> Mở ứng dụng MoMo và đăng nhập.</li>
                <li class="flex items-start"><span class="w-6 h-6 rounded-full text-white flex items-center justify-center mr-2" style="background: linear-gradient(135deg, #a50064 0%, #8a0054 100%)">2</span> Vào mục Liên kết ngân hàng.</li>
                <li class="flex items-start"><span class="w-6 h-6 rounded-full text-white flex items-center justify-center mr-2" style="background: linear-gradient(135deg, #a50064 0%, #8a0054 100%)">3</span> Chọn ngân hàng và nhập thông tin theo hướng dẫn.</li>
                <li class="flex items-start"><span class="w-6 h-6 rounded-full text-white flex items-center justify-center mr-2" style="background: linear-gradient(135deg, #a50064 0%, #8a0054 100%)">4</span> Xác thực OTP/SMS và hoàn tất.</li>
              </ol>
              <div class="mt-4 text-sm text-gray-500">Lưu ý: Thông tin phải chính chủ và trùng với dữ liệu ngân hàng.</div>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Câu hỏi thường gặp</h3>
              <div class="space-y-3">
                ${faqs.map((f, idx) => `
                  <div class="border border-gray-200 rounded-xl overflow-hidden">
                    <button class="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50" data-bank-faq-toggle="${idx}">
                      <span class="font-medium text-gray-900">${f.q}</span>
                      <i data-feather="chevron-down"></i>
                    </button>
                    <div class="px-4 pb-4 text-gray-700 hidden" data-bank-faq-panel="${idx}">${f.a}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    if (window.feather && typeof window.feather.replace === 'function') {
      window.feather.replace();
    }

    this.querySelectorAll('[data-bank-faq-toggle]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-bank-faq-toggle');
        const panel = this.querySelector(`[data-bank-faq-panel="${id}"]`);
        if (panel) panel.classList.toggle('hidden');
      });
    });
  }
}
customElements.define('custom-banks', CustomBanks);
