// Criando o object literal Automovel
console.log('-- object_literal --');

var object_literal = {
    Automovel: {
        quantidadeRodas: 4,
        motorLigado: false,

        ligarMotor: function() {
            object_literal.Automovel.motorLigado = true;
        }
    }
};
console.log('quantidade de rodas:', object_literal.Automovel.quantidadeRodas); // 4

// Ligar o motor
object_literal.Automovel.ligarMotor();
console.log('motor ligado:', object_literal.Automovel.motorLigado); // true


// Criando a funcao Automovel
console.log('-- constructor function --');

var constructor = {
    Automovel: function() {
        this.quantidadeRodas = 4;
        this.motorLigado = false;
    }
};

constructor.Automovel.prototype.ligarMotor = function() {
    this.motorLigado = true;
};

// Precisamos instanciar a classe Automovel para criar um objeto
var automovel = new constructor.Automovel();
console.log('quantidade de rodas:', automovel.quantidadeRodas); // 4

// Ligar o motor
automovel.ligarMotor();
console.log('motor ligado:', automovel.motorLigado); // true
