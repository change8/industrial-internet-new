// JavaScript Document
function picauto(yangshi,kuan,gao)
{
	$("."+yangshi).each( function() {
		var BoxWidth = kuan,BoxHeight = gao;
		var img = new Image(),_this = $(this);
		img.src = $(this).attr("src");
		if ( img.complete ) {
			var RealWidth = img.width,RealHeight = img.height,margin = 0;
			if ( RealWidth / RealHeight > BoxWidth / BoxHeight ) {
				RealHeight = parseInt( BoxWidth / RealWidth * RealHeight );
				RealWidth = parseInt( BoxWidth );
				margin = parseInt( ( BoxHeight - RealHeight ) / 2 );
				_this.attr("width",RealWidth).attr("height",RealHeight).css("margin",margin + "px 0");
			}
			else {
				RealWidth = parseInt( BoxHeight / RealHeight * RealWidth );
				RealHeight = parseInt( BoxHeight );
				margin = parseInt( ( BoxWidth - RealWidth ) / 2 );
				_this.attr("width",RealWidth).attr("height",RealHeight).css("margin","0 " + margin + "px");
			}
		}
		img.onload = function() {
			var RealWidth = img.width,RealHeight = img.height,margin = 0;
			if ( RealWidth / RealHeight > BoxWidth / BoxHeight ) {
				RealHeight = parseInt( BoxWidth / RealWidth * RealHeight );
				RealWidth = parseInt( BoxWidth );
				margin = parseInt( ( BoxHeight - RealHeight ) / 2 );
				_this.attr("width",RealWidth).attr("height",RealHeight).css("margin",margin + "px 0");
			}
			else {
				RealWidth = parseInt( BoxHeight / RealHeight * RealWidth );
				RealHeight = parseInt( BoxHeight );
				margin = parseInt( ( BoxWidth - RealWidth ) / 2 );
				_this.attr("width",RealWidth).attr("height",RealHeight).css("margin","0 " + margin + "px");
			}
			return;
		};
	} );
}