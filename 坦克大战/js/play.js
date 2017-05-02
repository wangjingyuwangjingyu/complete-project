// 游戏类
function tan(){
	this.xue=100;
	this.mespeed=1;
	this.fx='';
	this.maxw=document.documentElement.clientWidth;
	this.maxh=document.documentElement.clientHeight;
	this.qian=[];
}
// 开始玩游戏
tan.prototype.play=function(){
	this.chushihua();
	this.mezou();
}
tan.prototype.chushihua=function(){
	var self1=this;
	for(var i=0;i<$('.q').length;i++){
		self1.qian.push({
			top:parseInt($($('.q')[i]).css('top')),
			left:parseInt($($('.q')[i]).css('left')),
			width:parseInt($($('.q')[i]).css('width')),
			height:parseInt($($('.q')[i]).css('height'))
		});
	};
	// 按键上,下,左,右效果
	$('.left').on('touchstart',function(e){
		var cx=e.changedTouches[0].clientX;
		var cy=e.changedTouches[0].clientY;
		var self=this;
		// 触摸开始触发
		$(this).on('touchmove',function(e){
			var mx=e.touches[0].clientX;
			var my=e.touches[0].clientY;
			var x=-(cx-mx);
			var y=-(cy-my);
			$(self).css({'left':x+'px'});
			$(self).css({'top':y+'px'});

			var absx=Math.abs(x);
			var absy=Math.abs(y);
			if(absx>absy){
				if(x<0){
					self1.fx='left';
					self1.mespeed=x;
				}else{
					self1.fx='right';
					self1.mespeed=x;
				}
			}else{
				if(y<0){
					self1.fx='top';
					self1.mespeed=y;
				}else{
					self1.fx='bottom';
					self1.mespeed=y;
				}
			};
		});
		// 触摸停止时结束
		$(this).on('touchend',function(){
			self1.mespeed=0;
			self1.fx='';
			$(self).css({'left':'0px','right':'0px','bottom':'0px','top':'0px'});
		});
	});
	// 法术攻击效果
	$('.fashu').on('touchstart',function(e){
		e.stopPropagation();
		$(this).css({'opacity':'0'});
		var self=this;
		window.setTimeout(function(){
			$(self).css({"opacity":"1"});
		},20);
	});
	// 攻击按钮效果
	$('.right').on('touchstart',function(){
		$(this).parent('.yanshi').css({"border":"0.3rem solid rgba(0,0,0,0)"});
		var self=this;
		window.setTimeout(function(){
			$(self).parent('.yanshi').css({"border":" 0.3rem solid rgba(102,210,162,0.5)"});
		},80);
	});
}
// 我的坦克不停的走
tan.prototype.mezou=function(){
	var self=this;
	window.setInterval(function(){
		if(self.fx=='top'){
			var value=parseInt($('.me').css('top'))-4;
			$('.me').css({"top":value+"px"});
			
		}else if(self.fx=='bottom'){
			var value=parseInt($('.me').css('top'))+4;
			$('.me').css({"top":value+"px"});
		}else if(self.fx=='left'){
			var value=parseInt($('.me').css('left'))-4;
			$('.me').css({"left":value+"px"});
		}else if(self.fx=='right'){
			var value=parseInt($('.me').css('left'))+4;
			$('.me').css({"left":value+"px"});
		}
		// 墙壁判断
		var top=parseInt($('.me').css("top"));
		var left=parseInt($('.me').css("left"));
		if(top<0){
			$('.me').css({"top":0+"px"});
		}
		if(top>self.maxh-50){
			$('.me').css({"top":self.maxh-50+"px"});
		}
		if(left<0){
			$('.me').css({"left":0+"px"});
		}
		if(left>self.maxw-50){
			$('.me').css({"left":self.maxw-50+"px"});
		}
		// 建筑物碰壁判断
		// if(){
			
		// }
	},Math.abs(self.mespeed*100));
}
