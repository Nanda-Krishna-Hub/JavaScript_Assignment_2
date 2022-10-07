function prime(x,y){
    let count = 0;
    for(let i = x; i<=y; i++){
        if(i == 1){
            console.log(`${i} is neither prime nor composite `);
        factorial(1);
    }
        else if(i >1){
            count = 0;
            for( let j = 2; j<i; j++){
                if(i % j == 0){
                    count++;
                    break;
                }
            }
            if(count == 0){
                console.log(`${i} is prime `);
                factorial(i);
            }
        }
    }
}
function factorial(n){
    let fact = 1;
    for(let i = 1; i<=n; i++){
        fact = fact*i;
    }
    console.log(`and it's factorial is ${fact}`);
}





prime(1,100);