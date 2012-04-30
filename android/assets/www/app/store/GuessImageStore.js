Ext.define('App.store.GuessImageStore', {
    extend: 'Ext.data.Store',
    config: {
    model: 'App.model.GuessImageModel',
    autoLoad: true,
        autoSync: true,
        clearOnPageLoad: false,
        storeId: 'GuessImageStore',
        proxy: {
            type: 'localstorage',
            id: 'GuessImageStore-store'
        }
   }
});