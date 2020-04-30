// My Helpers Functions
function get_ajax(path,selector) {

	$.get(path, function(content) {

		$(selector).html(content);

	});

}

//FOR POST REQUEST ONLY
function post_ajax(url, data, callback, callback_error) {

	$.post(url, data, function(response) {

	    callback(response);

	}, 'json').fail(function(xhr) {

	    console.log(xhr);

	    if (typeof callback_error == 'function') 
	    {
	       	callback_error(xhr);
	    }

	});
}

// App JavaScript

const app = {

	my_favorite_qoute : `- [ THE ONLY WAY TO DO A GREAT WORK IS TO LOVE WHAT YOU DO ] -`,

	init : function() {
		
		var self = this;

		self.get_about_me();
		self.get_my_favorite_quote();
		self.plugins.init();

	},

	plugins : {

		init : function() {
			$('[data-toggle="tooltip"]').tooltip();
		}

	},

	get_about_me : function() {
		
		get_ajax('views/me.html','p#about-me');

	},

	get_my_favorite_quote : function() {
		
		// GET THE MAIN APP INSTANCE
		let self       = this;

		let quote      = self.my_favorite_qoute.split(' ');
		let quote_html = '';
		
		$.each(quote, function(index, val) {
			quote_html += `<span class="letter" data-letter="`+val+`">`+val+`</span>`;
		});

		$('#my-favorite-quote').html(quote_html);

	},

	contact_me : function(element) {

		event.preventDefault();
		var btn     = $('#send_message_button').button('loading');
		var url     = MAIL_URL;
		var name    = $('#name').val();
		var email   = $('#email').val();
		var phone   = $('#phone').val();
		var message = $('#message').val();

			var data = {				
				'sujet'             : 'Rendez-vous pour Ladina Développeur',
				'expediteur'        : email,
				'expediteur_name'   : name,
				'destinataire'      : 'ladina.sedera@gmail.com',
				'destinataire_name' : 'Ladina Sedera',
				'contenu'           : message + ' <br> Phone : '+phone,
			};

			post_ajax(url,data,function(response) {

				console.log(response);
				btn.button('reset');
				$('#success').addClass('alert alert-success').html(
					name+`, <br>
					Message envoyé avec succés. Je vous reponds le plus vite possible.
					<br><br>
					Bien Cordialement, 
					<br>Ladina Sedera`);

				$('#message-send').toast('show');

			},function(xhr) {
				
				$('#success').addClass('alert alert-danger').html(`Je suis vraiement désolé,
					<br>
					Il y a une erreur lors de l'envoye de votre message
					<br><br>
					Veuillez re-essayer plus tard<br>
					PS : Vous pouvez m'envoyer directement vers 
					<a href="mailto:ladina.sedera@gmail.com" target="_top" >
					ladina.sedera@gmail.com</a>
				`);
				console.log(xhr);

			})

	},

};


jQuery(document).ready(function($) {
	
	app.init();

});