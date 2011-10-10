var whichPic = 1;
var currentPage = "#page2"
var currentSubPage = "#page1-sub1-page"
var bg_1_pic = "7.jpg"
var bg_2_pic = "7.jpg"
var agent=navigator.userAgent.toLowerCase();
var is_iphone = ((agent.indexOf('iphone') != -1));
var is_ipad = ((agent.indexOf('ipad') != -1));
var is_safari = ((agent.indexOf('safari') != -1));
jQuery.noConflict();
jQuery(document).ready(function() {
  changePage("#page1");
  jQuery('%ul.submenu li').click(
	  function () {
			toggleSubPage(this)
	  }
	);
  jQuery('#slider').nivoSlider(
    {
  						effect:'fade', // Specify sets like: 'fold,fade,sliceDown'
  		        slices:15, // For slice animations
  		        boxCols: 8, // For box animations
  		        boxRows: 6, // For box animations
  		        animSpeed:800, // Slide transition speed
  		        pauseTime:4000, // How long each slide will show
  		        startSlide:0, // Set starting Slide (0 index)
  		        directionNav:false, // Next & Prev navigation
  		        directionNavHide:false, // Only show on hover
  		        controlNav:false, // 1,2,3... navigation
  		        controlNavThumbs:false, // Use thumbnails for Control Nav
  		        controlNavThumbsFromRel:false, // Use image rel for thumbs
  		        controlNavThumbsSearch: '.jpg', // Replace this with...
  		        controlNavThumbsReplace: '_thumb.jpg', // ...this in thumb Image src
  		        keyboardNav:false, // Use left & right arrows
  		        pauseOnHover:false, // Stop animation while hovering
  		        manualAdvance:false, // Force manual transitions
  		        captionOpacity:0.8, // Universal caption opacity
  		        prevText: 'Prev', // Prev directionNav text
  		        nextText: 'Next', // Next directionNav text
  		        beforeChange: function(){}, // Triggers before a slide transition
  		        afterChange: function(){}, // Triggers after a slide transition
  		        slideshowEnd: function(){}, // Triggers after all slides have been shown
  		        lastSlide: function(){}, // Triggers when last slide is shown
  		        afterLoad: function(){} // Triggers when slider has loaded
  		}
  );
	//document.body.style.display = 'block';
	jQuery(".content-type-1").css("display","none")
	jQuery("#page2,#page3,#page4,#page5,#page6,#page7,#page8").css("display","none")
	//jQuery("#page1").css("display","block")
  //jQuery("#page2-sub1-page").css("display","block")
	
	jQuery(".bg2").css("display", "none");
	jQuery("body").css("overflow-x", "hidden");
	//=======ANIMATION FOR MAIN MENU===========
	//====FIX SAFARI MARGIN PROBLEM============
	if(is_safari){
		jQuery(".menu-hl").css("margin-left","-10px");
	}
	//=====MOUSE ENTER MENU ITEM==============
	jQuery('#main-1-link,#main-2-link,#main-3-link,#main-4-link,#main-5-link,#main-6-link').mouseenter(
	  function () {
		//alert(jQuery(this).attr("id") != '#main-6-link');
		if(jQuery(this).attr("id") != 'main-7-link'){
				jQuery(this).next().animate(
					{"margin-top":"-120px","background-color":"black","opacity":"0.9"},
					{duration: 250
					,ease: "swing"
					,queue: false}
				);
			}else{
					jQuery(this).next().animate(
						{"margin-top":"-45px"},
						{duration: 450
						,ease: "swing"
						,queue: false}
					);
			}
	  }
	);
	//=====MOUSE LEAVE MENU ITEM==============
	jQuery('#main-1-link,#main-2-link,#main-3-link,#main-4-link,#main-5-link,#main-6-link').mouseleave(
	  function () {
				jQuery(this).next().animate(
					{"margin-top":"-200px", "background-color":"white", "opacity":"0"},
					{duration: 650
					,ease: "linear"
					,queue: true}
				);
	  }
	);
	//=====MOUSE ENTER MENU ITEM==============
	jQuery('%ul.submenu li').hover(
	  function () {
	    	jQuery(this).animate(
							{"width":"300px"},
							{duration: 250
							,ease: "linear"
							,queue: true}
						);
	  },
	  function () {
	    jQuery(this).animate(
							{"width":"150px"},
							{duration: 250
							,ease: "linear"
							,queue: false}
						);
	  }
	);
	jQuery('#main-1-link').click(function(){
		changePage("#page1");
		toggleSubPage(jQuery("#page1-sub1"));
		//switchBg("7.jpg");
	});
	
	jQuery('#main-2-link').click(function(){
		changePage("#page2");
		toggleSubPage(jQuery("#page2-sub1"));
		//switchBg("7.jpg");
		// pageComeOut();
	});
	jQuery('#main-3-link').click(function(){
		changePage("#page3");
		toggleSubPage(jQuery("#page3-sub1"));
		//switchBg("7.jpg");
		// pageComeOut();
	});
	jQuery('#main-4-link').click(function(){
		changePage("#page4");
		toggleSubPage(jQuery("#page4-sub1"));
		//switchBg("7.jpg");
		// pageComeOut();
	});
	jQuery('#main-5-link').click(function(){
		changePage("#page5");
		toggleSubPage(jQuery("#page5-sub1"));
		//switchBg("7.jpg");
		// pageComeOut();
	});
	jQuery('#to-package').click(function(){
		toggleSubPage(jQuery("#page5-sub2"));
		//switchBg("7.jpg");
		// pageComeOut();
	});
	jQuery('#to-question').click(function(){
		toggleSubPage(jQuery("#page5-sub4"));
		//switchBg("7.jpg");
		// pageComeOut();
	});
	jQuery('#to-measure').click(function(){
		toggleSubPage(jQuery("#page5-sub3"));
		//switchBg("7.jpg");
		// pageComeOut();
	});
	jQuery('#main-6-link,#toContact').click(function(){
		changePage("#page6");
		toggleSubPage(jQuery("#page6-sub1"));
		//switchBg("7.jpg");
		// pageComeOut();
	});
	//setInterval(slideShow,9000);

});
function toggleSubPage(input){
	var target = "#"+ jQuery(input).attr("id") + "-page"

	if(jQuery(target).css("display") == "none"){
		jQuery(target).fadeToggle();
		jQuery(currentSubPage).fadeToggle();
		currentSubPage = target
		
	}
}
function ipadFunc(){
	if(is_ipad
		|| is_iphone){
		//window.location.reload(true);
		//alert(parseInt(jQuery("window").css("height")))
		//alert(window.orientation)
		if( parseInt(jQuery(".content-container").css("height")) > 600
		&& (window.orientation == 90 ||  window.orientation == -90)
		){
			jQuery(".bg1").css(
				{"height": parseInt(jQuery(".content-container").css("height"))+ 150 +"px"}
				);
			jQuery(".bg2").css(
				{"height": parseInt(jQuery(".content-container").css("height"))+ 150 +"px"}
				);
		}else{
				jQuery(".bg1").css(
					{"height": "100%"}
					);
				jQuery(".bg2").css(
					{"height": "100%"}
					);
		}
	};
}
jQuery(window).resize(function() {
 	var middlePoint = (parseInt(jQuery("body").css("width"))/2) - (parseInt(jQuery(currentPage).css("width"))/2) + 30 + "px"
	var inPoint = "0px"
	//alert("tutu")
	jQuery(currentPage).css("left",middlePoint)
	jQuery(".content-container").css("height",jQuery(".bod"))
});

