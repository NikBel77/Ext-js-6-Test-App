/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TestApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'TestApp.view.main.MainController',
        'TestApp.view.main.MainModel',
        'TestApp.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',
    suspendLayout: false,
    ui: 'navigation',

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list',
        items: [
            {
                xtype: 'button',
                text: 'Goods',
                margin: '10',
                handler: 'onGoods',
                // style: {
                //     'background-color': '#f9f9f9'
                // }
            },
            {
                xtype: 'button',
                text: 'logout',
                margin: '10',
                handler: 'onLogout',
                // style: {
                //     'background-color': ''
                // }
            }
        ]
    },

    items: [
        { xtype: 'mainlist'},
        { xtype: 'mainlist'} 
    ],

});
