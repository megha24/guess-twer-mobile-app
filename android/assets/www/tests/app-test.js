Ext.application({
    name: 'App',
	launch: function(){
		jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
        jasmine.getEnv().execute();
	 }
});
