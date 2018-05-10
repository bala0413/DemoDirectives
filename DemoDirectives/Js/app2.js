var app = angular.module('demod', ['ngTagsInput']);

app.controller('Super', function ($scope, $http) {
    $scope.superheroes = [
        'Batman',
        'Superman',
        'Iron Man',
        'Hulk',
        'Wolverine',
        'Spiderman'
    ];

    $scope.log = [];

    $scope.loadSuperheroes = function (query) {
        return $http.get('/Js/superheroes.json');
    };

    $scope.added = function (tag) {
        $scope.log.push('Added: ' + tag.text);
    };

    $scope.removed = function (tag) {
        $scope.log.push('Removed: ' + tag.text);
    };
});
