// config
// --------------------------------

var conf = {
  version: '1.0.0',
  name: 'Web Framework',
  url: 'http://localhost:8080'
};


// modules
// --------------------------------

angular
  .module('app', [
    'ngRoute',
    'ngAnimate'
  ]);