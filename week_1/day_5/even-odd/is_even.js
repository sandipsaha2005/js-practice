const range = 10;


for (let number = 1; number <= range; number += 2) {
    const rest = number % 2 === 0 ? number + 1 : number
    console.log(rest); 
}


let isEven = 1;
for(let i = 1; i < 100; i++) {
    if(isEven){
        isEven = 0;
        console.log(i + " is odd");
    } else {
        isEven = 1;
        console.log(i + " is even"); 
    }
}