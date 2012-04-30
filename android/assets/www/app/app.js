Ext.Loader.setConfig({
	enabled: true
});

Ext.application({

    name: 'App',
    requires: [
    	'App.view.HomeScreenView',
    	'App.view.GamePlayView',
    	'App.view.GuessPicker',
    	'App.view.AnswerView',
    	'App.view.FinalResultView'
    	
    ],
	//phoneStartupScreen: 'image/phoneStart.png',
    //glossOnIcon: false,

    models: ['GuessImageModel', 'GuessOptionsModel'],
    stores: ['GuessImageStore', 'GuessOptionsStore'],
    views: ['HomeScreenView', 'GamePlayView', 'GuessPicker','AnswerView','FinalResultView'],
    //appFloder: 'app',
    controllers: ['Home', 'Game'],
	launch: function(){
		this.launched = true;
        this.mainLaunch();
		
	 },
	 mainLaunch: function() {
        //if (!device || !this.launched) {return;}
		console.log("App started");
        var main = Ext.create('App.view.HomeScreenView');
		Ext.Viewport.setActiveItem(main);
    }
});