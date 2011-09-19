var whichPic = 1;
var currentPage = "#page2"
var currentSubPage = "#page1-sub1"
var bg_1_pic = "1.jpg"
var bg_2_pic = "1.jpg"
var agent=navigator.userAgent.toLowerCase();
var is_iphone = ((agent.indexOf('iphone') != -1));
var is_ipad = ((agent.indexOf('ipad') != -1));
var is_safari = ((agent.indexOf('safari') != -1));


$(document).ready(function() {
	//document.body.style.display = 'block';
	$("#page1-sub2").fadeToggle();
	$("#page1-sub3").fadeToggle();
	$("#page1-sub4").fadeToggle();
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
					{"margin-top":"-80px","background-color":"white","opacity":"0.9"},
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
					{"margin-top":"-200px", "background-color":"black", "opacity":"0"},
					{duration: 650
					,ease: "linear"
					,queue: true}
				);
	  }
	);
	//=====MOUSE ENTER MENU ITEM==============
	$('#sub-1-link,#sub-2-link,#sub-3-link,#sub-4-link').hover(
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
	$('#sub-1-link').click(
	  function () {
			toggleSubPage('#page1-sub1')
	  }
	);
	$('#sub-2-link').click(
	  function () {
			toggleSubPage('#page1-sub2')
	  }
	);
	$('#sub-3-link').click(
	  function () {
			toggleSubPage('#page1-sub3')
	  }
	);
	$('#sub-4-link').click(
	  function () {
			toggleSubPage('#page1-sub4')
	  }
	);
	$('#main-1-link').click(function(){
		changePage("#page1");
		switchBg("1.jpg");
	});
	
	$('#main-2-link').click(function(){
		changePage("#page2");
		switchBg("6.jpg");
		// pageComeOut();
	});
	$('#main-3-link').click(function(){
		changePage("#page3");
		switchBg("4.jpg");
		// pageComeOut();
	});
	$('#main-4-link').click(function(){
		changePage("#page4");
		switchBg("5.jpg");
		// pageComeOut();
	});
	$('#main-5-link').click(function(){
		changePage("#page5");
		switchBg("2.jpg");
		// pageComeOut();
	});
	$('#main-6-link').click(function(){
		changePage("#page6");
		switchBg("6.jpg");
		// pageComeOut();
	});
	//setInterval(slideShow,9000);

});
function toggleSubPage(input){
	if($(input).css("display") == "none"){
		$(input).fadeToggle();
		$(currentSubPage).fadeToggle();
		currentSubPage = input
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
	$(currentPage).css("left",inPoint)
	$(".content-container").css("height",$(".bod"))
});

//===============

function changePage(targetPage){
	//var inPoint = (parseInt($("body").css("width"))/2) - (parseInt($(targetPage).css("width"))/2) + 30 + "px"
	var inPoint = "0px"
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
			switchBg("1.jpg");
		}
		if(whichPic == 2){
			switchBg("2.jpg");
		}
		if(whichPic == 3){
			switchBg("3.jpg");
		}
		if(whichPic == 4){
			switchBg("4.jpg");
		}
		if(whichPic == 5){
			switchBg("5.jpg");
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
