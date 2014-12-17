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

function init() {
	if ($('#exercises').length) {
		fetchAndRenderExercises();
	}
};

$(init);
$(document).on("page:load", init);

$(function() {
	$("#exercises").on("mouseenter", ".exercise-name", showDetails);
	$("#exercises").on("mouseleave", ".exercise-name", hideDetails);
});

function getVideos() {
	console.log("YOU MADE IT!");
	console.log($(this).data("id"));
	$.get("/search/" + $(this).data("id")).done(renderVideo);
};




function fetchAndRenderExercises() {
	$.get("/exercises").done(function(data) {
		data.forEach(renderExercise);
	});
}

function renderExercise(exerciseObject) {
	var exerciseID = exerciseObject.id;
	var exerciseName = exerciseObject.name;
	var exerciseDiff = exerciseObject.difficulty;
	var exerciseRep = exerciseObject.reps;
	var exerciseSet = exerciseObject.sets;
	var exerciseRequire = exerciseObject.requirements;
	var exerciseBodyPart = exerciseObject.bodypart;
	var exerciseDescription = exerciseObject.description;
	var exercisePound = exerciseObject.pounds;

	//var sectionExercises = $("<section>").attr("id", "exercises");
	var exerciseDiv = $("<div>").addClass("exercise exercise-id").attr("id", exerciseID);
	var exerciseDisplay = $("<p>").text(exerciseName).addClass("exercise exercise-name");
	var video = $("<button>").text("Watch Video on " + exerciseName).data("id", exerciseName).attr("id", "button");
	exerciseDiv.append(exerciseDisplay).append(video);
	$("section").on("click",'button#button', getVideos);
	$('#exercises').prepend(exerciseDiv);

}

function showDetails() {
	//console.log(this);
	var exerciseID = $(this).parent().attr("id");
	//console.log(exerciseID);
	
	$.get("/exercises/" + exerciseID + ".json").done(function(data) {
	 	//console.log(data.description);
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
		//$("#" + exerciseID).append(exerciseBodyParts);
	});
};

function hideDetails() {
	var exerciseID = $(this).parent().attr("id");
	$("#" + exerciseID).find(".basic-detail").empty();
}



