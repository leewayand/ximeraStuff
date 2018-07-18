require.config({
    baseUrl: "js/libs",
	
    paths: {
        app: "../app",
		jquery: ["https://code.jquery.com/jquery-3.3.1.min", "jquery"],
		
		bootstrap: "bootstrap.bundle.min"
    },
	
	shim : {
        "bootstrap" : { "deps" :['jquery'] }
    }
  });
  
  
  
  
  require(["jquery", "bootstrap",  "../mylibs/dom", "../mylibs/feedback", "../mylibs/constants"],
    function($jQ, bootstrap,  dom, feedback, constants) {

	console.log("inside app");


	
	
	
    }
  );
  
  