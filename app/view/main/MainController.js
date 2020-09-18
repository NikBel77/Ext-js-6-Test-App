/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TestApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onLogout: function() {
        this.getView().destroy();

        Ext.create({
            xtype: 'login'
        })
    },

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onGoods: function() {
        let list = Ext.create({
            xtype: 'mainlist'
        });
        
        this.getView().add(list);
        this.getView().updateLayout();
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
