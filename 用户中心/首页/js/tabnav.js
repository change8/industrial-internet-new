// JavaScript Document
// JavaScript Document
/*tab滚动*/
(function(t) {
	t.fn.floatNav = function (e) {
		var i = t.extend({
			start: null,
			end: null,
			fixedClass: "nav-fixed",
			anchor: null,
			targetEle: null,
			range: 0,
			onStart: function () {},
			onEnd: function () {}
		}, e),
			s = t(this),
			a = s.height(),
			n = s.width(),
			o = t('<div class="float-nav-wrap"/>');
			if(s.length==0){
				return;
			}
		return s.css({
			height: a,
			width: n
		}), s.parent().hasClass("float-nav-wrap") || s.wrap(o.css("height", a)), t(window).bind("scroll", function () {
		
			var e = t(document).scrollTop(),
				a = s.find("a").not('#fixeNavSubmit').eq(0).attr("href"),
				n = i.start || s.parent(".float-nav-wrap").offset().top,
				o = i.targetEle && t(i.targetEle).length>0 ? t(i.targetEle).offset().top : 1e4;
			e > n && (i.end || o) - i.range > e ? (s.addClass(i.fixedClass), i.anchor && a !== i.anchor && s.find("a").not('#fixeNavSubmit').attr("href", i.anchor), i.onStart && i.onStart()) : (s.removeClass(i.fixedClass), i.anchor && s.find("a").not('#fixeNavSubmit').attr("href", "javascript:;"), i.onEnd && i.onEnd());
			
		}), this
	}
})(jQuery);


$(document).ready(function () {

	var $window = $(window), tabTop = [], tabTopLength;

	$('.pro_det_con').each(function(i) {
		tabTop.push($(this).offset().top - 50);
	});
	tabTopLength = tabTop.length;
	$window.bind({
		'scroll': scrollFun
	});
	function scrollFun() {
		var scrollTop = $window.scrollTop(), index;
		for (var i = 0; i < tabTopLength; i++) {
			if (scrollTop < tabTop[i]) {
				index = i;
				break;
			} else {
				index = tabTopLength;
			}
		}
		index = index === 0 ? 0 : index - 1;
		$(".tab_a > li").eq(index).addClass('cut').siblings().removeClass('cut cut_prev');
		$(".tab_a > li").eq(index).prev().addClass('cut_prev');
	}

	$("#product-detail ul").removeClass("nav-fixed").floatNav({
		fixedClass: "nav-fixed",
		targetEle: "#consult",
		anchor: "#product-detail",
		range: 30,
		onStart: function () {
			$("#fixeNavSubmit").show();
		},
		onEnd: function(){
			$("#fixeNavSubmit").hide();
		}
	});
	$(".tab_a > li").bind('click',function() {
		var $this = $(this), index = $this.index();
		$this.parent().children().removeClass('cut cut_prev');
		$this.addClass('cut');
		if(index !== 0){
			$this.prev().addClass('cut_prev');
			$(".pro_det_con").eq(index).show().siblings(".pro_det_con").hide();
			$window.unbind({
				'scroll': scrollFun
			});
		} else {
			$(".pro_det_con").eq(0).show().siblings(".pro_det_con").show();
			$window.bind({
				'scroll': scrollFun
			});
		}
		$(window).trigger('scroll');
	});

	$(".show_comment").bind('click',function(){
		$(".cx_appraise").show().siblings(".pro_det_con").hide();
		$(".tab_a .comment_li").addClass('cut');	
		$(".tab_a > li").not(".comment_li").removeClass('cut cut_prev');
		$(".tab_a .comment_li").prev().addClass('cut_prev');
	});
	$(function(){
		var guestMatch = location.search.match(/\btype=guestui/);
		if(guestMatch  && guestMatch.length>0){ $(".comment_li").click(); };	   
	});	
});
