// Modules
require('./common/modules/app.js');
require('./common/modules/app.templates.js');

// Templates
require('../.tmp/templates.js');

// Common services
require('./common/services/window-resize.service.js');
require('./common/services/placeholder-support.service.js');
require('./common/services/http-interceptor.service.js');

// Common directives
require('./common/directives/email-mask.directive.js');
require('./common/directives/placeholder.directive.js');

// States
require('./common/states/states.js');
require('./common/states/state-change.run.js');

// View controllers
require('./home/home.controller.js');