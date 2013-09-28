/* 
 * Todo
 * 
 */
app.controller('todoController', function($scope, $route, $routeParams) {
  function render() {
    var currentAction = $route.current.action || 'list';
    switch(currentAction) {
      case 'view': {
        view($routeParams.entityId);
      } break
      default: {
        list();
      } break;
    }
  }
  /*
   * Public Actions
   */
  function view(entityId) {
    console.log('todoController.view()', entityId);
    $scope.entityId = entityId;
  }
  function list() {
    console.log('todoController.list()');
  }

  render(); // always call render!!!
});