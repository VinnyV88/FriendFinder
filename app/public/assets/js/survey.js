
		// Capture the form inputs 
		$("#submit").on("click", function () {

				var userData = {
					name: $("#name").val(),
					photo: $("#image").val(),
					scores: [$("input[name=q1]:checked").val(), $("input[name=q2]:checked").val(), $("input[name=q3]:checked").val(), 
									 $("input[name=q4]:checked").val(), $("input[name=q5]:checked").val(), $("input[name=q6]:checked").val(), 
									 $("input[name=q7]:checked").val(), $("input[name=q8]:checked").val(), $("input[name=q9]:checked").val(), 
									 $("input[name=q10]:checked").val()]
				}


				// Grab the URL of the website
				var currentURL = window.location.origin;

				// AJAX post the data to the friends API. 
				$.post(currentURL + "/api/friends", userData, function (data) {

					// Grab the result from the AJAX post so that the best match's name and photo are displayed.
					$("#yourName").text($("#name").val());
					$('#yourImg').attr("src", $("#image").val());
					$("#matchName").text(data.name);
					$('#matchImg').attr("src", data.photo);

					// Show the modal with the best match 
					$("#resultsModal").modal('toggle');

				});

			return false;
		});