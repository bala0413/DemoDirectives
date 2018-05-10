var app = angular.module('valid', ['ngTagsInput']);

app.controller('validation', function ($scope, $http) {
    $scope.numbers = ['1', '2', '3', '4'];
});