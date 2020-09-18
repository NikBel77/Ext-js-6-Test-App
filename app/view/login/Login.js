Ext.define('TestApp.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'TestApp.view.login.LoginController',
        'Ext.form.Panel',
    ],

    controller: 'login',
    title: 'Login',
    closable: false,
    autoShow: true,

    width: 320,
    bodyPadding: 10,
    defaultType: 'textfield',

    items: [{
        allowBlank: false,
        fieldLabel: 'User ID',
        name: 'user',
        emptyText: 'user id',
        msgTarget: 'under'
    }, {
        allowBlank: false,
        fieldLabel: 'Password',
        name: 'pass',
        emptyText: 'password',
        inputType: 'password'
    }],

    buttons: [
        {
            text: 'Login',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        }
    ],

    defaults: {
        anchor: '100%',
        labelWidth: 120
    }
});