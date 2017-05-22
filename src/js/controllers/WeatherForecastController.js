'use strict';

weatherForecast.controller('WeatherForecastController', function ($scope, WeatherForecastFactory) {

    $scope.Title = 'Weather Forecast';
    $scope.Weather = {
        CityName: 'Toronto',
        Unit: 'imperial',
    };

    $scope.Search = function () {
        getWeatherForecast();
    }

    $scope.Change = function () {
        getWeatherForecast();
    }

    function getWeatherForecast() {

        if ($scope.weatherForecastForm.$invalid) {
            return;
        }

        WeatherForecastFactory.GetWeatherForecastByFiveDays($scope.Weather).then(function (response) {
            $scope.WeatherData = response;
        });
    }
});