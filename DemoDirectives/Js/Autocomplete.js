var app = angular.module('Auto', ['ngTagsInput']);

app.controller('Autocomplete', function ($scope, serv) {
    $scope.names = [
        { text: 'Bala' },
        { text: 'Bala Chandran' }
    ];

    $scope.loadNames= function (query) {
        return serv.load();
    };
});

app.service('serv', function ($q) {
    var names = [
        { "text": "Balu" },
        { "text": "Chandru" },
        { "text": "Vijay" },
        { "text": "Sachin" },
        { "text": "Kamal" },
    ];

    this.load = function () {
        var deferred = $q.defer();
        deferred.resolve(names);
        return deferred.promise;
    };
});