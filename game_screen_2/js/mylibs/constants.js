define(["jquery"],
    function($jQ) {
		console.log("inside constants");
	
	
		var theFeedbackBox = $jQ("#theMiddleFeedback");
		var theFeedbackColor = "#aa00aa";

	
	
		return {
		
			"theFeedbackBox": theFeedbackBox,
			"theFeedbackColor": theFeedbackColor
		
		}
	

	
	});