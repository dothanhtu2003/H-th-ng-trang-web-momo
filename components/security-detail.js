class CustomSecurityDetail extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="security-detail" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="mb-10">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Bảo mật & Tuân thủ</h2>
            <p class="mt-3 text-lg text-gray-600 max-w-3xl">Chúng tôi duy trì tiêu chuẩn bảo mật cao nhất và quy trình xử lý khiếu nại minh bạch để bảo vệ người dùng.</p>
          </div>

          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-gray-50 rounded-2xl p-6 shadow-sm">
              <h3 class="font-semibold text-gray-900 mb-2">Tuân thủ PCI DSS</h3>
              <ul class="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Mã hóa dữ liệu thẻ thanh toán</li>
                <li>Kiểm soát truy cập nghiêm ngặt</li>
                <li>Kiểm thử, đánh giá định kỳ</li>
              </ul>
            </div>
            <div class="bg-gray-50 rounded-2xl p-6 shadow-sm">
              <h3 class="font-semibold text-gray-900 mb-2">Trung tâm an toàn</h3>
              <ul class="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Phát hiện bất thường thời gian thực</li>
                <li>Bảo vệ OTP & sinh trắc học</li>
                <li>Khoá khẩn cấp tài khoản</li>
              </ul>
            </div>
            <div class="bg-gray-50 rounded-2xl p-6 shadow-sm">
              <h3 class="font-semibold text-gray-900 mb-2">Quy trình khiếu nại</h3>
              <ol class="list-decimal list-inside text-gray-700 text-sm space-y-1">
                <li>Gửi yêu cầu từ mục Hỗ trợ</li>
                <li>Nhận mã tra soát & theo dõi</li>
                <li>Phản hồi trong 1–3 ngày làm việc</li>
              </ol>
            </div>
          </div>

          <div class="mt-8">
            <a href="#faq" class="inline-flex items-center px-4 py-2 rounded-xl text-white" style="background: linear-gradient(135deg, #a50064 0%, #8a0054 100%)">
              <i data-feather="life-buoy" class="w-4 h-4 mr-2"></i> Xem thêm câu hỏi bảo mật
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
customElements.define('custom-security-detail', CustomSecurityDetail);
