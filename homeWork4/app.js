function getPrice(price , discount){
    let oneProcent = price*discount/100
    return price-oneProcent
}
console.log(getPrice(700 , 25))
function capitalize(string){
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}
console.log(capitalize("lIRA"))
console.log(capitalize("AAlaM"))
function getStar(stars){
    let answer = ""
    if(stars >=1 && stars <= 5){
        for (let i = 0; i < stars; i++){
            answer+="★"
        }
    }
    return answer
}

console.log(getStar(3))