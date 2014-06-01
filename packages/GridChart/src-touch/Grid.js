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
                '<h2>',
                    'IE<br>',
                    'FF<br>',
                    'Chrome<br>',
                    'Safari',
                '</h2>',
                '<aside>',
                    '{data1}%<br>',
                    '{data2}%<br>',
                    '{data3}%<br>',
                    ' {data4}%',
                '</aside>',
             '</div>'
        ].join('')
    }
});