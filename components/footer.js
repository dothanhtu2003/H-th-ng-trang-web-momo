class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .footer {
          background-color: #2d3748;
          color: white;
        }
        .footer-link:hover {
          color: #a50064;
        }
      </style>
      <footer id="footer" class="footer py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-semibold mb-4">MoMo Clone</h3>
              <p class="text-gray-400">Ví điện tử số 1 Việt Nam</p>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-4">Dịch vụ</h3>
              <ul class="space-y-2">
                <li><a href="#" class="footer-link text-gray-400 hover:text-white">Chuyển tiền</a></li>
                <li><a href="#" class="footer-link text-gray-400 hover:text-white">Thanh toán</a></li>
                <li><a href="#" class="footer-link text-gray-400 hover:text-white">Nạp tiền</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-4">Hỗ trợ</h3>
              <ul class="space-y-2">
                <li><a href="#" class="footer-link text-gray-400 hover:text-white">Trung tâm trợ giúp</a></li>
                <li><a href="#" class="footer-link text-gray-400 hover:text-white">Liên hệ</a></li>
                <li><a href="#" class="footer-link text-gray-400 hover:text-white">Câu hỏi thường gặp</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-4">Kết nối với chúng tôi</h3>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-400 hover:text-white">
                  <i data-feather="facebook"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-white">
                  <i data-feather="twitter"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-white">
                  <i data-feather="instagram"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-white">
                  <i data-feather="youtube"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p> 2023 MoMo Clone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;
    if (window.feather && typeof window.feather.replace === 'function') {
      window.feather.replace();
    }
  }
}
customElements.define('custom-footer', CustomFooter);