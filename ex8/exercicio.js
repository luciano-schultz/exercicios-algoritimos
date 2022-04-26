let distancia = Number(prompt('Digite a distancia em Metros'));
console.log(`A distancia de ${distancia}m corresponde a: \n` + (distancia / 1000) +'km \n' +
    (distancia / 100) + 'hm \n'+ 
    (distancia * 10) + 'dam \n'+
    (distancia / 10) + 'dm \n' +
    (distancia / 100) + 'cm \n' +
    (distancia / 1000) + 'mm \n');