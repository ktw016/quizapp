$(document).ready(function() {

	// Start Button
	$('.start').on('click', function() {
		console.log('start the game');
		$('.intro').hide();
		$('.hidden').removeClass();

	});

	$('.nextButton').on('click', function(){
		console.log('start next question');

	});

	// Initialize game
	game.question[question1, question2, question3, question4, question5]
	game.currentQuestion = 0;
	game.question[game.currentQuestion].writeToDom();

	var game = Object.create(Game);
	game.questions = []

	// Questions
	var question1 = Object.create(Question);
	question1.prompt = "What is the capital of Australia?";
	question1.a = "Sydney";
	question1.b = "Canberra";
	question1.c = "Melbourne";
	question1.d = "Adelaide";
	question1.correctAnswer = 'a';

	var question2 = Object.create(Question);
	question2.prompt = "By area, what is the smallest country on the planet?";
	question2.a = "Vatican City";
	question2.b = "Monaco";
	question2.c = "Nauru";
	question2.d = "Madagascar";
	question2.correctAnswer = 'a';


	var question3 = Object.create(Question);
	question3.prompt = "What is the name of the tallest uninterrupted waterfall in the world?";
	question3.a = "Victoria Falls";
	question3.b = "Angel Falls";
	question3.c = "Niagara Falls";
	question3.d = "Alamere Falls";
	question3.correctAnswer = 'b';


	var question4 = Object.create(Question);
	question4.prompt = "What is the correct spelling of this landlocked Asian nation?";
	question4.a = "Kyrgyzstan";
	question4.b = "Kurjistan";
	question4.c = "Kergystan";
	question4.d = "Kyigyzstan";
	question4.correctAnswer = 'a';


	var question5 = Object.create(Question);
	question5.prompt = "What country is home to the tallest mountain in the world, Mount Everest?";
	question5.a = "Pakistan";
	question5.b = "India";
	question5.c = "Bhutan";
	question5.d = "Nepal";
	question5.correctAnswer = 'd';


	// Results
	for(var i = 0; i < length; i++) {
		var question = game.question[i];
		question.writeToDom();
		//wait for user selection
		question.userAnswer = userSelection;
			if (question.isCorrect()) {
				$('.result').append("<h1>CORRECT!</h1>");
				$('.result h1').hide();
				$('.result h2').hide();
			else {
				$('.result').show();
			}
		}
	}

	// Start quiz
	$('.intro').on('click', '.start', function() {
		updateProgress();
		currentQuestion++;
		nextQuestion();
	});

	function updateProgress() {
		if ()
	}

	function correctAnswer() {
		if (userInput === correct)
	}

	function nextQuestion() {

	}
}

var Question = {
	prompt: null,
	a: null,
	b: null,
	c: null,
	d: null,
	correctAnswer: null,
	userAnswer: null,
	isCorrect: function() {
		return this.userAnswer === this.correctAnswer;
	}
	writeToDom: function() {
		$('.something').append(this.prompt);
	}
};




// Answer 5 questions

// Show each question one at a time

// Tell user each question's number

// Show how many questions remain

// Prevent user from skipping questions

// Gives user some way to answer each question

// Compare user's answer and the correct answer to determine score

// Allow user to start new game after questions are answered

// Use objects to represent questions and answers


// 	var quiz = [{
// 		question: "What is the capital of Australia?",
// 		choices: ["Sydney", "Canberra", "Melbourne", "Adelaide"],
// 		correct: 0,
// 		num:: 0
// 		},
// 		{
// 		question: "By area, what is the smallest country on the planet?",
// 		answers: ["Vatican City", "Monaco", "Nauru", "Madagascar"],
// 		correct: 0,
// 		num:: 1
// 		},
// 		{
// 		question: "What is the name of the tallest uninterrupted waterfall in the world?",
// 		choices: ["Victoria Falls", "Angel Falls", "Niagara Falls", "Alamere Falls"],
// 		correct: 1,
// 		num:: 2
// 		},
// 		{
// 		question: "What is the correct spelling of this landlocked Asian nation?",
// 		choices: ["Kyrgyzstan", "Kurjistan", "Kergystan", "Kyigyzstan"],
// 		correct: 0,
// 		num:: 3
// 		},
// 		{
// 		question: "What country is home to the tallest mountain in the world, Mount Everest?",
// 		choices: ["Pakistan", "India", "Bhutan", "Nepal"],
// 		correct: 3,
// 		num:: 4
// 	}]

// 	$('.intro').on('click', '.start', function() {
// 		updateProgress();
// 		currentQuestion++;
// 		nextQuestion();
// 	});
// };

// var currentQuestion = 0;


// function updateProgress() {
// 	if ()
// }

// function correctAnswer() {
// 	if (userInput === correct)
// }

// function nextQuestion() {
// 	if (currentQuestion < 5)

// }
