(function(){
  angular.module('app')
  .service('UserService', userData)

  function userData(){
    this.user={id:1}
  }
})()
