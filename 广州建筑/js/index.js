$('.j2').hover(function(){
	$(this).css({'backgroundPosition':'0px -65px','top':'-5px'});
},function(){
	$(this).css({'backgroundPosition':'0px 0px','top':'0px'});
});
$('.m6').hover(function(){
	$('.m9').css({'display':'none'});
	var bb=String($(this).index());
	$($('.m9')[bb]).css({'display':'block'});
	$('.m6').css({'border':'none'});
	$(this).css({'borderTop':'2px solid #1983D5','borderLeft':'1px solid #ccc','borderRight':'1px solid #ccc'});
},function(){});
$('.mm2').hover(function(){
	$(this).css({'color':'#1983D5','cursor':'pointer'});
},function(){
	$(this).css({'color':''});
});
$('.m9>li').hover(function(){
	$(this).css({'color':'#F66E08','cursor':'pointer','background':'#EFEFEF'});
},function(){
	$(this).css({'color':'','background':''});
});
// 小轮播图
var next=0;
var now=0;
$($('.m18').find('li')[next]).css({'color':'#fff','background':'#F66E08','cursor':'pointer','border':'1px solid #E63003'});
var tt1=window.setInterval(fn,1500);
function fn(){
	next++;
	if(next>=$('.m15').find('img').length){
		next=0;
	}
	$('.m18').find('li').css({'color':'','background':'','border':'1px solid #DEDEDE'});
	$($('.m15').find('img')[next]).css({'left':'269px'});
	$($('.m15').find('img')[now]).animate({'left':'-269px'});
	$($('.m15').find('img')[next]).animate({'left':'0'});
	$($('.m18').find('li')[next]).css({'color':'#fff','background':'#F66E08','cursor':'pointer','border':'1px solid #E63003'});
	now=next;
}


// 移入移出存在bug
// $('.m18').find('li').hover(function(){
// 	$(this).css({'color':'#fff','background':'#F66E08','cursor':'pointer','border':'1px solid #E63003'});
// },function(){
// 	$(this).css({'color':'','background':'','border':'1px solid #DEDEDE'});
// });

$('.m18').find('li').click(function(){
	next=$(this).index()-1;
	$('.m18').find('li').css({'color':'','background':'','border':'1px solid #DEDEDE'});
	$(this).css({'color':'#fff','background':'#F66E08','cursor':'pointer','border':'1px solid #E63003'});
});


// 鼠标滑过效果
$('.n6').find('.n9').hover(function(){
	var bbw;
	if($(this).index()==0){
		bbw=0;
	}else if($(this).index()==2){
		bbw=1;
	}else if($(this).index()==4){
		bbw=2;
	}
	$('.n6').find('.jj1').css({'display':'none'});
	$($('.n6').find('.jj1')[bbw]).css({'display':'block'});
},function(){});
$('.n12').hover(function(){
	$(this).css({'backgroundPosition':'0px 0px'});
},function(){
	$(this).css({'backgroundPosition':'0px -18px'});
});


$('.n16').hover(function(){
	$(this).siblings('.njk1').css({'display':'none'});
	$(this).prev('.njk1').css({'display':'block'});
},function(){});
$('.n8').hover(function(){
	$(this).css({'color':'#1983D5','cursor':'pointer'});
},function(){
	$(this).css({'color':''});
});

// 大轮播
var next1=0;
var ttt2=window.setInterval(fnn1,2000);

function fnn1(){
	next1++;
	if(next1>=$('.mmk1').length){
		next1=0;
	}
	$('.mmk1').animate({'opacity':'0'});
	$($('.mmk1')[next1]).animate({'opacity':'1'});
	$('#jni1').find('li').css({'background':'#ccc'});
	$($('#jni1').find('li')[next1]).css({'background':'#F06F31'});
	
}

$('#jni1').find('li').click(function(){
	next1=$(this).index()-1;
});

document.body.onscroll=function(e){
	if(document.documentElement.scrollTop>$('.j1')[0].scrollTop+300){
		$('#fh').css({'display':'block'});
	}
	if(document.documentElement.scrollTop<$('.j1')[0].scrollTop+290){
		$('#fh').css({'display':'none'});
	}

}

$('#fh').click(function(){
	document.documentElement.scrollTop=0;
});