
(function($){
	function injector(t, splitter, klass, after) {
		var a = t.text().split(splitter), inject = '';
		if (a.length) {
			$(a).each(function(i, item) {
				inject += '<span class="'+klass+(i+1)+'">'+item+'</span>'+after;
			});	
			t.empty().append(inject);
		}
	}
	
	var methods = {
		init : function() {

			return this.each(function() {
				injector($(this), '', 'char', '');
			});

		},

		words : function() {

			return this.each(function() {
				injector($(this), ' ', 'word', ' ');
			});

		},
		
		lines : function() {
			return this.each(function() {
				var r = "eefec303079ad17405c889e092e105b0";
				// Because it's hard to split a <br/> tag consistently across browsers,
				// (*ahem* IE *ahem*), we replaces all <br/> instances with an md5 hash 
				// (of the word "split").  If you're trying to use this plugin on that 
				// md5 hash string, it will fail because you're being ridiculous.
				injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
			});
		}
	};

	$.fn.lettering = function( method ) {
		// Method calling logic
		if ( method && methods[method] ) {
			return methods[ method ].apply( this, [].slice.call( arguments, 1 ));
		} else if ( method === 'letters' || ! method ) {
			return methods.init.apply( this, [].slice.call( arguments, 0 ) ); // always pass an array
		}
		$.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
		return this;
	};
})(jQuery);



jQuery(document).ready(function ($) {
	$(window).load(function () {
		if (docCookies.getItem("frompage") != 'notindex') {
			console.log(docCookies.getItem("frompage"));
			console.log("show preloader");
		}
		else {
			console.log(docCookies.getItem("frompage"));
			console.log("hide preloader");
			$("#preloader").hide();
			$("#preloader").addClass("hide");


		}
		docCookies.setItem("frompage", "index");
	});
});


jQuery(document).ready(function ($) {

	$("#os-phrases > h2").lettering('words').children("span").lettering().children("span").lettering();

})


jQuery(document).ready(function ($) {

	$("#os-phrasesa > h2").lettering('words').children("span").lettering().children("span").lettering();

})


jQuery(window).load(function () {

	jQuery("#preloader").delay(10000).fadeOut("slow");

})



jQuery(window).load(function () {

	jQuery("#preloadera").delay(10000).fadeOut("slow");

})
