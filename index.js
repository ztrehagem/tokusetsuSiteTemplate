$(function(){

	//** jQuery objects
	var $win = $(window);
	var $header = $('header');	
	var $jacket_img = $('#jacket > img');

	//** event listener
	$win.on('load scroll', function(){
		var scr = $win.scrollTop();
		var wh = $win.height();
		var alpha = (scr < wh) ? scr / wh : 1;
		//$header.css('margin-top', (-(1-alpha)*$header.height())+'px');
		$header.css('opacity', alpha);
	});

	$win.on('load resize', function(){
		$jacket_img.height( $jacket_img.width() );
	});

	$('#demo > .cover').on('click', function(){
		$(this).fadeOut('slow');
	});


	//** initialize elements
	$header.css('opacity', 0);
	$('#demo > .cover').height( $('#demo').height() ).css('display', 'table')
		.children('span').css('display', 'table-cell');

});