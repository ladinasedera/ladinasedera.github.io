/* Single source of truth for every localised string.
   Imported by the Vue component AND by prerender.js, so the build-time HTML
   and the hydrated app can never drift apart. */

export const LOCALES = ['en', 'fr'];

/* Where each locale is published. Prerendering writes one file per entry. */
export const LOCALE_PATHS = { en: '/', fr: '/fr/' };

export const SITE_URL = 'https://ladinasedera.github.io';

/* Resolves the locale a URL belongs to. Used by main.js in dev, where the
   Vite server serves the same index.html for / and /fr/. */
export function langFromPath(pathname = '/') {
  return /^\/fr(\/|$)/.test(pathname) ? 'fr' : 'en';
}

export const translations = {
  en: {
    meta_title: 'Ladina Sedera — Freelance Full Stack Web Developer (Laravel, Vue.js, PHP)',
    meta_desc: 'Ladina Sedera is a freelance full stack web developer building Laravel, Vue.js, PHP, WordPress and PrestaShop applications. Available for hire on WhatsApp, LinkedIn or Upwork.',
    skip_link: 'Skip to content',
    nav_services: 'Services', nav_stack: 'Stack', nav_cta: 'Hire me',
    availability: 'Available for freelance work',
    hero_tag: 'Full Stack Web Developer',
    hero_title: 'I turn your ideas into\nhigh-performance web solutions.',
    hero_sub: 'Laravel, Vue.js, PHP. From concept to deployment — clean code, real results, client-first approach.',
    hero_cta: 'Message me on WhatsApp', hero_cta2: 'Connect on LinkedIn',
    hero_note: 'Prefer contract protection?', hero_note_link: 'Hire me on Upwork',
    motivational: 'I can do all things through Christ, who strengthens me — Philippians 4:13',
    trust_1: 'Reply within 24h', trust_2: 'Remote, worldwide', trust_3: 'English & French', trust_4: 'Full project lifecycle',

    about_title: 'About me',
    about_text: 'Expert in the complete web, mobile and API development lifecycle. I build high-performance applications with PHP and JavaScript — mainly Laravel, Vue.js, WordPress and PrestaShop — that drive real business results.',
    value_1_title: 'Proven track record', value_1: 'Dynamic web applications built with clean, scalable, object-oriented code.',
    value_2_title: 'Full lifecycle', value_2: 'Coding, testing, debugging, deployment and long-term maintenance.',
    value_3_title: 'Client-first', value_3: 'Your satisfaction and long-term success are my primary objectives.',

    services_title: 'What I can do for you', services_sub: 'Services',
    service_1_title: 'Custom web applications', service_1: 'Tailored business apps, dashboards and back-offices with Laravel and Vue.js.',
    service_2_title: 'APIs & integrations', service_2: 'REST APIs, third-party integrations and secure data flows between your tools.',
    service_3_title: 'E-commerce & websites', service_3: 'Stores and content sites with WordPress and PrestaShop, tuned for speed and conversion.',
    service_4_title: 'Rescue & maintenance', service_4: 'Debugging, refactoring, performance work and ongoing support on existing codebases.',
    services_cta_text: 'Not sure which one fits your project?',
    services_cta: 'Ask me on WhatsApp', services_cta2: 'See my full profile',

    stack_title: 'Technical Stack', stack_sub: 'Preferred Technologies',

    contact_title: "Let's work together", contact_kicker: 'Ready when you are',
    contact_sub: "Tell me what you want to build. I'll come back to you within 24 hours with a clear next step — no obligation.",
    contact_linkedin: 'LinkedIn', contact_linkedin_sub: 'Connect & see my background',
    contact_upwork: 'Upwork', contact_upwork_sub: 'Hire with contract protection',
    contact_whatsapp: 'WhatsApp', contact_whatsapp_sub: 'Fastest — chat right now',
    contact_email: 'Email', contact_email_sub: 'Pour les briefs et les documents',
    contact_recommended: 'Fastest',

    wa_default: "Hi Ladina, I found your website and I'd like to talk about a web project.",
    wa_services: "Hi Ladina, I found your website. I have a project in mind but I'm not sure which service fits — could you help me figure it out?",

    footer_name: 'Ladina Sedera — Full Stack Web Developer',
    footer_tagline: 'Freelance • Laravel, Vue.js, PHP • Remote worldwide',
    theme_label: 'Theme',
    sticky_cta: 'WhatsApp', sticky_cta2: 'LinkedIn',
  },
  fr: {
    meta_title: 'Ladina Sedera — Développeur Web Full Stack Freelance (Laravel, Vue.js, PHP)',
    meta_desc: 'Ladina Sedera, développeur web full stack freelance : applications Laravel, Vue.js, PHP, WordPress et PrestaShop. Disponible sur WhatsApp, LinkedIn ou Upwork.',
    skip_link: 'Aller au contenu',
    nav_services: 'Services', nav_stack: 'Compétences', nav_cta: 'Me contacter',
    availability: 'Disponible en freelance',
    hero_tag: 'Développeur Web Full Stack',
    hero_title: 'Je transforme vos idées en\nsolutions web performantes.',
    hero_sub: 'Laravel, Vue.js, PHP. Du concept au déploiement — code propre, résultats concrets, approche client-first.',
    hero_cta: 'Écrivez-moi sur WhatsApp', hero_cta2: 'Me suivre sur LinkedIn',
    hero_note: 'Vous préférez un cadre contractuel ?', hero_note_link: 'Recrutez-moi sur Upwork',
    motivational: 'Je peux tout faire grâce au Christ qui me fortifie — Philippiens 4:13',
    trust_1: 'Réponse sous 24h', trust_2: 'À distance, partout', trust_3: 'Français & anglais', trust_4: 'Cycle projet complet',

    about_title: 'À propos',
    about_text: 'Expert du cycle complet de développement web, mobile et API. Je conçois des applications performantes avec PHP et JavaScript — principalement Laravel, Vue.js, WordPress et PrestaShop — qui génèrent de vrais résultats pour votre activité.',
    value_1_title: 'Expérience confirmée', value_1: 'Applications web dynamiques, code propre, structuré et évolutif.',
    value_2_title: 'Cycle complet', value_2: 'Codage, tests, débogage, déploiement et maintenance long terme.',
    value_3_title: 'Client en priorité', value_3: 'Votre satisfaction et votre succès sur le long terme sont mes objectifs.',

    services_title: 'Ce que je peux faire pour vous', services_sub: 'Services',
    service_1_title: 'Applications web sur mesure', service_1: 'Outils métier, tableaux de bord et back-offices avec Laravel et Vue.js.',
    service_2_title: 'API & intégrations', service_2: 'API REST, intégrations tierces et échanges de données sécurisés entre vos outils.',
    service_3_title: 'E-commerce & sites', service_3: 'Boutiques et sites de contenu WordPress et PrestaShop, optimisés vitesse et conversion.',
    service_4_title: 'Reprise & maintenance', service_4: 'Débogage, refactoring, performance et support continu sur un code existant.',
    services_cta_text: 'Vous ne savez pas ce qui correspond à votre projet ?',
    services_cta: 'Posez-moi la question sur WhatsApp', services_cta2: 'Voir mon profil complet',

    stack_title: 'Compétences Techniques', stack_sub: 'Technologies Préférées',

    contact_title: 'Travaillons ensemble', contact_kicker: 'Quand vous voulez',
    contact_sub: "Dites-moi ce que vous souhaitez construire. Je reviens vers vous sous 24 heures avec une première piste claire — sans engagement.",
    contact_linkedin: 'LinkedIn', contact_linkedin_sub: 'Me connecter & voir mon parcours',
    contact_upwork: 'Upwork', contact_upwork_sub: 'Me recruter avec un cadre contractuel',
    contact_whatsapp: 'WhatsApp', contact_whatsapp_sub: 'Le plus rapide — on discute tout de suite',
    contact_email: 'Email', contact_email_sub: 'Pour les briefs et les documents',
    contact_recommended: 'Le plus rapide',

    wa_default: "Bonjour Ladina, je viens de voir votre site et j'aimerais discuter d'un projet web.",
    wa_services: "Bonjour Ladina, je viens de voir votre site. J'ai un projet en tête mais je ne sais pas quelle prestation correspond — pouvez-vous m'aider ?",

    footer_name: 'Ladina Sedera — Développeur Web Full Stack',
    footer_tagline: 'Freelance • Laravel, Vue.js, PHP • À distance, partout',
    theme_label: 'Thème',
    sticky_cta: 'WhatsApp', sticky_cta2: 'LinkedIn',
  }
};

export default translations;
