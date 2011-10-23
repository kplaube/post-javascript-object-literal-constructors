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
var carro = object_literal.Automovel;
console.log('quantidade de rodas:', carro.quantidadeRodas); // 4

// Ligar o motor
object_literal.Automovel.ligarMotor();
console.log('motor ligado:', carro.motorLigado); // true

// Atribuindo rodas a motocicleta
var moto = object_literal.Automovel;
moto.quantidadeRodas = 2;
console.log('quantidade de rodas (moto):', moto.quantidadeRodas); // 2
console.log('quantidade de rodas (carro):', carro.quantidadeRodas); // 2


// Criando a funcao Automovel
console.log('-- constructor function --');

var constructor = {
    Automovel: function(qtndRodas) {
        this.quantidadeRodas = qtndRodas;
        this.motorLigado = false;
    }
};

constructor.Automovel.prototype.ligarMotor = function() {
    this.motorLigado = true;
};

// Precisamos instanciar a classe Automovel para criar um objeto
var carro = new constructor.Automovel(4);
console.log('quantidade de rodas:', carro.quantidadeRodas); // 4

// Ligar o motor
carro.ligarMotor();
console.log('motor ligado:', carro.motorLigado); // true

// Instanciando uma motocicleta
var moto = new constructor.Automovel(2);
console.log('quantidade de rodas (moto):', moto.quantidadeRodas); // 2
console.log('quantidade de rodas (carro):', carro.quantidadeRodas); // 4
