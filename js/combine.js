$(function(){
     	   
			   //search 功能
			   var keywords = [
                   'trident','trident sf','trident df','G2G trident',
                   'array','array SF','array DF','G2G array',
                   'side','G2G side'
                  ]
			   var videoSrc = ['Q1.mp4','Q2.mp4','Q3.mp4'];
			   
			   $('video.movie').bind('ended',function(){
								    		 $(this).animate({
												        right:'0px',
												        top:'0px',
												        width:'20px',
												        height:'10px',									   
													}, 1000).hide(1000);
												
										});
			   
				 $('#search').click(function(){
				 	    
				 	     var inputcontent = $('#searchText').val();
			             var searchResult = $.inArray(inputcontent,keywords);
			             var srcIndex = 0;
			             $('video.movie').animate({
									        right:'0px',
									        top:'0px',
									        width:'20px',
									        height:'10px'
										}, 10).hide();
										
			             if(searchResult == -1){
			             	
			             	    $('h3').html('can not search what you want ! please contact us');
			             	    
			             }else if(searchResult<=3){
			             	      srcIndex = 0;
			             	      $('video.movie').attr({'src':videoSrc[srcIndex]}).show().animate({
															        right:'400px',
															        top:'200px',
															        width:'615px',
															        height:'350px'
															}, 1700);
			             	  
			             }else if(searchResult<=7){
			             	      srcIndex = 1;
			             	      $('video.movie').attr({'src':videoSrc[srcIndex]}).show().animate({
															        right:'400px',
															        top:'200px',
															        width:'620px',
															        height:'350px'
															}, 1700);
			             	  
			             }else{
			             	      srcIndex = 2;
			             	      $('video.movie').attr({'src':videoSrc[srcIndex]}).show().animate({
															        right:'400px',
															        top:'200px',
															        width:'620px',
															        height:'350px'
															}, 1700);
			                 }
			             
				 });
				 
				 //Q-A功能
				var btn=$("a.btn");
				//var movie=$("video.movie"); 
				//视频播放完毕自动隐藏
					    
				btn.each(function(index){
					var moveIndex = index;
					$(this).click(function(){
						    $('video.movie').animate({
									        right:'0px',
									        top:'0px',
									        width:'20px',
									        height:'10px'
										}, 10).hide();
						    
						    $('video.movie').attr({'src':videoSrc[moveIndex]}).show().animate({
															        right:'400px',
															        top:'200px',
															        width:'620px',
															        height:'350px'
															}, 1700);
					});
				})
			    	
     })