function equalcaoSegundoGrau(a, b, c){
    let D = (b**2 - 4*a*c)
    x1 = (-b + D ** (1 / 2)) / (2*a)
    x2 = (-b - D ** (1/2)) / (2 * a)
    return console.log('O valor de x1: ' + x1 +"\n o valor de x2: " + x2 + "\n O valor de Delta: " + D);
}

equalcaoSegundoGrau(1,3,2);