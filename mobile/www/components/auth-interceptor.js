(function() {
  angular.module('starter').factory('authInterceptor', authInterceptor);
  authInterceptor.$inject = ['$q', '$location', '$rootScope', 'localStorageService', 'host'];

  function authInterceptor ($q, $location, $rootScope, localStorageService, host) {
    return {
      request: request,
      responseError: responseError,
      response: response
    };
    function disableCachingRestCalls(config) {
      var restPath = host + '/api';
      if (config.method === 'GET' && config.url.substring(0, restPath.length) === restPath) {
        if (!config.params) {
          config.params = {};
        }
        config.params.noCache = new Date().getTime();
      }
    }
    // Add authorization token to headers
    function request (config) {
      $rootScope.$broadcast('loading:show');
      config.headers = config.headers || {};
      if (localStorageService.get('token')) {
        config.headers.Authorization = 'Bearer ' + localStorageService.get('token');
      }
      disableCachingRestCalls(config);
      return config;
    };

    function response (response) {
      $rootScope.$broadcast('loading:hide');
      return response;
    };

    // Intercept 401s and redirect you to login
    function responseError (response) {
      $rootScope.$broadcast('loading:hide');
      if(response.status === 401) {
        $location.path('/login');
        // remove any stale tokens
        $cookieStore.remove('token');
        return $q.reject(response);
      }
      else {
        return $q.reject(response);
      }
    };
  }
})();
