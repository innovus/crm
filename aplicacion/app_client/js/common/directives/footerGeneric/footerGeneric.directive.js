
(function(){

    /** 
     * @ngdoc directive
     * @name compras.directive:footerGeneric
     * @restrict EA
     * @description
     * 
     * Esta es una directiva del pie de pagina
     * 
    */
    angular
      .module("tienda")
      .directive("footerGeneric",footerGeneric);

      function footerGeneric(){
        return {
          restrict: "EA",
          templateUrl:"/js/common/directives/footerGeneric/footerGeneric.template.html"
        };
      }
})();
