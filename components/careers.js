class CustomCareers extends HTMLElement {
  connectedCallback() {
    const jobs = [
      { id: 1, title: 'Frontend Engineer', dept: 'Engineering', type: 'Full-time', location: 'HCMC', tags: ['React','Tailwind'] },
      { id: 2, title: 'Backend Engineer', dept: 'Engineering', type: 'Full-time', location: 'Hanoi', tags: ['Node.js','PostgreSQL'] },
      { id: 3, title: 'Product Manager', dept: 'Product', type: 'Full-time', location: 'HCMC', tags: ['Agile','UX'] },
      { id: 4, title: 'QA Engineer', dept: 'Engineering', type: 'Contract', location: 'Remote', tags: ['Automation','Playwright'] }
    ];

    const depts = ['Tất cả','Engineering','Product'];

    this.innerHTML = `
      <section id="careers" class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row md:items-end md:justify-between mb-6 gap-3">
            <div>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900" data-i18n="careers_title">Tuyển dụng</h2>
              <p class="mt-2 text-gray-600" data-i18n="careers_subtitle">Gia nhập đội ngũ và cùng xây dựng sản phẩm tài chính số.</p>
            </div>
            <div class="flex items-center gap-3">
              <input id="job-search" type="search" data-i18n-placeholder="careers_search" placeholder="Tìm vị trí" class="px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-600 w-56" />
              <select id="job-dept" class="px-3 py-2 rounded-xl border border-gray-300">
                <option data-i18n-value="dept_all" value="Tất cả">Tất cả</option>
                ${depts.slice(1).map(d=>`<option value="${d}">${d}</option>`).join('')}
              </select>
            </div>
          </div>

          <div id="job-list" class="grid gap-4 md:grid-cols-2"></div>
        </div>
      </section>
    `;

    const listEl = this.querySelector('#job-list');
    const searchEl = this.querySelector('#job-search');
    const deptEl = this.querySelector('#job-dept');
    let q = '';
    let dept = 'Tất cả';

    const render = () => {
      const items = jobs.filter(j => (dept==='Tất cả' || j.dept===dept) && (!q || j.title.toLowerCase().includes(q)));
      listEl.innerHTML = items.map(j => `
        <div class="bg-white rounded-2xl shadow p-6 flex items-start justify-between">
          <div>
            <div class="font-semibold text-gray-900">${j.title}</div>
            <div class="text-sm text-gray-500">${j.dept} • ${j.type} • ${j.location}</div>
            <div class="mt-2 flex flex-wrap gap-2">
              ${j.tags.map(t=>`<span class="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">${t}</span>`).join('')}
            </div>
          </div>
          <a href="#" class="inline-flex items-center px-4 py-2 rounded-xl text-white" style="background: linear-gradient(135deg, #a50064 0%, #8a0054 100%)">
            <span data-i18n="apply_now">Ứng tuyển ngay</span>
          </a>
        </div>
      `).join('');
      // Inject JSON-LD JobPosting for SEO
      // Remove old JSON-LD if any
      this.querySelectorAll('script[type="application/ld+json"][data-job]').forEach(s=>s.remove());
      items.forEach(j => {
        const ld = document.createElement('script');
        ld.type = 'application/ld+json';
        ld.setAttribute('data-job', j.id);
        ld.textContent = JSON.stringify({
          '@context': 'https://schema.org', '@type': 'JobPosting',
          title: j.title,
          employmentType: j.type,
          hiringOrganization: { '@type': 'Organization', name: 'MoMo Clone' },
          jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: j.location, addressCountry: 'VN' } },
          datePosted: new Date().toISOString(),
          description: `${j.title} in ${j.dept}.`
        });
        this.appendChild(ld);
      });
      if (window.I18N && typeof window.I18N.apply==='function') window.I18N.apply();
    };

    searchEl.addEventListener('input', () => { q = (searchEl.value||'').trim().toLowerCase(); render(); });
    deptEl.addEventListener('change', () => { dept = deptEl.value; render(); });
    render();
  }
}
customElements.define('custom-careers', CustomCareers);
