/**
 * Flex
 * Template Name - Flex 3.8.3
 * @author Aplikko http://www.aplikko.com
 * @copyright Copyright (c) 2019 Aplikko
 * @license http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 or later
*/

/* Parallax */
(function($){'use strict';var $window=$(window);var windowHeight=$window.height();$window.resize(function(){windowHeight=$window.height()});$.fn.parallaxing=function(xpos,speedFactor,outerHeight){var $this=$(this);var getHeight;var firstTop;var paddingTop=0;$this.each(function(){firstTop=$this.offset().top});if(outerHeight){getHeight=function(jqo){return jqo.outerHeight(!0)}}else{getHeight=function(jqo){return jqo.height()}}if(arguments.length<1||xpos===null)xpos="50%";if(arguments.length<2||speedFactor===null)speedFactor=0.1;if(arguments.length<3||outerHeight===null)outerHeight=!0;function update(){var pos=$window.scrollTop();$this.each(function(){var $element=$(this);var top=$element.offset().top;var height=getHeight($element);if(top+height<pos||top>pos+windowHeight){return}
$this.css('backgroundPosition',xpos+" "+Math.round((firstTop-pos)*speedFactor)+"px")})}
$window.bind('scroll',update).resize(update);update()}})(jQuery);
	
jQuery(function($) {

    /*PFG*/
    /*
    $(".iconos-home img").hover(function() {
        var temp = $(this).attr("src");
        var dataaltsrc = $(this).attr("data-alt-src");
        if (dataaltsrc == undefined || dataaltsrc == "") {
            dataaltsrc = temp.replace(".png", "_hover.png");
        }
        $(this).attr("src", dataaltsrc);
        $(this).attr("data-alt-src", temp);
      });
      */
    $(".go-to-content").click(function () {
        $('html, body').animate({
         scrollTop: $(".content").offset().top - 70
         }, 500);
    });

    $(window).scroll(function () {
        var w;
        if (screen.width > 1200) {
            w = 50;
        } else {
            w = 50;
        }
        if ($(this).scrollTop() > w) {
            $(".show-on-scroll").show("fast");
        } else {
            //$(".show-on-scroll").hide("fast");
        }
    });

    setTimeout(
        function() { $(".show-on-scroll").show("fast"); }, 
        5000);

    calculaAlturaBanner();
    $(window).resize(function () {
        calculaAlturaBanner();
    });

    function calculaAlturaBanner() {
        var height;
        var width = window.innerWidth;
        if (width > 992) {
            height = window.innerHeight - 50;
        } else if (width < 768) {
            height = window.innerHeight - 150;
        } else {
            heiht = window.innerHeight - 274;
        }
        $(".banner").css("min-height", height + "px");
    }


	/* Mootools Fix: add missing Mootools when Bootstrap is loaded */
	var bootstrapLoaded="function"==typeof $().carousel,mootoolsLoaded="undefined"!=typeof MooTools;bootstrapLoaded&&mootoolsLoaded&&Element.implement({hide:function(){return this},show:function(o){return this},slide:function(o){return this}});
	
	$(window).resize(function(){
    var $theWindowSize = $(this).width();
		if ($theWindowSize < 480) { 
			$(".animated_headlines .ah-words-wrapper > b").addClass("centered clearfix").css({"white-space":"normal"});
		} else {
			$(".animated_headlines .ah-words-wrapper > b").removeClass("centered").css("white-space","nowrap");
		}
		if($theWindowSize < 769) {
			$(".sppb-addon-image-content.aligment-left .col-sm-6").removeClass("col-sm-offset-6").css("width","100%");
		
		} else {
			$(".sppb-addon-image-content.aligment-left .col-sm-6").addClass("col-sm-offset-6").css("width","auto");
		}
    });
	// Fix for pixel wrong showing Image Content @ 768 pixels and mobile (480px)
	var isTablet = window.matchMedia("only screen and (max-width: 768px)");
	var isMobile = window.matchMedia("only screen and (max-width: 480px)");
    if (isTablet.matches) {
		$(".sppb-addon-image-content.aligment-left .col-sm-6").removeClass("col-sm-offset-6").css("width","100%");
	}
	if (isMobile.matches){
		$(".animated_headlines .ah-words-wrapper > b").addClass("centered clearfix").css({"white-space":"normal"});
	}
	
	//Showing Parallax only on desktop ("parallax" changed to "parallaxing", to avoid conflict with SPPB)
	var isDesktop = window.matchMedia("only screen and (min-width: 992px)");
    if (isDesktop.matches) {
		// =========== Parallax ===========
		 jQuery('.parallax').parallaxing("50%", 0.3);
		 jQuery('.parallax_2').parallaxing("50%", 0.2);
		 jQuery('.parallax_3').parallaxing("50%", 0.3);
		 jQuery('.parallax_4').parallaxing("50%", 0.4);
		 jQuery('.parallax_5').parallaxing("50%", 0.5);
		 jQuery('.parallax_6').parallaxing("50%", 0.6);
		 jQuery('.parallax_7').parallaxing("50%", 0.7);
		 jQuery('.parallax-2').parallaxing("50%", -0.2);
		 jQuery('.parallax-3').parallaxing("50%", -0.3);
		 jQuery('.parallax-4').parallaxing("50%", -0.4);
		 jQuery('.parallax-5').parallaxing("50%", -0.5);
		 jQuery('.parallax-6').parallaxing("50%", -0.6);
		 jQuery('.parallax-7').parallaxing("50%", -0.7);
	}
	 
    /* Boxed Layout */
	$(".layout-boxed section > div.container, .layout-boxed header > div.container, .layout-boxed footer > div.container, .layout-boxed header > div.container, .layout-boxed .sp-main-body > div.container").removeClass("container").addClass("container-fluid");

	
	if ($("div").hasClass("sppb-in-article")) {
		$(".sppb-row-container").removeClass("sppb-row-container");
	} 
	
	var spHeader = document.querySelector('#sp-header'),pageHeight = window.innerHeight;
	
	/* Sticky Header JS */
	if (typeof stickyHeaderVar === 'undefined' || stickyHeaderVar === '') {
		stickyHeaderVar = '0';
	}
    if (stickyHeaderVar == '1') {
		// Wrap Sticky Wrapper
		if ($("body").hasClass("sticky-header")) {
			$("#sp-header").children().wrapAll( $("<div>").addClass("sticky__wrapper"));
		}
		function checkHolderOffset() {return stickyHeaderAppearPoint <= window.scrollY;}
		var showSticky = function() {spHeader.classList.toggle('sticky', checkHolderOffset());}
		function tryCheck() {requestAnimationFrame(showSticky)}
		window.addEventListener('scroll', tryCheck, false);
		window.addEventListener('resize', tryCheck, false);
	}
	
    //Off-canvas Menu animations
    if (typeof sp_offanimation === 'undefined' || sp_offanimation === '') {
        sp_offanimation = 'default';
    }

    if (sp_offanimation == 'default') {
        $('#offcanvas-toggler').on('click', function (event) {
            event.preventDefault();

			$('.off-canvas-menu-init').addClass('offcanvas');
        });
        $('<div class="offcanvas-overlay"></div>').insertBefore('.offcanvas-menu');
        $('.close-offcanvas, .offcanvas-overlay').on('click', function (event) {
            event.preventDefault();
            $('.off-canvas-menu-init').removeClass('offcanvas');
        });
    }
    // Slide Top Menu
    if (sp_offanimation == 'slidetop') {
        $('#offcanvas-toggler').on('click', function (event) {
            event.preventDefault();
            $('.off-canvas-menu-init').addClass('slide-top-menu');
        });

        $('<div class="offcanvas-overlay"></div>').insertBefore('.offcanvas-menu');
        $('.close-offcanvas, .offcanvas-overlay').on('click', function (event) {
            event.preventDefault();
            $('.off-canvas-menu-init').removeClass('slide-top-menu');
        });
    }
    //Full Screen
    if (sp_offanimation == 'fullscreen') {
        $('#offcanvas-toggler').on('click', function (event) {
            event.preventDefault();
            $('.off-canvas-menu-init').addClass('full-screen-off-canvas');
        });
        $(document).ready(function () {
            $('.off-canvas-menu-init').addClass('full-screen');
        });
        $('.close-offcanvas, .offcanvas-overlay').on('click', function (event) {
            event.preventDefault();
            $('.off-canvas-menu-init').removeClass('full-screen-off-canvas');
        });
    }
    //Full screen from top
    if (sp_offanimation == 'fullScreen-top') {
        $('#offcanvas-toggler').on('click', function (event) {
            event.preventDefault();
            $('.off-canvas-menu-init').addClass('full-screen-off-canvas-ftop');
        });
        $(document).ready(function () {
            $('.off-canvas-menu-init').addClass('full-screen-ftop');
        });
        $('.close-offcanvas, .offcanvas-overlay').on('click', function (event) {
            event.preventDefault();
            $('.off-canvas-menu-init').removeClass('full-screen-off-canvas-ftop');
        });
    }
    //Dark with plus
    if (sp_offanimation == 'drarkplus') {
        $('#offcanvas-toggler').on('click', function (event) {
            event.preventDefault();
            $('.off-canvas-menu-init').addClass('new-look-off-canvas');
        });
        $('<div class="offcanvas-overlay"></div>').insertBefore('.offcanvas-menu');
        $(document).ready(function () {
            $('.off-canvas-menu-init').addClass('new-look');
        });
        $('.close-offcanvas,.offcanvas-overlay').on('click', function (event) {
            event.preventDefault();
            $('.off-canvas-menu-init').removeClass('new-look-off-canvas');
        });
    }
	
	// Close Off-canvas on click, in Off-canvas menu
	$('.offcanvas-menu ul li:not(.separator) a').on('click', function () {
       $('.off-canvas-menu-init').removeClass('offcanvas slide-top-menu full-screen-off-canvas full-screen-off-canvas-ftop new-look-off-canvas');
    });
	
	// Insert DIV arround Onepage, "white", "transparent" Header
	$( "header.onepage, header.white, header.transparent-white, header.transparent, header.sticky-top" ).wrap("<div class=\"transparent-wrapper\"></div>");

	// Top Bar Height to prevent overlapping with transparent-wrapper
	var topbarHeight = $("section[id^=\"sp-top-\"]").innerHeight();
	$(".transparent-wrapper").css({'top' : topbarHeight + 'px'});
	
	// First Megamenu link active in Onepage
	$('header.onepage .sp-megamenu-parent > li:first-child').addClass("active");
	// Scroll up/down to position
	$('.page-scroll a, a.page-scroll').bind('click', function(s) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutQuint');
        s.preventDefault();
		return false;
    });
	// Onepage menu scrolling
	$('header.onepage .sp-megamenu-parent li a').addClass("page-scroll");
	//one page nav with smooth scroll and active nav
	if ($("header").hasClass("onepage")) {
		$('.offcanvas-menu li a').addClass("page-scroll");
		$('header.onepage .sp-megamenu-parent, .offcanvas-menu .menu').onePageNav({
			currentClass: 'active',
			changeHash: false,
			scrollSpeed: 900,
			scrollOffset: 30,
			scrollThreshold: 0.5,
			easing: 'easeInOutCubic',
			filter: '.page-scroll'
		});
	} 

    //Top Search
    var searchRow = $(".top-search-input-wrap").parent().closest(".top-search-wrap");
    $(".top-search-input-wrap").insertAfter(searchRow);
    $(".search-open-icon").on("click", function () {
		$(".top-search-input-wrap").show();
        $(this).hide();
        $(".search-close-icon").addClass("open").fadeIn(300);
        $(".top-search-wrap").addClass("active");
    });

    $(".search-close-icon").on("click", function () {
        $(this).hide();
        $(".search-open-icon").fadeIn(300);
        $(".top-search-wrap").removeClass("active");
    });
	
	
	$(".no-gutter").closest("[class*=\"col-\"]").addClass("no-gutter");

    // Preloader
    if (typeof sp_preloader === 'undefined') {
        sp_preloader = '';
    }
    if (sp_preloader) {
        $(window).on('load', function () {
            if ($('.sp-loader-with-logo').length > 0) {
                move();
            }
            setTimeout(function () {
                $('.sp-pre-loader').fadeOut();
            }, 1000);
        });
    } // has preloader
    //preloader Function
    function move() {
        var elem = document.getElementById("line-load");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }

    //Mega Menu
    $('.sp-megamenu-wrapper').parent().parent().css('position', 'static').parent().css('position', 'relative');
    $('.sp-menu-full').each(function () {
        $(this).parent().addClass('menu-justify');
    });

	// Disabling some clicks
	$(".social-icons > li > a[href=#],.separator > a,.sppb-person-social > li > a[href=#],.sppb-addon-content > a[href=#],a.sppb-btn[href=#],.slick-img > a[href=#],.sp-layer a[href=#],[data-toggle=\"popover\"],.flex-icons a[href=#]").click(function(n){
    	n.preventDefault();
	});
	
	//AP Smart LayerSlider hash
	$('a[href^=\"#ap-smart-layerslider-\"]').click(function(e){
		if ( window.history && window.history.pushState ) { 
			window.history.pushState('', '', window.location.pathname);
		} else { 
			window.location.href = window.location.href.replace(/#.*$/, '#'); 
		}
	});
	
    //Tooltip
    $('[data-toggle="tooltip"]').tooltip();
	
	//Popover
  	$('[data-toggle="popover"]').popover();

    // Article Ajax voting
    $(document).on('click', '.sp-rating .star', function (event) {
        event.preventDefault();
        var data = {
            'action': 'voting',
            'user_rating': $(this).data('number'),
            'id': $(this).closest('.post_rating').attr('id')
        };
        var request = {
            'option': 'com_ajax',
            'plugin': 'helix3',
            'data': data,
            'format': 'json'
        };
        $.ajax({
            type: 'POST',
            data: request,
            beforeSend: function () {
                $('.post_rating .ajax-loader').show();
            },
            success: function (response) {
                var data = $.parseJSON(response.data);
                $('.post_rating .ajax-loader').hide();

                if (data.status == 'invalid') {
                    $('.post_rating .voting-result').text('You have already rated this entry!').fadeIn('fast');
                } else if (data.status == 'false') {
                    $('.post_rating .voting-result').text('Somethings wrong here, try again!').fadeIn('fast');
                } else if (data.status == 'true') {
                    var rate = data.action;
                    $('.voting-symbol').find('.star').each(function (i) {
                        if (i < rate) {
                            $(".star").eq(-(i + 1)).addClass('active');
                        }
                    });
                    $('.post_rating .voting-result').text('Thank You!').fadeIn('fast');
                }
            },
            error: function () {
                $('.post_rating .ajax-loader').hide();
                $('.post_rating .voting-result').text('Failed to rate, try again!').fadeIn('fast');
            }
        });
    });
	
	// Scroll to Top
    jQuery('body').append('<a href=\"#top\" id=\"scroll-top\"><i class=\"pe-7s-angle-up\"></i></a>');
	/*------------- Scroll to Top ------------------*/
	$(window).scroll(function(){if($(this).scrollTop() > ( pageHeight * 2 )){$('a#scroll-top').addClass('open')}else{$('a#scroll-top').removeClass('open')}});$('a#scroll-top').click(function(){$("html,body").animate({scrollTop:0},1600,'easeInOutQuint',( pageHeight * 2 ));return false;});
//======== CSS Browser Selector v0.4.0 (https://github.com/rafaelp/css_browser_selector) ==========//
function css_browser_selector(u){var ua=u.toLowerCase(),is=function(t){return ua.indexOf(t)>-1},g='gecko',w='webkit',s='safari',o='opera',m='mobile',h=document.documentElement,b=[(!(/opera|webtv/i.test(ua))&&/msie\s(\d)/.test(ua))?('ie ie'+(/trident\/4\.0/.test(ua) ? '8' : RegExp.jQuery1)):is('firefox/2')?g+' ff2':is('firefox/3.5')?g+' ff3 ff3_5':is('firefox/3.6')?g+' ff3 ff3_6':is('firefox/3')?g+' ff3':is('gecko/')?g:is('opera')?o+(/version\/(\d+)/.test(ua)?' '+o+RegExp.jQuery1:(/opera(\s|\/)(\d+)/.test(ua)?' '+o+RegExp.jQuery2:'')):is('konqueror')?'konqueror':is('blackberry')?m+' blackberry':is('android')?m+' android':is('chrome')?w+' chrome':is('iron')?w+' iron':is('applewebkit/')?w+' '+s+(/version\/(\d+)/.test(ua)?' '+s+RegExp.jQuery1:''):is('mozilla/')?g:'',is('j2me')?m+' j2me':is('iphone')?m+' iphone':is('ipod')?m+' ipod':is('ipad')?m+' ipad':is('mac')?'mac':is('darwin')?'mac':is('webtv')?'webtv':is('win')?'win'+(is('windows nt 6.0')?' vista':''):is('freebsd')?'freebsd':(is('x11')||is('linux'))?'linux':'','js']; c = b.join(' '); h.className += ' '+c; return c;}; css_browser_selector(navigator.userAgent);	
/*  By Osvaldas Valutis, www.osvaldas.info; URL: https://osvaldas.info/drop-down-navigation-responsive-and-touch-friendly */
;(function(e,t,n,r){e.fn.doubleTapToGo=function(r){if(!("ontouchstart"in t)&&!navigator.msMaxTouchPoints&&!navigator.userAgent.toLowerCase().match(/windows phone os 7/i))return false;this.each(function(){var t=false;e(this).on("click",function(n){var r=e(this);if(r[0]!=t[0]){n.preventDefault();t=r}});e(n).on("click touchstart MSPointerDown",function(n){var r=true,i=e(n.target).parents();for(var s=0;s<i.length;s++)if(i[s]==t[0])r=false;if(r)t=false})});return this}})(jQuery,window,document);
// Apply dropdown fix for mobile
jQuery(".mobile .sp-megamenu-parent .sp-has-child:has(ul)").doubleTapToGo();		
});
/*
* jquery-match-height 0.7.2 by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,n=function(t){return parseFloat(t)||0},a=function(e){var o=1,a=t(e),i=null,r=[];return a.each(function(){var e=t(this),a=e.offset().top-n(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(i-a))<=o?r[r.length-1]=s.add(e):r.push(e),i=a}),r},i=function(e){var o={
byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=i(e);if(o.remove){var n=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(n)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="0.7.2",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,
r._afterUpdate=null,r._rows=a,r._parse=n,r._parseOptions=i,r._apply=function(e,o){var s=i(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),u=h.parents().filter(":hidden");return u.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),u.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",
"padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=a(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var a=t(o),i=0;if(s.target)i=s.target.outerHeight(!1);else{if(s.byRow&&a.length<=1)return void a.css(s.property,"");a.each(function(){var e=t(this),o=e.attr("style"),n=e.css("display");"inline-block"!==n&&"flex"!==n&&"inline-flex"!==n&&(n="block");var a={
display:n};a[s.property]="",e.css(a),e.outerHeight(!1)>i&&(i=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}a.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=n(e.css("border-top-width"))+n(e.css("border-bottom-width")),o+=n(e.css("padding-top"))+n(e.css("padding-bottom"))),e.css(s.property,i-o+"px"))})}),u.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),
this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),n=o.attr("data-mh")||o.attr("data-match-height");n in e?e[n]=e[n].add(o):e[n]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(n,a){if(a&&"resize"===a.type){var i=t(window).width();if(i===e)return;e=i;
}n?o===-1&&(o=setTimeout(function(){s(a),o=-1},r._throttle)):s(a)},t(r._applyDataApi);var h=t.fn.on?"on":"bind";t(window)[h]("load",function(t){r._update(!1,t)}),t(window)[h]("resize orientationchange",function(t){r._update(!0,t)})});
/*!
 * imagesLoaded PACKAGED v4.1.4
 */
