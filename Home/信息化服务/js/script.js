
var fgm = {
 shit: !-[1,] && !window.XMLHttpRequest, 
 scrollTop: function() {
  return document.documentElement.scrollTop || document.body.scrollTop;
 },
 currentStyle: function(obj, attr) {
  return parseInt(obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr]);
 },
 fixed: function(element) {
  if(this.shit) {
   var top = this.currentStyle(element, "top") || 0,
   dd = "(document.documentElement)";
   document.documentElement.style.textOverflow = "ellipsis";
   element.style.position = "absolute";
   element.style.setExpression("top", "eval(" + dd + ".scrollTop + " + (top - this.scrollTop()) + ') + "px"');
  }
  else {
   element.style.position = "fixed"; 
  }
 },
 doMove: function(obj, iTarget, callback) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function() {
   var iCur = fgm.currentStyle(obj, "height"),
   iSpeed = (iTarget - iCur) / 5;
   iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
   iTarget == iCur ? (clearInterval(obj.timer), callback && callback.call(obj)) : obj.style.height = iSpeed + iCur + "px";
  }, 30);  
 }
};
window.onload = function() {
 var oWrap = document.getElementById("wrap"),
 oTopBar = document.getElementById("topBar"),
 oNav = document.getElementById("nav"),
 fnStatus = function(status) {
  !!status ?
  (function() {
   oNav.className = "hide";
   fgm.doMove(oTopBar, 28);
   fgm.doMove(oNav, 56);
  })() :
  (function() {
   fgm.doMove(oTopBar, 28);
   fgm.doMove(oNav, 80, function() {
    this.className = "" ;
   })
  })();
  
 }; 
 fgm.fixed(oWrap);//IE6 Fixed
 window.onscroll = function() {
  var iScrollTop = fgm.scrollTop();
  fnStatus(iScrollTop > 0);
  
 };
 window.onscroll();
 
 var oPage = document.getElementById('page');
 if(oPage){
  var aBtn = oPage.getElementsByTagName('a');
		if(aBtn.length==0){
			oPage.style.display='none';
		};
 };
 
  var oUl=document.getElementById('pro_nav');
  if(oUl){
  var oLi=oUl.getElementsByTagName('li');
  var con=parseInt(oLi[0].offsetWidth*oLi.length);

	   oUl.style.width=con+2+'px';
	   oUl.style.marginLeft=-((con+2)-20)/2+'px';};
	   
 var sDot = document.getElementById('vertical');
 if(sDot){
 var sLi = sDot.getElementsByTagName('li');
 
 if(sLi.length==1){
	 sDot.style.display='none';
	 }
 }
};
