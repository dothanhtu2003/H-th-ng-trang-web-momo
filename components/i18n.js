(function(){
  const DICT = {
    vi: {
      news_title: 'Tin tức & Chuyên mục',
      news_view_all: 'Xem tất cả',
      news_search: 'Tìm bài viết',
      news_related: 'Bài viết liên quan',
      careers_title: 'Tuyển dụng',
      careers_subtitle: 'Gia nhập đội ngũ và cùng xây dựng sản phẩm tài chính số.',
      careers_search: 'Tìm vị trí',
      dept_all: 'Tất cả',
      back: 'Quay lại',
      apply_now: 'Ứng tuyển ngay',
      usp_title: 'Vì sao chọn MoMo?',
      usp_subtitle: '3–5 lợi ích then chốt giúp bạn thanh toán an toàn, nhanh chóng và tiện lợi.',
      services_title: 'Dịch vụ của chúng tôi',
      features_title: 'Tại sao chọn MoMo?',
      features_subtitle: 'Những lý do bạn nên sử dụng ví điện tử MoMo',
      security_title: 'An toàn bảo mật đa lớp',
      security_intro: 'Chúng tôi áp dụng các tiêu chuẩn bảo mật nghiêm ngặt để bảo vệ tài khoản và giao dịch của bạn.',
      pricing_title: 'Biểu phí & Hạn mức',
      pricing_subtitle: 'Minh bạch chi phí dịch vụ và hạn mức giao dịch.',
      pricing_download: 'Tải PDF biểu phí',
      usecases_title: 'Tình huống sử dụng nổi bật',
      usecases_subtitle: 'Những gì người dùng yêu thích khi dùng MoMo mỗi ngày',
      onboarding_title: 'Bắt đầu với MoMo trong 4 bước',
      onboarding_subtitle: 'Nhanh chóng, an toàn và cực kỳ đơn giản.',
      testimonials_title: 'Khách hàng nói gì',
      testimonials_subtitle: 'Cảm nhận thực tế từ cộng đồng người dùng MoMo',
      appcta_title: 'Tải ứng dụng MoMo',
      appcta_subtitle: 'Trải nghiệm thanh toán không tiền mặt, an toàn và tiện lợi.',
      appcta_appstore: 'App Store',
      appcta_googleplay: 'Google Play',
      appcta_qr_note: 'Quét mã để tải app',
      appcta_qr_title: 'MoMo - Siêu ứng dụng tài chính',
      banks_title: 'Ngân hàng liên kết',
      banks_subtitle: 'Danh sách ngân hàng hỗ trợ và hướng dẫn liên kết nhanh chóng.',
      banks_link_guide: 'Xem hướng dẫn liên kết',
      securitydetail_title: 'Bảo mật & Tuân thủ',
      securitydetail_intro: 'Chúng tôi duy trì tiêu chuẩn bảo mật cao nhất và quy trình xử lý khiếu nại minh bạch để bảo vệ người dùng.'
    },
    en: {
      news_title: 'News & Categories',
      news_view_all: 'View all',
      news_search: 'Search articles',
      news_related: 'Related posts',
      careers_title: 'Careers',
      careers_subtitle: 'Join us to build the future of digital finance.',
      careers_search: 'Search jobs',
      dept_all: 'All',
      back: 'Back',
      apply_now: 'Apply now',
      usp_title: 'Why choose MoMo?',
      usp_subtitle: '3–5 key benefits: safer, faster, more convenient payments.',
      services_title: 'Our services',
      features_title: 'Why MoMo?',
      features_subtitle: 'Reasons you should use MoMo e-wallet',
      security_title: 'Multi-layer security',
      security_intro: 'We apply strict security standards to protect your account and transactions.',
      pricing_title: 'Fees & Limits',
      pricing_subtitle: 'Transparent service fees and transaction limits.',
      pricing_download: 'Download fee PDF',
      usecases_title: 'Popular use cases',
      usecases_subtitle: 'What users love to do with MoMo everyday',
      onboarding_title: 'Get started with MoMo in 4 steps',
      onboarding_subtitle: 'Fast, secure, and super simple.',
      testimonials_title: 'What customers say',
      testimonials_subtitle: 'Real feedback from our users',
      appcta_title: 'Get the MoMo app',
      appcta_subtitle: 'Experience safe, cashless convenience.',
      appcta_appstore: 'App Store',
      appcta_googleplay: 'Google Play',
      appcta_qr_note: 'Scan to download',
      appcta_qr_title: 'MoMo - Super finance app',
      banks_title: 'Linked banks',
      banks_subtitle: 'Supported banks and quick linking guide.',
      banks_link_guide: 'View linking guide',
      securitydetail_title: 'Security & Compliance',
      securitydetail_intro: 'We maintain top security standards and transparent complaint handling.'
    }
  };
  function getLang(){ return localStorage.getItem('lang') || 'vi'; }
  function t(key){ const lang=getLang(); return (DICT[lang]&&DICT[lang][key])|| (DICT.vi[key]||key); }
  function apply(){
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const k = el.getAttribute('data-i18n');
      const v = t(k);
      if (v) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
      const k = el.getAttribute('data-i18n-placeholder');
      const v = t(k);
      if (v) el.setAttribute('placeholder', v);
    });
    document.querySelectorAll('[data-i18n-value]').forEach(el=>{
      const k = el.getAttribute('data-i18n-value');
      const v = t(k);
      if (v) el.setAttribute('value', v);
    });
  }
  window.I18N = { t, apply };
  document.addEventListener('DOMContentLoaded', apply);
})();
