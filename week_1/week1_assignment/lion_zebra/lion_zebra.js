const givenStr = ` L Z   Z L  Z`

let minLenght = 100;
for(let i = 0; i < givenStr.length; i++){
    if(givenStr[i] === 'L') {
        let difference = 0;
        let currentIndex = i;
        while(givenStr[currentIndex] !== undefined && givenStr[currentIndex] !== 'Z') {
            currentIndex++;
            difference++;
        }
        if(givenStr[currentIndex] !== undefined) {
            minLenght = difference < minLenght ? difference : minLenght  
        }

        let currIdxForBack = i;
        let differenceForBack = 0;
        while(givenStr[currIdxForBack] !== undefined && givenStr[currIdxForBack] !== 'Z') {
            currIdxForBack--;
            differenceForBack++;
        }
        if(givenStr[currIdxForBack] !== undefined){
            minLenght = differenceForBack < minLenght ? differenceForBack : minLenght  
        } 
    }
}
const restult = minLenght !== 100 ? minLenght-1 : -1
console.log(restult);
