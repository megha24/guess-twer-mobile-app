Ext.define('App.model.GuessOptionsModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
				{ name: 'text', type: 'string'},
				{ name: 'value', type: 'string'}
			]
    }
});