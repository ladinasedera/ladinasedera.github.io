<script setup>
import {ref, computed} from 'vue';

const translations = {
  en: {
    greeting: "👋 Hello, I'm Ladina Sedera",
    profession: 'Professional Full Stack Web Developer',
    motivational: '💪 I can do all things through Christ, who strengthens me - Philippians 4:13.',
    passion: '💞️ <span class="fw-bold">Passionate Web Developer </span> | Skilled in PHP & JavaScript | Laravel & Vue.js.',
    collaboration: '👀<span class="fw-bold"> Open to Collaborating</span> on Innovative Full-Stack Projects.',
    contact: '📫 Contact Me',
    resumeTitle: 'Resume',
    resumeDescription1: '<span class="fw-bold">Full Stack Developer</span> with 7+ years of experience in designing, developing, and optimizing high-performance, user-centric web applications and APIs. <span class="fw-medium">Specializing in modern PHP and JavaScript frameworks.</span>',
    resumeDescription2: '<span class="fw-bold">My focus</span> is on building and delivering scalable, efficient, maintainable, and secure applications <span class="fw-medium">that meet client needs and business goals.</span>',
    resumeDescription3: 'I am <span class="fw-medium">skilled in writing clean, modular code,</span> with strong expertise in object-oriented programming, SQL/NoSQL databases, and best practices for testing and debugging with a focus on maintainability to ensuring robust, reliable, and scalable applications.',
    expertiseTitle: 'Technical Expertise',
    preferredTech: '| Preferred Technologies',
    enthusiasm: '🤩 <span class="fw-bolder ps-2">Enthusiastic </span> about PHP, JavaScript/TypeScript'
  },
  fr: {
    greeting: "👋 Bonjour, Je suis Ladina Sedera",
    profession: 'Développeur Web Full Stack Professionnel',
    motivational: '💪 Je peux tout faire grâce à Christ, qui me fortifie - Philippiens 4:13.',
    passion: '💞️ <span class="fw-bold">Développeur web passionné</span> | Compétent en PHP & JavaScript | Laravel & Vue.js.',
    collaboration: '👀 <span class="fw-bold">Ouvert à collaborer</span> sur des projets Full-Stack innovants.',
    contact: '📫 Contactez-moi',
    resumeTitle: 'Résumé',
    resumeDescription1: "<span class='fw-bold'>Développeur Full Stack</span> avec plus de 7 ans d'expérience dans la conception, le développement et l'optimisation d'applications web performantes, centrées sur l'utilisateur et des API.<span class='fw-medium'> Spécialisé dans les frameworks modernes PHP et JavaScript.</span>",
    resumeDescription2: "<span class='fw-bold'>Mon objectif</span> est de créer et de livrer des applications évolutives, efficaces, maintenables et sécurisées <span class='fw-medium'>qui répondent aux besoins des clients et aux objectifs commerciaux.</span>",
    resumeDescription3: "Je suis expérimenté dans <span class='fw-medium'>l'écriture de code propre et modulaire,</span> avec une forte expertise en programmation orientée objet, bases de données SQL/NoSQL et meilleures pratiques pour les tests et le débogage, avec un focus sur la maintenabilité pour garantir des applications robustes, fiables et évolutives.",
    expertiseTitle: 'Compétences Techniques',
    preferredTech: '| Technologies Préférées',
    enthusiasm: '🤩 <span class="fw-bolder ps-2">Passionné </span> par PHP, JavaScript/TypeScript'
  }
};

const selectedLanguage = ref('en');
const t = computed(() => translations[selectedLanguage.value]);

