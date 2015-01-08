// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

function thisIsATest() {
	return("hello world");
};

var init = function() {
	if ($('#exercises').length) {
		fetchAndRenderExercises();
	}
	$("#exercises").on("mouseenter", ".exercise-name", showDetails);
	$("#exercises").on("mouseleave", ".exercise-name", hideDetails);
	$("#exercises").on("click",'button#button', getVideos);
	$("#exercises").on("click", 'button#secondButton', workoutCompleted);
	$("#close").click(function() {
		$(this).siblings().remove();
		$(this).parent().hide();
	});
}

$(document).ready(init);
$(document).on("page:load", init);

// $(function() {
// });

function workoutCompleted() {
	console.log($(this).data("id"));
	$.ajax({
		url: 'workouts/' + $(this).data("id") + "/complete",
		type: 'put'
	})
		.done(function() {

			var congrats = $("<p>").text("Congratulations, you completed your workout of the day!");
			$('#modal').append(congrats).show(200);
		});//do I need anything here? What I want it to do is in the controller);
};

function getVideos() {
	$.get("/search/" + $(this).data("id"))
	 .done(function(data) {
		$("iframe").remove();
		var iFrame = $("<iframe>").width("420").height("315").attr('src', data.video_url);
		
		$("#modal").append(iFrame).show(200);
	});
};


function fetchAndRenderExercises() {
	$.get("/exercises").done(function(data) {
		data.forEach(renderExercise);
		var workoutID = data[0].workout_id;
		var completed = $("<button>").text("Workout " + workoutID + " Completed").data("id", workoutID).attr("id", "secondButton");
		$('#exercises').append(completed);
	});
}

function renderExercise(exerciseObject) {
	var exerciseID = exerciseObject.id;
	var workoutID = exerciseObject.workout_id;
	var exerciseName = exerciseObject.name;

	var exerciseDiv = $("<div>").addClass("exercise exercise-id").attr("id", exerciseID);
	var exerciseDisplay = $("<p>").text(exerciseName).addClass("exercise exercise-name");
	var video = $("<button>").text("Watch Video on " + exerciseName).data("id", exerciseName).attr("id", "button");
	exerciseDiv.append(exerciseDisplay).append(video);
	$('#exercises').prepend(exerciseDiv);

}

function showDetails() {
	var exerciseID = $(this).parent().attr("id");
	
	$.get("/exercises/" + exerciseID + ".json").done(function(data) {

	 	var exerciseDescription = $("<p>").addClass("basic-detail").addClass("description").text("Description: " + data.description);("</p>")
	 	var exerciseDifficulty = $("<p>").addClass("basic-detail").addClass("difficulty").text("Difficulty: " + data.difficulty);("</p>")
	 	var exerciseReps = $("<p>").addClass("basic-detail").addClass("reps").text("Reps: " + data.reps);("</p>")
	 	var exerciseSets = $("<p>").addClass("basic-detail").addClass("sets").text("Sets: " + data.sets);("</p>")
	 	var exerciseRequirements = $("<p>").addClass("basic-detail").addClass("requirements").text("Requirements: " + data.requirements);("</p>")
	 	var exerciseBodyParts = $("<p>").addClass("basic-detail").addClass("bodypart").text("Body-Part: " + data.bodypart);("</p>")
	 	var exercisePounds = $("<p>").addClass("basic-detail").addClass("pounds").text("Recommended Weight: " + data.pounds + " pounds");("</p>")
	 	//$("#" + exerciseID).append(data.difficulty)
	 	$("#" + exerciseID).append(exerciseDescription)
	 										.append(exerciseDifficulty)
	 										.append(exerciseReps)
	 										.append(exerciseSets)
	 										.append(exerciseRequirements)
	 										.append(exerciseBodyParts)
	 										.append(exercisePounds);
	});
};

function hideDetails() {
	var exerciseID = $(this).parent().attr("id");
	$("#" + exerciseID).find(".basic-detail").empty();
}






