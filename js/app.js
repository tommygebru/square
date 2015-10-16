$(function() {
	
		
	// (function() {


	// 	var Nav = {

	// 		init: function() {
	// 			this.body = $(document);
	// 			// this.header = body.find('header');
	// 			this.button = $button = $header.find('a');
				

	// 			this.bindEvents();
	// 		}

	// 		// bindEvents: function() {
	// 		// 	// return console.log('test');
	// 		// }
	// 	}

	// 	Nav.init();

	// })();
	// $(document).css('background', 'red');


var nav = (function() {
		var $body = $(document);
		var $header = $('header');
		var $button = $header.find('a');
		var $nav = $('nav');
		var close = _closeDatShiz();
		$button.on('click', _openDatShiz);
		$body.on('click', _closeDatShiz);

		function _openDatShiz(e) {
			e.stopPropagation();
			var $sibs = $(this).siblings('a').children('li');
			
			$(this).on('click', function() {
				this._closeDatShiz;
			});

			$button.toggleClass('inactive');
			$(this).removeClass('inactive');
			$(this).toggleClass('active');
			$nav.toggleClass('hide');
			$nav.toggleClass('show');

			if ($nav.hasClass('hide')) {
				$button.removeClass('inactive');
			}
			
		}

		function _closeDatShiz(e) {
			$nav.removeClass('show');
			$nav.addClass('hide');
			$button.removeClass('active inactive');
		}
	})();

});
