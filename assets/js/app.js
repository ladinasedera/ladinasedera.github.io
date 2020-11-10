/**
  Vue App
*/
var messages  = {
    en: {
         message: {
            "hello"      : 'Hi,',
            "and"        : "and",
            "my-name-is" : "My name is ",
            "ladina-sedera":"Ladina Sedera",
            "ladina-resume":"Father of three, creator of <a href='https://fitiavana.mg' target='_blank'>FITIAVANA-MG</a> and full stack web developer.",
            "about-me-title":"About Me",
            "passionate-for-web":"Physically and in all over the web virtually.<br>Love creating complex web applications with rich UI.",
            "principalement"    : "mostly",
            "my-passion"        : "are my passion.",
            "my-cursus-locale"  : "After working with a some local companies,",
            "i-am-freelancer"   : "<span class='underlined'> I have been freelancing</span> as a Full Stack Web Developer!",
            "my-motivation"     : "My Motivation",
            "mr-steve-jobs-said"   : "<span>M<sup>r</sup> Steve Jobs</span> said :",
            "i-love-my-job"     : " Of course, <span class='underlined'>I love my job</span> and I think that's why <span class='underlined'>people love it</span>!",
            "to-conclude" : "To conclude",
            "conclude"    : "I can assure you that <span class='underlined'>your projects will be well realized</span>, with the experience and especially my perseverance at all times.",
            "atouts"       : "Qualities",
            "my-atouts"    : "Have a sense of responsibility, Honesty, Sociability, Courage",
            "see-you-soon" : "See you soon!"
        } 
    },
    fr: {
        message: {
            "hello"      : 'Bonjour,',
            "and"        : "et",
            "my-name-is" : "Mon nom c'est ",
            "ladina-sedera":"Ladina Sedera",
            "ladina-resume":"Père de trois enfants, Fondateur de <a href='https://fitiavana.mg' target='_blank'>FITIAVANA-MG</a> et Développeur web Full Stack.",
            "about-me-title":"A Propos",
            "passionate-for-web":"Je suis quelqu'un de passionné par le développement web.<br>Aimez créer des applications Web complexes avec une interface utilisateur riche",
            "principalement"    : "principalement",
            "my-passion"        : "sont ma passion.",
            "my-cursus-locale"  : "Après avoir travailler avec quelques société locale,",
            "i-am-freelancer"   : "<span class='underlined'>j'étais en freelance</span> depuis quelques années, en tant que Développeur Web Full Stack!",
            "my-motivation"     : "Ma Motivation",
            "mr-steve-jobs-said"   : "<span>M<sup>r</sup> Steve Jobs</span> à dit :",
            "i-love-my-job"     : "Bien sûr, <span class='underlined'>j'aime mon travail</span> et je pense que c'est pour cela que <span class='underlined'>les gens l'adore!</span>",
            "to-conclude" : "Pour Conclure",
            "conclude"    : "Je peux vous assurer que <span class='underlined'>vos projets seront bien réalises</span> grâce à l'expérience et surtout ma persévérance à tout moments.",
            "atouts"       : "Atouts",
            "my-atouts"    : "Avoir le sens de responsabilité, Honnête, Sociable, Courageux",
            "see-you-soon" : "A bientôt"
        }    
    }
};

Vue.use(VueI18n);

Vue.config.lang = document.documentElement.lang;

const i18n = new VueI18n({locale: Vue.config.lang,messages});
var _vm    = new Vue({ i18n,
    documentTitle : 'Test Title',
    data : {
        app : {
            lang : 'fr'
        }
    },
    methods : {

    setLocale : function(lang) {

        i18n.locale = lang ? lang : 'fr'; 

    }

  }
}).$mount('#ladina-resume');

/**
 * Main JS - App
 */
var TxtType = function (el, toRotate, period) {

    var self = this;
        self.toRotate = toRotate;
        self.el       = el;
        self.loopNum  = 0;
        self.period   = parseInt(period, 10) || 2000;
        self.txt      = '';
        self.tick();
        self.isDeleting = false;
    };

    TxtType.prototype.tick = function() {

        var self = this;
        var i = self.loopNum % self.toRotate.length;
        var fullTxt = self.toRotate[i];

        if (self.isDeleting) 
        {
            self.txt = "";// fullTxt.substring(0, this.txt.length - 1);
        } 
        else 
        {
            self.txt = fullTxt.substring(0, self.txt.length + 1);
        }

        self.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
        var delta = 200 - Math.random() * 100;

        if (self.isDeleting) 
        { 
            delta /= 2; 
        }

        if (!self.isDeleting && self.txt === fullTxt) 
        {            
            delta = self.period;
            setTimeout(function() {
                self.isDeleting = true;
            },3000);
        } 
        else if (self.isDeleting && self.txt === '') 
        {
            self.isDeleting = false;
            self.loopNum++;
            delta = 500;
        }

        setTimeout(function() {
            self.tick();
        }, delta);

    };

    window.onload = function() {

        var elements = document.getElementsByClassName('typewrite');

            for (var i=0; i < elements.length; i++) 
            {
                var toRotate = elements[i].getAttribute('data-type');
                var period   = elements[i].getAttribute('data-period');
                if (toRotate) 
                {
                    new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }

    };