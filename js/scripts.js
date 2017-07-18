$(function(){
	//Слайдер
	images = ["./img/photo_frame.png","./img/photo_frame1.png","./img/photo_frame2.png"];
	count = images.length;
	first_img = 0;

	$(".photo_frame").attr("src",""+images[0]+"");
	$("#go").click(function(){
		first_img++;
		if(first_img == count){
			first_img = 0;
		}
		$(".photo_frame").attr("src",""+images[first_img]+"");
	});

	$("#back").click(function(){
		first_img--;
		if(first_img < 0){
			first_img = count - 1;
		}
		$(".photo_frame").attr("src",""+images[first_img]+"");
	});

	$("#go").hover(function(){
		$(this).attr("src","img/arrow_right_hover.png");
		$(this).fadeIn(	);
	},
		function(){
		$(this).attr("src","img/arrow_right.png");
	});

	$("#back").hover(function(){
		$(this).attr("src","img/arrow_left_hover.png");
		$(this).fadeIn(	);
	},
		function(){
		$(this).attr("src","img/arrow_left.png");
	});

	//Поиск
	$(function(){
		$(".search").focus(function(){
		if ($(this).val()==="ПОИСК") {
			$(this).val("");
			$(this).css("color","#000");
		}
		});	

		$(".search").blur(function(){
		if ($(this).val()==="") {
			$(this).val("ПОИСК");
			$(this).css("color","#c6c6c6");
		}
		});	
	});

	//Подписаться
	$(function(){
		$(".email").focus(function(){
		if ($(this).val()==="Ваш e-mail") {
			$(this).val("");
			$(this).css("color","#000");
		}
		});	

		$(".email").blur(function(){
		if ($(this).val()==="") {
			$(this).val("Ваш e-mail");
			$(this).css("color","#c6c6c6");
		}
		});	
	});
});