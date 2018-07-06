'use strict';
angular.module('phoneDetail').
	component('phoneDetail', {
		templateUrl: 'phone-detail/phone-detail.template.html',

		controller: [ '$routeParams', 'Phone',
		function PhoneDetailController( $routeParams, Phone) {
			var self = this;

			self.phone = Phone.get({ phoneId: $routeParams.phoneId}, function(phone) {
				self.setImage(self.phone.images[0]);
			});

			self.setImage = function setImage(url) {
				self.imageUrl = url;
			}
		}]

		// controller: [ '$http', '$routeParams',
		// function PhoneDetailController($http, $routeParams) {
		// 	var self = this;

		// 	self.setImage = function setImage(url) {
		// 		self.imageUrl = url;
		// 	}

		// 	$http.get('phones/'+$routeParams.phoneId+'.json')
		// 		.then(function (response) {
		// 			self.phone = response.data;
		// 			self.setImage(self.phone.images[0]);
		// 		});
		// }]
	});