const brands = [
  {
    name: 'PHP',
    logo: 'php.svg',
    url: 'https://www.php.net'
  },
  {
    name: 'Laravel',
    logo: 'laravel.svg',
    url: 'https://laravel.com'
  },
  {
    name: 'Symfony',
    logo: 'symfony.svg',
    url: 'https://symfony.com'
  },
  {
    name: 'CodeIgniter',
    logo: 'codeigniter.svg',
    url: 'https://codeigniter.com'
  },
  {
    name: 'WordPress',
    logo: 'wordpress.svg',
    url: 'https://wordpress.org'
  },
  {
    name: 'PrestaShop',
    logo: 'prestashop.svg',
    url: 'https://www.prestashop.com'
  },
  {
    name: 'MySQL',
    logo: 'mysql.svg',
    url: 'https://www.mysql.com'
  },
  {
    name: 'PostgreSQL',
    logo: 'postgresql.svg',
    url: 'https://www.postgresql.org'
  },
  {
    name: 'MongoDB',
    logo: 'mongodb.svg',
    url: 'https://www.mongodb.com'
  },
  {
    name: 'PHP Packages / Composer',
    logo: 'composer.svg',
    url: 'https://packagist.org/packages/ladina/'
  },
  {
    name: 'NodeJS',
    logo: 'nodejs.svg',
    url: 'https://nodejs.org'
  },
  {
    name: 'JavaScript',
    logo: 'javascript.svg',
    url: 'https://www.javascript.com'
  },
  {
    name: 'TypeScript',
    logo: 'typescript.svg',
    url: 'https://www.typescriptlang.org'
  },
  {
    name: 'ExpressJS',
    logo: 'expressjs.svg',
    url: 'https://expressjs.com'
  },
  {
    name: 'NestJS',
    logo: 'nestjs.svg',
    url: 'https://nestjs.com'
  },
  {
    name: 'VueJS',
    logo: 'vuejs.svg',
    url: 'https://vuejs.org'
  },
  {
    name: 'jQuery',
    logo: 'jquery.svg',
    url: 'https://jquery.com'
  },
  {
    name: 'Tailwind',
    logo: 'tailwind.svg',
    url: 'https://tailwindcss.com'
  },
  {
    name: 'Bootstrap',
    logo: 'bootstrap.svg',
    url: 'https://getbootstrap.com'
  },
  {
    name: 'GitHub',
    logo: 'github.svg',
    url: 'https://github.com/ladinasedera'
  },
  {
    name: 'Apache',
    logo: 'apache.svg',
    url: 'https://github.com/ladinasedera'
  },
];

const isDev = import.meta.env.MODE === 'development';
const baseUrl = isDev ? '/src' : '';
</script>

