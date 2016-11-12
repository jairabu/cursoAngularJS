angular.module('pdApp').filter('maiusculo', maiusculo);

function maiusculo() {
    return function(texto) {
        if(!texto) {
            return "";
        }
        return texto.toUpperCase();
    }
}
