/**
 * Created by grgur on 5/26/14.
 */
Ext.define('GC.Grid', {
    extend : 'Ext.List',
    xtype  : 'gcgrid',

    config : {
        cls     : 'browserlist',
        itemTpl : [
            '<h1>{month}</h1>',
            '<div class="browsers">',
                '<b>IE</b> {data1} ',
                '<b>FF</b> {data2} ',
                '<b>Chrome</b> {data3} ',
                '<b>Safari</b> {data4} ',
             '</div>'
        ].join('')
    }
});