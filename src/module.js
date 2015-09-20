(function (window, angular) {

  'use strict';

  angular.module('betsol.previousUrl', [])

    .factory('previousUrl', function ($location) {

      var service = {};

      service.url = null;

      /**
       * Goes back to the previous URL if possible.
       */
      service.redirectBack = function () {
        if (this.url) {
          $location.url(this.url);
        }
      };

      /**
       * Returns TRUE if previous URL is available, FALSE otherwise.
       *
       * @returns {boolean}
       */
      service.hasUrl = function () {
        return (null !== this.url && $location.url() != this.url);
      };

      return service;

    })

    .run(function ($rootScope, previousUrl) {
      // Keeping track of previous URL.
      $rootScope.$on('$locationChangeSuccess', function (event, newUrl, oldUrl) {
        previousUrl.url = '/' + oldUrl.replace(/^(?:\/\/|[^\/]+)*\//, '');
      });
    })

  ;

})(window, angular);
