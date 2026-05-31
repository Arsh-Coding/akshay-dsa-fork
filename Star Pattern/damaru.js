for(let i = 5; i >=1; i--){
    let str = "";
    for(let k = 1; k <= 5 - i; k++){
        str += " ";
    }
    for(let j = i; j >= 1; j--){
        str += "*";
    }
    for(let l = 1; l <= i - 1; l++){
        str += "*";
    }
    console.log(str);
}
for(let i = 1; i <= 5; i++){
    let str = "";
    for(let k = 1; k <= 5 - i; k++){
        str += " ";
    }
    for(let j = 1; j <= i; j++){
        str += "*";
    }
    for(let l = 2; l <= i; l++){
        str += "*";
    }
    console.log(str);
}
