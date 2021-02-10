/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'GitApp.Application',

    name: 'GitApp',

    requires: [
        // This will automatically load all classes in the GitApp namespace
        // so that application classes do not need to require each other.
        'GitApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'GitApp.view.main.Main'
});
