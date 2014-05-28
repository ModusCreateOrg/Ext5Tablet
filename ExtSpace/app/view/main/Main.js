/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 */
Ext.define('MyApp.view.main.Main', {
    extend : 'Ext.container.Container',

    xtype : 'app-main',

    requires: [
        'GC.Chart',
        'GC.Grid',
        'Ext.data.JsonStore',
        'Ext.chart.*'
    ],

    layout : {
        type : 'border'
    },

    config : {
        grid : 'west',

        chart : 'center',

        store : [
            { month : 'Jan', data1 : 20, data2 : 37, data3 : 35, data4 : 4 },
            { month : 'Feb', data1 : 20, data2 : 37, data3 : 36, data4 : 5 },
            { month : 'Mar', data1 : 19, data2 : 36, data3 : 37, data4 : 4 },
            { month : 'Apr', data1 : 18, data2 : 36, data3 : 38, data4 : 5 },
            { month : 'May', data1 : 18, data2 : 35, data3 : 39, data4 : 4 },
            { month : 'Jun', data1 : 17, data2 : 34, data3 : 42, data4 : 4 },
            { month : 'Jul', data1 : 16, data2 : 34, data3 : 43, data4 : 4 },
            { month : 'Aug', data1 : 16, data2 : 33, data3 : 44, data4 : 4 },
            { month : 'Sep', data1 : 16, data2 : 32, data3 : 44, data4 : 4 },
            { month : 'Oct', data1 : 16, data2 : 32, data3 : 45, data4 : 4 },
            { month : 'Nov', data1 : 15, data2 : 31, data3 : 46, data4 : 4 },
            { month : 'Dec', data1 : 15, data2 : 31, data3 : 47, data4 : 4 }
        ]
    },

    /**
     * Instantiate a store based on data, storeId or store instance
     * @param data
     * @param store
     * @returns {Ext.data.Store} Store
     */
    applyStore : function (data, store) {
        return Ext.isString(data) || data.isStore ? Ext.getStore(data) : Ext.factory({
            fields : ['month', 'data1', 'data2', 'data3', 'data4' ],
            data   : data
        }, 'Ext.data.JsonStore', store);
    },

    /**
     * Instantiate shared chart
     * @param region
     * @param chart
     * @returns {GC.Chart} Chart
     */
    applyChart : function (region, chart) {
        return Ext.factory({
            region : region,
            width  : 400,
            store  : this.getStore()
        }, 'GC.Chart', chart);
    },

    /**
     * Instantiate grid
     * @param region
     * @param grid
     * @returns {GC.Grid}
     */
    applyGrid : function (region, grid) {
        return Ext.factory({
            region : region,
            width  : 400,
            store  : this.getStore(),
            title  : 'Browsers in 2012'
        }, 'GC.Grid', grid);
    },

    /**
     * Add items to the view
     */
    initComponent : function () {
        var me = this;

        me.items = [
            me.getGrid(),
            me.getChart()
        ];

        me.callParent();
    }
});