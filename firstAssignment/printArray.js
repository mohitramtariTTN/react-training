function printArray(){
    let array = [1,2,3,4,5];
    for(let i=0; i<array.length; i++){
        setTimeout(() => {
            console.log(array[i]);
        }, 3000);
    }
}

printArray();