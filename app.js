// javascript By mrajabi -> @m_rajbi On Twitter

$(document).ready(function(){
	
	$("#main").height(window.innerHeight);
	

	var gap = 10;
	var wwidth = window.innerWidth - 22;	
/*
	var calculatePercent = function(target,contain){
		return target/(contain/100);
	}
	var calculatePixels = function(target,contain){
		return contain*(target-3*gap)/100;
	}
	
	$(".firstRow").css("height",calculatePixels(1,wheight)+"%");
	
*/
	$(".firstRow").height(wwidth*0.44);
	$(".secondRow").height(wwidth*0.50);
		$(".time").width(wwidth*0.53);
		$(".traffic").width(wwidth*0.43);
	$(".thirdRow").height(wwidth*0.50);
		$(".tamdid").width(wwidth*0.80);
		$(".social").width(wwidth*0.16);
			$(".social img").css("margin-bottom",wwidth*0.03 + "px");
	setTimeout(function(){	
	$(".firstRow").addClass("bi");
	    $(".time").addClass("bi");
	 $(".traffic").addClass("bi");
	  $(".tamdid").addClass("bi");
	  $(".social").addClass("bi");
    $(".forthRow").addClass("bi");
	},900);
			
	
});