Ext.define('App.view.GuessPicker', {
	extend: 'Ext.Picker',
	config: {
		    slots: [
        		{
            		name : 'guessOptions',
            		title: 'Guess',
            		store: 'GuessOptionsStore'
        		}
    		]
	}
});