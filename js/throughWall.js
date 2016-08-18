function getDir(obj,ev){
	var sT = document.documentElement.scrollTop||document.body.scrollTop;
	var x=obj.offsetLeft+obj.offsetWidth/2-(ev.clientX);
	var y=obj.offsetTop+obj.offsetHeight/2-(ev.clientY+sT);
	return Math.round((Math.atan2(y,x)*180/Math.PI+180)/90)%4;
}
function through(obj){
	var oHide = obj.children[1];
	obj.onmouseenter = function(ev){
		var oEvent=ev||event;
		var dir=getDir(obj,oEvent);
		switch(dir){
			case 0:
				oHide.style.left=250+'px';
				oHide.style.top=0;
				break;
			case 1:
				oHide.style.left=0;
				oHide.style.top=270+'px';
				break;
			case 2:
				oHide.style.left=-250+'px';
				oHide.style.top=0;
				break;
			case 3:
				oHide.style.left=0;
				oHide.style.top=-270+'px';
				break;
		}
		startMove(oHide,{left:0,top:0});
	};
	obj.onmouseleave=function (ev){
		var oEvent=ev||event;
		var dir=getDir(obj,oEvent);
		switch(dir){
			case 0:
				startMove(oHide,{left:250,top:0});
				break;
			case 1:
				startMove(oHide,{left:0,top:270});
				break;
			case 2:
				startMove(oHide,{left:-250,top:0});
				break;
			case 3:
				startMove(oHide,{left:0,top:-270});
				break;
		}
	};
}