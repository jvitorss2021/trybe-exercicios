let chess = 'PeÃo'

switch (chess.toLowerCase()){
    case'rei':
    console.log('Rei -> Uma casa para qualquer direção');
    break;
    case'bispo':
    console.log('Bispo -> Diagonais');
    break;
    case'peão':
    console.log('Peão -> Uma casa para frente, no primeiro movimento podem ser duas');
    break;
    case'Torre':
    console.log('Torre -> Horizontal e vertical');
    break;
    case'rainha':
    console.log('Rainha -> Diagonal, horizontal e vertical');
    break;
    case'cavalo':
    console.log('Cavalo -> Movimento em formato de "L", pode saltar sobre peças');
    break;
    default:
    console.log('Erro, peça inválida');

}