//Nav
jQuery(document).ready(function ($){

    jQuery('.navbar .brand, .navbar .nav > li > a, .footer-nav > li > a').click(function(){
        jQuery.scrollTo( $(this).attr("href"), {
			duration: 1000,
			easing:'easeInOutExpo'			
		});
		return false;
    });

    jQuery('.navbar .nav .features a').click(function(){
        jQuery.scrollTo( $(this).attr("href"), {
			duration: 1000,
			easing:'easeInOutExpo'			
		});

        $('.tabbable' + ' a[href="' + $(this).attr("data-tab") + '"]').trigger('click');

		return false;
    });


    $("input, textarea").not("[type=submit]").jqBootstrapValidation({
        preventSubmit: true,
        submitSuccess: function($form, event) {

        	var url = $form.attr('action'),
        		data = {};

        	$.each($form.serializeArray(), function(i, item){
        		data [item.name] = item.value;
        	});

        	$.post(url, data, function(){})
        		.always(function() { 
                                $form.find('button').text('Отправка...').attr('disabled', 'disabled');

				var t = setTimeout (function (){
			         	if ($form.closest('.modal').length) {
        		        		$form.closest('.modal').find('.close').trigger('click');
                			}			
		                        $form.find('button').text('Вперед!').removeAttr('disabled');
				}, 800);

		        	$form.find(':input').val('');        			
        		});

            event.preventDefault();
        }
    });
});

var jq=jQuery;
jq.noConflict();

jq(function() {

if (jq.fn.cssOriginal!=undefined)
jq.fn.css = jq.fn.cssOriginal;

if (jq('.banner').is(':visible')){

	jq('.banner').revolution({
		delay:7000,
		startheight:520,
		startwidth:1170,


		hideThumbs:200,

		thumbWidth:100,							
		thumbHeight:50,
		thumbAmount:5,

		navigationType:"bullet",				
		navigationArrows:"nexttobullets",		

		navigationStyle:"round-old",			 


		navigationHAlign:"center",				
		navigationVAlign:"bottom",				
		navigationHOffset:0,
		navigationVOffset:-30,

		soloArrowLeftHalign:"left",
		soloArrowLeftValign:"top",
		soloArrowLeftHOffset:20,
		soloArrowLeftVOffset:0,

		soloArrowRightHalign:"right",
		soloArrowRightValign:"top",
		soloArrowRightHOffset:20,
		soloArrowRightVOffset:0,

		touchenabled:"on",						
		onHoverStop:"off",						

		stopAtSlide:-1,							
		stopAfterLoops:-1,						

		hideCaptionAtLimit:0,					
		hideAllCaptionAtLilmit:0,				
		hideSliderAtLimit:0,					

		shadow:1,								
		fullWidth:"off"							
	});
}
});