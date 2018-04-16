var eventsApp = angular.module('eventsApp', ['ngSanitize']);

eventsApp.controller('eventsController', ['$scope', '$sce', function ($scope, $sce) {

    $scope.events = [
        {
            date: new Date("2017-01-01"),
            city: "",
            location: "",
            link: "#"
        },
        {
            date: new Date("2017-01-02"),
            city: "",
            location: "",
            link: "#"
        },
    ];

    $scope.testHtmlString = "test";

    $scope.getHtml = function (string) {
        if(string) {
            return $sce.trustAsHtml(string);
        }
    };

    $scope.getUrl = function (url) {
        if(url) {
            return $sce.trustAsResourceUrl(url);
            //return $sce.getTrustedResourceUrl(url);
        }
    };

}]);
