function kameleon_copy_input(a,b,c,d){jQuery(b).val(jQuery(a).val()),13==c.keyCode&&""!=jQuery.trim(jQuery(b).val())&&jQuery(d).click()}function kameleon_woocommece_modern(){jQuery('#km-content[data-product-layout="modern"] .km-woo-single-insider, body.woocommerce-cart #km-data, body.woocommerce-checkout #km-data').css({left:-parseInt((jQuery(window).width()-jQuery("#km-content").width())/2)+"px"})}function kameleon_woocommece_input_check(a){""!=jQuery.trim(a.val())?a.parent(".form-row").find("label").hide():a.parent(".form-row").find("label").show()}function pc_showinfo(a){var a=jQuery(a),b=a.parent(".pc-show").parent(".portfolio-card-info");"hidden"==b.attr("data-sit")?(b.removeClass("portfolio-card-info-hidden").addClass("portfolio-card-info-shown"),b.attr("data-sit","shown"),a.addClass("open")):"shown"==b.attr("data-sit")&&(b.removeClass("portfolio-card-info-shown").addClass("portfolio-card-info-hidden"),b.attr("data-sit","hidden"),a.removeClass("open"))}function kameleonSearchShow(a){var b=jQuery.trim(jQuery(a).attr("data-situation")),c=jQuery.trim(jQuery(a).attr("data-type"));"shown"==b?(jQuery(a).attr({"data-situation":"hidden"}),"topfixed"==c&&jQuery("#km-container").attr({"data-searchtop":"false"})):"hidden"==b&&(jQuery(a).attr({"data-situation":"shown"}),"topfixed"==c&&jQuery("#km-container").attr({"data-searchtop":"true"}))}function kameleonSearchHide(a){jQuery(a).attr({"data-situation":"hidden"}),jQuery("#km-container").attr({"data-searchtop":"false"})}function toggleSlidingBar(a){var a=jQuery(a),b=jQuery(a).attr("data-situation"),c=jQuery(a).attr("data-icon-show"),d=jQuery(a).attr("data-icon-hide");if("hidden"==b){var e=jQuery("#km-slidingbar").show().height();jQuery("#km-slidingbar").hide(),jQuery("#km-slidingbar").slideToggle("fast"),jQuery(a).animate({marginTop:e+"px"},"fast"),jQuery(a).attr("data-situation","shown"),jQuery(a).children("i").attr("class",c)}"shown"==b&&(jQuery(a).attr("data-situation","hidden"),jQuery(a).animate({marginTop:"0px"},"fast"),jQuery(a).children("i").attr("class",d),jQuery("#km-slidingbar").slideToggle("fast"))}function showResponsiveMenu(){var a=jQuery("#responsive-menu"),b=a.attr("data-menu-style");"drop-down"==b&&("hidden"==a.attr("data-situation")?(a.slideDown(500),a.attr("data-situation","shown"),jQuery("#km-mheader-icon").addClass("open")):"shown"==a.attr("data-situation")&&(a.slideUp(500),a.attr("data-situation","hidden"),jQuery("#km-mheader-icon").removeClass("open"))),"left-side"==b&&("hidden"==a.attr("data-situation")?(a.css({left:"0%"}),a.attr("data-situation","shown"),jQuery("#km-mheader-icon").addClass("open")):"shown"==a.attr("data-situation")&&(a.css({left:"-100%"}),a.attr("data-situation","hidden"),jQuery("#km-mheader-icon").removeClass("open"))),"right-side"==b&&("hidden"==a.attr("data-situation")?(a.css({right:"0%"}),a.attr("data-situation","shown"),jQuery("#km-mheader-icon").addClass("open")):"shown"==a.attr("data-situation")&&(a.css({right:"-100%"}),a.attr("data-situation","hidden"),jQuery("#km-mheader-icon").removeClass("open")))}function showSlideWidgetArea(){var a=jQuery("#km-slide-widgetarea");"hidden"==a.attr("data-situation")?(a.attr("data-situation","shown"),theBossMove(a.attr("data-position"),a.outerWidth()),jQuery("#km-swa-icon").addClass("open")):"shown"==a.attr("data-situation")&&(a.attr("data-situation","hidden"),jQuery("#km-theboss").css({left:"0px"}),jQuery("#km-swa-icon").removeClass("open"))}function showSideHeaderMinimalist(a){var b=jQuery("#"+a+"-minimalist-header");"hidden"==b.attr("data-situation")?(b.attr("data-situation","shown"),jQuery(".km-dark-overlay").attr("data-situation","shown"),theBossMove(b.attr("data-position"),b.outerWidth()),theDivMove("body[data-footer-effect='true'] #km-footer",b.attr("data-position"),b.outerWidth()),jQuery("#km-side-icon").addClass("open")):"shown"==b.attr("data-situation")&&(b.attr("data-situation","hidden"),jQuery(".km-dark-overlay").attr("data-situation","hidden"),jQuery("#km-theboss, body[data-footer-effect='true'] #km-footer").css({left:"0px"}),jQuery("#km-side-icon").removeClass("open"))}function showFullscreenHeaderMinimalist(a){var b=jQuery("#kameleon-fullscreen-menu-container");"hidden"==b.attr("data-situation")?(b.attr("data-situation","shown"),jQuery("#km-fullscreen-icon").addClass("open")):"shown"==b.attr("data-situation")&&(b.attr("data-situation","hidden"),jQuery("#km-fullscreen-icon").removeClass("open"))}function kameleonFullscreenHide(){jQuery("#kameleon-fullscreen-menu-container").attr("data-situation","hidden")}function theBossMove(a,b){"right"==a&&jQuery("#km-theboss").css({left:-b+"px"}),"left"==a&&jQuery("#km-theboss").css({left:b+"px"})}function theDivMove(a,b,c){"right"==b&&jQuery(a).css({left:-c+"px"}),"left"==b&&jQuery(a).css({left:c+"px"})}function showSideMenu(){var a=jQuery("#km-header-side"),b=a.attr("data-bar-position");"left"==b&&("hidden"==a.attr("data-situation")?(a.attr("data-situation","shown"),jQuery("#km-hv5_icon").addClass("open")):"shown"==a.attr("data-situation")&&(a.attr("data-situation","hidden"),jQuery("#km-hv5_icon").removeClass("open"))),"right"==b&&("hidden"==a.attr("data-situation")?(a.attr("data-situation","shown"),jQuery("#km-hv5_icon").addClass("open")):"shown"==a.attr("data-situation")&&(a.attr("data-situation","hidden"),jQuery("#km-hv5_icon").removeClass("open")))}function preventLink(a){a.stopPropagation()}function showDropDownMenu(a,b){b.preventDefault();var c=jQuery(a).parent("a").parent(".is-parent").children(".child-responsive-menu");"hidden"==c.attr("data-situation")?(c.slideDown(300),c.attr("data-situation","shown"),jQuery(a).attr("class","fa fa-chevron-down")):"shown"==c.attr("data-situation")&&(c.slideUp(300),c.attr("data-situation","hidden"),jQuery(a).attr("class","fa fa-chevron-right"))}function show_coupon(a){var a=jQuery(a);"hidden"==a.attr("action")?(a.html('<i class="fa fa-chevron-up"></i>'),a.attr("action","shown")):"shown"==a.attr("action")&&(a.html('<i class="fa fa-chevron-down"></i>'),a.attr("action","hidden")),a.parent("h2").parent("section").children(".km-woo-section-f").slideToggle("fast")}function minus_number(a){var b=jQuery(a).parent(".kameleon_qty").children(".input-text"),c=parseInt(b.val())-1;c<1&&(c=1),b.val(c),b.change()}function plus_number(a){var b=jQuery(a).parent(".kameleon_qty").children(".input-text"),c=parseInt(b.val())+1;b.val(c),b.change()}function _switch_options(a){var b=jQuery(a);jQuery(".kmo-tab").removeClass("kmo-tab-active"),b.addClass("kmo-tab-active");var c=b.attr("option-id");jQuery(".kmb-op-container").removeClass("kmb-op-container-active"),jQuery(c).addClass("kmb-op-container-active")}function continue_options(a){var b=jQuery(a).attr("tab-id");jQuery(b).click()}function close_alert(a){jQuery(a).parent(".km-alert-box").fadeOut(500)}function show_modalwindow(a){var b=jQuery(a),c=b.attr("data-modal");jQuery('.km-overlay[data-modal="'+c+'"]').fadeIn(10,function(){jQuery("#"+c).addClass("km-show"),b.hasClass("km-setperspective")&&setTimeout(function(){jQuery("html").addClass("km-perspective")},25)})}function close_modalwindow(){jQuery("html").removeClass("km-perspective"),jQuery(".km-modal").removeClass("km-show"),jQuery(".km-overlay").hide(200)}function material_input(a){jQuery(".material-container").children("hr").css({width:"0%"}),jQuery(a).parent(".material-container").children("hr").css({width:"100%"})}function onScrollOnePageMenu(a){var b=jQuery(document).scrollTop();jQuery("#km-main-menu li").each(function(){var a=jQuery(this),c=jQuery(a.find("a").attr("href"));c.length&&(c.position().top<=b?(jQuery("#km-main-menu ul li").removeClass("current-menu-item"),a.addClass("current-menu-item")):a.removeClass("current-menu-item"))})}function onScrollNavigationDot(a){var b=jQuery(document).scrollTop();jQuery(".km-dot-nav-ele").each(function(){var a=jQuery(this),c=jQuery(a.attr("data-id"));c.length&&(c.position().top<=b?(jQuery(".km-dot-nav-ele").attr({"data-situation":"inactive"}),a.attr({"data-situation":"active"})):a.attr({"data-situation":"inactive"}))})}function kameleon_close_parent(a){jQuery(a).parent("div").slideUp(400)}function kameleonEscapePressed(){jQuery("#kameleon-search-container").attr({"data-situation":"hidden"}),jQuery(".km-paj-overlay").attr({"data-done":"loading","data-situation":"hidden"}),jQuery(".kameleon-side-header-minimalist, .km-dark-overlay, #km-slide-widgetarea").attr("data-situation","hidden"),jQuery("#km-theboss, body[data-footer-effect='true'] #km-footer").css({left:"0px"}),close_modalwindow(),kameleonFullscreenHide(),jQuery(".hamburger_1, .hamburger_2, .hamburger_3, .hamburger_4").each(function(){jQuery(this).removeClass("open")}),jQuery("html").css({"overflow-y":"scroll"})}function km_active_border_input(a){jQuery(a).parent(".km-input-parent").attr({"data-situation":"active"})}function km_inactive_border_input(a){jQuery(a).parent(".km-input-parent").attr({"data-situation":"inactive"})}function kameleon_megamenu_width(){jQuery('.km-mega-menu-container[data-mega-fullwidth="false"]').each(function(a,b){var c=jQuery("#km-container")[0].scrollWidth,d=jQuery("#km-container").offset().left-jQuery(b).parent("li").offset().left+20,e=jQuery(b).outerWidth();d<0&&(d=-1*d),e+d>=c&&jQuery(b).css({"margin-left":-(d+e-c)/2+"px"})})}function km_menu_goback(a){var b=jQuery(a),c=b.parent("ul"),d=b.parents("ul").parent("li").parent("ul");c.attr({"data-situation":""}),d.attr({"data-situation":""}),d.hasClass("ul-fullec-menu")||d.attr({"data-situation":"active"})}function km_menu_homeback(){jQuery(".ul-fullec-menu, .ul-fullec-menu ul").attr({"data-situation":""})}function kameleon_ajax_portfolio(a){var a=jQuery(a),b=a.attr("data-id"),c=a.attr("data-overlayid");jQuery(".km-paj-overlay").attr({"data-done":"loading","data-situation":"shown"}),jQuery(".km-paj-overlay .km-paj-image,.km-paj-overlay #km-portfolio-data,.km-paj-overlay #km-portfolio-content,.km-paj-overlay .km-paj-title").attr({"data-situation":""}),jQuery.ajax({type:"POST",data:{folio_id:b,ovy_id:c,action:"kameleonPortfolioAjaxShortcode"},dataType:"html",url:link.ajaxurl,success:function(a){var b=jQuery(a);b.length&&(jQuery("html").css({"overflow-y":"hidden"}),jQuery(".km-paj-overlay-result").html(b),jQuery(".km-paj-overlay").fadeIn(100),jQuery(".km-paj-overlay").attr({"data-done":"done"}),setTimeout(function(){jQuery(".km-paj-overlay .km-paj-image,.km-paj-overlay #km-portfolio-data,.km-paj-overlay #km-portfolio-content,.km-paj-overlay .km-paj-title").attr({"data-situation":"done"})},100))}})}function kameleon_portfolio_icon_chooser(a){var b=jQuery(a).parent(".km-pgallery-icons-galls").parent(".km-pgallery-icons").children(".km-pgallery-icons-active"),c=jQuery(a).attr("data-icon");b.children(".km-gallery-image").attr("data-active","false"),b.children(".km-gallery-image[data-image='"+c+"']").attr("data-active","true")}function kameleon_portfolio_slick_slider(){jQuery(".km-pgallery-wrapper").slick({infinite:!0,speed:300,slidesToShow:1,adaptiveHeight:!0,autoplay:!0,autoplaySpeed:6e3,arrows:!0,prevArrow:'<div class="slick-prev">←<div>',nextArrow:'<div class="slick-next">→<div>'})}function kameleon_dot_nav_go(a){var a=jQuery(a);jQuery(".km-dot-nav-ele").attr({"data-situation":"inactive"}),a.attr({"data-situation":"active"}),jQuery("html, body").animate({scrollTop:jQuery(a.attr("data-id")).offset().top},1e3)}function km_cf7_designer_focus(a){jQuery(".km_cf7-input-container").removeClass("filled"),jQuery(a).parent(".km_cf7-input-container").addClass("filled"),km_cf7_designer_checkfill()}function km_cf7_designer_blur(){jQuery(".km_cf7-input-container").removeClass("filled"),km_cf7_designer_checkfill()}function km_cf7_designer_checkfill(){jQuery(".km_cf7-input").each(function(){var a=jQuery(this);""!=jQuery.trim(a.val())&&a.parent(".km_cf7-input-container").addClass("filled")})}function kmfc7_svg_adder(){jQuery(".km_cf7-input-container").find(".km_cf7-graphic").remove(),jQuery('.kameleon-cf7-container[data-style="shoko"]').children(".km_cf7-input-container").append('<svg class="graphic km_cf7-graphic" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">\t\t\t\t\t<path vector-effect="non-scaling-stroke" d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"/>\t\t\t\t\t<path vector-effect="non-scaling-stroke" d="M0,2.5c0,0,298.666,0,399.333,0C448.336,2.5,513.994,13,597,13c77.327,0,135-10.5,200.999-10.5c95.996,0,402.001,0,402.001,0"/>\t\t\t</svg>')}!function(a){"use strict";a(window).scroll(function(){var b=a("#km-header-wrapper"),c=a("#km-header");if(b.length){var d=b.offset().top,e=b.attr("data-sticky"),f=c.attr("data-starter-width"),g=c.attr("data-sticky-full-width"),h=parseInt(a(window).scrollTop())+100,i=a.trim(c.attr("data-fixed"));if(0==i&&(h=parseInt(a(window).scrollTop())-20),"true"==e||1==e){if(parseInt(d)<h){var j=b.attr("data-sbackground"),k=b.attr("data-scolor"),l=b.attr("data-sheight"),m=b.attr("data-sborder"),n=b.attr("data-slogo-width"),o=b.attr("data-slogo-height"),p=b.attr("data-slogo-marginTop");1==g&&c.attr("data-width","full-header"),a("#main-logo").find(".default-logo").attr("src",a("#main-logo").attr("data-sticky-logo")),a("#main-logo").find(".retina-logo").attr("src",a("#main-logo").attr("data-sticky-retlogo")),a("#main-logo").css({width:n+"px",height:o+"px","margin-top":p+"px"}),b.css({position:"fixed",top:"0px","background-color":j,height:l+"px","line-height":l+"px",color:k,"border-color":m}),a("#km-header-menu-center").css({"border-top-width":"0px"}),a(".km-hamburger-link div span").css({background:k}),b.addClass(" km-frame-width km-frame-top"),a(".header_v7 #km-main-menu").css({width:"calc(100% - "+n+"px)"}),c.css({position:"relative"})}if(0==a(window).scrollTop()){var q=b.attr("data-color"),r=b.attr("data-height"),s=b.attr("data-border"),t=b.attr("data-logo-width"),u=b.attr("data-logo-height"),v=b.attr("data-logo-marginTop");a("#main-logo").find(".default-logo").attr("src",a("#main-logo").attr("data-logo")),a("#main-logo").find(".retina-logo").attr("src",a("#main-logo").attr("data-retlogo")),b.removeClass(" km-frame-width km-frame-top"),a("#main-logo").css({width:t+"px",height:u+"px","margin-top":v+"px"}),b.css({position:"relative","background-color":"transparent",height:r+"px","line-height":r+"px",color:q,"border-color":s}),a("#km-header-menu-center").css({"border-top-width":"1px"}),a(".km-hamburger-link div span").css({background:q}),a(".header_v7 #km-main-menu").css({width:"calc(100% - "+t+"px)"}),c.attr("data-width",f),1==c.attr("data-fixed")&&c.css({position:"fixed"})}}}a('div[data-parallax-effect="yes"]').each(function(){var b=a(this),c=b.attr("data-parallax-speed"),d=b.css("backgroundPosition").split(" ");""!=b.attr("data-ypos-start")&&void 0!=b.attr("data-ypos-start")||b.attr("data-ypos-start",d[1]);var e=parseFloat(d[1])*parseFloat(b.css("height"))/100;"100%"==d[1]&&(e=-e);var f=window.pageYOffset*Number(c)-parseFloat(b.attr("data-ypos"))+"px";"0%"==b.attr("data-ypos-start")&&(f=parseFloat(b.attr("data-ypos"))-window.pageYOffset*Number(c)+"px"),"50%"==b.attr("data-ypos-start")&&(f="calc(50% + "+window.pageYOffset*Number(c)*.5+"px)"),""!=b.attr("data-ypos")&&void 0!=b.attr("data-ypos")||b.attr("data-ypos",e);var g="50% "+f;a(this).css({"background-position":g})})}),a(window).scroll(function(){a(this).scrollTop()>100?a("#km-gotop").css({opacity:"1"}):a("#km-gotop").css({opacity:"0"})}),a("body").hasClass("kameleon-one-page-menu")&&a(window).load(function(){a(document).on("scroll",onScrollOnePageMenu)}),a(window).load(function(){a("#km-pageloader").attr({"data-situation":"hide"}),a("#km-theboss").attr({"data-situation":"shown"}),a("#km-slide-widgetarea").attr({"data-howareyou":"shown"})}),a(document).ready(function(){"true"!=a("#km-theboss").attr("data-dotenabled")&&1!=a("#km-theboss").attr("data-dotenabled")||a(window).load(function(){a(document).on("scroll",onScrollNavigationDot)}),a(".km-back-follow").each(function(){a(this).hoverdir()}),a("#km-theboss[data-dotenabled='true'] .wc-row-parent").each(function(){var b=a(this).attr("id");if(""!=a.trim(b)&&void 0!=a.trim(b)&&"undefined"!=a.trim(b)){var c="#"+b;a(".km-dot-nav-c").append('<div class="km-dot-nav-ele" data-id="'+c+'" onclick="kameleon_dot_nav_go(this);"></div>')}}),kameleon_portfolio_slick_slider(),a(".km-hamburger-link").attr({"data-situation":"shown"}),a("#km-gotop").click(function(){a("html, body").animate({scrollTop:0},500)}),a(".full-screen-menu .menu-item-has-children > a").click(function(){a(this).parent("li").children("ul").children(".km-full-menuback-c").remove(),a(this).parent("li").parent("ul").attr({"data-situation":"opened"}),a(this).parent("li").children("ul").attr({"data-situation":"active"}).append('<li class="km-full-menuback-c"><div class="km-full-menuback-wh"><div class="km-full-menuback-icon"><div class="km-full-menuback Defaults-km-icon-angle-left" onclick="km_menu_goback(this);"></div></div><div onclick="km_menu_homeback();" class="km-full-menuhomeback Defaults-km-icon-uniE82D"></div></div></li>')}),a("#km-slide-widgetarea-content").jScrollPane({contentWidth:"0px"}),a(".km-twentytwenty-container[data-orientation!='vertical']").twentytwenty({default_offset_pct:.7}),a(".km-twentytwenty-container[data-orientation='vertical']").twentytwenty({default_offset_pct:.3,orientation:"vertical"}),a('.km-mega-menu-container[data-mega-fullwidth="true"]').each(function(b,c){a(c).css({"margin-left":a("#km-header-content").offset().left-a(c).parent("li").offset().left+20+"px"})}),"true"===a("#body").attr("data-ajax-effect")&&a("#km-theboss").find("a").click(function(){var b=a(this).attr("href"),c=a(this).attr("target");if("#"!=b.substring(0,1)&&"_blank"!=c)return a("#km-pageloader").attr({"data-situation":"shown","data-ajax":"ajaxeffect"}),a("html, body").animate({scrollTop:0}),setTimeout(function(){window.location.href=b},400),!1}),a(document).keydown(function(a){27==a.keyCode&&kameleonEscapePressed()}),a("form.wpcf7-form input,form.wpcf7-form textarea").focus(function(){a(".wpcf7-form-control-wrap").removeClass("wpcf7-form-focus-active");var b=a(this).parent(".wpcf7-form-control-wrap");b.addClass("wpcf7-form-focus-active")}),a(".km-sidebyside-container").find(".km-progressbar-container").each(function(){var b=a(this).attr("data-percent"),c=a(this).attr("data-style");"style_1"==c&&a(this).find(".km-progressbar-tooltip").css({left:"calc( "+b+"% - 35px )"}),a(this).find(".km-progressbar-thebar").css({width:b+"%"})}),a(".km-sidebyside-container").find(".km-radial-progressbar").each(function(){var b=a(this);setTimeout(function(){b.attr("data-progress",parseInt(b.attr("data-value")))},200);var c=0,d=parseInt(b.attr("data-value")),e=function(){if(parseInt(b.find(".perc-value").html())!=d){setTimeout(function(){b.find(".perc-value").html(c),c<d&&e(),c+=1},30)}};e()}),a(".km-progressbar-container").bind("inview",function(b){if(b){var c=a(this).attr("data-percent"),d=a(this).attr("data-style");"style_1"==d&&a(this).find(".km-progressbar-tooltip").css({left:"calc( "+c+"% - 35px )"}),a(this).find(".km-progressbar-thebar").css({width:c+"%"})}else a(this).unbind("inview")}),a(".km-radial-progressbar").bind("inview",function(b){var c=a(this);if(b){setTimeout(function(){c.attr("data-progress",parseInt(c.attr("data-value")))},200);var d=0,e=parseInt(c.attr("data-value")),f=function(){if(parseInt(c.find(".perc-value").html())!=e){setTimeout(function(){c.find(".perc-value").html(d),d<e&&f(),d+=1},30)}};f()}else a(this).unbind("inview")});var b=a(".syp-items-wrapper, .syp-items-wrapper-post");b.each(function(b,c){var c=a(c),d={itemSelector:".syp-item",transitionDuration:0,percentPosition:!0,masonry:{columnWidth:".syp-item",gutter:parseInt(c.attr("data-gutter"))}};imagesLoaded(c,function(){c.isotope(d),c.css({opacity:"1"})})}),a(".km-masonry-item").bind("inview",function(b){b?a(this).removeClass("km-masonry-item-hidden").addClass("km-masonry-item-shown"):a(this).unbind("inview")}),a(".km-filteri-items-list,.km-portfolio-loop,.syp-items-wrapper").each(function(b){var c=a(this),d=c.attr("data-columns"),e=0,f=1,g=1;c.children(".km-masonry-item,.portfolio-item").each(function(b,c){b+=1,g+=2,e="."+g+"s",a(this).css({"-webkit-transition":"all .4s ease-in-out "+e+", box-shadow .3s ease-in-out",transition:"all .4s ease-in-out "+e+", box-shadow .3s ease-in-out"}),b==d*f&&(f+=1,g=1)})}),a(".km-line-sep-container").bind("inview",function(b){b?a(this).addClass("km-line-shown"):a(this).unbind("inview")}),a(".km-item-bind-view").bind("inview",function(b){b?a(this).removeClass("km-item-bind-hidden").addClass("km-item-bind-shown"):a(this).unbind("inview")}),a(".syp-portfolio-filter").children(".km-filter-link").click(function(){var b=a(this),c=a(".km-porfolio-filter").attr("data-active-style");a(".km-filter-link").removeClass(c),b.addClass(c),b.parent(".km-filteri-cats").children(".km-filter-it-link").attr({"data-active":"false"}),b.attr({"data-active":"true"});var d=b.attr("data-filter");b.parent(".km-porfolio-filter").parent(".km-filter-it-container-c").next(".syp-items-wrapper").find(".portfolio-item:not("+d+")").addClass("portfolio-item-hidden"),b.parent(".km-porfolio-filter").parent(".km-filter-it-container-c").next(".syp-items-wrapper").find(d).removeClass("portfolio-item-hidden").addClass("portfolio-item-shown"),b.parent(".km-porfolio-filter").parent(".km-filter-it-container-c").next(".syp-items-wrapper").isotope({filter:d,transitionDuration:0})});var c=a(".km-filteri-items-list");c.each(function(b,c){var c=a(c),d={itemSelector:".km-filteri-item",transitionDuration:0,percentPosition:!0,masonry:{columnWidth:".km-filteri-item",gutter:25}};imagesLoaded(c,function(){c.isotope(d),c.css({opacity:"1"})})}),a(".km-filteri-cats").children(".km-filteri-link").click(function(){var b=a(this);b.parent(".km-filteri-cats").children(".km-filteri-link").attr({"data-active":"false"}),b.attr({"data-active":"true"});var c=b.attr("data-filter");b.parent(".km-filteri-cats").next(".km-filteri-items-list").find(".km-filteri-item:not("+c+")").addClass("km-filteri-item-hidden"),b.parent(".km-filteri-cats").next(".km-filteri-items-list").find(c).removeClass("km-filteri-item-hidden").addClass("km-filteri-item-shown"),b.parent(".km-filteri-cats").next(".km-filteri-items-list").isotope({filter:c,transitionDuration:0})}),a(".one-page-menu").find(".main-menu-link").click(function(){var b=a(this).attr("href");return a(".one-page-menu").find("li").removeClass("current-menu-item"),a(this).parent("li").addClass("current-menu-item"),a("html, body").animate({scrollTop:a(b).offset().top},1e3),!1}),kameleon_woocommece_modern();var d=a("#km-footer").height()+parseInt(a("#km-footer").css("border-top-width"))+parseInt(a("#km-footer").css("border-bottom-width"));a('body[data-footer-effect="true"] #km-wrapper').css({"margin-bottom":d}),a(window).resize(function(){var b=a("#km-footer").height()+parseInt(a("#km-footer").css("border-top-width"))+parseInt(a("#km-footer").css("border-bottom-width"));a('body[data-footer-effect="true"] #km-wrapper').css({"margin-bottom":b}),kameleon_woocommece_modern()});var e=jQuery(".related-p-slider"),f={itemSelector:".related-p",transitionDuration:0,percentPosition:!0};imagesLoaded(e,function(){e.isotope(f),e.css({opacity:"1"})}),a(".kameleon-billing-details .form-row input").each(function(b){kameleon_woocommece_input_check(a(this))}),a(".kameleon-billing-details .form-row input").focusin(function(){kameleon_woocommece_input_check(a(this))}),a(".kameleon-billing-details .form-row input").focusout(function(){kameleon_woocommece_input_check(a(this))}),a(".kameleon-billing-details .form-row input").keydown(function(){kameleon_woocommece_input_check(a(this))}),kmfc7_svg_adder()})}(jQuery),audiojs.events.ready(function(){audiojs.createAll()});