var x =1
var y =10;


// Checks if one value is equal to another
if (x===1){
    console.log("x is equal to 1");
}
// Checks if one value is NOT equal to another
if (y!==1){
    console.log("y is not equal to 1");
}
// Checks if one value is less than another

// Checks if one value is greater than another

// Checks if a value is less than or equal to another

// Checks for two conditions to be met using &&
if (x===1 && y ===10){
    console.log("Both values returned true")
}
// Checks if either of two conditions is met using ||
if (x===1 || y ===10){
    console.log ("success")
}
// Nested if statements
if (x<10){
    if(y<5){
        console.log("less than 5")
    }
    else if (y===5){
        console.log("equals 5")
    }
}