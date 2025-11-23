class CustomSecurity extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="security" class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-4">An toàn bảo mật đa lớp</h2>
              <p class="text-gray-600 mb-6">Chúng tôi áp dụng các tiêu chuẩn bảo mật nghiêm ngặt để bảo vệ tài khoản và giao dịch của bạn. Mọi dữ liệu đều được mã hóa và giám sát liên tục nhằm ngăn chặn gian lận.</p>
              <div class="flex flex-wrap items-center gap-3 mb-6">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-700 border border-green-200">
                  <i data-feather="shield" class="w-4 h-4 mr-1"></i> Tuân thủ PCI DSS
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                  <i data-feather="check-circle" class="w-4 h-4 mr-1"></i> Mã hóa cấp ngân hàng
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200">
                  <i data-feather="user-check" class="w-4 h-4 mr-1"></i> Xác thực đa lớp
                </span>
              </div>
              <ul class="space-y-3 text-gray-700">
                <li class="flex items-start"><i data-feather="shield" class="text-momo mr-2"></i> Tuân thủ tiêu chuẩn quốc tế PCI DSS</li>
                <li class="flex items-start"><i data-feather="lock" class="text-momo mr-2"></i> Xác thực đa yếu tố (OTP, sinh trắc học)</li>
                <li class="flex items-start"><i data-feather="eye-off" class="text-momo mr-2"></i> Mã hóa đầu-cuối và ẩn thông tin thẻ</li>
                <li class="flex items-start"><i data-feather="activity" class="text-momo mr-2"></i> Phát hiện bất thường theo thời gian thực</li>
              </ul>
            </div>
            <div>
              <div class="bg-white rounded-2xl shadow p-6">
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-gray-50 rounded-xl p-4 text-center">
                    <i data-feather="check-circle" class="mx-auto text-momo"></i>
                    <div class="mt-2 font-semibold">Giấy phép đầy đủ</div>
                    <div class="text-gray-600 text-sm">Được quản lý bởi cơ quan chức năng</div>
                  </div>
                  <div class="bg-gray-50 rounded-xl p-4 text-center">
                    <i data-feather="key" class="mx-auto text-momo"></i>
                    <div class="mt-2 font-semibold">Mã hóa cấp ngân hàng</div>
                    <div class="text-gray-600 text-sm">Bảo mật tiêu chuẩn cao</div>
                  </div>
                  <div class="bg-gray-50 rounded-xl p-4 text-center">
                    <i data-feather="user-check" class="mx-auto text-momo"></i>
                    <div class="mt-2 font-semibold">Bảo vệ người dùng</div>
                    <div class="text-gray-600 text-sm">Cơ chế khiếu nại minh bạch</div>
                  </div>
                  <div class="bg-gray-50 rounded-xl p-4 text-center">
                    <i data-feather="shield-off" class="mx-auto text-momo"></i>
                    <div class="mt-2 font-semibold">Chống gian lận</div>
                    <div class="text-gray-600 text-sm">Giám sát 24/7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
    if (window.feather && typeof window.feather.replace === 'function') {
      window.feather.replace();
    }
  }
}
customElements.define('custom-security', CustomSecurity);
