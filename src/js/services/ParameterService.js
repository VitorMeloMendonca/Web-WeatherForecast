'use strict';

weatherForecast.service('ParameterService', function () {

    this.BaseUrl = 'http://api.openweathermap.org/data/2.5/forecast';

    //this.ApiKey = '&appid=3105476668f22865ef651b6119197eb4';   //My
    this.ApiKey = '&appid=8caa3a62ba1f3b52d931888f38d1bc75'; //Client
});