'use strict';

describe('Route', function () {
    it('should test routeProvider', function () {
        module('WeatherForecast');

        inject(function ($route, $location, $rootScope) {

            expect($route.current).toBeUndefined();
            $location.path('/');
            $rootScope.$digest();

            expect($route.current.templateUrl).toBe('templates/weatherForecast.html');
            expect($route.current.controller).toBe('WeatherForecastController');
        });
    })
});

describe('WeatherForecastController', function () {
    beforeEach(module('WeatherForecast'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('$scope.Weather', function () {
        it('Validate fields', function () {
            var $scope = {};
            var controller = $controller('WeatherForecastController', { $scope: $scope });
            $scope.Weather = {
                CityName: 'Toronto',
                Unit: 'imperial',
            };

            expect($scope.Weather.CityName).toEqual('Toronto');
            expect($scope.Weather.Unit).toEqual('imperial');
        });
    });
});
