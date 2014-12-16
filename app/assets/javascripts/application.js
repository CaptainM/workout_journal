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

// function init() {
// 	if ($('.exercise').length) {
// 		fetchAndRenderExercises();
// 	}
// };

// $(init);

$(function() {
	console.log("loaded, bro");
	fetchAndRenderExercises();
	$("#exercises").on("mouseover", ".exercise-name", showDetails);
});


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

	var exerciseDiv = $("<div>").addClass("exercise exercise-id").attr("id", exerciseID);
	var exerciseDisplay = $("<p>").text(exerciseName).addClass("exercise exercise-name");
	var exerciseDifficulty = $("<span>").addClass("basic-detail").addClass("difficulty").attr("data-id", exerciseDiff);
	var exerciseReps = $("<span>").addClass("basic-detail").addClass("reps").attr("data-id", exerciseRep);
	var exerciseSets = $("<span>").addClass("basic-detail").addClass("sets").attr("data-id", exerciseSet);
	var exerciseRequirements = $("<span>").addClass("basic-detail").addClass("requirements").attr("data-id", exerciseRequire);
	var exerciseBodyParts = $("<span>").addClass("basic-detail").addClass("bodypart").attr("data-id", exerciseBodyPart);
	var exerciseDescriptions = $("<span>").addClass("basic-detail").addClass("description").attr("data-id", exerciseDescription);
	var exercisePounds = $("<span>").addClass("basic-detail").addClass("pounds").attr("data-id", exercisePound);
	exerciseDiv.append(exerciseDisplay).append(exerciseDifficulty).append(exerciseReps).append(exerciseSets).append(exerciseRequirements).append(exerciseBodyParts).append(exerciseDescriptions).append(exercisePounds);
	$('#exercises').prepend(exerciseDiv);
}

function showDetails() {
	console.log(this);
	var exerciseID = $(this).parent().attr("id");
	fetchExercise(exerciseID);
};

function fetchExercise(exerciseID) {
	$.ajax("/exercises/" + exerciseID + ".json").done(function() {
		console.log("hi!");
	});
};


