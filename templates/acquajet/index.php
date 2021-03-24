<?php
/**
 * Flex @package Helix3 Framework
 * Template Name - Flex
 * @author Aplikko http://www.aplikko.com
 * @copyright Copyright (c) 2019 Aplikko
 * @license http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 or later
*/
//no direct access
defined ('_JEXEC') or die ('restricted access');

$doc = JFactory::getDocument();
$app = JFactory::getApplication();
$menu = $app->getMenu()->getActive();

JHtml::_('jquery.framework');
JHtml::_('bootstrap.framework', true, true); //Force load Bootstrap
unset($doc->_scripts[$this->baseurl . '/media/jui/js/bootstrap.min.js']); // Remove joomla core bootstrap

//Load Helix
$helix3_path = JPATH_PLUGINS . '/system/helix3/core/helix3.php';

if (file_exists($helix3_path)) {
    require_once($helix3_path);
    $this->helix3 = helix3::getInstance();
} else {
    die('Please install and activate helix plugin');
}

// Remove the generator meta tag
if($this->params->get('remove_joomla_generator')) {
  $this->setGenerator(null);
}

//Coming Soon
if($this->helix3->getParam('comingsoon_mode')) header("Location: ".$this->baseUrl."?tmpl=comingsoon");

//Class Classes
$body_classes = '';
if ($this->helix3->getParam('sticky_header')) {
    $body_classes .= 'sticky-header ';
}
$body_classes .= ($this->helix3->getParam('boxed_layout', 0)) ? 'layout-boxed' : 'layout-fluid';

//Body Background Image
if ($bg_image = $this->helix3->getParam('body_bg_image')) {
	
    $body_style = 'background-image: url(' . JURI::base(true) . '/' . $bg_image . ');';
    $body_style .= 'background-repeat: ' . $this->helix3->getParam('body_bg_repeat') . ';';
    $body_style .= 'background-size: ' . $this->helix3->getParam('body_bg_size') . ';';
    $body_style .= 'background-attachment: ' . $this->helix3->getParam('body_bg_attachment') . ';';
    $body_style .= 'background-position: ' . $this->helix3->getParam('body_bg_position') . ';';
    $body_style = 'body.site {background-color:'.$this->helix3->PresetParam('_bg').';' . $body_style . '}';

    $doc->addStyledeclaration($body_style);
} else {
	$body_style = 'body.site {background-color:'.$this->helix3->PresetParam('_bg').';}';
	$doc->addStyledeclaration($body_style);
}

//Boxed Layout Width 
if ($this->params->get('boxed_layout') == 1) { 
	$boxed_background_color = '';
	
	$boxed_sticky_header = '
	.layout-boxed .sticky,
	.layout-boxed .sticky .sticky__wrapper,
	.layout-boxed .sticky .sticky__wrapper .sp-megamenu-parent .sp-dropdown{
		max-width:'.$this->helix3->getParam('boxed_layout_width').'px;
		margin:0 auto;
	}';

	if ($this->params->get('boxed_background_color') != '') { 
		$boxed_background_color = 'background-color:'.$this->helix3->getParam('boxed_background_color').';box-shadow:0 0 7px rgba(0,0,0,0.2);';
	} 
	$body_innerwrapper_overflow = '';
	
	if ($this->helix3->getParam('boxed_layout_spacing') != 0) { 
		$boxed_layout_spacing = 'margin:' . $this->helix3->getParam('boxed_layout_spacing') . 'px auto;';
		$boxed_layout_spacing .= $boxed_background_color;
		$boxed_layout_spacing .= 'max-width:'.$this->helix3->getParam('boxed_layout_width').'px;';
		$boxed_layout_spacing = 'body.layout-boxed .body-wrapper {margin:-' . $this->helix3->getParam('boxed_layout_spacing') . 'px auto 0;padding:' . $this->helix3->getParam('boxed_layout_spacing') . 'px 0 0;}body.layout-boxed .body-innerwrapper {' . $boxed_layout_spacing . '}
		';
		$doc->addStyledeclaration($boxed_layout_spacing);
	} else {
		$boxed_layout_spacing = $boxed_background_color;
		$boxed_layout_spacing .= 'max-width:'.$this->helix3->getParam('boxed_layout_width').'px;';
		$boxed_layout_spacing = 'body.layout-boxed .body-innerwrapper {' . $boxed_layout_spacing . '}
		';
		$doc->addStyledeclaration($boxed_layout_spacing);
	}
} else { 
	$body_innerwrapper_overflow = ' body_innerwrapper_overflow';
	$boxed_sticky_header = '';
}
		
