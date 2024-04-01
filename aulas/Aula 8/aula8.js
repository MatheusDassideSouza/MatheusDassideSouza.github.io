/*texto = 'Meu nome é Ozymadias, Rei dos Reis.';

document.write('Texto:'+texto);
document.write('<br>Tamanho: '+texto.length);
document.write('<br>Primeira letra: '+texto[0]);
document.write('<br>Última letra: '+texto[texto.length-1]);

nome1 = 'Pablo';
nome2 = 'JONAS';
nome3 = 'luan';

nome1 = nome1.toUpperCase();
nome2 = nome2.toLowerCase();

palavras = texto.split(' ');
document.write(palavras);

for(i=0; i<5; i++){
    document.write('Oi '+i+'<br>');


texto = 'Olá mundo!'

for(i=0; i<texto.length; i++){
    document.write(texto[i]+'<br>');
}*/

frutas = [' Maçã', ' Uva', ' Banana'];

frutas.push(' Morango');
//frutas[7] = ' Pêra';
//frutas.splice(2,1);
//frutas.splice(frutas.indexOf(' Uva',1))
frutas.sort().reverse()

document.write('Lista completa: '+frutas);
document.write('<br>Posição específica: '+frutas[0]);
document.write('<br>Fruta específica: '+frutas.indexOf(' Banana'));
document.write('<br>Tamanho da lista: '+frutas.length);

alert(Math.floor(Math.random() * 6 + 1));