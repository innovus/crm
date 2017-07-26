angular.module('laborAcademica', []).
    filter('byCodigo', function () {
    return function (tipos, codigos) {
        var items = {
            codigos: codigos,
            out: []
        };
        angular.forEach(tipos, function (value, key) {
            if (this.codigos[value.detalle] === true) {
                this.out.push(value);
            }
        }, items);
        return items.out;
    };
});