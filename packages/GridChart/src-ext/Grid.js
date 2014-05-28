/**
 * Created by grgur on 5/26/14.
 */
Ext.define('GC.Grid', {
    extend : 'Ext.grid.Panel',
    xtype  : 'gcgrid',

    title       : 'Browsers',
    split       : true,
    collapsible : true,
    columns     : [
        {
            text      : 'Month',
            flex      : 1,
            sortable  : true,
            dataIndex : 'month',
            hideable  : false
        },
        {
            header    : 'IE',
            xtype     : 'numbercolumn',
            width     : 70,
            dataIndex : 'data1',
            format    : '0,0%'
        },
        {
            header    : 'Firefox',
            xtype     : 'numbercolumn',
            width     : 70,
            dataIndex : 'data2',
            format    : '0,0%'
        },
        {
            header    : 'Chrome',
            xtype     : 'numbercolumn',
            width     : 70,
            dataIndex : 'data3',
            format    : '0,0%'
        },
        {
            header    : 'Safari',
            xtype     : 'numbercolumn',
            width     : 70,
            dataIndex : 'data4',
            format    : '0,0%'

        }

    ]
});