Ext.define('App.view.FinalResultView', {
	extend: 'Ext.Panel',
	config: {
		fullscreen: true,
		title: 'Guess Twer',
		items: 
		[
			{
				xtype: 'titlebar',
            	title: 'My Home',
            	docked: 'top',
			},
			{
				xtype: 'button',
            	text: 'Play Game',
            	ui: 'normal',
            	id: 'playGameButton'
			}
		]
	}
});