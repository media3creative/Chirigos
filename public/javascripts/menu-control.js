var whichPic = 1;
var currentPage = "#page2"
var currentSubPage = "#page1-sub1-page"
var bg_1_pic = "7.jpg"
var bg_2_pic = "7.jpg"
var agent=navigator.userAgent.toLowerCase();
var is_iphone = ((agent.indexOf('iphone') != -1));
var is_ipad = ((agent.indexOf('ipad') != -1));
var is_safari = ((agent.indexOf('safari') != -1));

$(document).ready(function() {
  $('%ul.submenu li').click(
	  function () {
			toggleSubPage(this)
	  }
	);
  $('#slider').nivoSlider(
    {
  						effect:'boxRainGrow', // Specify sets like: 'fold,fade,sliceDown'
  		        slices:15, // For slice animations
  		        boxCols: 8, // For box animations
  		        boxRows: 6, // For box animations
  		        animSpeed:200, // Slide transition speed
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
	$(".content-type-1").css("display","none")
	$(".content-container").css("display","none")
  //$("#page2-sub1-page").css("display","block")
	changePage("#page1")
	$(".bg2").css("display", "none");
	$("body").css("overflow-x", "hidden");
	//=======ANIMATION FOR MAIN MENU===========
	//====FIX SAFARI MARGIN PROBLEM============
	if(is_safari){
		$(".menu-hl").css("margin-left","-10px");
	}
	//=====MOUSE ENTER MENU ITEM==============
	$('#main-1-link,#main-2-link,#main-3-link,#main-4-link,#main-5-link,#main-6-link').mouseenter(
	  function () {
		//alert($(this).attr("id") != '#main-6-link');
		if($(this).attr("id") != 'main-7-link'){
				$(this).next().animate(
					{"margin-top":"-80px","background-color":"black","opacity":"0.9"},
					{duration: 250
					,ease: "swing"
					,queue: false}
				);
			}else{
					$(this).next().animate(
						{"margin-top":"-45px"},
						{duration: 450
						,ease: "swing"
						,queue: false}
					);
			}
	  }
	);
	//=====MOUSE LEAVE MENU ITEM==============
	$('#main-1-link,#main-2-link,#main-3-link,#main-4-link,#main-5-link,#main-6-link').mouseleave(
	  function () {
				$(this).next().animate(
					{"margin-top":"-200px", "background-color":"white", "opacity":"0"},
					{duration: 650
					,ease: "linear"
					,queue: true}
				);
	  }
	);
	//=====MOUSE ENTER MENU ITEM==============
	$('%ul.submenu li').hover(
	  function () {
	    	$(this).animate(
							{"width":"300px"},
							{duration: 250
							,ease: "linear"
							,queue: true}
						);
	  },
	  function () {
	    $(this).animate(
							{"width":"150px"},
							{duration: 250
							,ease: "linear"
							,queue: false}
						);
	  }
	);
	$('#main-1-link').click(function(){
		changePage("#page1");
		toggleSubPage($("#page1-sub1"));
		//switchBg("7.jpg");
	});
	
	$('#main-2-link').click(function(){
		changePage("#page2");
		toggleSubPage($("#page2-sub1"));
		//switchBg("7.jpg");
		// pageComeOut();
	});
	$('#main-3-link').click(function(){
		changePage("#page3");
		toggleSubPage($("#page3-sub1"));
		//switchBg("7.jpg");
		// pageComeOut();
	});
	$('#main-4-link').click(function(){
		changePage("#page4");
		toggleSubPage($("#page4-sub1"));
		//switchBg("7.jpg");
		// pageComeOut();
	});
	$('#main-5-link,#toPackage').click(function(){
		changePage("#page5");
		toggleSubPage($("#page5-sub1"));
		//switchBg("7.jpg");
		// pageComeOut();
	});
	$('#main-6-link,#toContact').click(function(){
		changePage("#page6");
		toggleSubPage($("#page6-sub1"));
		//switchBg("7.jpg");
		// pageComeOut();
	});
	//setInterval(slideShow,9000);

});
function toggleSubPage(input){
	var target = "#"+ $(input).attr("id") + "-page"

	if($(target).css("display") == "none"){
		$(target).fadeToggle();
		$(currentSubPage).fadeToggle();
		currentSubPage = target
		
	}
}
function ipadFunc(){
	if(is_ipad
		|| is_iphone){
		//window.location.reload(true);
		//alert(parseInt($("window").css("height")))
		//alert(window.orientation)
		if( parseInt($(".content-container").css("height")) > 600
		&& (window.orientation == 90 ||  window.orientation == -90)
		){
			$(".bg1").css(
				{"height": parseInt($(".content-container").css("height"))+ 150 +"px"}
				);
			$(".bg2").css(
				{"height": parseInt($(".content-container").css("height"))+ 150 +"px"}
				);
		}else{
				$(".bg1").css(
					{"height": "100%"}
					);
				$(".bg2").css(
					{"height": "100%"}
					);
		}
	};
}
$(window).resize(function() {
 	var middlePoint = (parseInt($("body").css("width"))/2) - (parseInt($(currentPage).css("width"))/2) + 30 + "px"
	var inPoint = "0px"
	//alert("tutu")
	$(currentPage).css("left",middlePoint)
	$(".content-container").css("height",$(".bod"))
});

//===============

function changePage(targetPage){
	var inPoint = (parseInt($("body").css("width"))/2) - (parseInt($(targetPage).css("width"))/2) + 30 + "px"
	//var inPoint = "0px"
	var outPoint2 =  (0 - parseInt($(targetPage).css("width"))) + "px"
	var outPoint =  (parseInt($("body").css("width")) + parseInt($(targetPage).css("width"))) + "px"
	//alert(inPoint);
	if(currentPage != targetPage){
		$(targetPage).css("left",outPoint2)
		$(targetPage).fadeIn(100).animate(
		{'left':inPoint},"slow","swing"
		);
		//$(currentPage).fadeOut();
		$(currentPage).animate(
		{'left':"2000px"},"slow","linear"
		).fadeOut("fast");
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
	//$(".bg").delay("300").fadeIn();
}
function switchBg(whichBg){

	$(".bg2").css("display","block");
	$(".bg2").css("background-image","url(/images/bg/"+ bg_1_pic + ")");
	$(".bg1").css("display","none");
	$(".bg1").css("background-image","url(/images/bg/"+ whichBg + ")");
	
	$(".bg2").fadeOut(1500);
	$(".bg1").fadeIn(1500);
	bg_2_pic = bg_1_pic;
	bg_1_pic = whichBg;

}
