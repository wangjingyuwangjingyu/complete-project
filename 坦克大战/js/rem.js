window.onload=rr;
function rr(){
	var w=document.documentElement.clientWidth;
	var sum=w/750*100;
	document.documentElement.style.fontSize=sum+'px';
}
rr();