$(document).ready(function() {

	$(".name").hover(function() {
		$(".full").hide();
		$(".nick").show();
	}, function() {
		$(".full").show();
		$(".nick").hide();
	});

	$(".expired").hover(function() {
		$("#clip1").show()
	}, function() {
		$("#clip1").css("display","none");
	});

});

