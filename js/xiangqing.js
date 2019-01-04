window.onload=function(){
	var cover=document.getElementsByClassName('a')[0];
	window.onscroll=function(){
		var st=document.documentElement.scrollTop || document.dody.scrollTop;
		if(st>125){
			cover.style.position='fixed';
		}else{
			cover.style.position='static';
		}
	}
}

//数量
function subtract(t) {
    var obj = t.parentNode.getElementsByTagName('input')[1];
    if (obj.value>1)
        obj.value--;
}
function add(t) {
    var obj = t.parentNode.getElementsByTagName('input')[1];
    if(obj.value<5){
    	obj.value++;
    }
}

// 放大镜

var left=document.getElementById('left');
var right=document.getElementById('right');
right.onmouseover=function(){
	right.className="imggg";
	left.className="imgg";
	img.src="../img/pp1.jpeg";
}
left.onmouseover=function(){
	left.className="imggg";
	right.className="imgg";
	img.src="../img/pp0.jpeg";
}
var left1=document.getElementById('left1');
var right1=document.getElementById('right1');
left1.onclick=function(){
	left.className="imggg";
	right.className="imgg";
	img.src="../img/pp0.jpeg";
}
right1.onclick=function(){
	right.className="imggg";
	left.className="imgg";
	img.src="../img/pp1.jpeg";
}

var img=document.getElementById('img');
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var slide = document.getElementById("slide");
var box = document.getElementById('img1'); 
img1.onmouseover=function(){
    slide.style.display='block';
	img2.style.display='block';
}
img1.onmouseout=function(){
    slide.style.display='none';
	img2.style.display='none';
}
img1.onmousemove=function(ev){
	var ev=ev||event;
	var oL=ev.clientX-box.offsetLeft-slide.offsetWidth/2;
	var oT=ev.clientY-box.offsetTop-slide.offsetHeight/2;
	var oMaxw=img1.offsetWidth-slide.offsetWidth;
	var oMaxh=img1.offsetHeight-slide.offsetHeight;
	oL=oL>oMaxw?oMaxw:oL<0?0:oL;
	oT=oT>oMaxh?oMaxh:oT<0?0:oT;
	slide.style.left = oL+'px';
	slide.style.top = oT+'px' ;
	var Bimg = document.getElementById("Bimg");
	Bimg.src=img.src;
	Bimg.style.width=820+"px";
	Bimg.style.height=820+"px";
	var oBmaxw = img2.offsetWidth - Bimg.offsetWidth; 
	var oBmaxh = img2.offsetHeight - Bimg.offsetHeight; 
	Bimg.style.left = ( oL/oMaxw ) * oBmaxw + 'px';
	Bimg.style.top = ( oT/oMaxh ) * oBmaxh + 'px';
}

//加框
var  kuang =document.getElementById('kuang');
var  kuangss1 =document.getElementById('kuangss1');
var  ml =document.getElementById('ml');
ml.innerHTML="'150ml'";
kuang.style.backgroundImage="url('../img/duigou.png')";
kuang.style.border="1px solid #ff0853"
kuang.style.backgroundRepeat="no-repeat";
kuang.style.backgroundPosition="60px 18px";
kuang.onclick=function(){
 	ml.innerHTML="'150ml'";
 	kuang.style.backgroundImage="url('../img/duigou.png')";
 	kuang.style.border="1px solid #ff0853"
 	kuangss1.style.border="";
 	kuang.style.backgroundRepeat="no-repeat";
 	kuang.style.backgroundPosition="60px 18px";
 	kuangss1.style.backgroundImage=""

}
kuangss1.onclick=function(){
	ml.innerHTML="'200ml'";
	kuangss1.style.backgroundImage="url('../img/duigou.png')";
	kuangss1.style.border="1px solid #ff0853"
	kuang.style.border="";
	kuangss1.style.backgroundRepeat="no-repeat";
 	kuangss1.style.backgroundPosition="60px 18px";
	kuang.style.backgroundImage="";
}

//弹框
var tan=document.getElementById('tan');
var tan3=document.getElementById('tan3');
var tan5=document.getElementById('tan5');
var che=document.getElementById('che');
tan3.onclick=function(){
	tan.style.display="none";
}
tan5.onclick=function(){
	tan.style.display="none";
}
che.onclick=function(){
	tan.style.display="block";
}
