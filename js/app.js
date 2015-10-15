$(function() {
	
	var nav = (function() {
		var $body = $(document);
		var $header = $('header');
		var $buttons = $header.find('a');
		var $nav = $('nav');
		var close = _closeDatShiz();
		$buttons.on('click', _openDatShiz);
		$body.on('click', _closeDatShiz);

		function _openDatShiz(e) {
			e.stopPropagation();
			var $sibs = $(this).siblings('a').children('li');
			
			$buttons.toggleClass('inactive');
			$(this).removeClass('inactive');
			$(this).toggleClass('active');
			$nav.toggleClass('hide');
			$nav.toggleClass('show');

			if ($nav.hasClass('hide')) {
				$buttons.removeClass('inactive');
			}
		}

		function _closeDatShiz(e) {
			$nav.removeClass('show');
			$nav.addClass('hide');
			$buttons.removeClass('active inactive');
		}
	})();
});