var app = new Vue({
el: '#app',
	data: {
		treatments: [],
	},
	mounted () {
		
		
		$.getJSON('/data/treatments.json', (data) => {
			this.treatments = data;
			this.scrollToSection();
		});
	},
	methods: {
		scrollToSection () {
			let hash = window.location.hash.substr(1);
			if (hash != '') {
				setTimeout(() => {
					$('html, body').animate({
						scrollTop: $('#' + hash).offset().top
					}, 200);
				}, 100);
			}
		},
		formatPrice (number) {
			return new Intl.NumberFormat('de-DE', {}).format(number);
		},
	},
});