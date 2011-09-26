/*
* Required for jQuery
* Version: 1.0
* Usage:
*  jQuery('form.element').required()
*  jQuery('form.element').required({
*     message: "Oops, there's something wrong. Check it out.",
*    item_message: "Oops, you didn't fill this field"
*  })
*
*/
(function(){
	
	$.fn.required = function(options){
		
		options = $.extend({
			target: '#is_required_form'
			message: 'All fields described below are required',
			item_message: 'is required.',
			callback: function(){}
			
		}, options);
		
		$(this).each(function(e){
			alert(e);
		});
	}
})(jQuery);