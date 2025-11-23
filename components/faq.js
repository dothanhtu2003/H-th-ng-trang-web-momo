class CustomFAQ extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="faq" class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
            <h2 class="text-3xl font-bold text-gray-900">Câu hỏi thường gặp</h2>
            <input id="faq-search" type="search" placeholder="Tìm câu hỏi" class="px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-600 w-full md:w-72" />
          </div>
          <div class="space-y-4" id="faq-list">
            ${[
              { q: 'Làm thế nào để đăng ký tài khoản MoMo?', a: 'Tải app từ App Store/Google Play, mở app và đăng ký bằng số điện thoại. Xác thực OTP để hoàn tất.' },
              { q: 'MoMo có an toàn không?', a: 'MoMo áp dụng OTP, sinh trắc học, mã hóa dữ liệu và giám sát giao dịch 24/7 để bảo vệ tài khoản.' },
              { q: 'Hạn mức giao dịch là bao nhiêu?', a: 'Tùy theo mức định danh và liên kết ngân hàng. Vào mục Hỗ trợ trong app để xem hạn mức chi tiết.' },
              { q: 'Liên kết ngân hàng như thế nào?', a: 'Tại màn hình chính, chọn Liên kết ngân hàng và làm theo hướng dẫn. Chuẩn bị thẻ/ tài khoản ngân hàng và CMND/CCCD.' },
              { q: 'Phí giao dịch có không?', a: 'Một số dịch vụ có thể thu phí theo biểu phí hiện hành. Vui lòng xem bảng phí ở mục Hỗ trợ hoặc website.' },
              { q: 'Tôi quên mật khẩu/khóa ví thì làm sao?', a: 'Sử dụng chức năng quên mật khẩu trong app hoặc liên hệ tổng đài 24/7 để được hỗ trợ mở khóa.' },
              { q: 'Thanh toán thất bại nhưng đã trừ tiền?', a: 'Tiền sẽ được hoàn tự động trong 1–3 ngày làm việc. Nếu quá thời gian, vui lòng liên hệ Hỗ trợ để tra soát.' },
              { q: 'Có thể hoàn tiền giao dịch không?', a: 'Tùy dịch vụ và trạng thái giao dịch. Hãy gửi yêu cầu hỗ trợ kèm mã giao dịch để được kiểm tra.' },
              { q: 'Làm sao để bảo vệ tài khoản tốt hơn?', a: 'Không chia sẻ OTP/mật khẩu, bật xác thực sinh trắc học, cài đặt khóa app và chỉ giao dịch trên thiết bị tin cậy.' }
            ].map((item, idx) => `
              <div class="border border-gray-200 rounded-xl overflow-hidden" data-faq-item data-q="${item.q.toLowerCase()}" data-a="${item.a.toLowerCase()}">
                <button class="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50" data-faq-toggle="${idx}">
                  <span class="font-medium text-gray-900">${item.q}</span>
                  <i data-feather="chevron-down"></i>
                </button>
                <div class="px-4 pb-4 text-gray-700 hidden" data-faq-panel="${idx}">${item.a}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;

    if (window.feather && typeof window.feather.replace === 'function') {
      window.feather.replace();
    }

    // simple accordion logic
    this.querySelectorAll('[data-faq-toggle]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-faq-toggle');
        const panel = this.querySelector(`[data-faq-panel="${id}"]`);
        if (panel) panel.classList.toggle('hidden');
      });
    });

    const search = this.querySelector('#faq-search');
    const items = Array.from(this.querySelectorAll('[data-faq-item]'));
    if (search) {
      const filter = () => {
        const q = (search.value || '').trim().toLowerCase();
        items.forEach(el => {
          const match = !q || el.getAttribute('data-q').includes(q) || el.getAttribute('data-a').includes(q);
          el.style.display = match ? '' : 'none';
        });
      };
      search.addEventListener('input', filter);
    }
  }
}
customElements.define('custom-faq', CustomFAQ);
