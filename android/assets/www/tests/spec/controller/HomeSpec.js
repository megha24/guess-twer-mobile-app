describe("HomeController", function() {
  var controller;
  var mockedGameController = {
  	start: function(){},
  	exit:function(){}
  	
  }
    
  beforeEach(function() {
		controller = App.controller.Home.prototype;
  });
	
  it("should call Start Action of Game Controller on PlayGame Button Tap", function() {
  		spyOn(App.app, 'getController').andReturn(mockedGameController);
  		spyOn(mockedGameController, 'start');
  		controller.onPlayGameTap();
  		expect(App.app.getController).toHaveBeenCalled();
  		expect(mockedGameController.start).toHaveBeenCalled();
  });
  
  it("should call Exit Action of Game Controller on Exit Button Tap", function() {
  		spyOn(App.app, 'getController').andReturn(mockedGameController);
  		spyOn(mockedGameController, 'exit');
  		controller.onExitGameTap();
  		expect(App.app.getController).toHaveBeenCalled();
  		expect(mockedGameController.exit).toHaveBeenCalled();
  });
  
  it("should call Exit Action of Game Controller on next Button Tap", function() {
  		spyOn(App.app, 'getController').andReturn(mockedGameController);
  		spyOn(mockedGameController, 'start');
  		controller.onNextGameTap();
  		expect(App.app.getController).toHaveBeenCalled();
  		expect(mockedGameController.start).toHaveBeenCalled();
  });
 
 
});