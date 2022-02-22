
let ar = [100000, 2000]
let sum = 0;

function aVeryBigSum(ar) {

for ( let i = 0; i < ar.length; i++)
{
    sum += ar[i];
}
return sum;
}

console.log(aVeryBigSum(ar));

