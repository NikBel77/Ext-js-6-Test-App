/**
 * This view is an example list of people.
 */
Ext.define('TestApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'TestApp.store.Goods'
    ],

    title: 'Goods',

    store: {
        type: 'goods'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
    ],

    listeners: {
        select: 'onItemSelected'
    },
});
