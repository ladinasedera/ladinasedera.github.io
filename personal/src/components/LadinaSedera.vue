<script setup>
import { ref, computed, onMounted, watchEffect } from 'vue';

const currentYear = new Date().getFullYear();

const THEMES = ['system', 'light', 'dark'];
const THEME_ICONS = { system: '💻', light: '☀️', dark: '🌙' };
const theme = ref('system');

function applyTheme(val) {
  const root = document.documentElement;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = val === 'dark' || (val === 'system' && prefersDark);
  root.setAttribute('data-theme', isDark ? 'dark' : 'light');
}
function cycleTheme() {
  const idx = THEMES.indexOf(theme.value);
  theme.value = THEMES[(idx + 1) % THEMES.length];
}
onMounted(() => {
  const saved = localStorage.getItem('ls-theme') || 'system';
  theme.value = saved;
  applyTheme(saved);
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (theme.value === 'system') applyTheme('system');
  });
});
watchEffect(() => {
  localStorage.setItem('ls-theme', theme.value);
  applyTheme(theme.value);
});

const translations = {
  en: {
    nav_cta: 'Work with me',
    hero_tag: 'Full Stack Developer — Available for Freelance',
    hero_title: 'I turn your ideas into\nhigh-performance web solutions.',
    hero_sub: 'From concept to deployment — clean code, real results, client-first approach.',
    hero_cta: 'Start a project', hero_cta2: 'See my stack',
    motivational: '💪 I can do all things through Christ, who strengthens me — Philippians 4:13',
    about_title: 'About me',
    about_text: `Expert in the complete web/mobile & API development lifecycle. I deliver high-performance applications using PHP & JavaScript — primarily Laravel, Vue.js, WordPress & PrestaShop — that drive real business results.`,
    value_1_title: 'Proven track record', value_1: 'Dynamic web applications built with clean, scalable, object-oriented code.',
    value_2_title: 'Full lifecycle', value_2: 'Coding, testing, debugging, deployment and long-term maintenance.',
    value_3_title: 'Client-first', value_3: 'Your satisfaction and long-term success are my primary objectives.',
    stack_title: 'Technical Stack', stack_sub: 'Preferred Technologies',
    contact_title: "Let's work together", contact_sub: "Have a project in mind? I'd love to hear about it.",
    contact_linkedin: 'Connect on LinkedIn', contact_email: 'Send an email', contact_whatsapp: 'WhatsApp me',
    footer_name: 'Ladina Sedera — Full Stack Developer', theme_label: 'Theme',
  },
  fr: {
    nav_cta: 'Collaborer',
    hero_tag: 'Développeuse Full Stack — Disponible en Freelance',
    hero_title: 'Je transforme vos idées en\nsolutions web performantes.',
    hero_sub: 'Du concept au déploiement — code propre, résultats concrets, approche client-first.',
    hero_cta: 'Démarrer un projet', hero_cta2: 'Voir mes compétences',
    motivational: '💪 Je peux tout faire grâce au Christ qui me fortifie — Philippiens 4:13',
    about_title: 'À propos',
    about_text: `Experte dans le cycle complet de développement web, mobile et API. Je conçois des applications performantes avec PHP & JavaScript — principalement Laravel, Vue.js, WordPress & PrestaShop — qui génèrent de vrais résultats pour votre activité.`,
    value_1_title: 'Expérience confirmée', value_1: 'Applications web dynamiques, code propre, structuré et évolutif.',
    value_2_title: 'Cycle complet', value_2: 'Codage, tests, débogage, déploiement et maintenance long terme.',
    value_3_title: 'Client en priorité', value_3: 'Votre satisfaction et votre succès sur le long terme sont mes objectifs.',
    stack_title: 'Compétences Techniques', stack_sub: 'Technologies Préférées',
    contact_title: 'Travaillons ensemble', contact_sub: "Vous avez un projet en tête ? Je serais ravie d'en discuter.",
    contact_linkedin: 'LinkedIn', contact_email: 'Envoyer un email', contact_whatsapp: 'WhatsApp',
    footer_name: 'Ladina Sedera — Développeuse Full Stack', theme_label: 'Thème',
  }
};

const selectedLanguage = ref('en');
const t = computed(() => translations[selectedLanguage.value]);

