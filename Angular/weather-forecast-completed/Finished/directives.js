// DIRECTIVES
weatherApp.directive("weatherReport", function() {
   return {
       restrict: 'E',
       templateUrl: 'directives/weatherReport.html',
       replace: true,
       scope: {
           weatherDay: "=", //object
           convertToStandard: "&", //function
           convertToDate: "&", //function
           dateFormat: "@" //string
       }
   }
});

<weather-report weather-day="w" convert-to-standard="convertToFahrenheit(daytimeTemp)" convert-to-date="convertToDate(dt)" date-format="MMMM d, y"></weather-report>
  
<div class="panel panel-default">
    <div class="panel-heading">
        <h3 class="panel-title">{{ convertToDate({ dt: weatherDay.dt }) | date: dateFormat }}</h3>
    </div>
    <div class="panel-body">
        Daytime temperature: {{ convertToStandard({ daytimeTemp: weatherDay.temp.day }) }}
    </div>
</div>
