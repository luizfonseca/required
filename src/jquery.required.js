/*
* Required for jQuery
* Version: 1.0
* Usage:
*  jQuery('form.element').required()
*  jQuery('form.element').required({
*     header: "Oops, there's something wrong. Check it out.",
*     message: "Oops, you didn't fill this field."
*  })
*
*/
(function($){

	$.fn.required = function(options)
	{
		var data = {}
		var error = []
		var error_list = '';
		
		var options = $.extend(
		{
			header: 'All fields described below are required',
			message: 'is required.',
			callback: function(){}
			
		}, options);
		
		$(this).each(function()
		{			
			$('input:not(:submit)', $(this)).each(function()
			{
				if ( $(this).hasClass('required') && $(this).val() === '')
				{
					error.push( $(this).siblings('label').attr('for', $(this).attr('name')).html() );
				}
			});
			
			if ( error.length > 0 ) 
			{
				var error_list = '';
				if (options.header != '')
				{
					error_list += "<h3> " + options.header + "</h3>"; 
				}
				error_list += "<ul>";
			
				for (msg in error) 
				{
					if (error[msg] != undefined || error[msg] != null)
					{
						error_list += "<li><em> " + error[msg] + "</em> " + options.message + " </li>" ;
						//console.log(error[counter]);
					}
				}
				
				error_list += "</ul>";
				error = []
			
				$('#message_overflow').fadeIn();
				$('#message_from_required').empty().html(error_list);
				
				
				//console.log (error_list);
			}
			else options.callback();
			$('#message_close_required').click(function(){ $('#message_overflow').fadeOut(); });
			
		});
	}
})(jQuery);