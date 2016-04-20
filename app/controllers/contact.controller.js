'use strict';


// init
// --------------------------------

angular
  .module('app')
  .controller('ContactController', ContactController);

ContactController.$inject = ['$http'];


// functionality
// --------------------------------

function ContactController($http) {


  //bindable members
  var vm = this;
  vm.error = false;
  vm.loading = false;
  vm.submit = submit;
  vm.success = false;


  //submit form
  function submit(user) {

    //init loading
    vm.loading = true;

    //post data to server
    $http.post('/actions/modules/contact.php', user).then(success).catch(error);

    //post success
    function success(res) {
      vm.loading = false;
      vm.success = res.data;
    };

    //post error
    function error(res) {
      vm.loading = false;
      vm.error = res.data;
    };

  };


};