const brands = [
  { name: 'PHP', logo: 'php.svg', url: 'https://www.php.net' },
  { name: 'Laravel', logo: 'laravel.svg', url: 'https://laravel.com' },
  { name: 'Symfony', logo: 'symfony.svg', url: 'https://symfony.com' },
  { name: 'CodeIgniter', logo: 'codeigniter.svg', url: 'https://codeigniter.com' },
  { name: 'WordPress', logo: 'wordpress.svg', url: 'https://wordpress.org' },
  { name: 'PrestaShop', logo: 'prestashop.svg', url: 'https://www.prestashop.com' },
  { name: 'MySQL', logo: 'mysql.svg', url: 'https://www.mysql.com' },
  { name: 'PostgreSQL', logo: 'postgresql.svg', url: 'https://www.postgresql.org' },
  { name: 'MongoDB', logo: 'mongodb.svg', url: 'https://www.mongodb.com' },
  { name: 'Composer', logo: 'composer.svg', url: 'https://packagist.org/packages/ladina/' },
  { name: 'NodeJS', logo: 'nodejs.svg', url: 'https://nodejs.org' },
  { name: 'JavaScript', logo: 'javascript.svg', url: 'https://www.javascript.com' },
  { name: 'TypeScript', logo: 'typescript.svg', url: 'https://www.typescriptlang.org' },
  { name: 'ExpressJS', logo: 'expressjs.svg', url: 'https://expressjs.com' },
  { name: 'NestJS', logo: 'nestjs.svg', url: 'https://nestjs.com' },
  { name: 'VueJS', logo: 'vuejs.svg', url: 'https://vuejs.org' },
  { name: 'jQuery', logo: 'jquery.svg', url: 'https://jquery.com' },
  { name: 'Flutter', logo: 'flutter.svg', url: 'https://flutter.dev' },
  { name: 'Tailwind', logo: 'tailwind.svg', url: 'https://tailwindcss.com' },
  { name: 'Bootstrap', logo: 'bootstrap.svg', url: 'https://getbootstrap.com' },
  { name: 'GitHub', logo: 'github.svg', url: 'https://github.com/ladinasedera' },
  { name: 'Apache', logo: 'apache.svg', url: 'https://apache.org' },
];

const isDev = import.meta.env.MODE === 'development';
const baseUrl = isDev ? '/src' : '';

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}
</script>