//===============

function changePage(targetPage){
	var inPoint = (parseInt(jQuery("body").css("width"))/2) - (parseInt(jQuery(targetPage).css("width"))/2) + 30 + "px"
	//var inPoint = "0px"
	var outPoint2 =  (0 - parseInt(jQuery(targetPage).css("width"))) + "px"
	var outPoint =  (parseInt(jQuery("body").css("width")) + parseInt(jQuery(targetPage).css("width"))) + "px"
	//alert(inPoint);
	if(currentPage != targetPage){
		jQuery(targetPage).css("left",outPoint2)
		jQuery(targetPage).css("display","block").animate(
		{'left':inPoint},"slow","swing"
		);
		//jQuery(currentPage).fadeOut();
		jQuery(currentPage).animate(
		{'left':"2000px"},"slow","linear"
		).css("display","none")
		currentPage = targetPage
	};
}
function slideShow(){
	if(currentPage == "#page1"){
		whichPic += 1;
		if(whichPic == 1){
			switchBg("7.jpg");
		}
		if(whichPic == 2){
			switchBg("7.jpg");
		}
		if(whichPic == 3){
			switchBg("7.jpg");
		}
		if(whichPic == 4){
			switchBg("7.jpg");
		}
		if(whichPic == 5){
			switchBg("7.jpg");
			whichPic = 0;
		}
	}
	//jQuery(".bg").delay("300").fadeIn();
}
function switchBg(whichBg){

	jQuery(".bg2").css("display","block");
	jQuery(".bg2").css("background-image","url(/images/bg/"+ bg_1_pic + ")");
	jQuery(".bg1").css("display","none");
	jQuery(".bg1").css("background-image","url(/images/bg/"+ whichBg + ")");
	
	jQuery(".bg2").fadeOut(1500);
	jQuery(".bg1").fadeIn(1500);
	bg_2_pic = bg_1_pic;
	bg_1_pic = whichBg;

}
