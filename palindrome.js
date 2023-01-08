let str="nrupul";
let b=str.length-1;
    for(let i=0;i<b/2;i++){
        let x=str[i];
        let y=str[b-i];
    if(x!=y){
            console.log("Not a palindrome");
            break
        }else{
            console.log("it is palindrome")
        }break
    }