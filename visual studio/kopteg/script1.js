let bebida = prompt("Escolha sua bebida: café, leite ou chá");
let valor;

switch (bebida.toLowerCase()) {
    case 'café':
        valor = 3.50;
        break;
    case 'leite':
        valor = 4.00;
        break;
    case 'chá':
        valor = 2.75;
        break;
    default:
        alert("Escolha inválida. Por favor, escolha entre café, leite ou chá.");
        break;
}

if (valor) {
    alert("Você escolheu " + bebida + ". O valor a ser pago é R$ " + valor.toFixed(2) + ".");
}