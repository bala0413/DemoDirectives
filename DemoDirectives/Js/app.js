var app = angular.module('demo', ['ngTagsInput']);

app.controller('MainCtrl', function ($scope, $http) {
    $scope.tags = [
        { text: 'Bala' },
        { text: 'Vicky' },
        { text: 'BalaVicky' }
    ];


    $scope.names = [
        { text: 'bala' },
        { text: 'chandran' },     
        { text: 'bala chandran' }
    ];


    $scope.loadNames = function (query) {
        return $http.get('/Js/superheroes.json');
    };   

});
//Tag: $scope.tags.toString(),