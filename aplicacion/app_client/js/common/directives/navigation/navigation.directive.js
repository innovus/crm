(function () {
  angular
    .module('udenar')
    .directive('navigation', navigation);
    function navigation(){
        return {
            restrict: 'EA',
            templateUrl: '/js/common/directives/navigation/navigation.template.html',
            controller: 'navigationCtrl as navvm'
        };
    }
})();
