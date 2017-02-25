// 头部样式
$('.w1').hover(function(){
		$(this).css({'color':'#1983D5','cursor':'pointer'});
	$(this).find('.pw1').animate({'height':'291'},500);
},function(){
		$(this).css('color','');
	$(this).find('.pw1').animate({'height':'0'},500);
});
$(window).scroll(function(e){
	$('.pww1').css({'display':'block','zIndex':'10000'});
});
$('.p2').focus(function(){
	$(this).css({'width':'272'});
});
$('.p2').blur(function(){
	$(this).css({'width':'179'});
});
// 尾部样式
$('.bb1').hover(function(){
	$(this).css({'opacity':'0.5','cursor':'pointer'});
},function(){
	$(this).css({'opacity':'1'});
});
$('.b13').hover(function(){
	$(this).find('div').css('display','block');
},function(){
	$(this).find('div').css('display','none');
})
$('.b6').hover(function(){
	$(this).css({'backgroundPosition':'-42px -30px','cursor':'pointer'});
},function(){
	$(this).css('backgroundPosition','0 -30px');
});
$('.gg1').hover(function(){
	$(this).css({'textDecoration':'underline','cursor':'pointer'});
},function(){
	$(this).css({'textDecoration':'none'});
});
$('.g5').hover(function(){
	$('.gg2').css({'display':'block'});
},function(){
	$('.gg2').css({'display':'none'});
});



document.body.onscroll=function(e){
	if(document.documentElement.scrollTop>220){
		$('#fh').css({'display':'block'});
	}
	if(document.documentElement.scrollTop<210){
		$('#fh').css({'display':'none'});
	}

}

$('#fh').click(function(){
	document.documentElement.scrollTop=0;
});


$('.nkl7').hover(function(){
	$(this).css('background','#00A5E6');
},function(){
	$(this).css('background','');
});


$('.p7').click(function(){
	open('index.html');
});


// var bnhu;
// $('.w1').each(function(){
// 	var nnb=this.style.color?true:false;
// 	if(nnb){
// 		bnhu=this;
// 	}
// });
// var ttpm1=window.setInterval(function(){
// 	$(bnhu).css('color','#04B0F2');
// 	console.dir(bnhu);
// },100);