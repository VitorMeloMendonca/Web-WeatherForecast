var weatherForecast = angular.module('WeatherForecast', ['ngRoute']);

weatherForecast.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'templates/weatherForecast.html',
            controller: 'WeatherForecastController'
        })
        .otherwise('/');
});