//Body Font
$webfonts = array();

if ($this->params->get('enable_body_font')) {
    $webfonts['body'] = $this->params->get('body_font');
}

//Heading1 Font
if ($this->params->get('enable_h1_font')) {
    $webfonts['h1'] = $this->params->get('h1_font');
}

//Heading2 Font
if ($this->params->get('enable_h2_font')) {
    $webfonts['h2'] = $this->params->get('h2_font');
}

//Heading3 Font
if ($this->params->get('enable_h3_font')) {
    $webfonts['h3'] = $this->params->get('h3_font');
}

//Heading4 Font
if ($this->params->get('enable_h4_font')) {
    $webfonts['h4'] = $this->params->get('h4_font');
}

//Heading5 Font
if ($this->params->get('enable_h5_font')) {
    $webfonts['h5'] = $this->params->get('h5_font');
}

//Heading6 Font
if ($this->params->get('enable_h6_font')) {
    $webfonts['h6'] = $this->params->get('h6_font');
}

//Navigation Font
if ($this->params->get('enable_navigation_font')) {
    $webfonts['.sp-megamenu-parent'] = $this->params->get('navigation_font');
}

//Custom Font
if ($this->params->get('enable_custom_font') && $this->params->get('custom_font_selectors')) {
    $webfonts[$this->params->get('custom_font_selectors')] = $this->params->get('custom_font');
}

$this->helix3->addGoogleFont($webfonts);