!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return n.indexOf(t)==-1&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return n!=-1&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(e,r),delete n[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){if(Array.isArray(e))return e;var t="object"==typeof e&&"number"==typeof e.length;return t?d.call(e):[e]}function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var s=e;return"string"==typeof e&&(s=document.querySelectorAll(e)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||e))}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console,d=Array.prototype.slice;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var u={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});

//Match Height implementation
jQuery(function($) {$(".match-height").imagesLoaded(function(){$('.match-height').matchHeight()})});

/*!
 * Masonry PACKAGED v4.2.2 with changed "getSize" to "getSize_FIX" to avoid Mootools conflict (in front-end Article Editing)
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,r,a){function h(t,e,n){var o,r="$()."+i+'("'+e+'")';return t.each(function(t,h){var u=a.data(h,i);if(!u)return void s(i+" not initialized. Cannot call methods, i.e. "+r);var d=u[e];if(!d||"_"==e.charAt(0))return void s(r+" is not a valid method");var l=d.apply(u,n);o=void 0===o?l:o}),void 0!==o?o:t}function u(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new r(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(r.prototype.option||(r.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return h(this,t,e)}return u(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,r=t.console,s="undefined"==typeof r?function(){}:function(t){r.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(t,r),delete n[r]),r.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize_FIX=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;u>e;e++){var i=h[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);s=200==Math.round(t(o.width)),r.isBoxSizeOuter=s,i.removeChild(e)}}function r(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var r=n(e);if("none"==r.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==r.boxSizing,l=0;u>l;l++){var c=h[l],f=r[c],m=parseFloat(f);a[c]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,y=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,z=a.borderTopWidth+a.borderBottomWidth,E=d&&s,b=t(r.width);b!==!1&&(a.width=b+(E?0:p+_));var x=t(r.height);return x!==!1&&(a.height=x+(E?0:g+z)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(g+z),a.outerWidth=a.width+y,a.outerHeight=a.height+v,a}}var s,a="undefined"==typeof console?e:function(t){console.error(t)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=h.length,d=!1;return r}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e};var n=Array.prototype.slice;i.makeArray=function(t){if(Array.isArray(t))return t;if(null===t||void 0===t)return[];var e="object"==typeof t&&"number"==typeof t.length;return e?n.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),r=0;r<i.length;r++)o.push(i[r])}}),o},i.debounceMethod=function(t,e,i){i=i||100;var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var o=t.console;return i.htmlInit=function(e,n){i.docReady(function(){var r=i.toDashed(n),s="data-"+r,a=document.querySelectorAll("["+s+"]"),h=document.querySelectorAll(".js-"+r),u=i.makeArray(a).concat(i.makeArray(h)),d=s+"-options",l=t.jQuery;u.forEach(function(t){var i,r=t.getAttribute(s)||t.getAttribute(d);try{i=r&&JSON.parse(r)}catch(a){return void(o&&o.error("Error parsing "+s+" on "+t.className+": "+a))}var h=new e(t,i);l&&l.data(t,n,h)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize_FIX))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var r=document.documentElement.style,s="string"==typeof r.transition?"transition":"WebkitTransition",a="string"==typeof r.transform?"transform":"WebkitTransform",h={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[s],u={transform:a,transition:s,transitionDuration:s+"Duration",transitionProperty:s+"Property",transitionDelay:s+"Delay"},d=n.prototype=Object.create(t.prototype);d.constructor=n,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize_FIX=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var n=u[i]||i;e[n]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],r=parseFloat(n),s=parseFloat(o),a=this.layout.size;-1!=n.indexOf("%")&&(r=r/100*a.width),-1!=o.indexOf("%")&&(s=s/100*a.height),r=isNaN(r)?0:r,s=isNaN(s)?0:s,r-=e?a.paddingLeft:a.paddingRight,s-=i?a.paddingTop:a.paddingBottom,this.position.x=r,this.position.y=s},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",r=i?"left":"right",s=i?"right":"left",a=this.position.x+t[o];e[r]=this.getXValue(a),e[s]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[h];e[u]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),o&&!this.isTransitioning)return void this.layoutPosition();var r=t-i,s=e-n,a={};a.transform=this.getTranslate(r,s),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+o(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(h,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var c={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=c[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(h,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var f={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(f)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return s&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize_FIX,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function r(t,e){var i=n.getQueryElement(t);if(!i)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,u&&(this.$element=u(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,c[o]=this,this._create();var r=this._getOption("initLayout");r&&this.layout()}function s(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=m[n]||1;return i*o}var h=t.console,u=t.jQuery,d=function(){},l=0,c={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var f=r.prototype;n.extend(f,e.prototype),f.option=function(t){n.extend(this.options,t)},f._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},f._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},f.reloadItems=function(){this.items=this._itemize(this.element.children)},f._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var r=e[o],s=new i(r,this);n.push(s)}return n},f._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},f.getItemElements=function(){return this.items.map(function(t){return t.element})},f.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},f._init=f.layout,f._resetLayout=function(){this.getSize_FIX()},f.getSize_FIX=function(){this.size=i(this.element)},f._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},f.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},f._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},f._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},f._getItemLayoutPosition=function(){return{x:0,y:0}},f._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},f.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},f._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},f._postLayout=function(){this.resizeContainer()},f.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},f._getContainerSize=d,f._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},f._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){s++,s==r&&i()}var o=this,r=e.length;if(!e||!r)return void i();var s=0;e.forEach(function(e){e.once(t,n)})},f.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),u)if(this.$element=this.$element||u(this.element),e){var o=u.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},f.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},f.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},f.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},f.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},f._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},f._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},f._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},f._manageStamp=d,f._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),r={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return r},f.handleEvent=n.handleEvent,f.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},f.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},f.onresize=function(){this.resize()},n.debounceMethod(r,"onresize",100),f.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},f.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},f.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},f.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},f.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},f.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},f.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},f.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},f.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},f.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},f.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},f.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},f.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete c[e],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},r.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&c[e]},r.create=function(t,e){var i=s(r);return i.defaults=n.extend({},r.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},r.compatOptions),i.namespace=t,i.data=r.data,i.Item=s(o),n.htmlInit(i,t),u&&u.bridget&&u.bridget(t,i),i};var m={ms:1,s:1e3};return r.Item=o,r}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize_FIX)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var n=i.prototype;return n._resetLayout=function(){this.getSize_FIX(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},n.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/n,s=n-o%n,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},n.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},n._getItemLayoutPosition=function(t){t.getSize_FIX();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",r=this[o](n,t),s={x:this.columnWidth*r.col,y:r.y},a=r.y+t.size.outerHeight,h=n+r.col,u=r.col;h>u;u++)this.colYs[u]=a;return s},n._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},n._getTopColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++)e[n]=this._getColGroupY(n,t);return e},n._getColGroupY=function(t,e){if(2>e)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},n._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,n=t>1&&i+t>this.cols;i=n?0:i;var o=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=o?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},n._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),r=o?n.left:n.right,s=r+i.outerWidth,a=Math.floor(r/this.columnWidth);a=Math.max(0,a);var h=Math.floor(s/this.columnWidth);h-=s%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var u=this._getOption("originTop"),d=(u?n.top:n.bottom)+i.outerHeight,l=a;h>=l;l++)this.colYs[l]=Math.max(d,this.colYs[l])},n._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},n._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i});
/*! lightslider - v1.1.6 - 2016-10-25
* https://github.com/sachinchoolur/lightslider */
!function(a,b){"use strict";var c={item:3,autoWidth:!1,slideMove:1,slideMargin:10,addClass:"",mode:"slide",useCSS:!0,cssEasing:"ease",easing:"linear",speed:400,auto:!1,pauseOnHover:!1,loop:!1,slideEndAnimation:!0,pause:2e3,keyPress:!1,controls:!0,prevHtml:"",nextHtml:"",rtl:!1,adaptiveHeight:!1,vertical:!1,verticalHeight:500,vThumbWidth:100,thumbItem:10,pager:!0,gallery:!1,galleryMargin:5,thumbMargin:5,currentPagerPosition:"middle",enableTouch:!0,enableDrag:!0,freeMove:!0,swipeThreshold:40,responsive:[],onBeforeStart:function(a){},onSliderLoad:function(a){},onBeforeSlide:function(a,b){},onAfterSlide:function(a,b){},onBeforeNextSlide:function(a,b){},onBeforePrevSlide:function(a,b){}};a.fn.lightSlider=function(b){if(0===this.length)return this;if(this.length>1)return this.each(function(){a(this).lightSlider(b)}),this;var d={},e=a.extend(!0,{},c,b),f={},g=this;d.$el=this,"fade"===e.mode&&(e.vertical=!1);var h=g.children(),i=a(window).width(),j=null,k=null,l=0,m=0,n=!1,o=0,p="",q=0,r=e.vertical===!0?"height":"width",s=e.vertical===!0?"margin-bottom":"margin-right",t=0,u=0,v=0,w=0,x=null,y="ontouchstart"in document.documentElement,z={};return z.chbreakpoint=function(){if(i=a(window).width(),e.responsive.length){var b;if(e.autoWidth===!1&&(b=e.item),i<e.responsive[0].breakpoint)for(var c=0;c<e.responsive.length;c++)i<e.responsive[c].breakpoint&&(j=e.responsive[c].breakpoint,k=e.responsive[c]);if("undefined"!=typeof k&&null!==k)for(var d in k.settings)k.settings.hasOwnProperty(d)&&(("undefined"==typeof f[d]||null===f[d])&&(f[d]=e[d]),e[d]=k.settings[d]);if(!a.isEmptyObject(f)&&i>e.responsive[0].breakpoint)for(var g in f)f.hasOwnProperty(g)&&(e[g]=f[g]);e.autoWidth===!1&&t>0&&v>0&&b!==e.item&&(q=Math.round(t/((v+e.slideMargin)*e.slideMove)))}},z.calSW=function(){e.autoWidth===!1&&(v=(o-(e.item*e.slideMargin-e.slideMargin))/e.item)},z.calWidth=function(a){var b=a===!0?p.find(".lslide").length:h.length;if(e.autoWidth===!1)m=b*(v+e.slideMargin);else{m=0;for(var c=0;b>c;c++)m+=parseInt(h.eq(c).width())+e.slideMargin}return m},d={doCss:function(){var a=function(){for(var a=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],b=document.documentElement,c=0;c<a.length;c++)if(a[c]in b.style)return!0};return e.useCSS&&a()?!0:!1},keyPress:function(){e.keyPress&&a(document).on("keyup.lightslider",function(b){a(":focus").is("input, textarea")||(b.preventDefault?b.preventDefault():b.returnValue=!1,37===b.keyCode?g.goToPrevSlide():39===b.keyCode&&g.goToNextSlide())})},controls:function(){e.controls&&(g.after('<div class="lSAction"><a class="lSPrev">'+e.prevHtml+'</a><a class="lSNext">'+e.nextHtml+"</a></div>"),e.autoWidth?z.calWidth(!1)<o&&p.find(".lSAction").hide():l<=e.item&&p.find(".lSAction").hide(),p.find(".lSAction a").on("click",function(b){return b.preventDefault?b.preventDefault():b.returnValue=!1,"lSPrev"===a(this).attr("class")?g.goToPrevSlide():g.goToNextSlide(),!1}))},initialStyle:function(){var a=this;"fade"===e.mode&&(e.autoWidth=!1,e.slideEndAnimation=!1),e.auto&&(e.slideEndAnimation=!1),e.autoWidth&&(e.slideMove=1,e.item=1),e.loop&&(e.slideMove=1,e.freeMove=!1),e.onBeforeStart.call(this,g),z.chbreakpoint(),g.addClass("lightSlider").wrap('<div class="lSSlideOuter '+e.addClass+'"><div class="lSSlideWrapper"></div></div>'),p=g.parent(".lSSlideWrapper"),e.rtl===!0&&p.parent().addClass("lSrtl"),e.vertical?(p.parent().addClass("vertical"),o=e.verticalHeight,p.css("height",o+"px")):o=g.outerWidth(),h.addClass("lslide"),e.loop===!0&&"slide"===e.mode&&(z.calSW(),z.clone=function(){if(z.calWidth(!0)>o){for(var b=0,c=0,d=0;d<h.length&&(b+=parseInt(g.find(".lslide").eq(d).width())+e.slideMargin,c++,!(b>=o+e.slideMargin));d++);var f=e.autoWidth===!0?c:e.item;if(f<g.find(".clone.left").length)for(var i=0;i<g.find(".clone.left").length-f;i++)h.eq(i).remove();if(f<g.find(".clone.right").length)for(var j=h.length-1;j>h.length-1-g.find(".clone.right").length;j--)q--,h.eq(j).remove();for(var k=g.find(".clone.right").length;f>k;k++)g.find(".lslide").eq(k).clone().removeClass("lslide").addClass("clone right").appendTo(g),q++;for(var l=g.find(".lslide").length-g.find(".clone.left").length;l>g.find(".lslide").length-f;l--)g.find(".lslide").eq(l-1).clone().removeClass("lslide").addClass("clone left").prependTo(g);h=g.children()}else h.hasClass("clone")&&(g.find(".clone").remove(),a.move(g,0))},z.clone()),z.sSW=function(){l=h.length,e.rtl===!0&&e.vertical===!1&&(s="margin-left"),e.autoWidth===!1&&h.css(r,v+"px"),h.css(s,e.slideMargin+"px"),m=z.calWidth(!1),g.css(r,m+"px"),e.loop===!0&&"slide"===e.mode&&n===!1&&(q=g.find(".clone.left").length)},z.calL=function(){h=g.children(),l=h.length},this.doCss()&&p.addClass("usingCss"),z.calL(),"slide"===e.mode?(z.calSW(),z.sSW(),e.loop===!0&&(t=a.slideValue(),this.move(g,t)),e.vertical===!1&&this.setHeight(g,!1)):(this.setHeight(g,!0),g.addClass("lSFade"),this.doCss()||(h.fadeOut(0),h.eq(q).fadeIn(0))),e.loop===!0&&"slide"===e.mode?h.eq(q).addClass("active"):h.first().addClass("active")},pager:function(){var a=this;if(z.createPager=function(){w=(o-(e.thumbItem*e.thumbMargin-e.thumbMargin))/e.thumbItem;var b=p.find(".lslide"),c=p.find(".lslide").length,d=0,f="",h=0;for(d=0;c>d;d++){"slide"===e.mode&&(e.autoWidth?h+=(parseInt(b.eq(d).width())+e.slideMargin)*e.slideMove:h=d*(v+e.slideMargin)*e.slideMove);var i=b.eq(d*e.slideMove).attr("data-thumb");if(f+=e.gallery===!0?'<li style="width:100%;'+r+":"+w+"px;"+s+":"+e.thumbMargin+'px"><a href="#"><img src="'+i+'" /></a></li>':'<li><a href="#">'+(d+1)+"</a></li>","slide"===e.mode&&h>=m-o-e.slideMargin){d+=1;var j=2;e.autoWidth&&(f+='<li><a href="#">'+(d+1)+"</a></li>",j=1),j>d?(f=null,p.parent().addClass("noPager")):p.parent().removeClass("noPager");break}}var k=p.parent();k.find(".lSPager").html(f),e.gallery===!0&&(e.vertical===!0&&k.find(".lSPager").css("width",e.vThumbWidth+"px"),u=d*(e.thumbMargin+w)+.5,k.find(".lSPager").css({property:u+"px","transition-duration":e.speed+"ms"}),e.vertical===!0&&p.parent().css("padding-right",e.vThumbWidth+e.galleryMargin+"px"),k.find(".lSPager").css(r,u+"px"));var l=k.find(".lSPager").find("li");l.first().addClass("active"),l.on("click",function(){return e.loop===!0&&"slide"===e.mode?q+=l.index(this)-k.find(".lSPager").find("li.active").index():q=l.index(this),g.mode(!1),e.gallery===!0&&a.slideThumb(),!1})},e.pager){var b="lSpg";e.gallery&&(b="lSGallery"),p.after('<ul class="lSPager '+b+'"></ul>');var c=e.vertical?"margin-left":"margin-top";p.parent().find(".lSPager").css(c,e.galleryMargin+"px"),z.createPager()}setTimeout(function(){z.init()},0)},setHeight:function(a,b){var c=null,d=this;c=e.loop?a.children(".lslide ").first():a.children().first();var f=function(){var d=c.outerHeight(),e=0,f=d;b&&(d=0,e=100*f/o),a.css({height:d+"px","padding-bottom":e+"%"})};f(),c.find("img").length?c.find("img")[0].complete?(f(),x||d.auto()):c.find("img").on("load",function(){setTimeout(function(){f(),x||d.auto()},100)}):x||d.auto()},active:function(a,b){this.doCss()&&"fade"===e.mode&&p.addClass("on");var c=0;if(q*e.slideMove<l){a.removeClass("active"),this.doCss()||"fade"!==e.mode||b!==!1||a.fadeOut(e.speed),c=b===!0?q:q*e.slideMove;var d,f;b===!0&&(d=a.length,f=d-1,c+1>=d&&(c=f)),e.loop===!0&&"slide"===e.mode&&(c=b===!0?q-g.find(".clone.left").length:q*e.slideMove,b===!0&&(d=a.length,f=d-1,c+1===d?c=f:c+1>d&&(c=0))),this.doCss()||"fade"!==e.mode||b!==!1||a.eq(c).fadeIn(e.speed),a.eq(c).addClass("active")}else a.removeClass("active"),a.eq(a.length-1).addClass("active"),this.doCss()||"fade"!==e.mode||b!==!1||(a.fadeOut(e.speed),a.eq(c).fadeIn(e.speed))},move:function(a,b){e.rtl===!0&&(b=-b),this.doCss()?a.css(e.vertical===!0?{transform:"translate3d(0px, "+-b+"px, 0px)","-webkit-transform":"translate3d(0px, "+-b+"px, 0px)"}:{transform:"translate3d("+-b+"px, 0px, 0px)","-webkit-transform":"translate3d("+-b+"px, 0px, 0px)"}):e.vertical===!0?a.css("position","relative").animate({top:-b+"px"},e.speed,e.easing):a.css("position","relative").animate({left:-b+"px"},e.speed,e.easing);var c=p.parent().find(".lSPager").find("li");this.active(c,!0)},fade:function(){this.active(h,!1);var a=p.parent().find(".lSPager").find("li");this.active(a,!0)},slide:function(){var a=this;z.calSlide=function(){m>o&&(t=a.slideValue(),a.active(h,!1),t>m-o-e.slideMargin?t=m-o-e.slideMargin:0>t&&(t=0),a.move(g,t),e.loop===!0&&"slide"===e.mode&&(q>=l-g.find(".clone.left").length/e.slideMove&&a.resetSlide(g.find(".clone.left").length),0===q&&a.resetSlide(p.find(".lslide").length)))},z.calSlide()},resetSlide:function(a){var b=this;p.find(".lSAction a").addClass("disabled"),setTimeout(function(){q=a,p.css("transition-duration","0ms"),t=b.slideValue(),b.active(h,!1),d.move(g,t),setTimeout(function(){p.css("transition-duration",e.speed+"ms"),p.find(".lSAction a").removeClass("disabled")},50)},e.speed+100)},slideValue:function(){var a=0;if(e.autoWidth===!1)a=q*(v+e.slideMargin)*e.slideMove;else{a=0;for(var b=0;q>b;b++)a+=parseInt(h.eq(b).width())+e.slideMargin}return a},slideThumb:function(){var a;switch(e.currentPagerPosition){case"left":a=0;break;case"middle":a=o/2-w/2;break;case"right":a=o-w}var b=q-g.find(".clone.left").length,c=p.parent().find(".lSPager");"slide"===e.mode&&e.loop===!0&&(b>=c.children().length?b=0:0>b&&(b=c.children().length));var d=b*(w+e.thumbMargin)-a;d+o>u&&(d=u-o-e.thumbMargin),0>d&&(d=0),this.move(c,d)},auto:function(){e.auto&&(clearInterval(x),x=setInterval(function(){g.goToNextSlide()},e.pause))},pauseOnHover:function(){var b=this;e.auto&&e.pauseOnHover&&(p.on("mouseenter",function(){a(this).addClass("ls-hover"),g.pause(),e.auto=!0}),p.on("mouseleave",function(){a(this).removeClass("ls-hover"),p.find(".lightSlider").hasClass("lsGrabbing")||b.auto()}))},touchMove:function(a,b){if(p.css("transition-duration","0ms"),"slide"===e.mode){var c=a-b,d=t-c;if(d>=m-o-e.slideMargin)if(e.freeMove===!1)d=m-o-e.slideMargin;else{var f=m-o-e.slideMargin;d=f+(d-f)/5}else 0>d&&(e.freeMove===!1?d=0:d/=5);this.move(g,d)}},touchEnd:function(a){if(p.css("transition-duration",e.speed+"ms"),"slide"===e.mode){var b=!1,c=!0;t-=a,t>m-o-e.slideMargin?(t=m-o-e.slideMargin,e.autoWidth===!1&&(b=!0)):0>t&&(t=0);var d=function(a){var c=0;if(b||a&&(c=1),e.autoWidth)for(var d=0,f=0;f<h.length&&(d+=parseInt(h.eq(f).width())+e.slideMargin,q=f+c,!(d>=t));f++);else{var g=t/((v+e.slideMargin)*e.slideMove);q=parseInt(g)+c,t>=m-o-e.slideMargin&&g%1!==0&&q++}};a>=e.swipeThreshold?(d(!1),c=!1):a<=-e.swipeThreshold&&(d(!0),c=!1),g.mode(c),this.slideThumb()}else a>=e.swipeThreshold?g.goToPrevSlide():a<=-e.swipeThreshold&&g.goToNextSlide()},enableDrag:function(){var b=this;if(!y){var c=0,d=0,f=!1;p.find(".lightSlider").addClass("lsGrab"),p.on("mousedown",function(b){return o>m&&0!==m?!1:void("lSPrev"!==a(b.target).attr("class")&&"lSNext"!==a(b.target).attr("class")&&(c=e.vertical===!0?b.pageY:b.pageX,f=!0,b.preventDefault?b.preventDefault():b.returnValue=!1,p.scrollLeft+=1,p.scrollLeft-=1,p.find(".lightSlider").removeClass("lsGrab").addClass("lsGrabbing"),clearInterval(x)))}),a(window).on("mousemove",function(a){f&&(d=e.vertical===!0?a.pageY:a.pageX,b.touchMove(d,c))}),a(window).on("mouseup",function(g){if(f){p.find(".lightSlider").removeClass("lsGrabbing").addClass("lsGrab"),f=!1,d=e.vertical===!0?g.pageY:g.pageX;var h=d-c;Math.abs(h)>=e.swipeThreshold&&a(window).on("click.ls",function(b){b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopImmediatePropagation(),b.stopPropagation(),a(window).off("click.ls")}),b.touchEnd(h)}})}},enableTouch:function(){var a=this;if(y){var b={},c={};p.on("touchstart",function(a){c=a.originalEvent.targetTouches[0],b.pageX=a.originalEvent.targetTouches[0].pageX,b.pageY=a.originalEvent.targetTouches[0].pageY,clearInterval(x)}),p.on("touchmove",function(d){if(o>m&&0!==m)return!1;var f=d.originalEvent;c=f.targetTouches[0];var g=Math.abs(c.pageX-b.pageX),h=Math.abs(c.pageY-b.pageY);e.vertical===!0?(3*h>g&&d.preventDefault(),a.touchMove(c.pageY,b.pageY)):(3*g>h&&d.preventDefault(),a.touchMove(c.pageX,b.pageX))}),p.on("touchend",function(){if(o>m&&0!==m)return!1;var d;d=e.vertical===!0?c.pageY-b.pageY:c.pageX-b.pageX,a.touchEnd(d)})}},build:function(){var b=this;b.initialStyle(),this.doCss()&&(e.enableTouch===!0&&b.enableTouch(),e.enableDrag===!0&&b.enableDrag()),a(window).on("focus",function(){b.auto()}),a(window).on("blur",function(){clearInterval(x)}),b.pager(),b.pauseOnHover(),b.controls(),b.keyPress()}},d.build(),z.init=function(){z.chbreakpoint(),e.vertical===!0?(o=e.item>1?e.verticalHeight:h.outerHeight(),p.css("height",o+"px")):o=p.outerWidth(),e.loop===!0&&"slide"===e.mode&&z.clone(),z.calL(),"slide"===e.mode&&g.removeClass("lSSlide"),"slide"===e.mode&&(z.calSW(),z.sSW()),setTimeout(function(){"slide"===e.mode&&g.addClass("lSSlide")},1e3),e.pager&&z.createPager(),e.adaptiveHeight===!0&&e.vertical===!1&&g.css("height",h.eq(q).outerHeight(!0)),e.adaptiveHeight===!1&&("slide"===e.mode?e.vertical===!1?d.setHeight(g,!1):d.auto():d.setHeight(g,!0)),e.gallery===!0&&d.slideThumb(),"slide"===e.mode&&d.slide(),e.autoWidth===!1?h.length<=e.item?p.find(".lSAction").hide():p.find(".lSAction").show():z.calWidth(!1)<o&&0!==m?p.find(".lSAction").hide():p.find(".lSAction").show()},g.goToPrevSlide=function(){if(q>0)e.onBeforePrevSlide.call(this,g,q),q--,g.mode(!1),e.gallery===!0&&d.slideThumb();else if(e.loop===!0){if(e.onBeforePrevSlide.call(this,g,q),"fade"===e.mode){var a=l-1;q=parseInt(a/e.slideMove)}g.mode(!1),e.gallery===!0&&d.slideThumb()}else e.slideEndAnimation===!0&&(g.addClass("leftEnd"),setTimeout(function(){g.removeClass("leftEnd")},400))},g.goToNextSlide=function(){var a=!0;if("slide"===e.mode){var b=d.slideValue();a=b<m-o-e.slideMargin}q*e.slideMove<l-e.slideMove&&a?(e.onBeforeNextSlide.call(this,g,q),q++,g.mode(!1),e.gallery===!0&&d.slideThumb()):e.loop===!0?(e.onBeforeNextSlide.call(this,g,q),q=0,g.mode(!1),e.gallery===!0&&d.slideThumb()):e.slideEndAnimation===!0&&(g.addClass("rightEnd"),setTimeout(function(){g.removeClass("rightEnd")},400))},g.mode=function(a){e.adaptiveHeight===!0&&e.vertical===!1&&g.css("height",h.eq(q).outerHeight(!0)),n===!1&&("slide"===e.mode?d.doCss()&&(g.addClass("lSSlide"),""!==e.speed&&p.css("transition-duration",e.speed+"ms"),""!==e.cssEasing&&p.css("transition-timing-function",e.cssEasing)):d.doCss()&&(""!==e.speed&&g.css("transition-duration",e.speed+"ms"),""!==e.cssEasing&&g.css("transition-timing-function",e.cssEasing))),a||e.onBeforeSlide.call(this,g,q),"slide"===e.mode?d.slide():d.fade(),p.hasClass("ls-hover")||d.auto(),setTimeout(function(){a||e.onAfterSlide.call(this,g,q)},e.speed),n=!0},g.play=function(){g.goToNextSlide(),e.auto=!0,d.auto()},g.pause=function(){e.auto=!1,clearInterval(x)},g.refresh=function(){z.init()},g.getCurrentSlideCount=function(){var a=q;if(e.loop){var b=p.find(".lslide").length,c=g.find(".clone.left").length;a=c-1>=q?b+(q-c):q>=b+c?q-b-c:q-c}return a+1},g.getTotalSlideCount=function(){return p.find(".lslide").length},g.goToSlide=function(a){q=e.loop?a+g.find(".clone.left").length-1:a,g.mode(!1),e.gallery===!0&&d.slideThumb()},g.destroy=function(){g.lightSlider&&(g.goToPrevSlide=function(){},g.goToNextSlide=function(){},g.mode=function(){},g.play=function(){},g.pause=function(){},g.refresh=function(){},g.getCurrentSlideCount=function(){},g.getTotalSlideCount=function(){},g.goToSlide=function(){},g.lightSlider=null,z={init:function(){}},g.parent().parent().find(".lSAction, .lSPager").remove(),g.removeClass("lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right").removeAttr("style").unwrap().unwrap(),g.children().removeAttr("style"),h.removeClass("lslide active"),g.find(".clone").remove(),h=null,x=null,n=!1,q=0)},setTimeout(function(){e.onSliderLoad.call(this,g)},10),a(window).on("resize orientationchange",function(a){setTimeout(function(){a.preventDefault?a.preventDefault():a.returnValue=!1,z.init()},200)}),this}}(jQuery);

