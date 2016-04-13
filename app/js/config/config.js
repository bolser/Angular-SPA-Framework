// config
// --------------------------------

var conf = {
  version: '0.0.0',
  name: 'MEAN Framework',
  url: 'http://localhost:8080'
};


// include files
// --------------------------------

//modules
require('../modules/modules.js');

//services
require('../services/example.service.js');

//run
require('../run/view.run.js');
require('../run/google-analytics.run.js');

//routes
require('../routes/routes.js');

//directives
require('../directives/email-mask.directive.js');
require('../directives/placeholder-support.directive.js');
require('../directives/example.directive.js');

//controllers
require('../controllers/contact.controller.js');
require('../controllers/example.controller.js');