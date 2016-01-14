// JavaScript Document

$(document).ready(function(){
	
	//广告按钮
	$("#ad p").click(function(){
		
		
		$("#jd_img").fadeOut("slow",function(){
			
			$("#jd_img").css("display","none");
			
			})
		
		})
	
	//输入框
	
	$("#jdmain").find("input").blur(function(){
		
		if($("#jdmain").find("input").val()==''){
			
			$("#jdmain").find("input").val('月饼')
			
			}

		}).focus(function(){
			
			if($("#jdmain").find("input").val()=='月饼'){
			
			$("#jdmain").find("input").val('')
			
			}	
			
			
	  })
	
	
	
	
	
	$("div.login_top").mouseover(function(){
		
		$("div.site").css("display","block");
		$("div.login_top").css("background","#fff")
		
		}).mouseout(function(){
			
		$("div.site").css("display","none");
		$("div.login_top").css("background","#F1F1F1");		
		
			});
		
	$("li.shop_list_li").mouseover(function(){
		
		$("div.shop_list").css("display","block");
		
		}).mouseout(function(){
			
			
		$("div.shop_list").css("display","none");	
			
			});
			
	$("li.mobile_jd").mouseover(function(){
		
		$("div.mobile_jd_div").css("display","block");
		
		}).mouseout(function(){
			
			
		$("div.mobile_jd_div").css("display","none");	
			
			});		
	
	$("li.focus_jd").mouseover(function(){
		
		$("div.focus_jd_div").css("display","block");
		
		}).mouseout(function(){
			
			
		$("div.focus_jd_div").css("display","none");	
			
			});		
	$("li.jd_sales").mouseover(function(){
		
		$("div.jd_sales_div").css("display","block");
		
		}).mouseout(function(){
			
			
		$("div.jd_sales_div").css("display","none");	
			
			});		
			
	$("li.last").mouseover(function(){
		
		$("div.last_div").css("display","block");
		
		}).mouseout(function(){
			
			
		$("div.last_div").css("display","none");	
			
			});				
			
	$("div.gouwu").mouseover(function(){
		
		$("div.gouwu_down").css("display","block");
		
		}).mouseout(function(){
			
			
		$("div.gouwu_down").css("display","none");	
			
			});				
	
	
	
		
		$("div.jd_fore").mouseover(function(){
			
			$("div.jd_machine").css("display","none");
			
			
			$("div.jd_machine").eq( $(this).index() ).css("display","block")
			}).mouseout(function(){
			
			$("div.jd_machine").css("display","none")
				
				});
	   
	   $("div.jd_machine").mouseover(function(){
		   
		   $("div.jd_machine").css("display","block")
	
		   }).mouseout(function(){
			   
			
			  $("div.jd_machine").css("display","none")  
			   
			   });
	   
	   			
				
				
			
		
	$("div.jd_body_middle").find("h2.mark_left").mouseover(function(){
			
			$("div.jd_body_middle p.btn_L").css("display","block");
			
			}).mouseout(function(){
				
			$("div.jd_body_middle p.btn_L").css("display","none");	
				
				});			
	
	 $("div.jd_body_middle").find("h2.mark_right").mouseover(function(){
		
		    $("div.jd_body_middle p.btn_R").css("display","block");
			
			}).mouseout(function(){
				
			$("div.jd_body_middle p.btn_R").css("display","none");	
				
				});	
	$("div.jd_body_middle p.btn_L").mouseover(function(){
			
			$("div.jd_body_middle p.btn_L").css("display","block");
			
			}).mouseout(function(){
				
			$("div.jd_body_middle p.btn_L").css("display","none");	
				
				});			
				
				
	 $("div.jd_body_middle p.btn_R").mouseover(function(){
		
		    $("div.jd_body_middle p.btn_R").css("display","block");
			
			}).mouseout(function(){
				
			$("div.jd_body_middle p.btn_R").css("display","none");	
				
				});						
		
		
		//轮播图
		jd_taken();	
			   
	   function jd_taken()
	   {
		   
		   var num=0;
		   var ball_show_timer=null;
		   var arr1=['http://img30.360buyimg.com/da/jfs/t2068/188/421013312/97991/5124edb2/5608ecb8Nad4aace4.jpg','http://img20.360buyimg.com/da/jfs/t2263/49/516718432/82026/6dbf1b75/5615ce70Na48758aa.jpg','http://img30.360buyimg.com/da/jfs/t2398/290/561370175/66032/b1ea7410/56163a2bNe803085c.jpg','http://img20.360buyimg.com/da/jfs/t2140/270/442113069/92527/f6729ad4/560a3980N54ef632c.jpg','http://img30.360buyimg.com/da/jfs/t2179/280/547762278/86130/f25e40ed/5615e12cN868471c8.jpg','http://img11.360buyimg.com/da/jfs/t2386/318/478579996/63712/132b65bd/560b70f7Nf4226eef.jpg'
		   ];
		
		 $("ol.jd_ol li").click(function(){
			 
			$("ul.jd_body_ball").find('img').attr('src',arr1[$(this).index()]); 
			
			 $("ol.jd_ol li").attr('class','');
			 $(this).attr("class",'active');
			 num=$(this).index();
			 })

		$("div.jd_body_middle p.btn_L").click(function(){
			
			
			 num--;
			 if(num<0){
				 
				num=arr1.length-1; 
				 }
			$("ul.jd_body_ball").find('img').attr('src',arr1[num]);
		    $("ol.jd_ol li").attr('class','');
			$("ol.jd_ol li").eq(num).attr('class','active');
				
		
			});
		$("div.jd_body_middle p.btn_R").click(function(){
			
			jd_timer();
			});
		
		
		    ball_show_timer=setInterval(jd_timer,5000);
		
		$("div.jd_body_middle").mouseover(function(){
			
			clearInterval(ball_show_timer);
			
			});
		$("div.jd_body_middle").mouseout(function(){
			
		    ball_show_timer=setInterval(jd_timer,5000);
		
			
			});		
		function jd_timer(){
			
			 num++;
			 if(num==arr1.length){
				 
				 
				num=0; 
				 
				 } 
			 
			$("ul.jd_body_ball").find('img').attr('src',arr1[num]);
			 $("ol.jd_ol li").attr('class','');
			$("ol.jd_ol li").eq(num).attr('class','active');
			
			
			}	
		
		
	   }
	
	
	  //推荐区
	
	    like();
	function like(){
	  
	  var $jd_ul_box=$("div.jd_ul_box");
	  var btnL=$jd_ul_box.find("p.btn_L");
	  var btnR=$jd_ul_box.find("p.btn_R");
	  var num=1;
	  var i=4;
	  var width=$jd_ul_box.width();
	 $jd_ul_box.mouseover(function(){
		
		btnL.show(); 
		btnR.show(); 
		  }).mouseout(function(){
			  
		btnL.hide(); 
		btnR.hide();   
			  
			  });
		
		btnL.mouseover(function(){
		
		btnL.show(); 
		btnR.show(); 
		  });
		  
		btnR.mouseover(function(){
		
		btnL.show(); 
		 btnR.show(); 
		  });
		 
	  btnL.click(function(){
		  
		  var len=$("ul.jd_fashion_header").find("li").length;
		  var page=Math.ceil(len/i);
		  
	if(!$jd_ul_box.find("ul.jd_fashion_header").is(":animated")){
		  if(num==1){
		  
		 $jd_ul_box.find("ul.jd_fashion_header").animate({
  
			 left:-width*(page-1)
			 
			 });
			num=page;
		  }else{
			  
			  
			 $jd_ul_box.find("ul.jd_fashion_header").animate({
			 
			  
			 left:'0px'
			 
			 });  
			 num--;
			  }
	}
		  
		  });	  
	 btnR.click(function(){
		 
		 var len=$("ul.jd_fashion_header").find("li").length;
		  var page=Math.ceil(len/i);
		  
	if(!$jd_ul_box.find("ul.jd_fashion_header").is(":animated")){
		  if(num==page){
		  
		 $jd_ul_box.find("ul.jd_fashion_header").animate({
  
			 left:'0px'
			 
			 });
			num=1;
		  }else{
			  	  
			 $jd_ul_box.find("ul.jd_fashion_header").animate({	  
			 left:-width
			 
			 });  
			 num++;
			  }
	}
		 
		 });	  
		  
		  
	}
		
	  //缩放保持	
        window.onresize=function(){
			
			 var main_left=$("#jd_fashion").offset().left;
			 var window_h=$(window).height();
			 var s_height=$("#jd_lander").height();
		     var viewWidth=document.documentElement.clientWidth;	
			 var viewHeight=document.documentElement.clientHeight;
			 
			  var Vleft=$("#jd_lander").css("left");
			  var Vtop=$("#jd_lander").css("top");
			  
			  $("#jd_lander").css("left",main_left-45+'px')
			  $("#jd_lander").css("top",(window_h-s_height)/2+'px')
			 
			
			};
      



    });
		   
		   
		   