//header头部里面的音乐播放功能：
//点击play变成pause按钮，点击pause变成play按钮
$(".play").on("click",function(){
	$("audio").get(0).play();
	$(this).slideToggle();
	$(".pause").slideToggle();
})
$(".pause").on("click",function(){
	$("audio").get(0).pause();
	$(this).slideToggle();
	$(".play").slideToggle();
})
//放大镜跟着鼠标一起移动
$(document).on("mousemove",function(ev){
	var m=(ev.pageX-50);
	m = m<50?50:m;
	m = m>$(".title h2").offset().left+$(".title h2").width()-$(".magnifyingLens").width()/2?$(".title h2").offset().left+$(".title h2").width()-$(".magnifyingLens").width()/2:m;
	$(".magnifyingLens").css("left",m-100)
})

//鼠标移动到文字身上，当前文字放大
var title = document.getElementsByClassName("title")[0];
var titleText = title.getElementsByTagName("h2")[0];
var str="EVERY STORY HAS A BEGINNING……";
for(var i=0;i<str.length;i++){
	titleText.innerHTML += "<span>"+ str.charAt(i) +"</span>";
}
$("h2 span").on("mouseover",function(){
	$(this).css({"font-size":50})
})
$("h2 span").on("mouseout",function(){
	$(this).css({"font-size":30})
})
//滚轮滚动的时候触发的事件（笔迹和笔一起随着滚轮的方向上下做运动）
document.onmousewheel = drawing;
function drawing(ev){
	var e = ev||event;
	if(e.wheelDelta){//兼容chrome和firefox
		onoff = e.wheelDelta<0?true:false;
	}
	if(e.detail){
		onoff = e.detail<0?false:true;
	}
	if(onoff){//向下滚动
		$(".draw-pen").css("z-index",999)
		$(".vertical-line").stop()
		$(".draw-pen").stop()
		$(".vertical-line").animate({height:$(document).scrollTop()-500},300,"linear")
		$(".draw-pen").animate({top:$(document).scrollTop()-1070},300,"linear")
		if($(".draw-pen").offset().top+610>$("#gallery").offset().top){
			$(".draw-pen").hide(1000)
		}
		$("dl").parent().each(function(i){
			if($(this).offset().top+$(this).height()<$(document).scrollTop()+$(window).height()-200){
				$(this).animate({opacity:0},1000)
			}
		})
	}else{//向上滚动
		$(".vertical-line").stop()
		$(".draw-pen").stop()
		$(".draw-pen").show()
		$(".vertical-line").animate({height:$(document).scrollTop()-700},500,"linear")
		$(".draw-pen").animate({top:$(document).scrollTop()-1270},500,"linear")
		$("dl").parent().each(function(i){
			if($(this).offset().top+$(this).height()<$(document).scrollTop()+$(window).height()+300){
				$(this).animate({opacity:1},500)
			}
		})
	}
}
$(".wrap .img1").css("left",177);
$(".wrap .img2").css("left",$(window).width());

//笔最下面的幻灯切换
var Pagenum=0;
$(".pageRight").on("click",function(){
	Pagenum++;
	if(Pagenum==5){
		$(".wrap span").first().css("left",$(".wrap span").length*$(".wrap span").first().width());
		$(".wrap").animate({left:-5000},function(){
			$(".wrap span").first().css("left",0);
			$(".wrap").css("left","0");
		});
		Pagenum=0;
		return ;
	}
	$(".wrap").animate({left:-(1000*Pagenum)},500)
})


$(".pageRight").on("mouseover",function(){
	$(".pageRight").css("background","url(img/pageRight-act.png) no-repeat")
})
$(".pageRight").on("mouseout",function(){
	$(".pageRight").css("background","")
})
$(".pageLeft").on("click",function(){
	Pagenum--;
	if(Pagenum==-1){
		$(".wrap span").last().css("left",-$(".wrap span").length*$(".wrap span").first().width());
		$(".wrap").animate({left:1000},function(){
			$(".wrap span").last().css("left",0);
			$(".wrap").css("left","-4000px");
		});
		Pagenum=4;
		return ;
	}
	$(".wrap").animate({left:-(1000*Pagenum)},500)
})


$(".pageLeft").on("mouseover",function(){
	$(".pageLeft").css("background","url(img/pageLeft-act.png) no-repeat")
})
$(".pageLeft").on("mouseout",function(){
	$(".pageLeft").css("background","")
})