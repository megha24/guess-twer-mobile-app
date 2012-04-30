Ext.define('App.view.GamePlayView', {
	extend: 'Ext.Container',
	config: {
		fullscreen: true,
		layout: 'vbox',
		items: 
		[
		{
			id: 'guessImage',
			store: 'GuessImageStore',
            tpl: '<img src="{imageUrl}" width="100%"/>',
            style: 'background-color: #5E99CC;',
            flex: 1
        },
        {
			xtype: 'button',
            text: 'Guess',
            ui: 'normal',
            id: 'guessButton',
        }
		]
	}
});