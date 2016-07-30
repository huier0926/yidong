
//banner轮播
var banner=getClass("banner")[0]
var as=banner.getElementsByTagName("a");
var banLeft=getClass("banner-left")[0];
var banRight=getClass("banner-right")[0];
var btnbox=getClass("btnbox",banner)[0];
var lis=btnbox.getElementsByTagName("li");
var num=0;
function lunBo(direction){
   if(direction=="r"){
        num++;
        if(num>=as.length){
        	num=0;
        }
   }else if(direction=="l"){
   	num--;
   	if(num<0){
   		num=as.length-1;
   	}
   }
   for (var i = 0; i < as.length; i++) {
   	as[i].style.display="none";
   	lis[i].style.background="#ccc";
   };
   as[num].style.display="block";
   lis[num].style.background="#cd138a";
}
var t=setInterval(function(){lunBo("r")},2000)

banner.onmouseover=function(){
   clearInterval(t);
   banRight.style.opacity="0.8";
   banLeft.style.opacity="0.8";
}
banner.onmouseout=function(){
   t=setInterval(function(){lunBo("r")},2000)
   banRight.style.opacity="0.3";
   banLeft.style.opacity="0.3";
}

for (var i = 0; i < lis.length; i++) {
	lis[i].index=i;
    lis[i].onmouseover=function(){
    	for (var j = 0; j < as.length; j++) {
    		as[j].style.display="none";
   	    lis[j].style.background="#ccc";
    	}
      as[this.index].style.display="block"; 
      this.style.background="#cd138a";
      num=this.index;
    }
}

banLeft.onclick=function(){
	lunBo("l")
}
banRight.onclick=function(){
	lunBo("r")
}


//右侧客服固定
var kefu=$(".kefu")[0];
var tu=$(".tu",kefu);
for (var i = 0; i < tu.length; i++) {
  tu[i].index=i;
  hover(tu[i],function(){
    animate(tu[this.index],{width:124})
  },function(){
    animate(tu[this.index],{width:57})
  })
};


//mainbav下拉菜单
var mainbav=$(".mainbav")[0];
var yiji=$(".yiji");
var erji=$(".erji"); 
for (var i = 0; i < yiji.length; i++) {
  yiji[i].index=i; 
  yiji[i].onmouseover=function(){     
    erji[this.index].style.display="block";
  }
  yiji[i].onmouseout=function(){
    erji[this.index].style.display="none";
  }
};



//topnav-right下拉菜单
var topyiji=$(".topyiji");
var toperji=$(".toperji");

for (var i = 0; i < topyiji.length; i++) {
  topyiji[i].index=i; 
  topyiji[i].onmouseover=function(){
    var as=$("a",topyiji[this.index])[0]; 
    as.style.color="#33acfb"; 
    toperji[this.index].style.display="block";
  }
  topyiji[i].onmouseout=function(){
    var as=$("a",topyiji[this.index])[0]; 
    as.style.color="#888888";
    toperji[this.index].style.display="none";
  }
};

//地址
var diqu=$(".diqu")[0];
var shanxi=$(".shanxi")[0];
diqu.onclick=shanxi.onmouseover=function(){
  shanxi.style.display="block";
}
shanxi.onmouseout=function(){
   shanxi.style.display="none";
}



//搜索框聚焦
var kuang1=$(".kuang1")[0];
kuang1.onfocus=function(){
  if(kuang1.value=="包月流量包"){
          kuang1.value=""
  }
}
kuang1.onblur=function(){
  if(kuang1.value==""){
          kuang1.value="包月流量包"
  }
}


var chongzhi=$(".chongzhi")[0];
chongzhi.onfocus=function(){
  if(chongzhi.value=="请输入手机号"){
          chongzhi.value=""
  }
}
chongzhi.onblur=function(){
  if(chongzhi.value==""){
          chongzhi.value="请输入手机号"
  }
}


//鼠标滑上图片左移
var active=$(".active");
for (var i = 0; i < active.length; i++) {
  active[i].index=i;
  active[i].onmouseover=function(){
  //active[this.index].style.right="10px";
  animate(active[this.index],{marginLeft:30},600)
}
active[i].onmouseout=function(){
  //active[this.index].style.right="0px";
  animate(active[this.index],{marginLeft:56},600)
}
}


//thirdmain/fourthmain/fifthmain 图片按需加载
  window.onscroll=function(){
  var tops=document.body.scrollTop||document.documentElement.scrollTop;
  var ch=document.documentElement.clientHeight;
  var thirdmain=$(".thirdmain");
  for (var i = 0; i < thirdmain.length; i++) {  
    if(thirdmain[i].offsetTop<=tops+ch){
      var imgs=$("img",thirdmain[i]);
      for (var j = 0; j < imgs.length; j++) {
        var src=imgs[j].getAttribute("date-src")
        imgs[j].src=src;
      };
    } 
  }

  var fourthmain=$(".fourthmain");
  for (var i = 0; i < fourthmain.length; i++) {  
    if(fourthmain[i].offsetTop<=tops+ch){
      var imgss=$("img",fourthmain[i]);
      for (var j = 0; j < imgss.length; j++) {
        var src=imgss[j].getAttribute("date-src")
        imgss[j].src=src;
      };
    } 
  }

  var fifthmain=$(".fifthmain");
  for (var i = 0; i < fifthmain.length; i++) {  
    if(fifthmain[i].offsetTop<=tops+ch){
      var imgsss=$("img",fifthmain[i]);
      for (var j = 0; j < imgsss.length; j++) {
        var src=imgsss[j].getAttribute("date-src")
        imgsss[j].src=src;
      };
    } 
  }
} 

//banner下面的图轮播（用节点）
var secondmain=$(".secondmain")[0];
var secondmain1=$(".secondmain1")[0];
var contact=$(".contact")
var lt=$(".lt")[0];
var gt=$(".gt")[0];

    function moveLeft(){
      var first=getFirst(secondmain1);      
      animate(secondmain1,{left:-266},function(){
      secondmain1.appendChild(first); 
      animate(secondmain1,{left:0},0)
      });

      
    }
    var ll=setInterval(moveLeft,2000);
       

  secondmain.onmouseover=function(){
    clearInterval(ll);
  }


  secondmain.onmouseout=function(){
    ll=setInterval(moveLeft,2000)    
  }
    

    lt.onclick=function(){
      moveLeft();
    }
    gt.onclick=function(){

      var last=getLast(secondmain1);
      last.style.left="-266px";
      secondmain1.insertBefore(last,getFirst(secondmain1));
      animate(secondmain1,{left:0});      
    }

