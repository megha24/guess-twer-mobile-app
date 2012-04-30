Ext.define('App.view.AnswerView', {
	extend: 'Ext.Panel',
	config: {
		fullscreen: true,
		title: 'Guess Twer',
		items: 
		[
			{
				xtype: 'titlebar',
            	title: 'My ',
            	docked: 'top',
			},
			{
				xtype: 'button',
            	text: 'Exit',
            	ui: 'normal',
            	id: 'exitButton'
			},
			{
				xtype: 'button',
            	text: 'Next',
            	ui: 'normal',
            	id: 'nextButton'
			}
		]
	}
});