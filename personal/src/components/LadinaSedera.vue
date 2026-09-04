<script setup>
import { ref, computed, onMounted, watchEffect } from 'vue';
import { translations, LOCALE_PATHS } from '@/i18n.js';

const currentYear = new Date().getFullYear();

/* ---------------------------------------------------------------- links */
const WHATSAPP_NUMBER = '261341110472';

/* Split, and only assembled after mount, so the full address appears neither
   in the prerendered HTML nor as a contiguous string in the bundle — naive
   harvesters scrape both. Still one click for a human. */
const EMAIL_USER = 'ladina.sedera';
const EMAIL_HOST = 'gmail.com';
const emailHref = ref(null);

const LINKS = {
  linkedin: 'https://www.linkedin.com/in/ladina-sedera',
  upwork: 'https://www.upwork.com/freelancers/~0155280b4d108e05b9',
  github: 'https://github.com/ladinasedera',
};

/* ---------------------------------------------------------------- theme */
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

const props = defineProps({
  /* Set at build time by prerender.js, and by main.js from the URL in dev. */
  lang: { type: String, default: 'en' },
});

const selectedLanguage = computed(() => props.lang);
const t = computed(() => translations[selectedLanguage.value]);
const localePaths = LOCALE_PATHS;

/* Pre-fills the WhatsApp message so the visitor never faces an empty chat box.
   `key` picks the wording that matches the button they clicked. */
