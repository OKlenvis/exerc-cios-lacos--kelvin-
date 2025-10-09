let x = 1

while (x <= 10){
    let n = 0;
    while (n <= 10){
        console.log(`${n} x ${x} = ${n * x}`);
        x++;
    }
    x++;
    console.log('--------------');
}