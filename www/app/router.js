app.config(['$routeProvider', function($routeProvider) {
  //console.log('app.config()', window.location);
  
  $routeProvider
  .when('/', {
    templateUrl: 'app/todo/views/todo-list.html',
    controller: 'todoController',
    action: 'list',
  })
  .when('/todo/:entityId', {
    templateUrl: 'app/todo/views/todo-view.html',
    controller: 'todoController',
    action: 'view',
  })
  .otherwise({ 
    redirectTo: '/',
  });
}]);