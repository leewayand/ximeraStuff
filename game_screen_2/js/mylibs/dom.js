define(["jquery", "../mylibs/constants"],
    function($jQ, constants) {
		console.log("inside dom");

		
		
		function colorFeedbackBox() {
			constants.theFeedbackBox.css({"background-color" : constants.theFeedbackColor});
		}
	
	
	
		return {

			"colorFeedbackBox": colorFeedbackBox

		}
	

	
	});