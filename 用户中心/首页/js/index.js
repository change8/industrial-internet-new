$(function(){
	$(".showpic").slideJ({
leftBtn:".banner-Left",
rightBtn:".banner-Right",
time: 6000,
speed: 1500,
hoverPause:false,
type:"opacity"
});
	$("#ycdt").slideJ({
time: 4000,
speed: 800,
hoverPause:true,
type:"top"
});
	$("#news-pic").slideJ({
nav:".newnav",		
time: 4000,
speed: 800,
hoverPause:true,
type:"opacity"
});
track("#track_nub");
goTop.init();
var $track = $("#textarea_track"); 
var isClick = true;
$("#side").bind({
mouseenter:function(){isClick = false;},
mouseleave:function(){isClick = true;}
});
if($track.val() !== ""){
	$track.addClass("focus").blur();
	$("#side").removeClass("side-hide");
	$("#yto_phone").addClass("black");
	}else{
	$track.blur();
		}
$track.bind({focusin:function(){
	if($(this).val() == ""|| isClick){
    $(this).addClass("focus");
	$("#side").removeClass("side-hide");
	$("#yto_phone").addClass("black");
	}
	},focusout:function(){
	if($(this).val() == ""){
    $(this).removeClass("focus");
	if(isClick){
	$("#side").addClass("side-hide");
	$("#yto_phone").removeClass("black");
	}
	}
	}
	});
	
	var $nav = $("#nav li")
	$nav.each(function(){
		$(this).hoverDelay({
			hoverEvent:function(){
			$nav.removeClass("hover");
			$(this).find(".input-select").removeClass("select-off");
			$(this).addClass("hover");
			},
			outEvent:function(){
			var $select =  $(this).find(".input-select");
		    if($select.hasClass("select-off")){
				 return;}else{
			  $(this).removeClass("hover");
			  $select.children(".input-select-text").blur();
			  $select.children(".input-select-box").hide();
			  $select.children(".icofont").removeClass("org");	 
					 }
			}
			})
		});
 /*  	var $news = $("#news li");
	$news.each(function(i){
		$(this).bind("mouseenter",function(){
			$news.removeClass("news-hover")
			$(this).addClass("news-hover");
			$(".news-list").hide().eq(i).show();
			$(".news-box .more").hide().eq(i).show();
			})
		});*/
	/*var $s_nav = $("#s-nav > li");
	$s_nav.each(function(){
		$(this).hoverDelay({
			hoverDuring: 120,
			hoverEvent:function(){
		    $(this).removeClass("serve-li").addClass("serve-hover").siblings().removeClass("serve-hover").addClass("serve-li");
			var $select =  $(this).siblings().find(".input-select");
			$select.children(".input-select-text").blur();
			$select.children(".input-select-box").hide();
			$select.children(".icofont").removeClass("org");
			}
			})
		});*/
		
		/*$("#wd_link").bind("click", function(){
			var selectobj = $("#yto_wd");
			var nameId = escape(selectobj.children("input").val());
            var provId = selectobj.children("input").attr("prov");
            var cityId = selectobj.children("input").attr("city");
			if (typeof(provId) == "undefined"||typeof(cityId) == "undefined") {
            window.open("../service/branchsearch.html");
            }else{
			window.open("../service/branchsearch.html"+"?name="+nameId+"&prov="+provId+"&city="+cityId);
				}
			})*/
		/*$("#kefu_link").bind("click", function(){
			var selectobj = $("#yto_kefu");
			var nameId = escape(selectobj.children("input").val());
            var provId = selectobj.children("input").attr("prov");
            var cityId = selectobj.children("input").attr("city");
			if (typeof(provId) == "undefined"||typeof(cityId) == "undefined") {
            window.open("../service/Customertelephonetable.html");
            }else{
			window.open("../service/Customertelephonetable.html"+"?name="+nameId+"&prov="+provId+"&city="+cityId);
				}
			})*/
		$("#yf_link").bind("click", function(){
			var nameId_go = escape($("#yto_yf_go").children("input").val());
            var provId_go = $("#yto_yf_go").children("input").attr("prov");
            var cityId_go = $("#yto_yf_go").children("input").attr("city");
			
			var nameId_to = escape($("#yto_yf_to").children("input").val());
		    var provId_to = $("#yto_yf_to").children("input").attr("prov");
            var cityId_to = $("#yto_yf_to").children("input").attr("city");
			var weights = $("#txtexpressWeight").val();
			 
			if (typeof(provId_go) == "undefined"||typeof(cityId_go) == "undefined"||typeof(provId_to) == "undefined"||typeof(cityId_to) == "undefined") {
            window.open("../service/standardPrice.html");
            }else{
			window.open("../service/standardPrice.html"+"?name_go="+nameId_go+"&prov_go="+provId_go+"&city_go="+cityId_go+"&name_to="+nameId_to+"&prov_to="+provId_to+"&city_to="+cityId_to+"&weights="+weights);
				}
			});
		$("#dialogclose").bind("click",function(){
			$("#dialog, #notice").hide();
			});
	})
	
/*function track(name){
  var $tracks = $(name); 
  if($tracks.val() !== ""){
	$tracks.addClass("focus").blur();
	}else{
	$tracks.blur();
		}
  $tracks.bind("focusin focusout",function(){
	if($(this).val() == ""){
    $(this).toggleClass("focus");
	}
	})
}

function inputkeypress(inputobj, event) {
    if (!inputobj.value.match(/^\d*?\.?\d*?$/))
        inputobj.value = inputobj.t_value;
    else
        inputobj.t_value = inputobj.value;
    if (inputobj.value.match(/^(?:\d+(?:\.\d+)?)?$/))
        inputobj.o_value = inputobj.value;
    if (/\.\d\d$/.test(inputobj.value)) {
        if (event.keyCode == 8) {

        }
        else {
            event.preventDefault();
        }
    }
}
*/


/*var goTop = (function() {
		var toTop = function() {
			$('body').append('<a href="javascript:;" id="to_top" class="to_top" title="返回顶部"><i class="icofont">&#x32;</i><span>返回顶部</span></a>');
			setTimeout(function(){
				var toTop = $('#to_top');
				var winEl = $(window);
				//var posLeft = $('.page').offset().left + 1015;
				var posTop = winEl.outerHeight();
				// 计算按钮位置
				//toTop.css({left: posLeft});
				// 监听滚动条
				winEl.scroll(function() {
					var scrollTop = $(this).scrollTop();
					if (scrollTop > 10) {
						toTop.fadeIn(300);
					} else {
						toTop.fadeOut(300);
					}
				});
				// 点击"回到顶部"
				toTop.click(function(ev) {
					ev.preventDefault();
					
					$('html, body').animate({scrollTop:0}, 'fast');

				});
			}, 0);
		};
		return {
			init: function() {
				toTop();
			}
		}
	})();*/