
window.onload = function(){
	//网页head的menu部分
	$("#menu li").on("mousemove",function(){
		$(this).find("a").stop()
		$(this).find("a").animate({marginTop:-31},200)
	})
	$("#menu li").on("mouseout",function(){
		$(this).find("a").stop()
		$(this).find("a").animate({marginTop:0},200)
	})
	//图片背景的高度为可视区的高度
	$("#screen1").css("height",$(window).height());
	
	//让所有的h2标题里面的文字都运动起来
	var str = "";
	var str1 = "";
	var timer = null;
	var num = 0;
	for(var i=0;i<$("#content h2").html().length;i++){
		str = $("#content h2").html();
		str1 += "<span>"+str[i]+"</span>";
	}
	$("#content h2").html(str1);
	
	timer = setInterval(function(){
		$("h2").find("span").eq(num).css("font-size",138);
		num++;
		if(num>$("#content").find("span").length){
			clearInterval(timer)
		}
	},100)
	//两个按钮运动
	$("#btn a").on("mouseover",function(){
		$(this).find(".wrap").stop()
		$(this).find(".wrap").animate({marginTop:-60},200)
	})
	$("#btn a").on("mouseout",function(){
		$(this).find(".wrap").stop()
		$(this).find(".wrap").animate({marginTop:0},200)
	})
	
}
