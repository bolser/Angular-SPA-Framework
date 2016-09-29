// Modules
require('./common/modules/app.module.js');
require('./common/modules/app.controllers.module.js');
require('./common/modules/app.directives.module.js');
require('./common/modules/app.services.module.js');
require('./common/modules/app.states.module.js');
require('./common/modules/app.templates.module.js');

// Common services
require('./common/services/after-event.service.js');
require('./common/services/http-interceptor.service.js');
require('./common/services/placeholder-support.service.js');

// Common directives
require('./common/directives/email-mask.directive.js');
require('./common/directives/placeholder.directive.js');

// States
require('./common/states/states.js');

// View controllers
require('./home/home.controller.js');