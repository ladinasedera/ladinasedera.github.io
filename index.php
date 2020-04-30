<?php 
    $v  = md5(microtime(true));
    $GC = require './config/config.php';
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">   
    <meta name="description" content="Ladina Sedera {} Développeur Web Full Stack / Java SE Développeur || Disponible en Freelance" >
    <meta name="keywords" content="developpeur PHP, developpeur java, developpeur Laravel, developpeur freelance, developpeur frontend, developpeur full stack, création de site, developpeur haute-loire">
    <meta name="author" content="Ladina Sedera">
    <meta property="og:url" content="https://ladina.fitiavana.mg/" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Developpeur Freelance / PHP et JAVA" />
    <meta property="og:description" content="Ladina Sedera {} Développeur Web Full Stack / Java SE Développeur || Disponible en Freelance" />
    <meta property="og:image" content="https://ladina.fitiavana.mg/uploads/ladina-sedera.png" />

    <title>Ladina Sedera {} Développeur Web Full Stack || Freelance</title>    
    <link rel="dns-prefetch" href="https://fonts.googleapis.com">
    <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">
    <link rel="shorcut icon" type="image/png" href="uploads/ladina-sedera.png">
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Lato:400,700,400italic,700italic">
    <link rel="stylesheet" href="assets/fonts/font-awesome.min.css">
    <link rel="stylesheet" href="assets/css/animate.css">
    <link rel="stylesheet" href="assets/css/style.css?id=<?= $v; ?>">
     <!-- Google Tag Manager -->
      <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-P6XZDRX');</script>
      <!-- End Google Tag Manager -->
</head>

