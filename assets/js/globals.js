var nodeSettings = { 
	grid: [ 5,5 ],
	axis: 'y' ,
	start:function(event, ui) {
		
		if ($(this).data('status') != "added")
			$(this).data('status' , "moved");
	},
	stop: function(event, ui) { 
					var pageHeight = 0;
				
					$('.node').each(function(index) {						
						if ($(this).offset().top > pageHeight )
							pageHeight = $(this).offset().top;
					});
				
				   $('#content-wrapper').css('height', pageHeight+"px" );
	}
}
