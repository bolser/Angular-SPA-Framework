'use strict';

angular
  .module('app.controllers')
  .controller('ExampleController', ExampleController);

function ExampleController() {

  // Bindable members
  var vm = this;
  vm.example = example;

  // Example function
  function example() {
    vm.result = 'answer';
  }
}