var app = new Vue({
el: '#app',
	data: {
		treatments: [],
	},
	mounted () {
		let self = this;
		$.getJSON('/data/treatments.json', function(data) { self.treatments = data });
	},
	methods: {
		formatPrice (number) {
			return new Intl.NumberFormat('de-DE', {}).format(number);
		},
	},
});