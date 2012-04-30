Ext.define('App.controller.Game', {
	extend: 'Ext.app.Controller',
	views: ['GamePlayView','AnswerView','finalResultView'],
	config: {
	},
	init: function(){
		this.correctAnswer =  null;
		this.questionNumber = 0;
		this.incorrectAnswers = 0;
		
		if (!this.main) {
			this.main = Ext.create('App.view.GamePlayView');
		}
		if (!this.picker) {
			this.picker = Ext.create('App.view.GuessPicker');
		}
		if (!this.answerView) {
			this.answerView = Ext.create('App.view.AnswerView');
		}
		if (!this.finalResultView) {
			this.finalResultView = Ext.create('App.view.FinalResultView');
		}
		
		this.control({
			'#guessButton': {
				tap: this.guessButtonTap
			},
			picker: {
				change: this.guessOptionsSelected
			}
		});
	},
	
	start: function() {
		
		if(this.incorrectAnswers >= 3) {
			Ext.Viewport.setActiveItem(this.finalResultView);
		}
		else
		{
		this.questionNumber = this.questionNumber + 1;
		Ext.Viewport.setMasked(true);
		var image = this.main.innerItems[0];
		var request = Ext.data.JsonP.request({
            url: 'http://www.machinebucket.com/mobileapp/guess.php',
            callbackKey: 'callback',
            params: {
                question: this.questionNumber,
            },
            success: function(result) {
            	Ext.Viewport.setMasked(false);
            	var guessOptionsStore = Ext.StoreMgr.lookup('GuessOptionsStore');
            	guessOptionsStore.removeAll();
                guessOptionsStore.add(result.data.guessOptions);  
				guessOptionsStore.sync();
                image.setData({
                                imageUrl : result.data.guessImage
                    });	
                correctAnswer = result.data.correctAnswer;
            }
        });
		Ext.Viewport.setActiveItem(this.main);
		};
	},
	
	guessButtonTap: function() { 
				this.picker.setValue({
					guessOptions: null
				});
				Ext.Viewport.add(this.picker);
				this.picker.show();      
		},
		
	guessOptionsSelected: function(e, values) { 
					
				if(values.guessOptions == correctAnswer) {
									this.correctAnswer+=1;
									this.result(true);
									
								}
								else{
									this.incorrectAnswers+=1;
								this.result(false);
								}
								
								
		},	 
	
	result: function(result){
		
		Ext.Viewport.setActiveItem(this.answerView);
	},
	
	exit: function(){
		Ext.Viewport.setActiveItem(this.finalResultView);
	}
		
		
});