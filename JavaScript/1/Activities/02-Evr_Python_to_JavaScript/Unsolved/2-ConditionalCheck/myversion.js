var incomeRange =68990
var debtIncomeRatio = .7
var TYearsCJob = 3
var criminalRecord = false
var goodCredit = true

if (incomeRange <30000){
    if (debtIncomeRatio < .5){
        console.log("No loan")
    }
    else {
        console.log("Yes loan")
    }
} 
else if (incomeRange >=30000 && incomeRange <= 75000){
    if (TYearsCJob<1){
        console.log("no loan")
    }

    if (TYearsCJob >=1 && TYearsCJob <=5){
        if (goodCredit === true){
            console.log("yes loan")
        }
        else {
            console.log("no loan")
        }
    }

    if (TYearsCJob>5) {
        console.log("yes loan")
    }
}
else if (incomeRange>75000){
    if (criminalRecord === true){
        console.log("no loan")
    }
    else {
        console.log("yes loan")
    }
}