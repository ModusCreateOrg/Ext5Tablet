/**
 * Created by grgur on 5/26/14.
 */
Ext.define('GC.Chart', {
    extend : 'Ext.chart.CartesianChart',
    xtype  : 'gcchart',

    config : {
        animate      : true,
        interactions : 'itemhighlight',
        insetPadding : 20,
        background   : 'white',
        flipXY       : true,

        legend : {
            docked : 'bottom'
        },

        colors : [
            "blue",
            "red",
            "green",
            "purple"
        ],

        series : [
            {
                type      : 'bar',
                axis      : 'left',
                title     : [ 'IE', 'Firefox', 'Chrome', 'Safari' ],
                xField    : 'month',
                yField    : [ 'data1', 'data2', 'data3', 'data4' ],
                stacked   : true,
                style     : {
                    opacity : 0.80
                },
                highlight : {
                    fill           : '#000',
                    'stroke-width' : 1,
                    stroke         : '#fff'
                }
            }

        ],
        axes   : [
            {
                type              : 'numeric',
                position          : 'bottom',
                adjustByMajorUnit : true,
                grid              : true,
                fields            : ['data1', 'data2', 'data3', 'data4'],
                minimum           : 0
            },
            {
                type     : 'category',
                position : 'left',
                grid     : true,
                fields   : ['month'],
                label    : {
                    rotate : {
                        degrees : -45
                    }
                }
            }
        ]
    }
});