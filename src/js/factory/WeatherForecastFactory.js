weatherForecast.factory('WeatherForecastFactory', function ($http, $q, ParameterService) {

    var baseUrl = ParameterService.BaseUrl;
    var apiKey = ParameterService.ApiKey;
    var dataFactory = {};

    dataFactory.GetWeatherForecastByFiveDays = function (data) {
        var deferred = $q.defer();
        var url = baseUrl + '?q=' + data.CityName + '&units=' + data.Unit + apiKey;
        $http.get(url).then(function (response) {
            deferred.resolve(response);
        }, function (response) {
            deferred.reject(response);
        });

        return deferred.promise;
    }

    return dataFactory;
});