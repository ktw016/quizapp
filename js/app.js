$(document).ready(function() {
	$('.start').on('click', function(e) {
		e.preventDefault();
		$('#container > .questions').show();
		$('.start').hide();
	});
	$('q-submit-button').on('click', function(e) {
		e.preventDefault();

		quiz.checkAnswer();
		//Hide question div
		//Show answer div
	});
	$('nextButton').on('click', function(e) {
		e.preventDefault();

		quiz.nextQuestion();
		// Hide answer div

		// Show questions div
	});

});


var questions = [{
	question: "What is the capital of Australia?",
	choices: ["Sydney", "Canberra", "Melbourne", "Adelaide"],
	correct: 0,
	},
	{
	question: "By area, what is the smallest country on the planet?",
	answers: ["Vatican City", "Monaco", "Nauru", "Madagascar"],
	correct: 0,
	},
	{
	question: "What is the name of the tallest uninterrupted waterfall in the world?",
	choices: ["Victoria Falls", "Angel Falls", "Niagara Falls", "Alamere Falls"],
	correct: 1,
	},
	{
	question: "What is the correct spelling of this landlocked Asian nation?",
	choices: ["Kyrgyzstan", "Kurjistan", "Kergystan", "Kyigyzstan"],
	correct: 0,
	},
	{
	question: "What country is home to the tallest mountain in the world, Mount Everest?",
	choices: ["Pakistan", "India", "Bhutan", "Nepal"],
	correct: 3,
}];

var quiz = {
	questions: questions,
	currentQuestion: 0,
	score: 0,
	nextQuestion: function() {
		// Should first check to make sure we're not at the end
		// Then increment this.currentQuestion
		this.currentQuestion++;
		// Call a method to write to the DOM
	},
	writeToDOM: function() {
		// use questions and currentQuestion to write to DOM
		var question = this.questions[this.currentQuestion];
		$('answer-div').append(question.question);
		question.choices.forEach(function(choice, i) {
			$('q-radio')[i].append(choice);
			// This may be the wrong way to work with radio in jQuery
			// NOTE: http://stackoverflow.com/questions/596351/how-can-i-know-which-radio-button-is-selected-via-jquery

		});
	},
	checkAnswer: function() {
		// Will compare answer index to correct for current question
		// If answer is correct increment this.score
		var answer = $('q-radio').value();
		// This may be the wrong way to work with radio in jQuery
		if (answer === this.questions[this.currentQuestion].correct) {
			//increment
    }
	},
};
