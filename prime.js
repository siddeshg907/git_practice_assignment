
let num=13;
let a=0;
    for(let i=1;i<=num;i++){
        if(num%i==0){
            a++;
        }
    }
    if(a==2){
        console.log("It is prime number");
    }else{
        console.log("Not a prime number");
    }