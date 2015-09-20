/**
 * betsol-ng-previous-url - Tracks previous URL in Angular.js
 * @version v0.0.0
 * @link https://github.com/betsol/ng-previous-url
 * @license MIT
 *
 * @author Slava Fomin II <s.fomin@betsol.ru>
 */
(function (window, angular) {

  'use strict';

  angular.module('betsol.previousUrl', [])

    .factory('previousUrl', ['$location', function ($location) {

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

    }])

    .run(['$rootScope', 'previousUrl', function ($rootScope, previousUrl) {
      // Keeping track of previous URL.
      $rootScope.$on('$locationChangeSuccess', function (event, newUrl, oldUrl) {
        previousUrl.url = '/' + oldUrl.replace(/^(?:\/\/|[^\/]+)*\//, '');
      });
    }])

  ;

})(window, angular);
