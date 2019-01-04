// 悬浮
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
	// 纵向轮播
	window.onload = zong(25);
	function zong(t) {
	    var ul1 = document.getElementById("ul1");
	    var ul2 = document.getElementById("ul2");
	    var box = document.getElementById("box1");
	    ul2.innerHTML = ul1.innerHTML;
	    box.scrollTop = 0;
	    var timer = setInterval(zongStart, t);
	    box.onmouseover = function () {
	        clearInterval(timer)
	    }
	    box.onmouseout = function () {
	        timer = setInterval(zongStart, t);
	    }
	}

	function zongStart() {
		var box = document.getElementById("box1");
	    if (box.scrollTop >= ul1.scrollHeight) {
	        box.scrollTop = 0;
	    } else {
	        box.scrollTop++;
	    }
	}
}
var s1=document.getElementById('s1');
s1.innerHTML+='<option>'+10+'</option>';
s1.innerHTML+='<option>'+30+'</option>';
s1.innerHTML+='<option>'+50+'</option>';
s1.innerHTML+='<option>'+100+'</option>';
//手机充值
var p=document.createElement('p');
p.id='ps';
f.appendChild(p);
ps.innerHTML="10";
f.onchange=function(){
	ps.innerHTML=s1.value;
}



//横向轮播
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}
var box = document.getElementById('box');
var oNavlist = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var index = 1;
var timer;
var isMoving = false;
box.onmouseover = function(){
	animate(left,{opacity:50})
	animate(right,{opacity:50})
	clearInterval(timer)
}
box.onmouseout = function(){
	animate(left,{opacity:0})
	animate(right,{opacity:0})
	timer = setInterval(next, 3000);
}
right.onclick = next;
left.onclick = prev;
for( var i=0; i<oNavlist.length; i++ ){
	oNavlist[i].index = i;
	oNavlist[i].onclick = function(){
		index = this.index+1;
		navmove();
		animate(slider,{left:-804*index});
	}
}
function next(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index++;
	navmove();
	animate(slider,{left:-804*index},function(){
		if(index==7){
			slider.style.left = '-804px';
			index = 1;
		}
		isMoving = false;
	});
}
function prev(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index--;
	navmove();
	animate(slider,{left:-804*index},function(){
		if(index==0){
			slider.style.left = '-4824px';
			index = 6;
		}
		isMoving = false;
	});
}
function navmove(){
	for( var i=0; i<oNavlist.length; i++ ){
		oNavlist[i].className = "";
	}
	if(index >6){
		oNavlist[0].className = "active";
	}else if(index<=0){
		oNavlist[5].className = "active";
	}else {
		oNavlist[index-1].className = "active";
	}
}
timer = setInterval(next, 3000);


//侧滑
var li = document.getElementById("div1");
li.onmouseover = function(){
    startMove(20);
}
li.onmouseout = function(){
    startMove(100);
}
var timer = null;
function startMove(s){
    clearInterval(timer);
    var li = document.getElementById("div1");
    timer = setInterval(function(){
        var speed = 0;
        if(li.offsetLeft > s){
            speed = -10;
        }else{
            speed = 10;
        }
        if(li.offsetLeft == s){
            clearInterval(timer);
        }else{
            li.style.left = li.offsetLeft+speed+'px';
        }
    },10);
} 
var li1 = document.getElementById("div2");
li1.onmouseover = function(){
    startMove1(20);
}
li1.onmouseout = function(){
    startMove1(100);
}
var timer1 = null;
function startMove1(s){
    clearInterval(timer1);
    var li1 = document.getElementById("div2");
    timer1 = setInterval(function(){
        var speed = 0;
        if(li1.offsetLeft > s){
            speed = -10;
        }else{
            speed = 10;
        }
        if(li1.offsetLeft == s){
            clearInterval(timer1);
        }else{
            li1.style.left = li1.offsetLeft+speed+'px';
        }
    },10);
} 
var li2 = document.getElementById("div3");
li2.onmouseover = function(){
    startMove2(20);
}
li2.onmouseout = function(){
    startMove2(100);
}
var timer2 = null;
function startMove2(s){
    clearInterval(timer2);
    var li2 = document.getElementById("div3");
    timer2 = setInterval(function(){
        var speed = 0;
        if(li2.offsetLeft > s){
            speed = -10;
        }else{
            speed = 10;
        }
        if(li2.offsetLeft == s){
            clearInterval(timer2);
        }else{
            li2.style.left = li2.offsetLeft+speed+'px';
        }
    },10);
} 
var li3 = document.getElementById("div4");
li3.onmouseover = function(){
    startMove3(20);
}
li3.onmouseout = function(){
    startMove3(100);
}
var timer3 = null;
function startMove3(s){
    clearInterval(timer3);
    var li3 = document.getElementById("div4");
    timer3= setInterval(function(){
        var speed = 0;
        if(li3.offsetLeft > s){
            speed = -10;
        }else{
            speed = 10;
        }
        if(li3.offsetLeft == s){
            clearInterval(timer3);
        }else{
            li3.style.left = li3.offsetLeft+speed+'px';
        }
    },10);
} 
var li4 = document.getElementById("div5");
li4.onmouseover = function(){
    startMove4(20);
}
li4.onmouseout = function(){
    startMove4(100);
}
var timer4 = null;
function startMove4(s){
    clearInterval(timer4);
    var li4 = document.getElementById("div5");
    timer4= setInterval(function(){
        var speed = 0;
        if(li4.offsetLeft > s){
            speed = -10;
        }else{
            speed = 10;
        }
        if(li4.offsetLeft == s){
            clearInterval(timer4);
        }else{
            li4.style.left = li4.offsetLeft+speed+'px';
        }
    },10);
} 
var li5 = document.getElementById("div6");
li5.onmouseover = function(){
    startMove5(20);
}
li5.onmouseout = function(){
    startMove5(100);
}
var timer5 = null;
function startMove5(s){
    clearInterval(timer5);
    var li5 = document.getElementById("div6");
    timer5 = setInterval(function(){
        var speed = 0;
        if(li5.offsetLeft > s){
            speed = -10;
        }else{
            speed = 10;
        }
        if(li5.offsetLeft == s){
            clearInterval(timer5);
        }else{
            li5.style.left = li5.offsetLeft+speed+'px';
        }
    },10);
} 