function whatsappLink(key = 'wa_default') {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.value[key])}`;
}

onMounted(() => {
  emailHref.value = `mailto:${EMAIL_USER}@${EMAIL_HOST}`;

  theme.value = localStorage.getItem('ls-theme') || 'system';
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (theme.value === 'system') applyTheme('system');
  });

  /* Inside onMounted so it never runs during server-side rendering. */
  watchEffect(() => {
    localStorage.setItem('ls-theme', theme.value);
    applyTheme(theme.value);
  });
});

/* --------------------------------------------------------------- stack */
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
  { name: 'GitHub', logo: 'github.svg', url: LINKS.github },
  { name: 'Apache', logo: 'apache.svg', url: 'https://apache.org' },
];

const iconBase = '/assets/icons';

const services = computed(() => [
  { icon: '◆', title: t.value.service_1_title, text: t.value.service_1 },
  { icon: '⇄', title: t.value.service_2_title, text: t.value.service_2 },
  { icon: '▲', title: t.value.service_3_title, text: t.value.service_3 },
  { icon: '⚙', title: t.value.service_4_title, text: t.value.service_4 },
]);

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}
</script>

<template>
  <div class="ls-page">
    <a class="ls-skip" href="#main">{{ t.skip_link }}</a>

    <header class="ls-nav">
      <span class="ls-nav__logo">Ladina Sedera</span>
      <nav class="ls-nav__links" aria-label="Sections">
        <button class="ls-nav__link" @click="scrollTo('services')">{{ t.nav_services }}</button>
        <button class="ls-nav__link" @click="scrollTo('stack')">{{ t.nav_stack }}</button>
      </nav>
      <div class="ls-nav__right">
        <div class="ls-lang" role="group" aria-label="Language">
          <a :href="localePaths.en" hreflang="en" lang="en"
             :aria-current="selectedLanguage === 'en' ? 'true' : undefined"
             :class="['ls-lang__btn', { active: selectedLanguage === 'en' }]">
            <img :src="`${iconBase}/flag-en.svg`" alt="" width="18" height="13" class="ls-lang__flag" /> EN
          </a>
          <a :href="localePaths.fr" hreflang="fr" lang="fr"
             :aria-current="selectedLanguage === 'fr' ? 'true' : undefined"
             :class="['ls-lang__btn', { active: selectedLanguage === 'fr' }]">
            <img :src="`${iconBase}/flag-fr.svg`" alt="" width="18" height="13" class="ls-lang__flag" /> FR
          </a>
        </div>
        <button class="ls-theme-btn" @click="cycleTheme" :title="t.theme_label" :aria-label="t.theme_label">
          {{ THEME_ICONS[theme] }}
        </button>
        <a class="ls-btn ls-btn--primary ls-btn--sm ls-nav__cta" :href="whatsappLink()" target="_blank" rel="noopener">
          {{ t.nav_cta }}
        </a>
      </div>
    </header>

    <main id="main">
      <section class="ls-hero">
        <div class="ls-hero__inner container">
          <div class="ls-hero__content">
            <span class="ls-status"><span class="ls-status__dot" aria-hidden="true"></span>{{ t.availability }}</span>
            <span class="ls-tag">{{ t.hero_tag }}</span>
            <h1 class="ls-hero__title">{{ t.hero_title }}</h1>
            <p class="ls-hero__sub">{{ t.hero_sub }}</p>
            <div class="ls-hero__actions">
              <a class="ls-btn ls-btn--primary ls-btn--lg" :href="whatsappLink()" target="_blank" rel="noopener">
                <img :src="`${iconBase}/whatsapp.svg`" alt="" width="20" height="20" class="ls-btn__icon" />
                {{ t.hero_cta }}
              </a>
              <a class="ls-btn ls-btn--ghost ls-btn--lg" :href="LINKS.linkedin" target="_blank" rel="noopener">
                <img :src="`${iconBase}/linkedin.svg`" alt="" width="20" height="20" class="ls-btn__icon" />
                {{ t.hero_cta2 }}
              </a>
            </div>
            <p class="ls-hero__note">
              {{ t.hero_note }}
              <a :href="LINKS.upwork" target="_blank" rel="noopener" class="ls-inline-link">{{ t.hero_note_link }} →</a>
            </p>
            <p class="ls-hero__verse">💪 {{ t.motivational }}</p>
          </div>
          <div class="ls-hero__visual">
            <div class="ls-avatar-wrap">
              <img src="https://avatars.githubusercontent.com/u/46368118?v=4" width="240" height="240"
                   alt="Ladina Sedera, freelance full stack web developer" class="ls-avatar" />
              <div class="ls-avatar-ring" aria-hidden="true"></div>
            </div>
          </div>
        </div>
        <ul class="ls-trust">
          <li class="ls-trust__item">✓ {{ t.trust_1 }}</li>
          <li class="ls-trust__item">✓ {{ t.trust_2 }}</li>
          <li class="ls-trust__item">✓ {{ t.trust_3 }}</li>
          <li class="ls-trust__item">✓ {{ t.trust_4 }}</li>
        </ul>
        <div class="ls-hero__bar" aria-hidden="true"></div>
      </section>

      <section class="ls-about container" id="about" aria-labelledby="about-title">
        <div class="ls-section-header">
          <h2 class="ls-section-title" id="about-title">{{ t.about_title }}</h2>
          <div class="ls-section-line" aria-hidden="true"></div>
        </div>
        <p class="ls-about__text">{{ t.about_text }}</p>
        <div class="ls-values">
          <article class="ls-value-card">
            <div class="ls-value-card__icon" aria-hidden="true">✦</div>
            <h3 class="ls-value-card__title">{{ t.value_1_title }}</h3>
            <p class="ls-value-card__text">{{ t.value_1 }}</p>
          </article>
          <article class="ls-value-card">
            <div class="ls-value-card__icon" aria-hidden="true">⟳</div>
            <h3 class="ls-value-card__title">{{ t.value_2_title }}</h3>
            <p class="ls-value-card__text">{{ t.value_2 }}</p>
          </article>
          <article class="ls-value-card">
            <div class="ls-value-card__icon" aria-hidden="true">◈</div>
            <h3 class="ls-value-card__title">{{ t.value_3_title }}</h3>
            <p class="ls-value-card__text">{{ t.value_3 }}</p>
          </article>
        </div>
      </section>

      <section class="ls-services" id="services" aria-labelledby="services-title">
        <div class="container">
          <div class="ls-section-header">
            <h2 class="ls-section-title" id="services-title">
              {{ t.services_title }} <span class="ls-section-title--light">{{ t.services_sub }}</span>
            </h2>
            <div class="ls-section-line" aria-hidden="true"></div>
          </div>
          <div class="ls-services__grid">
            <article v-for="service in services" :key="service.title" class="ls-service-card">
              <div class="ls-service-card__icon" aria-hidden="true">{{ service.icon }}</div>
              <h3 class="ls-service-card__title">{{ service.title }}</h3>
              <p class="ls-service-card__text">{{ service.text }}</p>
            </article>
          </div>
          <div class="ls-services__cta">
            <p class="ls-services__cta-text">{{ t.services_cta_text }}</p>
            <div class="ls-services__cta-actions">
              <a class="ls-btn ls-btn--primary" :href="whatsappLink('wa_services')" target="_blank" rel="noopener">
                {{ t.services_cta }}
              </a>
              <a class="ls-btn ls-btn--ghost" :href="LINKS.linkedin" target="_blank" rel="noopener">
                {{ t.services_cta2 }}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="ls-stack" id="stack" aria-labelledby="stack-title">
        <div class="container">
          <div class="ls-section-header">
            <h2 class="ls-section-title" id="stack-title">
              {{ t.stack_title }} <span class="ls-section-title--light">{{ t.stack_sub }}</span>
            </h2>
            <div class="ls-section-line" aria-hidden="true"></div>
          </div>
          <div class="ls-brands">
            <a v-for="brand in brands" :key="brand.name" :href="brand.url" :title="brand.name"
               target="_blank" rel="noopener noreferrer" class="ls-brand">
              <img :src="`${iconBase}/${brand.logo}`" :alt="brand.name" width="48" height="48"
                   loading="lazy" class="ls-brand__img" />
              <span class="ls-brand__name">{{ brand.name }}</span>
            </a>
          </div>
        </div>
      </section>

      <section class="ls-contact" id="contact" aria-labelledby="contact-title">
        <div class="container">
          <div class="ls-contact__panel">
            <span class="ls-contact__kicker">{{ t.contact_kicker }}</span>
            <h2 class="ls-contact__title" id="contact-title">{{ t.contact_title }}</h2>
            <p class="ls-contact__sub">{{ t.contact_sub }}</p>

            <div class="ls-contact__links">
              <a :href="whatsappLink()" target="_blank" rel="noopener"
                 class="ls-contact-card ls-contact-card--accent">
                <span class="ls-contact-card__badge">{{ t.contact_recommended }}</span>
                <img :src="`${iconBase}/whatsapp.svg`" alt="" width="28" height="28" class="ls-contact-card__icon" />
                <span class="ls-contact-card__label">{{ t.contact_whatsapp }}</span>
                <span class="ls-contact-card__sub">{{ t.contact_whatsapp_sub }}</span>
              </a>
              <a :href="LINKS.linkedin" target="_blank" rel="noopener" class="ls-contact-card">
                <img :src="`${iconBase}/linkedin.svg`" alt="" width="28" height="28" class="ls-contact-card__icon" />
                <span class="ls-contact-card__label">{{ t.contact_linkedin }}</span>
                <span class="ls-contact-card__sub">{{ t.contact_linkedin_sub }}</span>
              </a>
              <a :href="LINKS.upwork" target="_blank" rel="noopener" class="ls-contact-card">
                <img :src="`${iconBase}/upwork.svg`" alt="" width="28" height="28" class="ls-contact-card__icon" />
                <span class="ls-contact-card__label">{{ t.contact_upwork }}</span>
                <span class="ls-contact-card__sub">{{ t.contact_upwork_sub }}</span>
              </a>
              <a :href="emailHref" class="ls-contact-card">
                <img :src="`${iconBase}/gmail.svg`" alt="" width="28" height="28" class="ls-contact-card__icon" />
                <span class="ls-contact-card__label">{{ t.contact_email }}</span>
                <span class="ls-contact-card__sub">{{ t.contact_email_sub }}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="ls-footer">
      <span class="ls-footer__name">© {{ currentYear }} {{ t.footer_name }}</span>
      <span class="ls-footer__tagline">{{ t.footer_tagline }}</span>
      <span class="ls-footer__links">
        <a :href="LINKS.linkedin" target="_blank" rel="noopener">LinkedIn</a>
        <a :href="LINKS.upwork" target="_blank" rel="noopener">Upwork</a>
        <a :href="LINKS.github" target="_blank" rel="noopener">GitHub</a>
      </span>
    </footer>

    <div class="ls-sticky-cta">
      <a class="ls-sticky-cta__btn ls-sticky-cta__btn--accent" :href="whatsappLink()" target="_blank" rel="noopener">
        <img :src="`${iconBase}/whatsapp.svg`" alt="" width="18" height="18" /> {{ t.sticky_cta }}
      </a>
      <a class="ls-sticky-cta__btn" :href="LINKS.linkedin" target="_blank" rel="noopener">
        <img :src="`${iconBase}/linkedin.svg`" alt="" width="18" height="18" /> {{ t.sticky_cta2 }}
      </a>
    </div>
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

.ls-skip { position: absolute; left: -9999px; top: 0; z-index: 200; padding: 10px 16px; background: var(--ls-accent); color: #fff; border-radius: 0 0 8px 0; font-family: Arial, sans-serif; font-size: 0.85rem; }
.ls-skip:focus { left: 0; }

.ls-nav { position: sticky; top: 0; z-index: 100; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 16px 40px; background: color-mix(in srgb, var(--ls-bg) 92%, transparent); backdrop-filter: blur(8px); border-bottom: 1px solid var(--ls-border); transition: background 0.3s; }
.ls-nav__logo { font-size: 1.1rem; font-weight: 700; letter-spacing: -0.02em; color: var(--ls-text); }
.ls-nav__links { display: flex; gap: 4px; }
.ls-nav__link { padding: 6px 12px; border: none; background: transparent; border-radius: 6px; font-family: Arial, sans-serif; font-size: 0.85rem; font-weight: 600; color: var(--ls-muted); cursor: pointer; transition: all 0.2s; }
.ls-nav__link:hover { color: var(--ls-accent); background: var(--ls-accent-light); }
.ls-nav__right { display: flex; align-items: center; gap: 16px; }

.ls-lang { display: flex; gap: 6px; }
.ls-lang__btn { display: flex; text-decoration: none; align-items: center; gap: 4px; padding: 6px 10px 4px; border: none; border-bottom: 2px solid transparent; border-radius: 4px 4px 0 0; background: transparent; font-size: 0.82rem; font-weight: 600; color: var(--ls-muted); cursor: pointer; transition: all 0.2s; }
.ls-lang__btn:hover { color: var(--ls-text); }
.ls-lang__btn.active { color: var(--ls-text); border-bottom-color: var(--ls-lang-active-underline); }
.ls-lang__flag { width: 18px; height: 13px; object-fit: cover; border-radius: 2px; }

.ls-theme-btn { display: flex; align-items: center; justify-content: center; width: 34px; height: 34px; border-radius: 8px; border: 1px solid var(--ls-border); background: transparent; font-size: 1rem; cursor: pointer; transition: all 0.2s; color: var(--ls-text); }
.ls-theme-btn:hover { background: var(--ls-accent-light); border-color: var(--ls-accent); }

.ls-btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 24px; border-radius: 8px; font-size: 0.95rem; font-weight: 600; cursor: pointer; border: none; transition: all 0.2s; text-decoration: none; font-family: Arial, sans-serif; }
.ls-btn__icon { flex-shrink: 0; }
.ls-btn--primary { background: var(--ls-accent); color: #fff; box-shadow: 0 4px 14px color-mix(in srgb, var(--ls-accent) 30%, transparent); }
.ls-btn--primary:hover { background: #1a57d6; transform: translateY(-2px); box-shadow: 0 8px 22px color-mix(in srgb, var(--ls-accent) 38%, transparent); }
.ls-btn--ghost { background: var(--ls-card-bg); color: var(--ls-text); border: 1.5px solid var(--ls-border); }
.ls-btn--ghost:hover { border-color: var(--ls-accent); color: var(--ls-accent); transform: translateY(-2px); }
.ls-btn--sm { padding: 8px 18px; font-size: 0.85rem; }
.ls-btn--lg { padding: 15px 28px; font-size: 1rem; }

.ls-hero { background: var(--ls-hero-bg); padding: 72px 0 0; position: relative; overflow: hidden; }
.ls-hero__inner { display: grid; grid-template-columns: 1fr 340px; gap: 48px; align-items: center; padding-bottom: 56px; }
.ls-hero__content { display: flex; flex-direction: column; align-items: flex-start; gap: 18px; }
.ls-status { display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px; border-radius: 100px; background: color-mix(in srgb, #22c55e 14%, transparent); color: #16a34a; font-family: Arial, sans-serif; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.02em; }
[data-theme="dark"] .ls-status { color: #4ade80; }
.ls-status__dot { width: 8px; height: 8px; border-radius: 50%; background: currentColor; box-shadow: 0 0 0 0 currentColor; animation: ls-pulse 2s infinite; }
@keyframes ls-pulse { 0% { box-shadow: 0 0 0 0 color-mix(in srgb, currentColor 60%, transparent); } 70% { box-shadow: 0 0 0 7px transparent; } 100% { box-shadow: 0 0 0 0 transparent; } }
.ls-tag { display: inline-block; padding: 6px 14px; background: var(--ls-accent-light); color: var(--ls-accent); border-radius: 100px; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; font-family: Arial, sans-serif; }
.ls-hero__title { font-size: clamp(2rem, 4.2vw, 3.1rem); font-weight: 700; line-height: 1.13; letter-spacing: -0.03em; color: var(--ls-text); white-space: pre-line; }
.ls-hero__sub { font-size: 1.05rem; color: var(--ls-muted); line-height: 1.7; font-family: Arial, sans-serif; max-width: 34em; }
.ls-hero__actions { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 4px; }
.ls-hero__note { font-family: Arial, sans-serif; font-size: 0.86rem; color: var(--ls-muted); }
.ls-inline-link { color: var(--ls-accent); font-weight: 700; text-decoration: none; border-bottom: 1px solid transparent; }
.ls-inline-link:hover { border-bottom-color: var(--ls-accent); }
.ls-hero__verse { font-size: 0.86rem; color: var(--ls-muted); font-style: italic; border-left: 3px solid var(--ls-accent); padding-left: 12px; }
.ls-hero__visual { display: flex; justify-content: center; align-items: center; }
.ls-avatar-wrap { position: relative; width: 260px; height: 260px; }
.ls-avatar { width: 240px; height: 240px; border-radius: 50%; object-fit: cover; position: absolute; top: 10px; left: 10px; border: 4px solid var(--ls-bg); box-shadow: var(--ls-shadow); }
.ls-avatar-ring { width: 260px; height: 260px; border-radius: 50%; border: 2px dashed var(--ls-accent); opacity: 0.4; animation: spin 20s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }

.ls-trust { list-style: none; display: flex; flex-wrap: wrap; justify-content: center; gap: 8px 32px; max-width: 1080px; margin: 0 auto; padding: 0 24px 28px; font-family: Arial, sans-serif; font-size: 0.85rem; font-weight: 600; color: var(--ls-muted); }
.ls-hero__bar { height: 4px; background: linear-gradient(90deg, var(--ls-accent) 0%, #a5c0fb 100%); }

.ls-section-header { display: flex; align-items: center; gap: 16px; margin-bottom: 32px; }
.ls-section-title { font-size: 1.6rem; font-weight: 700; letter-spacing: -0.02em; white-space: nowrap; }
.ls-section-title--light { font-weight: 300; color: var(--ls-muted); }
.ls-section-line { flex: 1; height: 1px; background: var(--ls-border); }

.ls-about { padding: 72px 24px; background: var(--ls-bg); }
.ls-about__text { font-size: 1.05rem; line-height: 1.8; color: var(--ls-muted); max-width: 720px; margin-bottom: 40px; font-family: Arial, sans-serif; }
.ls-values { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.ls-value-card { padding: 28px; border: 1px solid var(--ls-border); border-radius: var(--ls-radius); background: var(--ls-card-bg); transition: all 0.25s; }
.ls-value-card:hover { border-color: var(--ls-accent); box-shadow: 0 0 0 4px var(--ls-accent-light); transform: translateY(-3px); }
.ls-value-card__icon { font-size: 1.4rem; color: var(--ls-accent); margin-bottom: 12px; }
.ls-value-card__title { font-size: 1rem; font-weight: 700; margin-bottom: 8px; }
.ls-value-card__text { font-size: 0.9rem; color: var(--ls-muted); line-height: 1.6; font-family: Arial, sans-serif; }

.ls-services { background: var(--ls-bg2); padding: 72px 0; border-top: 1px solid var(--ls-border); }
.ls-services__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.ls-service-card { padding: 26px 22px; background: var(--ls-card-bg); border: 1px solid var(--ls-border); border-radius: var(--ls-radius); transition: all 0.25s; }
.ls-service-card:hover { border-color: var(--ls-accent); transform: translateY(-3px); box-shadow: var(--ls-shadow); }
.ls-service-card__icon { display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; margin-bottom: 14px; border-radius: 10px; background: var(--ls-accent-light); color: var(--ls-accent); font-size: 1.1rem; }
.ls-service-card__title { font-size: 1rem; font-weight: 700; margin-bottom: 8px; line-height: 1.35; }
.ls-service-card__text { font-size: 0.88rem; color: var(--ls-muted); line-height: 1.6; font-family: Arial, sans-serif; }
.ls-services__cta { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px; margin-top: 32px; padding: 22px 26px; border: 1px dashed var(--ls-accent); border-radius: var(--ls-radius); background: var(--ls-accent-light); }
.ls-services__cta-text { font-family: Arial, sans-serif; font-size: 0.95rem; font-weight: 600; color: var(--ls-text); }
.ls-services__cta-actions { display: flex; gap: 12px; flex-wrap: wrap; }

.ls-stack { background: var(--ls-bg); padding: 72px 0; border-top: 1px solid var(--ls-border); border-bottom: 1px solid var(--ls-border); }
.ls-brands { display: grid; grid-template-columns: repeat(auto-fill, minmax(90px, 1fr)); gap: 16px; }
.ls-brand { display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 16px 8px; border-radius: var(--ls-radius); border: 1px solid transparent; text-decoration: none; transition: all 0.2s; }
.ls-brand:hover { border-color: var(--ls-border); background: var(--ls-card-bg); box-shadow: var(--ls-shadow); transform: translateY(-2px); }
.ls-brand__img { width: 48px; height: 48px; object-fit: contain; }
.ls-brand__name { font-size: 0.72rem; color: var(--ls-muted); text-align: center; font-family: Arial, sans-serif; font-weight: 500; }

.ls-contact { padding: 72px 0 96px; background: var(--ls-bg2); }
.ls-contact__panel { position: relative; overflow: hidden; padding: 48px 44px; border-radius: 20px; border: 1px solid var(--ls-border); background: var(--ls-hero-bg); box-shadow: var(--ls-shadow); }
.ls-contact__panel::before { content: ''; position: absolute; inset: 0 0 auto 0; height: 4px; background: linear-gradient(90deg, var(--ls-accent) 0%, #a5c0fb 100%); }
.ls-contact__kicker { display: inline-block; font-family: Arial, sans-serif; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ls-accent); margin-bottom: 10px; }
.ls-contact__title { font-size: clamp(1.7rem, 3.2vw, 2.4rem); font-weight: 700; letter-spacing: -0.02em; margin-bottom: 12px; }
.ls-contact__sub { font-size: 1rem; color: var(--ls-muted); margin-bottom: 32px; font-family: Arial, sans-serif; line-height: 1.7; max-width: 46em; }
.ls-contact__links { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
.ls-contact-card { position: relative; display: flex; flex-direction: column; align-items: flex-start; gap: 6px; padding: 22px 20px; border: 1.5px solid var(--ls-border); border-radius: var(--ls-radius); text-decoration: none; color: var(--ls-text); font-family: Arial, sans-serif; transition: all 0.2s; background: var(--ls-card-bg); }
.ls-contact-card:hover { border-color: var(--ls-accent); box-shadow: 0 8px 22px color-mix(in srgb, var(--ls-accent) 22%, transparent); transform: translateY(-3px); }
.ls-contact-card__icon { width: 28px; height: 28px; object-fit: contain; margin-bottom: 4px; }
.ls-contact-card__label { font-size: 0.98rem; font-weight: 700; }
.ls-contact-card__sub { font-size: 0.8rem; color: var(--ls-muted); line-height: 1.45; }
.ls-contact-card--accent { background: var(--ls-accent); border-color: var(--ls-accent); color: #fff; }
.ls-contact-card--accent .ls-contact-card__sub { color: rgba(255,255,255,0.85); }
.ls-contact-card--accent:hover { background: #1a57d6; }
.ls-contact-card--accent .ls-contact-card__icon { box-sizing: content-box; padding: 5px; background: #fff; border-radius: 8px; }
.ls-contact-card__badge { position: absolute; top: 10px; right: 10px; padding: 3px 9px; border-radius: 100px; background: #fff; color: var(--ls-accent); font-size: 0.65rem; font-weight: 800; letter-spacing: 0.04em; text-transform: uppercase; }

.ls-footer { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 6px 20px; padding: 28px 40px; border-top: 1px solid var(--ls-border); text-align: center; font-size: 0.82rem; color: var(--ls-muted); font-family: Arial, sans-serif; background: var(--ls-bg); }
.ls-footer__links { display: flex; gap: 14px; }
.ls-footer__links a { color: var(--ls-muted); text-decoration: none; font-weight: 600; }
.ls-footer__links a:hover { color: var(--ls-accent); }

.ls-sticky-cta { display: none; }

@media (max-width: 980px) {
  .ls-services__grid { grid-template-columns: repeat(2, 1fr); }
  .ls-contact__links { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .ls-nav { padding: 12px 16px; gap: 8px; }
  .ls-nav__links { display: none; }
  .ls-nav__right { gap: 10px; }
  .ls-hero { padding-top: 48px; }
  .ls-hero__inner { grid-template-columns: 1fr; text-align: center; }
  .ls-hero__content { align-items: center; }
  .ls-hero__visual { order: -1; }
  .ls-hero__verse { text-align: left; }
  .ls-hero__actions { justify-content: center; width: 100%; }
  .ls-hero__actions .ls-btn { flex: 1 1 240px; }
  .ls-values, .ls-services__grid, .ls-contact__links { grid-template-columns: 1fr; }
  .ls-services__cta { flex-direction: column; align-items: stretch; text-align: center; }
  .ls-services__cta-actions { justify-content: center; }
  .ls-section-title { white-space: normal; }
  .ls-contact { padding-bottom: 110px; }
  .ls-contact__panel { padding: 32px 22px; }
  .ls-brands { grid-template-columns: repeat(auto-fill, minmax(75px, 1fr)); }
  .ls-avatar-wrap { width: 200px; height: 200px; }
  .ls-avatar { width: 180px; height: 180px; }
  .ls-avatar-ring { width: 200px; height: 200px; }

  .ls-sticky-cta { position: fixed; left: 0; right: 0; bottom: 0; z-index: 120; display: flex; gap: 10px; padding: 10px 14px calc(10px + env(safe-area-inset-bottom)); background: color-mix(in srgb, var(--ls-bg) 94%, transparent); backdrop-filter: blur(10px); border-top: 1px solid var(--ls-border); }
  .ls-sticky-cta__btn { flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 13px 12px; border-radius: 10px; border: 1.5px solid var(--ls-border); background: var(--ls-card-bg); color: var(--ls-text); font-family: Arial, sans-serif; font-size: 0.9rem; font-weight: 700; text-decoration: none; }
  .ls-sticky-cta__btn--accent { background: var(--ls-accent); border-color: var(--ls-accent); color: #fff; }
  .ls-sticky-cta__btn--accent img { box-sizing: content-box; padding: 3px; background: #fff; border-radius: 5px; }
}

@media (max-width: 560px) {
  .ls-nav { padding: 10px 14px; }
  .ls-nav__logo { font-size: 0.95rem; white-space: nowrap; }
  .ls-nav__cta { display: none; }
  .ls-lang__btn { padding: 5px 7px 3px; font-size: 0.78rem; }
  .ls-hero__title { font-size: 1.85rem; }
}

@media (prefers-reduced-motion: reduce) {
  .ls-avatar-ring, .ls-status__dot { animation: none; }
  .ls-btn, .ls-value-card, .ls-service-card, .ls-contact-card, .ls-brand { transition: none; }
  .ls-btn:hover, .ls-value-card:hover, .ls-service-card:hover, .ls-contact-card:hover, .ls-brand:hover { transform: none; }
}
</style>