<template>
  <div class="ls-page">
    <nav class="ls-nav">
      <span class="ls-nav__logo">Ladina Sedera</span>
      <div class="ls-nav__right">
        <div class="ls-lang">
          <button @click="selectedLanguage = 'en'" :class="['ls-lang__btn', { active: selectedLanguage === 'en' }]">
            <img :src="`${baseUrl}/assets/icons/flag-en.svg`" alt="EN" class="ls-lang__flag" /> EN
          </button>
          <button @click="selectedLanguage = 'fr'" :class="['ls-lang__btn', { active: selectedLanguage === 'fr' }]">
            <img :src="`${baseUrl}/assets/icons/flag-fr.svg`" alt="FR" class="ls-lang__flag" /> FR
          </button>
        </div>
        <button class="ls-theme-btn" @click="cycleTheme" :title="t.theme_label">{{ THEME_ICONS[theme] }}</button>
        <button class="ls-btn ls-btn--primary ls-btn--sm" @click="scrollTo('contact')">{{ t.nav_cta }}</button>
      </div>
    </nav>

    <section class="ls-hero">
      <div class="ls-hero__inner container">
        <div class="ls-hero__content">
          <span class="ls-tag">{{ t.hero_tag }}</span>
          <h1 class="ls-hero__title">{{ t.hero_title }}</h1>
          <p class="ls-hero__sub">{{ t.hero_sub }}</p>
          <p class="ls-hero__verse">{{ t.motivational }}</p>
          <div class="ls-hero__actions">
            <button class="ls-btn ls-btn--primary" @click="scrollTo('contact')">{{ t.hero_cta }}</button>
            <button class="ls-btn ls-btn--ghost" @click="scrollTo('stack')">{{ t.hero_cta2 }}</button>
          </div>
        </div>
        <div class="ls-hero__visual">
          <div class="ls-avatar-wrap">
            <img src="https://avatars.githubusercontent.com/u/46368118?v=4" alt="Ladina Sedera" class="ls-avatar" />
            <div class="ls-avatar-ring"></div>
          </div>
        </div>
      </div>
      <div class="ls-hero__bar"></div>
    </section>

    <section class="ls-about container" id="about">
      <div class="ls-section-header">
        <h2 class="ls-section-title">{{ t.about_title }}</h2>
        <div class="ls-section-line"></div>
      </div>
      <p class="ls-about__text">{{ t.about_text }}</p>
      <div class="ls-values">
        <div class="ls-value-card">
          <div class="ls-value-card__icon">✦</div>
          <h3 class="ls-value-card__title">{{ t.value_1_title }}</h3>
          <p class="ls-value-card__text">{{ t.value_1 }}</p>
        </div>
        <div class="ls-value-card">
          <div class="ls-value-card__icon">⟳</div>
          <h3 class="ls-value-card__title">{{ t.value_2_title }}</h3>
          <p class="ls-value-card__text">{{ t.value_2 }}</p>
        </div>
        <div class="ls-value-card">
          <div class="ls-value-card__icon">◈</div>
          <h3 class="ls-value-card__title">{{ t.value_3_title }}</h3>
          <p class="ls-value-card__text">{{ t.value_3 }}</p>
        </div>
      </div>
    </section>

    <section class="ls-stack" id="stack">
      <div class="container">
        <div class="ls-section-header">
          <h2 class="ls-section-title">{{ t.stack_title }} <span class="ls-section-title--light">{{ t.stack_sub }}</span></h2>
          <div class="ls-section-line"></div>
        </div>
        <div class="ls-brands">
          <a v-for="brand in brands" :key="brand.name" :href="brand.url" :title="brand.name"
             target="_blank" rel="noopener noreferrer" class="ls-brand">
            <img :src="`${baseUrl}/assets/icons/${brand.logo}`" :alt="brand.name" class="ls-brand__img" />
            <span class="ls-brand__name">{{ brand.name }}</span>
          </a>
        </div>
      </div>
    </section>

    <section class="ls-contact container" id="contact">
      <div class="ls-contact__inner">
        <div class="ls-section-header">
          <h2 class="ls-section-title">{{ t.contact_title }}</h2>
          <div class="ls-section-line"></div>
        </div>
        <p class="ls-contact__sub">{{ t.contact_sub }}</p>
        <div class="ls-contact__links">
          <a href="https://www.linkedin.com/in/ladina-sedera" target="_blank" class="ls-contact-card">
            <img :src="`${baseUrl}/assets/icons/linkedin.svg`" alt="LinkedIn" class="ls-contact-card__icon" />
            <span>{{ t.contact_linkedin }}</span>
          </a>
          <a href="mailto:ladina.sedera@gmail.com" class="ls-contact-card">
            <img :src="`${baseUrl}/assets/icons/gmail.svg`" alt="Email" class="ls-contact-card__icon" />
            <span>{{ t.contact_email }}</span>
          </a>
          <a href="https://wa.me/261341110472" target="_blank" class="ls-contact-card ls-contact-card--accent">
            <img :src="`${baseUrl}/assets/icons/whatsapp.svg`" alt="WhatsApp" class="ls-contact-card__icon" />
            <span>{{ t.contact_whatsapp }}</span>
          </a>
        </div>
      </div>
    </section>

    <footer class="ls-footer">
      <span>© {{ currentYear }} {{ t.footer_name }}</span>
    </footer>
  </div>
</template>