<body id="page-top" class="animated fadeInLeft faster">
    <nav class="navbar navbar-light navbar-expand-lg fixed-top bg-secondary text-uppercase" id="mainNav">
        <div class="container"><a class="navbar-brand js-scroll-trigger" href="#page-top">Ladina - Développeur</a><button class="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"
                aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item mx-0 mx-lg-1" role="presentation"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#page-top">Accueil</a></li>
                    <li class="nav-item mx-0 mx-lg-1" role="presentation"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#quote">Citation</a></li>
                    <li class="nav-item mx-0 mx-lg-1" role="presentation"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">A PROPOS</a></li>
                    <li class="nav-item mx-0 mx-lg-1" role="presentation"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <header class="masthead bg-primary text-white text-center">
        <div class="container">
            <img class="img-fluid d-block mx-auto mb-5 img-ladina " src="uploads/ladina-sedera.png">
            <h1>Ladina Sedera</h1>
            <hr class="star-light">
            <h2 class="font-weight-light mb-0">
             Développeur Web Full Stack / Développeur Java (Desktop/Mobile)
            </h2>
        </div>
    </header>
    <section id="quote" class="animated wow fadeInUp" >
        <div  class="container-fluid">
            <!-- <hr class="star-dark mt-0"> -->
            <div class="row text-center">
                <h1 id="my-favorite-quote"></h1>
            </div>
            <!-- <hr class="star-dark mt-4"> -->
        </div>
    </section>
    <section  id="about" class="bg-primary text-white mb-0">
        <div class="container">
            <h2 class="text-uppercase text-center text-white">A PROPOS</h2>
            <hr class="star-light mb-5">
            <div class="row wow animated  fadeInUp">
                <div class="col">
                    <p class="lead" id="about-me"></p>
                </div>
            </div>
            <div class="text-center mt-4">
                <a class="btn btn-outline-light btn-xl mr-2" role="button" target="_blank" href="uploads/resume-ladina-sedera.pdf">
                    <i class="fa fa-print mr-2"></i><span>A PROPOS DE MOI EN PDF</span>
                </a>
                <a class="btn btn-outline-light btn-xl btn-cv mr-2" target="_blank" href="https://drive.google.com/file/d/1Tng98YtfDCoixfENI4CKxJy0l6Lqkwhh/view?usp=sharing">
                    <i class="fa fa-eye mr-2"></i><span>VOIR PLUS SUR MON CV</span>
                </a>
            </div>
        </div>
    </section>

    <section id="contact">
        <div class="container">
            <h2 class="text-uppercase text-center text-secondary mb-0">Contactez-MOI</h2>
            <hr class="star-dark mb-5">
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <form id="contactForm" name="sentMessage" method="POST" onsubmit="return app.contact_me(this)">
                        <div class="control-group">
                            <div class="form-group floating-label-form-group controls mb-0 pb-2"><label>Nom</label>
                                <input class="form-control" type="text" required placeholder="Votre nom" id="name">
                                <small class="form-text text-danger help-block"></small>
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Address Email</label>
                                <input class="form-control" type="email" required placeholder="Addresse e-mail" id="email"><small class="form-text text-danger help-block"></small>
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Téléphone</label>
                                <input class="form-control" type="tel" placeholder="Numéro Telephone" id="phone">
                                <small class="form-text text-danger help-block"></small>
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="form-group floating-label-form-group controls mb-5 pb-2">
                                <label>Message</label>
                                <textarea class="form-control" rows="5" required="" placeholder="Message" id="message"></textarea>
                                <small class="form-text text-danger help-block"></small>
                            </div>
                        </div>
                        <div id="success"></div>
                        <div class="form-group">
                            <button class="btn btn-outline-primary btn-block btn-xl" type="submit" id="send_message_button" data-loading-text='Veuillez patient...' >Envoyer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer text-center">
        <div class="container">
            <div class="row">
                <div class="col-md-4 mb-5 mb-lg-0">
                    <h4 class="text-uppercase mb-4">EMPLACEMENT</h4>
                    <p>Vohitsoa Sambaina Gara<br> RN #7, PK 135<br> Antsirabe&nbsp; 110, MADAGASCAR</p>
                </div>
                <div class="col-md-4 mb-5 mb-lg-0">
                    <h4 class="text-uppercase">AUTOUR DU WEB</h4>
                    <ul class="list-inline mt-4">
                        <li class="list-inline-item">
                            <a class="btn btn-outline-light btn-social text-center rounded-circle" role="button" href="https://www.viadeo.com/p/002v22e6f0ho7we" target="_blank" data-toggle="tooltip" title="Viadeo"><i class="fa fa-viadeo fa-fw"></i></a>
                        </li>
                        <li class="list-inline-item">
                            <a class="btn btn-outline-light btn-social text-center rounded-circle" role="button" href="https://github.com/ladinasedera" target="_blank" data-toggle="tooltip" title="Github">
                                <i class="fa fa-github fa-fw"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="btn btn-outline-light btn-social text-center rounded-circle" role="button" href="https://www.linkedin.com/in/ladinasedera/" target="_blank" data-toggle="tooltip" title="Linkedin">
                                <i class="fa fa-linkedin fa-fw"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="btn btn-outline-light btn-social text-center rounded-circle" role="button" href="https://ladina.fitiavana.mg" target="_blank" data-toggle="tooltip" title="Ladina Web Site">
                                <i class="fa fa-globe fa-fw"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h4 class="text-uppercase mb-4">DISPONIBILITÉ</h4>
                    <p><span>Dimanche - Vendredi&nbsp;<br>7h - 21h (UTC+3)<br></span></p>
                </div>
            </div>
        </div>
    </footer>

    <div class="copyright py-3 text-white">
        <div class="container-fluid">
            <div class="mt-2">
                <label>Email : <a href="mailto:ladina.sedera@gmail.com" target="_top" >ladina.sedera@gmail.com</a></label> | 
                <label>Phone : <a href="tel:+261 34 11 104 72" target="_top" >+261 34 11 104 72</a> </label>
                <label class="text-right float-right">
                    © Ladina - <?php echo date('Y'); ?> 
                </label>
            </div>
        </div>
    </div>

    <div class="scroll-to-top position-fixed rounded"><a class="d-block js-scroll-trigger text-center text-white rounded" href="#page-top"><i class="fa fa-chevron-up"></i></a></div>

    <script type="text/javascript">
        var MAIL_URL = "<?= $GC['MAIL']['API_URL'] ?>";
    </script>
    <script type="text/javascript" src="assets/js/jquery.min.js" ></script>
    <script type="text/javascript" src="assets/js/jquery.easing.1.3.js" ></script>
    <script type="text/javascript" src="assets/bootstrap/js/bootstrap.min.js"></script>  
    <script type="text/javascript" src="assets/js/script.min.js"></script>
    <script type="text/javascript" src="assets/js/main.js"></script>
</body>

</html>