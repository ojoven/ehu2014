$(document).ready(function() {

	//  Raptorize
	$('#raptorize').raptorize();

	// AJAX
	var toCapital = $("#to-capital");
	$("#pais").focus();
	toCapital.on('click',function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active').removeClass('success').removeClass('error');
			$(this).html('Encuéntralo');
		} else {
			$(this).addClass('active');
			var data = {};
			data.pais = $("#pais").val();
			$.get('ajax.php',data,function(response) {
				if (response.success) {
					toCapital.addClass('success');
					toCapital.html('<p>La capital de <span class="highlight">'+response.pais+'</span> es <span class="highlight">'+response.capital+'</span>.</p>');
				} else {
					toCapital.addClass('error');
					toCapital.html('<p>'+response.message+'</p>');
				}
			})
		}
	});

	// Aux form
	$("#pais").on('keydown',function(e) {
		if (e.which==13) {
			$("#to-capital").click();
		}
	});

	$(document).on('keydown',function(e) {
		if (e.which==27) {
			if ($("#to-capital").hasClass('active')) {
				$("#to-capital").click();
				$("#pais").focus();
			}
		}
	});

	// Resize
	$("#to-resize").on('click',function() {
		window.open("index6.php", "Resize", "width=400, height=800");
	});

	$("#to-font").on('click',function() {
		var random = Math.floor(Math.random() * 7) + 1
		console.log(random);
		var font = "font" + random;

		$("body").removeClass();
		$("body").addClass(font);

		var data = {};
		data.font = font;
		$.post('font.php',data);
	});

	// Backmove
	var flagBackMove = false;
	$("#to-change-backmove").on('click',function() {
		if (!flagBackMove) {
			$("body").removeClass("backmove").addClass("changecolor");
			$(".object").addClass("backmove").addClass("pattern");
			flagBackMove = true;
		} else {
			$("body").addClass("backmove").removeClass("changecolor");
			$(".object").removeClass("backmove").removeClass("pattern");
			flagBackMove = false;
		}
	});

	// Change Borders
	var flagChangeBorders = false;
	$("#to-change-borders").on('click',function() {
		if (!flagChangeBorders) {
			$(".objectborders").addClass("full");
			flagChangeBorders = true;
		} else {
			$(".objectborders").removeClass("full");
			flagChangeBorders = false;
		}
	});

});
