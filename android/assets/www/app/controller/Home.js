Ext.define('App.controller.Home', {
	extend: 'Ext.app.Controller',
	views: ['HomeScreenView','AnswerView'],
	config: {

	},
	init: function(){
		this.control({
			'#playGameButton': {
				tap: this.onPlayGameTap
			},
			'#exitButton': {
				tap: this.onExitGameTap
			},
			'#nextButton': {
				tap: this.onNextGameTap
			}
		});

	},
		onPlayGameTap: function() {
			   var gameController = App.app.getController('Game');  
			   gameController.start();          
		} ,
		onExitGameTap: function() {
			   var gameController = App.app.getController('Game');  
			   gameController.exit();          
		},
		onNextGameTap: function() {
			   var gameController = App.app.getController('Game');  
			   gameController.start();          
		}  
		
});