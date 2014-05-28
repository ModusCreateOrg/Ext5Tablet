/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('MyApp.Application', {
    extend : 'Ext.app.Application',

    name : 'MyApp',

    requires : [
        'Ext.MessageBox'
    ],

    views : [
        // TODO: add views here
    ],

    controllers : [
        'Root'
        // TODO: add controllers here
    ],

    stores : [
        // TODO: add stores here
    ],

    launch : function () {
        var me = this;

        Ext.onSpaceReady(function () {
            var width = Ext.getBody().getWidth();
            if (width < 1000) {
                me.transferToMobile();
            }
        });
    },

    transferToMobile : function () {
        Ext.Msg.confirm('Phone detected', 'Do you want to see the phone site instead?', function (resp) {
            if (resp === 'yes') {
                Ext.space.Invoke.get('bpmobile').then(function (connection) {
                    connection.send({}, true);
                }, console.warn.bind(console));
            }
        });
    }
});
