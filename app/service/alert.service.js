angular.module('pdApp').service('AlertService', AlertService);

function AlertService(toastr) {
    this.success = success;
    this.error = error;
    this.info = info;
    this.alert = alert;

    function success(mensagem, titulo) {
        titulo = titulo || "Ok"
        toastr.success(mensagem, titulo);
    }

    function error(mensagem) {
        titulo = titulo || "Erro"
        toastr.error(mensagem, titulo);
    }

    function info(mensagem) {
        titulo = titulo || "Info"
        toastr.info(mensagem, titulo);
    }

    function alert(mensagem) {
        titulo = titulo || "Atenção"
        toastr.warning(mensagem, titulo);
    }
}
