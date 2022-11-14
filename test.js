

//    arr for test
let towersHeight = [4, 4, 1, 3];


let max = Math.max(...towersHeight)

let count = 0


// function has return the all max value

let CountTowersHeight = (max) => {
   
    towersHeight.forEach((i) => {
        if (i === max) {
            count++
        }
    })
return count 
}

console.log( CountTowersHeight(max))





