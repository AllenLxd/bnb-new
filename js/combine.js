$(function(){
     	   
			   //search 功能
			   var keywords = [
                   'trident','trident sf','trident df','G2G trident',
                   'array','array SF','array DF','G2G array',
                   'side','G2G side','wow','WOW','anpro','ANPRO','Anpro'
                  ]
			   var videoSrc = ['Q1.mp4','Q2.mp4','Q3.mp4','Q4.mp4','Q5.mp4'];
			   
			   $('video.movie').bind('ended',function(){
								    		 $(this).animate({
												        right:'0px',
												        top:'0px',
												        width:'20px',
												        height:'10px',									   
													}, 1000).hide(100);
												
										});
				var showVideo = function(num){
		   	
		    	
		           $('video.movie').animate({
						        right:'0px',
						        top:'0px',
						        width:'20px',
						        height:'10px'
					 }, 10).hide();
					 
					 $('video.movie').attr({'src':videoSrc[num]}).show().animate({
												        right:'400px',
												        top:'200px',
												        width:'615px',
												        height:'350px'
												}, 1700);
					  
		 }
			   
				 $('#search').click(function(){
				 	    
				 	     var inputcontent = $('#searchText').val();
			             var searchResult = $.inArray(inputcontent,keywords);			             
			             $('video.movie').animate({
									        right:'0px',
									        top:'0px',
									        width:'20px',
									        height:'10px'
										}, 10).hide();
										
						 
						//搜索判断				
			           if(searchResult == -1){
			             	
			             	    $('p.no-search').html('can not search what you want ! please contact us');
			             	    
			             }else if(searchResult<=3){
			             	      showVideo(0);
			             	  
			             }else if(searchResult<=7){
			             	      showVideo(1);
			             	  
			             }else if(searchResult<=9){
			             	      showVideo(2);
			             	      
			             }else if(searchResult<=11){
			             	      showVideo(3);
			             	      
			             }else if(searchResult<=14){
			             	      showVideo(4);
			             }
			             
				 });
				 
				//搜索按enter键触发点击事件
				$("body").keyup(function () {  
		                if (event.which == 13){  
		                    $('#search').trigger("click");  
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
															        width:'615px',
															        height:'350px'
															}, 1700);
					});
				})
				
				
				 if (annyang) {		  
		    // define the functions our commands will run.			
		 
		    
		
		    // define our commands.
		    // * The key is the phrase you want your users to say.
		    // * The value is the action to do.
		    //   You can pass a function, a function name (as a string), or write your function as part of the commands object.
		    var commands = {
		    	
		      'trident':  function(){console.log(1)},
		      //'array':  function(){showVideo(1)},
			 // 'side':  function(){showVideo(2)}
			 //'wow':  function(){showVideo(3)},
			 // 'anpro':  function(){showVideo(4)} 
			            
		        
		    };
		
		    // OPTIONAL: activate debug mode for detailed logging in the console
		    annyang.debug();
		
		    // Add voice commands to respond to
		    annyang.addCommands(commands);
		
		    // OPTIONAL: Set a language for speech recognition (defaults to English)
		    // For a full list of language codes, see the documentation:
		    // https://github.com/TalAter/annyang/blob/master/docs/README.md#languages
		    annyang.setLanguage('en');
		
		    // Start listening. You can call this here, or attach this call to an event, button, etc.
		    annyang.start();
		    
		  } else {
		    $(document).ready(function() {
		      console.log('can not support')
		    });
		  }
			    	
     })