// SmoothScroll.js
if ($this->params->get('smooth_scroll_version') == '0') { 
	$smooth_scroll_js = '';
} else if ($this->params->get('smooth_scroll_version') == '2') { 
	$smooth_scroll_js = 'SmoothScroll-1.4.9.js, ';
} else {
	$smooth_scroll_js = 'SmoothScroll.js, ';
}
	
	$js_vars = '
	var sp_preloader = "' . $this->params->get('preloader') . '";
	var sp_offanimation = "' . $this->params->get('offcanvas_animation') . '";
	var stickyHeaderVar = "' . $this->params->get('sticky_header') . '";

	';
	  
	if ($this->params->get('sticky_header') == 1) {
		$stickyHeaderAppearVar = ($this->helix3->getParam('sticky_header_appear_point')) ? 'var stickyHeaderAppearPoint = ' . $this->params->get('sticky_header_appear_point') . ';' : 'var stickyHeaderAppearPoint = 250;';
	} else {
		$stickyHeaderAppearVar = '';
	}
	 
	$all_js_vars = $js_vars . $stickyHeaderAppearVar;
	$all_js_vars = preg_replace(array('/([\s])\1+/', '/[\n\t]+/m'), '', $all_js_vars); // Remove whitespace
	$doc->addScriptdeclaration($all_js_vars);
		
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" dir="<?php echo $this->direction; ?>">
        <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <?php
            if ($favicon = $this->helix3->getParam('favicon')) {
                $doc->addFavicon(JURI::base(true) . '/' . $favicon);
            } else {
                $doc->addFavicon($this->helix3->getTemplateUri() . '/images/favicon.ico');
            }
        ?>
        
        <!-- head -->
        <jdoc:include type="head" />
                <?php			
                $preloader_bg = ($this->helix3->getParam('preloader_bg')) ? $this->helix3->getParam('preloader_bg') : 'rgba(245,245,245,0.43)';
                $preloader_tx = ($this->helix3->getParam('preloader_tx')) ? $this->helix3->getParam('preloader_tx') : '#f5f5f5';
				
                // load css, less and js
                $this->helix3->addCSS('bootstrap.min.css, font-awesome.min.css') // CSS Files
                       ->addJS('bootstrap.min.js, '.$smooth_scroll_js.'jquery.easing.min.js, main.js') // JS Files
                        ->lessInit()->setLessVariables(array(
                            'preset' => $this->helix3->Preset(),
                            'bg_color' => $this->helix3->PresetParam('_bg'),
                            'text_color' => $this->helix3->PresetParam('_text'),
                            'major_color' => $this->helix3->PresetParam('_major'),
                            'preloader_bg' => $preloader_bg,
                            'preloader_tx' => $preloader_tx,
                        ))
                        ->addLess('legacy/bootstrap', 'legacy')
                        ->addLess('master', 'template')
                        ->addLess('sliderpro', 'sliderpro')
                        ->addLess('override', 'override')
                        ->addLess('cookieconsent', 'cookieconsent');
			
                //RTL
                if ($this->direction == 'rtl') {
                    $this->helix3->addCSS('bootstrap-rtl.min.css')
                            ->addLess('rtl', 'rtl');
                }

                //$this->helix3->addLess('presets', 'presets/' . $this->helix3->Preset(), array('class' => 'preset'));
                if ($app->input->get('id')=="96") {
                	$this->helix3->addCSS('presets/static/preset-green.css');
                } else {
                	$this->helix3->addCSS('presets/static/preset-blue.css');
                }

                //Before Head
                if ($before_head = $this->helix3->getParam('before_head')) {
                    echo $before_head . "\n";
           		}
				
         ?>
    </head>
    <body class="<?php echo $this->helix3->bodyClass($body_classes); ?> off-canvas-menu-init">
    	<?php if ($this->helix3->countModules('floating')) { ?>
                <jdoc:include type="modules" name="floating" style="sp_xhtml" />
		<?php } ?>
                        
    	<?php // added class "body-wrapper". It was only "off-canvas-menu-wrap" before. ?>
        <div class="body-wrapper off-canvas-menu-wrap">
            <div class="body-innerwrapper<?php echo $body_innerwrapper_overflow; ?>">
    			<?php $this->helix3->generatelayout(); ?>
            </div> <!-- /.body-innerwrapper -->
        </div> <!-- /.body-wrapper -->
        
        <!-- Off Canvas Menu -->
        <div class="offcanvas-menu">
            <a href="#" class="close-offcanvas" aria-label="Close"><i class="fa fa-remove" aria-hidden="true"></i></a>
            <div class="offcanvas-inner">
                <?php if ($this->helix3->countModules('offcanvas')) { ?>
                    <jdoc:include type="modules" name="offcanvas" style="sp_xhtml" />
                    <?php } else { ?>
                    <p class="alert alert-warning">
                    <?php echo JText::_('HELIX_NO_MODULE_OFFCANVAS'); ?>
                    </p>
    	<?php } ?>
            </div> <!-- /.offcanvas-inner -->
        </div> <!-- /.offcanvas-menu -->

        <?php
		// Header (new from Flex 3.0)
		$header_height = ($this->helix3->getParam('header_height')) ? $this->helix3->getParam('header_height') : '90';
		$sticky_header_height = ($this->helix3->getParam('sticky_header_height')) ? $this->helix3->getParam('sticky_header_height') : '75';
		$header_link_color = ($this->helix3->getParam('header_link_color')) ? 'color:'. $this->helix3->getParam('header_link_color') : '';
		$header_active_link_color = ($this->helix3->getParam('header_active_link_color')) ? $this->helix3->getParam('header_active_link_color') : '';
		$headerbgcolor = ($this->helix3->getParam('headerbg')) ? 'background:'. $this->helix3->getParam('headerbg') .';' : '';
		$stickybgcolor = ($this->helix3->getParam('stickybg')) ? 'background:'. $this->helix3->getParam('stickybg') .';' : '';
		$mega_dropdown_bg = ($this->helix3->getParam('mega_dropdown_bg')) ? 'background:'. $this->helix3->getParam('mega_dropdown_bg') : '';
		$mega_dropdown_color = ($this->helix3->getParam('mega_dropdown_color')) ? 'color:'. $this->helix3->getParam('mega_dropdown_color') : '';
		$sticky_appearance_animation = ($this->helix3->getParam('sticky_appearance_animation')) ? '-webkit-animation-name:'. $this->helix3->getParam('sticky_appearance_animation') .';animation-name:'. $this->helix3->getParam('sticky_appearance_animation') .';' : '-webkit-animation-name:fade-in-down;animation-name:fade-in-down;';
		$sticky_appearance_none = ($this->helix3->getParam('sticky_appearance_animation') == 'none') ? '-webkit-transition:none;-moz-transition:none;-o-transition:none;transition:none;' : '';
		
		$sticky_header_link_color = ($this->helix3->getParam('sticky_header_link_color')) ? 'color:'. $this->helix3->getParam('sticky_header_link_color') : '';
		$sticky_header_active_link_color = ($this->helix3->getParam('sticky_header_active_link_color')) ? $this->helix3->getParam('sticky_header_active_link_color') : '';
		
		// Off-canvas
		$offcanvas_bg = ($this->helix3->getParam('offcanvas_bg')) ? 'background:'. $this->helix3->getParam('offcanvas_bg') : '';
		$offcanvas_color = ($this->helix3->getParam('offcanvas_color')) ? $this->helix3->getParam('offcanvas_color') : '';
		$offcanvas = '.offcanvas-menu{'. $offcanvas_bg .'}.offcanvas-menu ul li a{color: '. $offcanvas_color .'}.offcanvas-menu .offcanvas-inner .search input.inputbox{border-color: '. $offcanvas_color .'}';
		$doc->addStyledeclaration($offcanvas);
		
		$header_styling = '
		#sp-header .top-search-wrapper .icon-top-wrapper,
		#sp-header .top-search-wrapper .icon-top-wrapper >i:before,
		.sp-megamenu-wrapper > .sp-megamenu-parent >li >a,
		.sp-megamenu-wrapper #offcanvas-toggler,
		#sp-header .modal-login-wrapper span,
		#sp-header .ap-my-account i.pe-7s-user,
		#sp-header .ap-my-account .info-text,
		#sp-header .mod-languages,
		.logo,
		#cart-menu,
		#cd-menu-trigger,
		.cd-cart,
		.cd-cart > i{  
			height:' . $header_height . 'px;
			line-height:' . $header_height . 'px;
		}
		.total_products{top:calc('. $header_height .'px / 2 - 22px);}
		#sp-header,
		.transparent-wrapper{
			height:' . $header_height . 'px;
			'.$headerbgcolor.'
		}
		.transparent,
		.sticky-top{
			'.$headerbgcolor.'
		}
		#sp-header #sp-menu .sp-megamenu-parent >li >a,
		#sp-header #sp-menu .sp-megamenu-parent li .sp-dropdown >li >a,
		#sp-header .top-search-wrapper .icon-top-wrapper i,
		#sp-header #cd-menu-trigger i,
		#sp-header .cd-cart i,
		#sp-header .top-search-wrapper{'. $header_link_color .'}
		#sp-header #sp-menu .sp-dropdown .sp-dropdown-inner{'. $mega_dropdown_bg .'}
		#sp-header #sp-menu .sp-dropdown .sp-dropdown-inner li.sp-menu-item >a,
		#sp-header #sp-menu .sp-dropdown .sp-dropdown-inner li.sp-menu-item.separator >a,
		#sp-header #sp-menu .sp-dropdown .sp-dropdown-inner li.sp-menu-item.separator >a:hover,
		#sp-header .sp-module-content ul li a,
		#sp-header .vm-menu .vm-title{'. $mega_dropdown_color .'}		
		';
		// Onepage
		if ($this->helix3->getParam('header_active_link_color') != '') { 
			$active_link_color = '
			#sp-header #sp-menu .sp-megamenu-parent >li.active>a,
			#sp-header #sp-menu .sp-megamenu-parent >li.current-item>a,
			#sp-header #sp-menu .sp-megamenu-parent >li.sp-has-child.active>a,
			#offcanvas-toggler >i,
			#offcanvas-toggler >i:hover{color:'. $header_active_link_color .'}
			#sp-header #sp-menu .sp-megamenu-parent .sp-dropdown li.sp-menu-item.current-item>a,
			#sp-header #sp-menu .sp-megamenu-parent .sp-dropdown li.sp-menu-item.current-item.active>a,
			#sp-header #sp-menu .sp-megamenu-parent .sp-dropdown li.sp-menu-item.current-item.active:hover>a,
			#sp-header #sp-menu .sp-megamenu-parent .sp-dropdown li.sp-menu-item a:hover{
			  color: #fff;
			  background-color:'. $header_active_link_color .';
			}
			#sp-header.onepage .sp-megamenu-parent li.active a,
			#sp-header.onepage .sp-megamenu-parent li.active:first-child >a.page-scroll{
				color:'. $header_active_link_color .';
				border-bottom-color:'. $header_active_link_color .';
			}
			';
		} else {
			$active_link_color = '';
		}
		
		if ($this->params->get('sticky_header') == 1) { 
			$sticky_header_styling = '
			.sticky .logo,
			.sticky #cart-menu,
			.sticky #cd-menu-trigger,
			.sticky .cd-cart,
			.sticky .cd-cart >i,
			.sticky .menu-is-open >i,
			#sp-header.sticky .modal-login-wrapper span,
			#sp-header.sticky .ap-my-account i.pe-7s-user,
			#sp-header.sticky .ap-my-account .info-text,
			#sp-header.sticky .mod-languages,
			#sp-header.sticky .top-search-wrapper .icon-top-wrapper,
			#sp-header.sticky .top-search-wrapper .icon-top-wrapper >i:before,
			.sticky .sp-megamenu-wrapper > .sp-megamenu-parent >li >a,
			.sticky .sp-megamenu-wrapper #offcanvas-toggler,
			.sticky #sp-logo a.logo{ 
				height:'.$sticky_header_height.'px;
				line-height:'.$sticky_header_height.'px;
			 }
			 .sticky .total_products{top: calc('. $sticky_header_height .'px / 2 - 22px);}
			 .sticky .sticky__wrapper{
				'.$stickybgcolor.'
				 height:'.$sticky_header_height.'px;
				 '. $sticky_appearance_none . $sticky_appearance_animation .'
			}
			'. $boxed_sticky_header .'
			.sticky .sticky__wrapper .sp-sticky-logo {
				height:'.$sticky_header_height.'px;
			}
			.sticky.onepage .sticky__wrapper,
			.sticky.white .sticky__wrapper,
			.sticky.transparent .sticky__wrapper{
				'.$stickybgcolor.'
			} 
			#sp-header.sticky #sp-menu .sp-megamenu-wrapper .sp-megamenu-parent >li >a,
			#sp-header.sticky .top-search-wrapper,
			#sp-header.sticky .top-search-wrapper .icon-top-wrapper i,
			#sp-header.sticky #cd-menu-trigger i,
			#sp-header.sticky .cd-cart i{
				'. $sticky_header_link_color .';
			}	
			#sp-header.sticky #sp-menu .sp-megamenu-wrapper .sp-megamenu-parent >li.active>a,
			#sp-header.sticky #sp-menu .sp-megamenu-wrapper .sp-megamenu-parent >li.current-item>a,
			#sp-header.sticky #sp-menu .sp-megamenu-wrapper .sp-megamenu-parent >li.sp-has-child.active>a,
			.sticky #offcanvas-toggler >i,
			.sticky #offcanvas-toggler >i:hover{
				color:'. $sticky_header_active_link_color .';
			}
			 ';
			 
			$header_css = $header_styling . $active_link_color . $sticky_header_styling;
			$header_css = preg_replace(array('/([\s])\1+/', '/[\n\t]+/m'), '', $header_css); // Remove whitespace
			$doc->addStyledeclaration($header_css);
		} else { 
			$header_css = $header_styling . $active_link_color;
			$header_css = preg_replace(array('/([\s])\1+/', '/[\n\t]+/m'), '', $header_css); // Remove whitespace
			$doc->addStyledeclaration($header_css);
		}
		
		//Custom CSS
		if ($custom_css = $this->helix3->getParam('custom_css')) {
			$doc->addStyledeclaration($custom_css);
		}
		
		//Custom JS
		if ($custom_js = $this->helix3->getParam('custom_js')) {
			$doc->addScriptdeclaration($custom_js);
		}


        if ($this->params->get('compress_css')) {
            $this->helix3->compressCSS();
        }
		
		
		$tempOption = $app->input->get('option');

		if ( $this->params->get('compress_js') && $tempOption != 'com_config' ) {
                $this->helix3->compressJS($this->params->get('exclude_js'));
		}
		

		//before body
		if ($before_body = $this->helix3->getParam('before_body')) {
			echo $before_body . "\n";
		} 
        
        // Removes: jQuery(window).on('load', function() {new JCaption('img.caption');});
        if (isset($this->_script['text/javascript'])) {
            $this->_script['text/javascript'] = preg_replace('%jQuery\(\window\)\.on\(\'load\',\s*function\(\)\s*{\s*new\s*JCaption\(\'img.caption\'\);\s*}\);\s*%', '', $this->_script['text/javascript']);
            if (empty($this->_script['text/javascript']))
                unset($this->_script['text/javascript']);
        }
        
        // Removes Mootools library	
        if($this->params->get('remove_mootools')) {
            unset($doc->_scripts[$this->baseurl . '/media/system/js/mootools-core.js']);
            unset($doc->_scripts[$this->baseurl . '/media/system/js/core.js']);
            unset($doc->_scripts[$this->baseurl . '/media/system/js/mootools-more.js']);
            unset($doc->_scripts[$this->baseurl . '/media/system/js/caption.js']);
        }
        // Custom fix for conflict with Mootools		
        if($this->params->get('mootools_fix')) {
            $doc->addScriptDeclaration('window.addEvent("domready",function(){Element.prototype.hide=function(){}});');
        }
        ?>

        <script type="text/javascript">
	/* <![CDATA[ */
		var google_conversion_id = 1024651226;var google_custom_params = window.google_tag_params;var google_remarketing_only = true;/* ]]> */
		</script>
		<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js"></script>
		<noscript><div style="display:inline;"><img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/1024651226/?value=0&amp;guid=ON&amp;script=0"/></div></noscript>

		<script>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','//www.google-analytics.com/analytics.js','ga'); ga('create', 'UA-12408332-1', 'auto');  ga('send', 'pageview');
		</script>

		<script>
		!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
		n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
		n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
		t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
		document,'script','https://connect.facebook.net/en_US/fbevents.js');

		fbq('init', '438228106364588');
		fbq('track', "PageView");</script>
		<noscript><img height="1" width="1" alt="" style="display:none"
		src="https://www.facebook.com/tr?id=438228106364588&ev=PageView&noscript=1"
		/></noscript>

		<!-- Google Tag Manager -->
		<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-5D6QK8"
		height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
		<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-5D6QK8');</script>
		<!-- End Google Tag Manager -->


    
        <jdoc:include type="modules" name="debug" />
        <!-- Preloader -->
        <jdoc:include type="modules" name="helixpreloader" />
    </body>
</html>