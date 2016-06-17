// import files
// --------------------------------

// modules
require('./common/modules/app.js');

// run
require('../dist/js/templates.js');

// services
require('./common/services/window-resize.service.js');

// directives
require('./common/directives/email-mask.directive.js');
require('./common/directives/placeholder-support.directive.js');

// states
require('./common/states/states.js');
require('./common/states/state-change.run.js');

// view controllers
require('./home/home.controller.js');