(function(jQuery){

    $.fn.BreakingNews = function(settings){
        var defaults={
            background		:'none',
            title			:'NEWS',
            titlecolor		:'#FFF',
            titlebgcolor	:'#5aa628',
            linkcolor		:'#333',
            linkhovercolor	:'#5aa628',
            fonttextsize	:13,
            //isbold			:false,
            border			:'none',
            width			:'100%',
            autoplay		:true,
            timer			:5000,
            modulid			:'brekingnews',
            effect			:'fade'	//or slide
        };
        var settings=$.extend(defaults,settings);

        return this.each(function(){
            settings.modulid="#"+$(this).attr("id");
            var timername=settings.modulid;
            var activenewsid=1;

            /*if (settings.isbold==true)
             fontw='bold';
             else
             fontw='normal';	*/

            if (settings.effect=='slide')
                $(settings.modulid+' ul li').css({'display':'block'});
            else
                $(settings.modulid+' ul li').css({'display':'none'});

            //$(settings.modulid+' .bn-title').html(settings.title);
            $(settings.modulid).css({'width':settings.width, 'background':settings.background, 'border':settings.border, 'font-size':settings.fonttextsize });
            //$(settings.modulid+' ul').css({'left':$(settings.modulid+' .bn-title').width()+40});
            //$(settings.modulid+' .bn-title').css({'background':settings.titlebgcolor,'color':settings.titlecolor,'font-weight':fontw});
            //$(settings.modulid+' ul li a').css({'color':settings.linkcolor,'font-weight':fontw,'height':parseInt(settings.fonttextsize)+6});
            $(settings.modulid+' ul li').eq( parseInt(activenewsid-1) ).css({'display':'block'});


            // Arrows Click Events ......
            $(settings.modulid+' .bn-arrows span').click(function(e) {
                if ( $(this).attr('class')=="bn-arrows-left" )
                    BnAutoPlay('prev');
                else
                    BnAutoPlay('next');
            });

            // Timer events ...............
            if (settings.autoplay==true)
            {
                timername=setInterval(function(){BnAutoPlay('next')},settings.timer);
                $(settings.modulid).hover(function()
                    {
                        clearInterval(timername);
                    },
                    function()
                    {
                        timername=setInterval(function(){BnAutoPlay('next')},settings.timer);
                    }
                );
            }
            else
            {
                clearInterval(timername);
            }

            //timer and click events function ...........
            function BnAutoPlay(pos)
            {
                if ( pos=="next" )
                {
                    if ( $(settings.modulid+' ul li').length>activenewsid )
                        activenewsid++;
                    else
                        activenewsid=1;
                }
                else
                {
                    if (activenewsid-2==-1)
                        activenewsid=$(settings.modulid+' ul li').length;
                    else
                        activenewsid=activenewsid-1;
                }

                if (settings.effect=='fade')
                {
                    $(settings.modulid+' ul li').css({'display':'none'});
                    $(settings.modulid+' ul li').eq( parseInt(activenewsid-1) ).fadeIn();
                }
                else
                {
                    $(settings.modulid+' ul').animate({'marginTop':-($(settings.modulid+' ul li').height())*(activenewsid-1)});
                }
            }

        });

    };

})(jQuery);