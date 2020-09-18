Ext.define('TestApp.store.Goods', {
    extend: 'Ext.data.Store',

    alias: 'store.goods',

    fields: [
        'name', 'email', 'phone'
    ],

    data: { items: [
        {  id: 1, name: 'Lenovo', description: "notebook", price: 1000, quantity: 4 },
        {  id: 2, name: 'Mac',     description: "notebook", price: 1500, quantity: 2 },
        {  id: 3, name: 'HTC',   description: "phone", price: 400, quantity: 0 },
        {  id: 4, name: 'Nokia',     description: "phone", price: 300, quantity: 1 }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