<template>
  <div class="container">

    <div class="row">
      <div class="d-flex justify-content-end">
        <div class="btn-group">
          <!-- Bouton Anglais -->
          <button
              @click="selectedLanguage = 'en'"
              class="btn btn-group-sm"
              :class="{ active: selectedLanguage === 'en' }"
          >
            <img src="@/assets/icons/flag-en.svg" alt="English Flag" class="flag-icon"/>
          </button>

          <!-- Bouton Français -->
          <button
              @click="selectedLanguage = 'fr'"
              class="btn btn-group-sm ms-2"
              :class="{ active: selectedLanguage === 'fr' }"
          >
            <img src="@/assets/icons/flag-fr.svg" alt="French Flag" class="flag-icon"/>
          </button>
        </div>
      </div>
    </div>

    <h1>{{ t.greeting }}</h1>
    <div class="my-2">

      <h2 class="fw-light">{{ t.profession }}</h2>

      <div>
        <p class="fw-bold text-start " v-html="t.motivational"></p>
        <p v-html="t.passion"></p>
        <p v-html="t.collaboration"></p>
        <p>
          <span class="fw-bold">{{ t.contact }}</span>:

          <a href="https://www.linkedin.com/in/ladina-sedera" target="_blank"> <img src="@/assets/icons/linkedin.svg"
                                                                                    class="logo" alt="Logo LinkedIn"
                                                                                    srcset="@/assets/icons/linkedin.svg">
            LinkedIn </a> |
          <a href="mailto:ladina.sedera@gmail.com"><img src="@/assets/icons/whatsapp.svg" class="logo" alt="Logo Gmail"
                                                        srcset="@/assets/icons/gmail.svg">
            ladina.sedera[at]gmail.com</a> |
          <a href="https://wa.me/261341110472" target="_blank"><img src="@/assets/icons/whatsapp.svg" class="logo"
                                                                    alt="Logo WhatsApp"
                                                                    srcset="@/assets/icons/whatsapp.svg"> (+261) 34 11
            104 72</a>
        </p>
      </div>
    </div>

    <div class="my-2">
      <h2 class="fw-light px-0">{{ t.resumeTitle }}</h2>
      <div>
        <p v-html="t.resumeDescription1"></p>

        <p class="mt-2" v-html="t.resumeDescription2"></p>

        <p class="mt-2" v-html="t.resumeDescription3"></p>
      </div>
    </div>

    <div class="mt-2">
      <h2 class="fw-light">{{ t.expertiseTitle }} <span class="fw-lighter">{{ t.preferredTech }}</span></h2>

      <div class="row mt-2">
        <div class="col-12 col-md-6">
          <ul>
            <li>
              <span class="fw-bold">PHP:</span>
              <a href="https://laravel.com" target="_blank">Laravel</a>,
              <a href="https://symfony.com" target="_blank">Symfony</a>,
              <a href="https://codeigniter.com" target="_blank">CodeIgniter</a>,
              <a href="https://www.slimframework.com" target="_blank">Slim</a>
            </li>
            <li>
              <span class="fw-bold">CMS:</span>
              <a href="https://wordpress.org" target="_blank">WordPress</a>,
              <a href="https://www.prestashop.com" target="_blank">PrestaShop</a>
            </li>
            <li>
              <span class="fw-bold">Database:</span>
              <a href="https://www.mysql.com" target="_blank">MySQL</a>,
              <a href="https://www.postgresql.org" target="_blank">PostgreSQL</a>,
              <a href="https://www.mongodb.com" target="_blank">MongoDB</a>
            </li>
            <li>
              <span class="fw-bold">Packagist:</span>
              <a href="https://packagist.org/packages/ladina/" target="_blank">PHP Packages</a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-6">
          <ul>
            <li>
              <span class="fw-bold">JavaScript:</span>
              <a href="https://expressjs.com" target="_blank">ExpressJS</a>,
              <a href="https://nestjs.com" target="_blank">NestJS</a>
            </li>
            <li>
              <span class="fw-bold">JS Frontend:</span>
              <a href="https://vuejs.org" target="_blank">VueJS</a>,
              <a href="https://jquery.com" target="_blank">jQuery</a>
            </li>
            <li>
              <span class="fw-bold">CSS Frameworks:</span>
              <a href="https://tailwindcss.com" target="_blank">Tailwind</a>,
              <a href="https://getbootstrap.com" target="_blank">Bootstrap</a>
            </li>
            <li>
              <span class="fw-bold">GitHub:</span>
              <a href="https://github.com/ladinasedera" target="_blank">GitHub</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="row mt-2">
        <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3 stacks">
          <div v-for="brand in brands" :key="brand.name" class="col text-center">
            <a :href="`${brand.url}`" :title="`${brand.name}`" target="_blank" class="no-highlight d-block"
               rel="noopener noreferrer">
              <img :src="`${baseUrl}/assets/icons/${brand.logo}`" class="brand" :alt="`Logo ${brand.name}`"
                   style="width: 100%; max-width: 80px; height: auto;"/>
            </a>
          </div>
        </div>
      </div>

         <p v-html="t.enthusiasm"></p>

    </div>
  </div>
</template>
<style scoped>
.brand {
  width: 100%;
  max-width: 80px; /* Ajustez pour limiter la taille maximale */
  height: auto;
  margin: 0 auto; /* Centrez chaque logo */
}

.no-highlight {
  text-decoration: none;
}

.stacks {
  margin-left: -5rem;
}
@media (max-width: 768px) {
  .brand {
    max-width: 60px; /* Ajuster la taille des logos pour les petits écrans */
  }
  .stacks {
    margin-left: unset;
  }
}
</style>