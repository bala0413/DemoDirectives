var app = angular.module('demo', ['ngTagsInput']);

app.controller('MainCtrl', function ($scope, $http) {
    $scope.tags = [
        { text: 'Bala' },
        { text: 'Vicky' },
        { text: 'BalaVicky' }
    ];
});