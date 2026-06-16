const Portfolio = (function () {
	function makeWords() {
		var words = [
			{ text: "Laravel", weight: 15 },
			{ text: "PHP", weight: 14 },
			{ text: "React", weight: 13 },
			{ text: "JavaScript", weight: 13 },
			{ text: "REST APIs", weight: 12 },
			{ text: "MySQL", weight: 12 },
			{ text: "Git", weight: 10 },
			{ text: "Bootstrap", weight: 9 },
			{ text: "Tailwind CSS", weight: 9 },
			{ text: "Problem Solving", weight: 8 },
			{ text: "Responsive Design", weight: 8 },
			{ text: "Database Design", weight: 7 },
			{ text: "API Integration", weight: 7 },
			{ text: "Agile", weight: 6 },
			{ text: "Jira", weight: 6 },
		];
		return words;
	}

	function makeWordCloud(words) {
		$(".education-domains").jQCloud(words, { delay: 120 });
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on("scroll", function () {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Full-Stack Developer.",
				"build scalable web applications.",
				"specialize in Laravel and PHP.",
				"create modern user experiences.",
				"develop secure REST APIs.",
				"turn ideas into working products.",
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: "text",
			callback: function () {
				$("#writing-text").css({
					color: "#fff",
					"background-color": "#C8412B",
				});
			},
			preStringTyped: function () {},
			onStringTyped: function () {},
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation,
	};
})();

Portfolio.displayWordCloud();
Portfolio.typeAnimation();
