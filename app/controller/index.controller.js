angular.module('pdApp').controller('IndexController', IndexController);

function IndexController($scope) {
    $scope.nome = 'Jair';

    $scope.ola = ola;

    function ola() {
        alert("Oi!");
    }
}