(function () {
	"use strict";
	let count = 1;

	function content_rotator() {

		$(`#container p:nth-child(${count})`).fadeIn(2000, function () {
			if ($(this).is('#container p:last-child')) {
				setTimeout(function () { 
					$(`#container p:nth-child(${count})`).fadeOut(2000, function () {
						count = 1;
						content_rotator();
					});
				 }, 7000);
			}
			else {
				setTimeout(function () {
					$(`#container p:nth-child(${count})`).fadeOut(2000, function () {
						count++;
						content_rotator();
					});
				}, 7000);
			}
		});
	}

	content_rotator();

}());
