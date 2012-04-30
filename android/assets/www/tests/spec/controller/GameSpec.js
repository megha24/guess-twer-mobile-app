describe("GameController", function() {
  var controller;
  var mockedMainView = {
  	innerItems: Array
  }
  
  beforeEach(function() {
		controller = App.controller.Game.prototype;
  });
	
  it("should initialize all the values on App load", function() {
		spyOn(Ext, 'create').andReturn('some-view-created');
		spyOn(controller, 'control').andReturn('some-controls-defined');
  		controller.init();
  		expect(controller.correctAnswer).toEqual(null);
		expect(controller.questionNumber ).toEqual(0);
		expect(controller.incorrectAnswers ).toEqual(0);
		expect(controller.main).toEqual('some-view-created');
		expect(controller.picker).toEqual('some-view-created');
		expect(controller.answerView).toEqual('some-view-created');
		
  		expect(Ext.create).toHaveBeenCalled();
  });
 
   it("should setup the question on calling of start action", function() {
  		controller.incorrectAnswers = 0;
  		controller.questionNumber = 0;
  		controller.main = mockedMainView;
  		
  		spyOn(Ext.Viewport, 'setMasked');
  		spyOn(Ext.data.JsonP, 'request');
  		spyOn(Ext.Viewport, 'setActiveItem');
  		
  		controller.start();
  		
  		expect(controller.questionNumber).toEqual(1);
  		expect(Ext.Viewport.setMasked).toHaveBeenCalled();
  		expect(Ext.data.JsonP.request).toHaveBeenCalled();
  		expect(Ext.Viewport.setActiveItem).toHaveBeenCalled();
  });
  
   it("should call exit method on Game Over", function() {
  		controller.incorrectAnswers = 3;
  		controller.questionNumber = 0;
  		controller.main = mockedMainView;
  		
  		
  		spyOn(Ext.Viewport, 'setMasked');
  		spyOn(Ext.data.JsonP, 'request');
  		spyOn(Ext.Viewport, 'setActiveItem');
  		spyOn(controller, 'exit');
  		
  		controller.start();
  		
  		expect(Ext.Viewport.setActiveItem).toHaveBeenCalled();
  });  
  
  it("should add picker to the view", function() {
  		confirm.picker = {
  			setValue:{},
			show: function(){}
  		};
  		
  		spyOn(Ext.Viewport, 'add');
  		
  		controller.guessButtonTap();
  		
  		expect(controller.picker.setValue).toHaveBeenCalled();
  		expect(Ext.Viewport.add).toHaveBeenCalledWith(controller.picker);
  		expect(controller.picker.show).toHaveBeenCalled();
  });  
  
     it("should redirect to result action with true as parameter on correct Guess Option selected", function() {
     window.correctAnswer= 1;
     var values = new Object();
     values.guessOptions = 1;
     spyOn(controller, 'result');

 controller.guessOptionsSelected("", values);
   		
  		 expect(controller.result).toHaveBeenCalledWith(true);
   }); 
   
   it("should redirect to result action with false as parameter on correct Guess Option selected", function() {
    	 window.correctAnswer= 1;
    	 var values = new Object();
    	 values.guessOptions = 2;
    	 spyOn(controller, 'result');
  		 controller.guessOptionsSelected("", values);
   		
  		expect(controller.result).toHaveBeenCalledWith(false);
   }); 
   
    it("should redirect to answerView on  result Action", function() {
     	
     	
    	 spyOn(Ext.Viewport, 'setActiveItem');
  		
   		
  		 controller.result(true);
   		
  		 expect(Ext.Viewport.setActiveItem).toHaveBeenCalledWith(controller.answerView);
   }); 
   it("should redirect to final result if exit button is pressed", function(){
  	 spyOn(Ext.Viewport, 'setActiveItem');
  	 controller.exit();
  	 expect(Ext.Viewport.setActiveItem).toHaveBeenCalledWith(controller.finalResultView);
   });
  
  
});