// Animated Headlines
jQuery(function($){$(".animated_headlines").imagesLoaded(function(){function initHeadline(){singleLetters($(".animated_headlines.letters").find("b")),animateHeadline($(".animated_headlines"))}function singleLetters(e){e.each(function(){var e=$(this),a=e.text().split(""),t=e.hasClass("is-visible");for(i in a)e.parents(".rotate-2").length>0&&(a[i]='<span>'+a[i]+"</span>"),a[i]=t?'<i class="in">'+a[i]+"</i>":"<i>"+a[i]+"</i>";var s=a.join("");e.html(s).css("opacity",1)})}function animateHeadline(e){var i=animationDelay;e.each(function(){var e=$(this);if(e.hasClass("loading-bar"))i=barAnimationDelay,setTimeout(function(){e.find(".ah-words-wrapper").addClass("is-loading")},barWaiting);else if(e.hasClass("reset-width")){t=(a=e.find(".ah-words-wrapper")).width();a.css("width",t)}else if(e.hasClass("clip")){var a=e.find(".ah-words-wrapper"),t=a.width()+5;a.css("width","auto"),s=0}else if(!e.hasClass("type")){var s=0;e.find(".ah-words-wrapper b").each(function(){var e=$(this).width();e>s&&(s=e)}),e.find(".ah-words-wrapper").css("width",s+10)}setTimeout(function(){hideWord(e.find(".is-visible").eq(0))},i)})}function hideWord(e){var i=takeNext(e);if(e.parents(".animated_headlines").hasClass("type")){var a=e.parent(".ah-words-wrapper");a.addClass("selected").removeClass("waiting"),setTimeout(function(){a.removeClass("selected").animate({width:"auto"}),e.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")},selectionDuration),setTimeout(function(){showWord(i,typeLettersDelay)},typeAnimationDelay)}else if(e.parents(".animated_headlines").hasClass("letters")){var t=e.children("i").length>=i.children("i").length;hideLetter(e.find("i").eq(0),e,t,lettersDelay),showLetter(i.find("i").eq(0),i,t,lettersDelay)}else e.parents(".animated_headlines").hasClass("clip")?e.parents(".ah-words-wrapper").animate({width:"2px"},revealDuration,function(){switchWord(e,i),showWord(i)}):e.parents(".animated_headlines").hasClass("reset-width")?e.parents(".ah-words-wrapper").animate({width:"auto"},revealDuration,function(){switchWord(e,i),showWord(i)}):e.parents(".animated_headlines").hasClass("loading-bar")?(e.parents(".ah-words-wrapper").removeClass("is-loading"),switchWord(e,i),setTimeout(function(){hideWord(i)},barAnimationDelay),setTimeout(function(){e.parents(".ah-words-wrapper").addClass("is-loading")},barWaiting)):(switchWord(e,i),setTimeout(function(){hideWord(i)},animationDelay))}function showWord(e,i){e.parents(".animated_headlines").hasClass("type")?(showLetter(e.find("i").eq(0),e,!1,i),e.addClass("is-visible").removeClass("is-hidden").animate({width:"auto"})):e.parents(".animated_headlines").hasClass("reset-width")?e.parents(".ah-words-wrapper").animate({width:e.width()},revealDuration,function(){setTimeout(function(){hideWord(e)},revealAnimationDelay)}):e.parents(".animated_headlines").hasClass("clip")&&e.parents(".ah-words-wrapper").animate({width:e.width()+5},revealDuration,function(){setTimeout(function(){hideWord(e)},revealAnimationDelay)})}function hideLetter(e,i,a,t){if(e.removeClass("in").addClass("out"),e.is(":last-child")?a&&setTimeout(function(){hideWord(takeNext(i))},animationDelay):setTimeout(function(){hideLetter(e.next(),i,a,t)},t),e.is(":last-child")&&$("html").hasClass("no-csstransitions")){var s=takeNext(i);switchWord(i,s)}}function showLetter(e,i,a,t){e.addClass("in").removeClass("out"),e.is(":last-child")?(i.parents(".animated_headlines").hasClass("type")&&setTimeout(function(){i.parents(".ah-words-wrapper").addClass("waiting")},300),a||setTimeout(function(){hideWord(i)},animationDelay)):setTimeout(function(){showLetter(e.next(),i,a,t)},t)}function takeNext(e){return e.is(":last-child")?e.parent().children().eq(0):e.next()}function takePrev(e){return e.is(":first-child")?e.parent().children().last():e.prev()}function switchWord(e,i){e.removeClass("is-visible").addClass("is-hidden"),i.removeClass("is-hidden").addClass("is-visible")}var animationDelay=2500,barAnimationDelay=3800,barWaiting=barAnimationDelay-3e3,lettersDelay=90,typeLettersDelay=170,selectionDuration=600,typeAnimationDelay=selectionDuration+800,revealDuration=800,revealAnimationDelay=2500;initHeadline();})});

/* jQuery Nav (Onepage): onePageNav */
!function(a,b,c,d){var e=function(d,e){this.elem=d,this.$elem=a(d),this.options=e,this.metadata=this.$elem.data("plugin-options"),this.$win=a(b),this.sections={},this.didScroll=!1,this.$doc=a(c),this.docHeight=this.$doc.height()};e.prototype={defaults:{navItems:"a",currentClass:"current",changeHash:!1,easing:"swing",filter:"",scrollSpeed:750,scrollThreshold:.5,begin:!1,end:!1,scrollChange:!1},init:function(){return this.config=a.extend({},this.defaults,this.options,this.metadata),this.$nav=this.$elem.find(this.config.navItems),""!==this.config.filter&&(this.$nav=this.$nav.filter(this.config.filter)),this.$nav.on("click.onePageNav",a.proxy(this.handleClick,this)),this.getPositions(),this.bindInterval(),this.$win.on("resize.onePageNav",a.proxy(this.getPositions,this)),this},adjustNav:function(a,b){a.$elem.find("."+a.config.currentClass).removeClass(a.config.currentClass),b.addClass(a.config.currentClass)},bindInterval:function(){var b,a=this;a.$win.on("scroll.onePageNav",function(){a.didScroll=!0}),a.t=setInterval(function(){b=a.$doc.height(),a.didScroll&&(a.didScroll=!1,a.scrollChange()),b!==a.docHeight&&(a.docHeight=b,a.getPositions())},250)},getHash:function(a){return a.attr("href").split("#")[1]},getPositions:function(){var c,d,e,b=this;b.$nav.each(function(){c=b.getHash(a(this)),e=a("#"+c),e.length&&(d=e.offset().top,b.sections[c]=Math.round(d))})},getSection:function(a){var b=null,c=Math.round(this.$win.height()*this.config.scrollThreshold);for(var d in this.sections)this.sections[d]-c<a&&(b=d);return b},handleClick:function(c){var d=this,e=a(c.currentTarget),f=e.parent(),g="#"+d.getHash(e);f.hasClass(d.config.currentClass)||(d.config.begin&&d.config.begin(),d.adjustNav(d,f),d.unbindInterval(),d.scrollTo(g,function(){d.config.changeHash&&(b.location.hash=g),d.bindInterval(),d.config.end&&d.config.end()})),c.preventDefault()},scrollChange:function(){var c,a=this.$win.scrollTop(),b=this.getSection(a);null!==b&&(c=this.$elem.find('a[href$="#'+b+'"]').parent(),c.hasClass(this.config.currentClass)||(this.adjustNav(this,c),this.config.scrollChange&&this.config.scrollChange(c)))},scrollTo:function(b,c){var d=a(b).offset().top-65;a("html, body").animate({scrollTop:d},this.config.scrollSpeed,this.config.easing,c)},unbindInterval:function(){clearInterval(this.t),this.$win.unbind("scroll.onePageNav")}},e.defaults=e.prototype.defaults,a.fn.onePageNav=function(a){return this.each(function(){new e(this,a).init()})}}(jQuery,window,document);

/*! lazysizes - v5.2.0 "Lazy Loading for images" (https://github.com/aFarkas/lazysizes)*/
!function(a,b){var c=b(a,a.document,Date);a.lazySizes=c,"object"==typeof module&&module.exports&&(module.exports=c)}("undefined"!=typeof window?window:{},function(a,b,c){"use strict";var d,e;if(function(){var b,c={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};e=a.lazySizesConfig||a.lazysizesConfig||{};for(b in c)b in e||(e[b]=c[b])}(),!b||!b.getElementsByClassName)return{init:function(){},cfg:e,noSupport:!0};var f=b.documentElement,g=a.HTMLPictureElement,h="addEventListener",i="getAttribute",j=a[h].bind(a),k=a.setTimeout,l=a.requestAnimationFrame||k,m=a.requestIdleCallback,n=/^picture$/i,o=["load","error","lazyincluded","_lazyloaded"],p={},q=Array.prototype.forEach,r=function(a,b){return p[b]||(p[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),p[b].test(a[i]("class")||"")&&p[b]},s=function(a,b){r(a,b)||a.setAttribute("class",(a[i]("class")||"").trim()+" "+b)},t=function(a,b){var c;(c=r(a,b))&&a.setAttribute("class",(a[i]("class")||"").replace(c," "))},u=function(a,b,c){var d=c?h:"removeEventListener";c&&u(a,b),o.forEach(function(c){a[d](c,b)})},v=function(a,c,e,f,g){var h=b.createEvent("Event");return e||(e={}),e.instance=d,h.initEvent(c,!f,!g),h.detail=e,a.dispatchEvent(h),h},w=function(b,c){var d;!g&&(d=a.picturefill||e.pf)?(c&&c.src&&!b[i]("srcset")&&b.setAttribute("srcset",c.src),d({reevaluate:!0,elements:[b]})):c&&c.src&&(b.src=c.src)},x=function(a,b){return(getComputedStyle(a,null)||{})[b]},y=function(a,b,c){for(c=c||a.offsetWidth;c<e.minSize&&b&&!a._lazysizesWidth;)c=b.offsetWidth,b=b.parentNode;return c},z=function(){var a,c,d=[],e=[],f=d,g=function(){var b=f;for(f=d.length?e:d,a=!0,c=!1;b.length;)b.shift()();a=!1},h=function(d,e){a&&!e?d.apply(this,arguments):(f.push(d),c||(c=!0,(b.hidden?k:l)(g)))};return h._lsFlush=g,h}(),A=function(a,b){return b?function(){z(a)}:function(){var b=this,c=arguments;z(function(){a.apply(b,c)})}},B=function(a){var b,d=0,f=e.throttleDelay,g=e.ricTimeout,h=function(){b=!1,d=c.now(),a()},i=m&&g>49?function(){m(h,{timeout:g}),g!==e.ricTimeout&&(g=e.ricTimeout)}:A(function(){k(h)},!0);return function(a){var e;(a=!0===a)&&(g=33),b||(b=!0,e=f-(c.now()-d),e<0&&(e=0),a||e<9?i():k(i,e))}},C=function(a){var b,d,e=99,f=function(){b=null,a()},g=function(){var a=c.now()-d;a<e?k(g,e-a):(m||f)(f)};return function(){d=c.now(),b||(b=k(g,e))}},D=function(){var g,m,o,p,y,D,F,G,H,I,J,K,L=/^img$/i,M=/^iframe$/i,N="onscroll"in a&&!/(gle|ing)bot/.test(navigator.userAgent),O=0,P=0,Q=0,R=-1,S=function(a){Q--,(!a||Q<0||!a.target)&&(Q=0)},T=function(a){return null==K&&(K="hidden"==x(b.body,"visibility")),K||!("hidden"==x(a.parentNode,"visibility")&&"hidden"==x(a,"visibility"))},U=function(a,c){var d,e=a,g=T(a);for(G-=c,J+=c,H-=c,I+=c;g&&(e=e.offsetParent)&&e!=b.body&&e!=f;)(g=(x(e,"opacity")||1)>0)&&"visible"!=x(e,"overflow")&&(d=e.getBoundingClientRect(),g=I>d.left&&H<d.right&&J>d.top-1&&G<d.bottom+1);return g},V=function(){var a,c,h,j,k,l,n,o,q,r,s,t,u=d.elements;if((p=e.loadMode)&&Q<8&&(a=u.length)){for(c=0,R++;c<a;c++)if(u[c]&&!u[c]._lazyRace)if(!N||d.prematureUnveil&&d.prematureUnveil(u[c]))ba(u[c]);else if((o=u[c][i]("data-expand"))&&(l=1*o)||(l=P),r||(r=!e.expand||e.expand<1?f.clientHeight>500&&f.clientWidth>500?500:370:e.expand,d._defEx=r,s=r*e.expFactor,t=e.hFac,K=null,P<s&&Q<1&&R>2&&p>2&&!b.hidden?(P=s,R=0):P=p>1&&R>1&&Q<6?r:O),q!==l&&(D=innerWidth+l*t,F=innerHeight+l,n=-1*l,q=l),h=u[c].getBoundingClientRect(),(J=h.bottom)>=n&&(G=h.top)<=F&&(I=h.right)>=n*t&&(H=h.left)<=D&&(J||I||H||G)&&(e.loadHidden||T(u[c]))&&(m&&Q<3&&!o&&(p<3||R<4)||U(u[c],l))){if(ba(u[c]),k=!0,Q>9)break}else!k&&m&&!j&&Q<4&&R<4&&p>2&&(g[0]||e.preloadAfterLoad)&&(g[0]||!o&&(J||I||H||G||"auto"!=u[c][i](e.sizesAttr)))&&(j=g[0]||u[c]);j&&!k&&ba(j)}},W=B(V),X=function(a){var b=a.target;if(b._lazyCache)return void delete b._lazyCache;S(a),s(b,e.loadedClass),t(b,e.loadingClass),u(b,Z),v(b,"lazyloaded")},Y=A(X),Z=function(a){Y({target:a.target})},$=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},_=function(a){var b,c=a[i](e.srcsetAttr);(b=e.customMedia[a[i]("data-media")||a[i]("media")])&&a.setAttribute("media",b),c&&a.setAttribute("srcset",c)},aa=A(function(a,b,c,d,f){var g,h,j,l,m,p;(m=v(a,"lazybeforeunveil",b)).defaultPrevented||(d&&(c?s(a,e.autosizesClass):a.setAttribute("sizes",d)),h=a[i](e.srcsetAttr),g=a[i](e.srcAttr),f&&(j=a.parentNode,l=j&&n.test(j.nodeName||"")),p=b.firesLoad||"src"in a&&(h||g||l),m={target:a},s(a,e.loadingClass),p&&(clearTimeout(o),o=k(S,2500),u(a,Z,!0)),l&&q.call(j.getElementsByTagName("source"),_),h?a.setAttribute("srcset",h):g&&!l&&(M.test(a.nodeName)?$(a,g):a.src=g),f&&(h||l)&&w(a,{src:g})),a._lazyRace&&delete a._lazyRace,t(a,e.lazyClass),z(function(){var b=a.complete&&a.naturalWidth>1;p&&!b||(b&&s(a,"ls-is-cached"),X(m),a._lazyCache=!0,k(function(){"_lazyCache"in a&&delete a._lazyCache},9)),"lazy"==a.loading&&Q--},!0)}),ba=function(a){if(!a._lazyRace){var b,c=L.test(a.nodeName),d=c&&(a[i](e.sizesAttr)||a[i]("sizes")),f="auto"==d;(!f&&m||!c||!a[i]("src")&&!a.srcset||a.complete||r(a,e.errorClass)||!r(a,e.lazyClass))&&(b=v(a,"lazyunveilread").detail,f&&E.updateElem(a,!0,a.offsetWidth),a._lazyRace=!0,Q++,aa(a,b,f,d,c))}},ca=C(function(){e.loadMode=3,W()}),da=function(){3==e.loadMode&&(e.loadMode=2),ca()},ea=function(){if(!m){if(c.now()-y<999)return void k(ea,999);m=!0,e.loadMode=3,W(),j("scroll",da,!0)}};return{_:function(){y=c.now(),d.elements=b.getElementsByClassName(e.lazyClass),g=b.getElementsByClassName(e.lazyClass+" "+e.preloadClass),j("scroll",W,!0),j("resize",W,!0),j("pageshow",function(a){if(a.persisted){var c=b.querySelectorAll("."+e.loadingClass);c.length&&c.forEach&&l(function(){c.forEach(function(a){a.complete&&ba(a)})})}}),a.MutationObserver?new MutationObserver(W).observe(f,{childList:!0,subtree:!0,attributes:!0}):(f[h]("DOMNodeInserted",W,!0),f[h]("DOMAttrModified",W,!0),setInterval(W,999)),j("hashchange",W,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(a){b[h](a,W,!0)}),/d$|^c/.test(b.readyState)?ea():(j("load",ea),b[h]("DOMContentLoaded",W),k(ea,2e4)),d.elements.length?(V(),z._lsFlush()):W()},checkElems:W,unveil:ba,_aLSL:da}}(),E=function(){var a,c=A(function(a,b,c,d){var e,f,g;if(a._lazysizesWidth=d,d+="px",a.setAttribute("sizes",d),n.test(b.nodeName||""))for(e=b.getElementsByTagName("source"),f=0,g=e.length;f<g;f++)e[f].setAttribute("sizes",d);c.detail.dataAttr||w(a,c.detail)}),d=function(a,b,d){var e,f=a.parentNode;f&&(d=y(a,f,d),e=v(a,"lazybeforesizes",{width:d,dataAttr:!!b}),e.defaultPrevented||(d=e.detail.width)&&d!==a._lazysizesWidth&&c(a,f,e,d))},f=function(){var b,c=a.length;if(c)for(b=0;b<c;b++)d(a[b])},g=C(f);return{_:function(){a=b.getElementsByClassName(e.autosizesClass),j("resize",g)},checkElems:g,updateElem:d}}(),F=function(){!F.i&&b.getElementsByClassName&&(F.i=!0,E._(),D._())};return k(function(){e.init&&F()}),d={cfg:e,autoSizer:E,loader:D,init:F,uP:w,aC:s,rC:t,hC:r,fire:v,gW:y,rAF:z}});
// lazysizes: add simple support for background images:
document.addEventListener('lazybeforeunveil', function(e){var bg = e.target.getAttribute('data-bg');if(bg){e.target.style.backgroundImage = 'url(' + bg + ')';}});