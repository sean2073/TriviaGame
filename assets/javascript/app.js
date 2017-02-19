$(document).ready(function() {

var triviaQuestions = ["Who became the first female recording artist to take home 6 GRAMMY'S in 2010? ",
						
						"What year was Milli Vanilli's award revoked? ",
						"Who was the first ever to win record, album and song of the year? ",
						
						"Which group holds the record for the most GRAMMY wins? ",
						
						"How many GRAMMY awards did Michael Jackson walk away with at the 1984 awards show? "];
						 
var answerKey = ["Beyonce", 1990, "Paul Simon", "U2", 8];
var triviaAnswers = [["Rianna", "Beyonce", "Lady GaGa", "Adele"], [1989, 1990, 1991, 1992], ["Paul McCartney", "Carley Simon ", "Michael McDonald", "Paul Simon"], ["U2", "The Beatles", "Bruce Springsteen & The E. Street Band","Simon & Garfunkel"], [4, 5, 8, 9]];
/*var question = [
{
	question: "What is my name?"
	, answers: ["Mike", "Anthony"]
	, correctAnswer: 1
}
,{
	question: "What is my gender?"
	, answers: ["Female", "Male"]
	, correctAnswer: 0
}
];
*/
var number = 60;
var correctTotal = 0;
var wrongTotal = 0;
var noAnserTotal = 0;
console.log(triviaAnswers[0]);
console.log(triviaAnswers[1]);
console.log(triviaAnswers[0][0]);
console.log(triviaAnswers[0][1]);

var a = $("#radio").val();
console.log(a);

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;
    $("#start").on("click", start);
    //  When the stop button gets clicked, run the stop function.
    $("#stop").on("click", stop);
    //  When the resume button gets clicked, execute the run function.
   // $("#resume").on("click", run);
    //  The run function sets an interval
    //  that runs the decrement function once a second.
    
    function start()
    {
		$("#start").hide();
		run();
		displayQuestions();
		$("#stop").append($('<input type="button" class="w3-btn w3-round-xlarge" value="STOP">'));
	
	}
    function run() {
      intervalId = setInterval(decrement, 1000);
    }
    //  The decrement function.
    function decrement() {
      //  Decrease number by one.
      number--;
      //  Show the number in the #timeRemaining tag.
      $("#timeRemaining").html("<h2>Time Remaining: " + number + " seconds</h2>");
      //  Once number hits zero...
      if (number === 0) {
        //  ...run the stop function.
        stop();
        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }
    //  The stop function
    function stop() {
      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
      $("#stop").hide();
      $("#timeRemaining").hide();
      $("#questions").html("<br><h2>ALL DONE! </h2>" );
      $("#message").html("Correct Answers: " + correctTotal + "<br>" );
      $("#message").append("<br>Incorrect Answers: " + wrongTotal + "<br>" );
      $("#message").append("<br>Unanswered: " + noAnserTotal + "<br>" );
    }
    function displayQuestions()
{
console.log(a);
 for (var i = 0; i < triviaQuestions.length; i++) 
 	{

   		console.log("about to write the questions");
   		console.log(triviaQuestions.length);
   		// For each iteration, I will ceate a paragraph
   		var writeQuestion = $("<br><p>" + triviaQuestions[i] + "</p><br>");

  	 	// First each <p> will be given the class ".question-style".
   		// This is so I can apply styles
   		writeQuestion.addClass("question-style");
		// Each <p> will be given a data attribute called data-quesionValue.
   		// This data attribute will be set equal to the answers in the triviaAnswers array.
   		writeQuestion.attr("data-questionvalue", answerKey[i]);

   		// Lastly, each <p> (with all it classes and attributes) will get added to the page.
   		//$("#questions").append(writeQuestion + triviaQuestions[i] + "<br>");
   		$("#questions").append(writeQuestion);
   		//console.log("the answer for the question is " + data-questionvalue);
   		for(var j=0; j<triviaAnswers[i].length; j++)
   			{
   				$("#questions").append("   <input type='radio' class='radio' name='answers"+[i]+"' value='" + triviaAnswers[i][j]+"'>   "+ triviaAnswers[i][j] + "      ");
   				//console.log($(input.val));
   				//var setValue = setValue.attr("data-answervalue", triviaAnswers[i][j])
   				console.log(a);

   			}
   		//$("#questions").append("<br>" + "<input type='radio' >"+ triviaAnswers[i] + "<br>");
   		//console.log(this.writeQuestion);
   		console.log(writeQuestion);
   		//checkAnswers();
   		
	}
	$(".radio").on("click", checkAnswers);
}
    /*$("#radio").change(function(){
    	var userInput = $("#radio").val();
    	console.log("I've been clicked.");
    	console.log(userInput);

    });*/
    function checkAnswers(){
    //	event.preventDefault();

    	userInput = $(".radio").val();
    	console.log(userInput);
    }
    
});  //  Closes jQuery wrapper
		
		
    