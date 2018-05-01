$(document).ready(function() {

// jQuery Function Number #1(hover)
// jQuery Function Number #2 (hide)
// jQuery Function Number #3 (show)
	$(".name").hover(function() {
		$(".full").hide();
		$(".nick").show();
	}, function() {
		$(".full").show();
		$(".nick").hide();
	});

// jQuery Function Number #4 (fadeIn)
// jQuery Function Number #5 (css)

	$("#expired").hover(function() {
		$("#clip1").fadeIn();
		$("#goodnight").css("opacity","0");
		$("#forkplay").css("opacity","0");
		$("#get").css("opacity","0");
		$("#cash").css("opacity","0");
		$(".name").css("opacity","0");
		$(".about").css("opacity","0");
		$(".contact").css("opacity","0");
		$(".section").css("opacity","0");
	}, function() {
	// jQuery Function Number #6 (fadeout)
		$("#clip1").fadeOut();
		$("#goodnight").css("opacity","1");
		$("#forkplay").css("opacity","1");
		$("#get").css("opacity","1");
		$("#cash").css("opacity","1");
		$(".name").css("opacity","1");
		$(".about").css("opacity","1");
		$(".contact").css("opacity","1");
		$(".section").css("opacity","1");
	});

// jQuery Function Number #3
	$("#forkplay").hover(function() {
		$("#clip2").fadeIn();
		$("#goodnight").css("opacity","0");
		$("#expired").css("opacity","0");
		$("#get").css("opacity","0");
		$("#cash").css("opacity","0");
		$(".name").css("opacity","0");
		$(".about").css("opacity","0");
		$(".contact").css("opacity","0");
		$(".section").css("opacity","0");
	}, function() {
		$("#clip2").fadeOut();
		$("#expired").css("opacity","1");
		$("#goodnight").css("opacity","1");
		$("#get").css("opacity","1");
		$("#cash").css("opacity","1");
		$(".name").css("opacity","1");
		$(".about").css("opacity","1");
		$(".contact").css("opacity","1");
		$(".section").css("opacity","1");
	});


// jQuery Function Number #3
	$("#get").hover(function() {
		$("#clip3").fadeIn();
		$("#goodnight").css("opacity","0");
		$("#expired").css("opacity","0");
		$("#forkplay").css("opacity","0");
		$("#cash").css("opacity","0");
		$(".name").css("opacity","0");
		$(".about").css("opacity","0");
		$(".contact").css("opacity","0");
		$(".section").css("opacity","0");
	}, function() {
		$("#clip3").fadeOut();
		$("#expired").css("opacity","1");
		$("#goodnight").css("opacity","1");
		$("#forkplay").css("opacity","1");
		$("#cash").css("opacity","1");
		$(".name").css("opacity","1");
		$(".about").css("opacity","1");
		$(".contact").css("opacity","1");
		$(".section").css("opacity","1");
	});

// jQuery Function Number #5
	$("#cash").hover(function() {
		$("#clip4").fadeIn();
		$("#goodnight").css("opacity","0");
		$("#expired").css("opacity","0");
		$("#forkplay").css("opacity","0");
		$("#get").css("opacity","0");
		$(".name").css("opacity","0");
		$(".about").css("opacity","0");
		$(".contact").css("opacity","0");
		$(".section").css("opacity","0");
	}, function() {
		$("#clip4").fadeOut();
		$("#expired").css("opacity","1");
		$("#goodnight").css("opacity","1");
		$("#forkplay").css("opacity","1");
		$("#get").css("opacity","1");
		$(".name").css("opacity","1");
		$(".about").css("opacity","1");
		$(".contact").css("opacity","1");
		$(".section").css("opacity","1");
	});


	$("#goodnight").hover(function() {
		$("#clip5").fadeIn();
		$("#cash").css("opacity","0");
		$("#expired").css("opacity","0");
		$("#forkplay").css("opacity","0");
		$("#get").css("opacity","0");
		$(".name").css("opacity","0");
		$(".about").css("opacity","0");
		$(".contact").css("opacity","0");
		$(".section").css("opacity","0");
	}, function() {
		$("#clip5").fadeOut();
		$("#expired").css("opacity","1");
		$("#forkplay").css("opacity","1");
		$("#cash").css("opacity","1");
		$("#get").css("opacity","1");
		$(".name").css("opacity","1");
		$(".about").css("opacity","1");
		$(".contact").css("opacity","1");
		$(".section").css("opacity","1");
	});

});

