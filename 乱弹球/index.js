(function(){
	var body=document.getElementsByTagName("body")[0];
	var liuw=body.clientWidth;
	var liuh=body.clientHeight;
	var arc=[];
	var divsize=10;
	for(var i=0;i<500;i++){
		var ran1=parseInt(Math.random()*liuh);
		var ran2=parseInt(Math.random()*liuw);
		var ran3=parseInt(Math.random()*2000);
		var div=document.createElement("div");
		var divv=parseInt(Math.random()*20);
		div.style.cssText="position:absolute;width:"+divsize+"px;height:"+divsize+"px;display:black;border-radius:100%;left:"+ran2+"px;top:"+ran1+"px;background:#"+ran3+";";
		arc[i]={
			divsize:divsize,
			div:div,
			v:divv,
			xf:parseInt(Math.random()*10)>5?-1:1,
			yf:parseInt(Math.random()*10)>5?-1:1,
		}
		body.appendChild(div);
	}
	window.setInterval(fun1,10);
	function fun1(){
		for(var i=0;i<arc.length;i++){
			var lef=parseInt(arc[i].div.style.left)+(2*arc[i].v*arc[i].xf);
			var top=parseInt(arc[i].div.style.top)+(3*arc[i].v*arc[i].yf);
			arc[i].div.style.left=lef+"px";
			arc[i].div.style.top=top+"px";
			fun2(i);
		}
	}
	// 撞墙实验
	function fun2(i){
		 // 右
		 if(parseInt(arc[i].div.style.left)>liuw-arc[i].divsize){
		 	arc[i].div.style.left=liuw-arc[i].divsize+'px';
		 	console.dir(arc[i].div.style.left);
		 	arc[i].xf*=-1;
		 }
		 // 下
		 if(parseInt(arc[i].div.style.top)>liuh-arc[i].divsize){
		 	arc[i].div.style.left=liuh-arc[i].divsize;
		 	arc[i].yf*=-1;
		 }
		 // 上
		 if(parseInt(arc[i].div.style.top)<0){
		 	arc[i].div.style.top=0;
		 	arc[i].yf*=-1;
		 }
		 // 左
		 if(parseInt(arc[i].div.style.left)<0){
		 	arc[i].div.style.left=0;
		 	arc[i].xf*=-1;
		 }
		 // 粒子连线
		 // for(var i=;;){
		 // 	if(arc[i].){

		 // 	}
		 // }
	}
})()