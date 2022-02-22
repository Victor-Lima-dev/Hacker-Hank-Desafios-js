
const alice = [5,6,7];
const bob = [3,6,10];
let alicePontos = 0;
let bobPontos = 0;

for ( let i = 0; i < 3; i++)
{
    if (alice[i] > bob[i]){
        alicePontos++;
    }
    else if (alice[i] < bob[i]) {
        bobPontos++;
    }
    else
    {
        bobPontos += 0;
        alicePontos += 0;
    }
}
console.log(alicePontos, bobPontos)

 

