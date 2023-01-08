let str="nrupul";
let a=str.length-1;
    for(let i=0;i<a/2;i++){
        let x=str[i];
        let y=str[a-i];
    if(x!=y){
            console.log("No");
            break
        }else{
            console.log("Yes")
        }break
    }