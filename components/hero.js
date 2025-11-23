class CustomHero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="hero relative h-[55vh] md:h-[calc(100vh-7rem)] min-h-[380px] max-h-[680px]">
        <img id="hero-img" src="https://picsum.photos/1600/900" alt="MoMo Banner" class="absolute inset-0 w-full h-full object-cover">
      </section>
    `;

    const heroImg = this.querySelector('#hero-img');
    if (heroImg && window.ASSETS && window.ASSETS.hero) {
      heroImg.src = window.ASSETS.hero;
    }
  }
}
customElements.define('custom-hero', CustomHero);