// Criando o object literal Automovel
var object_literal = {
    Automovel: {
        quantidadeRodas: 4
    }
};
console.log(object_literal.Automovel.quantidadeRodas);

// Criando a funcao Automovel
var constructor = {
    Automovel: function() {
        this.quantidadeRodas = 4;
    }
};

// Precisamos instanciar a classe Automovel para criar um objeto
var automovel = new constructor.Automovel();
console.log(automovel.quantidadeRodas);
