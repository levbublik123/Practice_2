$(".t506__title:eq(0)").addClass("numberup");
$(".t506__title:eq(1)").addClass("numberup1");
$(".t506__title:eq(2)").addClass("numberup2");
$(".t506__title:eq(2)").addClass("numberup3");
$(function() {
	let target_block = $(".numberup");
	let blockStatus = true;
	$(window).scroll(function() {
        let scrollEvent = ($(window).scrollTop() > ($(target_block).offset().top - $(window).height()));
		if(scrollEvent && blockStatus) {
            blockStatus = false;

            let circle = document.querySelectorAll('.circle-big');
            let defaultprogress = document.querySelectorAll('.dafaultprogress');
           circle.forEach(function (circlest) {
			circlest.style.visibility = 'visible';
            })
            defaultprogress.forEach(function(progressst) {
                progressst.classList.add('progress');
            })
            

			$({
				numberValue: 0
			}).animate({
				numberValue: 80
			}, {
				duration: 2500,
				easing: "swing",
				step: function(val) {
					$(".numberup").html(Math.ceil(val));
				}
            });
            $({
				numberValue: 0
			}).animate({
				numberValue: 75
			}, {
				duration: 2500,
				easing: "swing",
				step: function(val) {
					$(".numberup1").html(Math.ceil(val));
				}
            });
            $({
				numberValue: 0
			}).animate({
				numberValue: 60
			}, {
				duration: 2500,
				easing: "swing",
				step: function(val) {
					$(".numberup2").html(Math.ceil(val));
				}
            });
		}
	});
});
