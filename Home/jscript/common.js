jQuery.smoothScroll();


function toTop() {
    _scrollTop = jQuery(document).scrollTop(),
    _scrollTop > 150 ? jQuery("#toTop").is(":hidden") && jQuery("#toTop").show() : jQuery("#toTop").is(":visible") && jQuery("#toTop").hide()
}
window.scrollTop = 0;
jQuery(window).scroll(function() {
    toTop()
});

$(function () {

    //tips 提示
    jQuery("a[data-toggle=tooltip], button[data-toggle=tooltip], span[data-toggle=tooltip]").tooltip({container: 'body'});

    //go to top
    jQuery("#toTop").bind("click", function(e) {
        e.preventDefault();
        jQuery("html,body").animate({
            scrollTop: 0
        }, 800, "easeInOutExpo")
    })

})