<style scoped>
:root, [data-theme="light"] {
  --ls-bg: #ffffff; --ls-bg2: #f9fafb;
  --ls-hero-bg: linear-gradient(135deg, #f8faff 0%, #eef3ff 100%);
  --ls-text: #1a1d26; --ls-muted: #6b7280; --ls-border: #e5e7eb;
  --ls-accent: #2f6fef; --ls-accent-light: #e8effd;
  --ls-white: #ffffff; --ls-card-bg: #ffffff;
  --ls-shadow: 0 4px 24px rgba(0,0,0,0.08);
  --ls-radius: 12px; --ls-lang-active-underline: #22c55e;
}
[data-theme="dark"] {
  --ls-bg: #0f1117; --ls-bg2: #181c27;
  --ls-hero-bg: linear-gradient(135deg, #131620 0%, #1a2035 100%);
  --ls-text: #f0f2f8; --ls-muted: #9ca3af; --ls-border: #2a2f3e;
  --ls-accent: #5b8fff; --ls-accent-light: #1a2540;
  --ls-white: #1e2330; --ls-card-bg: #1e2330;
  --ls-shadow: 0 4px 24px rgba(0,0,0,0.35);
  --ls-radius: 12px; --ls-lang-active-underline: #22c55e;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
.ls-page { font-family: 'Georgia', serif; color: var(--ls-text); background: var(--ls-bg); min-height: 100vh; transition: background 0.3s, color 0.3s; }
.container { max-width: 1080px; margin: 0 auto; padding: 0 24px; }

.ls-nav { position: sticky; top: 0; z-index: 100; display: flex; align-items: center; justify-content: space-between; padding: 16px 40px; background: color-mix(in srgb, var(--ls-bg) 92%, transparent); backdrop-filter: blur(8px); border-bottom: 1px solid var(--ls-border); transition: background 0.3s; }
.ls-nav__logo { font-size: 1.1rem; font-weight: 700; letter-spacing: -0.02em; color: var(--ls-text); }
.ls-nav__right { display: flex; align-items: center; gap: 16px; }

.ls-lang { display: flex; gap: 6px; }
.ls-lang__btn { display: flex; align-items: center; gap: 4px; padding: 6px 10px 4px; border: none; border-bottom: 2px solid transparent; border-radius: 4px 4px 0 0; background: transparent; font-size: 0.82rem; font-weight: 600; color: var(--ls-muted); cursor: pointer; transition: all 0.2s; }
.ls-lang__btn:hover { color: var(--ls-text); }
.ls-lang__btn.active { color: var(--ls-text); border-bottom-color: var(--ls-lang-active-underline); }
.ls-lang__flag { width: 18px; height: 13px; object-fit: cover; border-radius: 2px; }

.ls-theme-btn { display: flex; align-items: center; justify-content: center; width: 34px; height: 34px; border-radius: 8px; border: 1px solid var(--ls-border); background: transparent; font-size: 1rem; cursor: pointer; transition: all 0.2s; color: var(--ls-text); }
.ls-theme-btn:hover { background: var(--ls-accent-light); border-color: var(--ls-accent); }

.ls-btn { display: inline-flex; align-items: center; padding: 12px 24px; border-radius: 8px; font-size: 0.95rem; font-weight: 600; cursor: pointer; border: none; transition: all 0.2s; text-decoration: none; font-family: inherit; }
.ls-btn--primary { background: var(--ls-accent); color: #fff; }
.ls-btn--primary:hover { background: #1a57d6; transform: translateY(-1px); }
.ls-btn--ghost { background: transparent; color: var(--ls-text); border: 1.5px solid var(--ls-border); }
.ls-btn--ghost:hover { border-color: var(--ls-accent); color: var(--ls-accent); }
.ls-btn--sm { padding: 8px 18px; font-size: 0.85rem; }

.ls-hero { background: var(--ls-hero-bg); padding: 80px 0 0; position: relative; overflow: hidden; }
.ls-hero__inner { display: grid; grid-template-columns: 1fr 340px; gap: 48px; align-items: center; padding-bottom: 80px; }
.ls-hero__content { display: flex; flex-direction: column; gap: 20px; }
.ls-tag { display: inline-block; padding: 6px 14px; background: var(--ls-accent-light); color: var(--ls-accent); border-radius: 100px; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; font-family: Arial, sans-serif; width: fit-content; }
.ls-hero__title { font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; line-height: 1.15; letter-spacing: -0.03em; color: var(--ls-text); white-space: pre-line; }
.ls-hero__sub { font-size: 1.05rem; color: var(--ls-muted); line-height: 1.7; font-family: Arial, sans-serif; }
.ls-hero__verse { font-size: 0.88rem; color: var(--ls-muted); font-style: italic; border-left: 3px solid var(--ls-accent); padding-left: 12px; }
.ls-hero__actions { display: flex; gap: 12px; flex-wrap: wrap; }
.ls-hero__visual { display: flex; justify-content: center; align-items: center; }
.ls-avatar-wrap { position: relative; width: 260px; height: 260px; }
.ls-avatar { width: 240px; height: 240px; border-radius: 50%; object-fit: cover; position: absolute; top: 10px; left: 10px; border: 4px solid var(--ls-bg); box-shadow: var(--ls-shadow); }
.ls-avatar-ring { width: 260px; height: 260px; border-radius: 50%; border: 2px dashed var(--ls-accent); opacity: 0.4; animation: spin 20s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
.ls-hero__bar { height: 4px; background: linear-gradient(90deg, var(--ls-accent) 0%, #a5c0fb 100%); }

.ls-section-header { display: flex; align-items: center; gap: 16px; margin-bottom: 32px; }
.ls-section-title { font-size: 1.6rem; font-weight: 700; letter-spacing: -0.02em; white-space: nowrap; }
.ls-section-title--light { font-weight: 300; color: var(--ls-muted); }
.ls-section-line { flex: 1; height: 1px; background: var(--ls-border); }

.ls-about { padding: 80px 24px; background: var(--ls-bg); }
.ls-about__text { font-size: 1.05rem; line-height: 1.8; color: var(--ls-muted); max-width: 720px; margin-bottom: 48px; font-family: Arial, sans-serif; }
.ls-values { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.ls-value-card { padding: 28px; border: 1px solid var(--ls-border); border-radius: var(--ls-radius); background: var(--ls-card-bg); transition: all 0.25s; }
.ls-value-card:hover { border-color: var(--ls-accent); box-shadow: 0 0 0 4px var(--ls-accent-light); transform: translateY(-3px); }
.ls-value-card__icon { font-size: 1.4rem; color: var(--ls-accent); margin-bottom: 12px; }
.ls-value-card__title { font-size: 1rem; font-weight: 700; margin-bottom: 8px; }
.ls-value-card__text { font-size: 0.9rem; color: var(--ls-muted); line-height: 1.6; font-family: Arial, sans-serif; }

.ls-stack { background: var(--ls-bg2); padding: 80px 0; border-top: 1px solid var(--ls-border); border-bottom: 1px solid var(--ls-border); }
.ls-brands { display: grid; grid-template-columns: repeat(auto-fill, minmax(90px, 1fr)); gap: 16px; }
.ls-brand { display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 16px 8px; border-radius: var(--ls-radius); border: 1px solid transparent; text-decoration: none; transition: all 0.2s; }
.ls-brand:hover { border-color: var(--ls-border); background: var(--ls-card-bg); box-shadow: var(--ls-shadow); transform: translateY(-2px); }
.ls-brand__img { width: 48px; height: 48px; object-fit: contain; }
.ls-brand__name { font-size: 0.72rem; color: var(--ls-muted); text-align: center; font-family: Arial, sans-serif; font-weight: 500; }

.ls-contact { padding: 80px 24px; background: var(--ls-bg); }
.ls-contact__inner { max-width: 720px; }
.ls-contact__sub { font-size: 1.05rem; color: var(--ls-muted); margin-bottom: 40px; font-family: Arial, sans-serif; line-height: 1.7; }
.ls-contact__links { display: flex; gap: 16px; flex-wrap: wrap; }
.ls-contact-card { display: flex; align-items: center; gap: 10px; padding: 14px 22px; border: 1.5px solid var(--ls-border); border-radius: var(--ls-radius); text-decoration: none; color: var(--ls-text); font-size: 0.9rem; font-weight: 600; font-family: Arial, sans-serif; transition: all 0.2s; background: var(--ls-card-bg); }
.ls-contact-card:hover { border-color: var(--ls-accent); color: var(--ls-accent); box-shadow: 0 0 0 3px var(--ls-accent-light); }
.ls-contact-card--accent { background: var(--ls-accent); border-color: var(--ls-accent); color: #fff; }
.ls-contact-card--accent:hover { background: #1a57d6; color: #fff; box-shadow: 0 4px 16px rgba(47,111,239,0.3); }
.ls-contact-card__icon { width: 22px; height: 22px; object-fit: contain; }

.ls-footer { padding: 24px 40px; border-top: 1px solid var(--ls-border); text-align: center; font-size: 0.82rem; color: var(--ls-muted); font-family: Arial, sans-serif; }

@media (max-width: 768px) {
  .ls-nav { padding: 14px 20px; }
  .ls-hero__inner { grid-template-columns: 1fr; text-align: center; }
  .ls-hero__visual { order: -1; }
  .ls-hero__verse { text-align: left; }
  .ls-hero__actions { justify-content: center; }
  .ls-tag { margin: 0 auto; }
  .ls-values { grid-template-columns: 1fr; }
  .ls-contact__links { flex-direction: column; }
  .ls-brands { grid-template-columns: repeat(auto-fill, minmax(75px, 1fr)); }
  .ls-avatar-wrap { width: 200px; height: 200px; }
  .ls-avatar { width: 180px; height: 180px; }
  .ls-avatar-ring { width: 200px; height: 200px; }
}
</style>