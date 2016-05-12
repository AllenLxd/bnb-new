$(function(){
     	   
			   $('.btn-parameter').click(function(){
			   	          $('.slider-show').each(function(){
			   	          	          $(this).fadeOut(500);
			   	          });
			   	          
			   	          var sliderIndex = $(this).index();
			              $('.slider-show').eq(sliderIndex)
			                               .fadeIn(1000);
			   	          
			   })
			    	
})