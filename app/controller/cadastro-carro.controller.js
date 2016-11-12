angular.module('pdApp').controller('CadastroCarroController', CadastroCarroController);

function CadastroCarroController($scope, AlertService) {
    $scope.entidade = {};
    $scope.listaCarros = [];

    $scope.salvar = salvar;
    $scope.limpar = limpar;

    function salvar() {
        $scope.carroForm.nome.$setTouched();
        if($scope.carroForm.$invalid) {
            AlertService.error("Formulário inválido");
            return;
        }

        $scope.listaCarros.push($scope.entidade);
        limpar();
        AlertService.success("Registro salvo com sucesso!");
    }

    function limpar() {
        $scope.entidade = {};
        $scope.carroForm.nome.$setUntouched();
        //angular.element("#nomeCarro").focus();
    }
}