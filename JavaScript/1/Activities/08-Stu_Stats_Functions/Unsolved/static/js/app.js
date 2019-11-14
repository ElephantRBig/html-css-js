var movieScore = [4.4, 3.3, 5.9, 8.8, 1.2, 5.2, 7.4, 7.5, 7.2, 9.7, 4.2, 6.9];

function meanfn(userList){
    sum = 0
    for (var i =0; userList.length;i++){
        sum = userLight[i]+sum
    }
    var mean = sum / userLight.length
    return mean
}



function variancefn(userList){
    var sumofSquares=0
    for (var i =0; userList.length;i++){
        sumofSquares = Math.pow(userLight[i] - meanfn(userList),2) +sumofSquares
    }
    var variance = sumofSquares / userLight.length
    return variance
}

function standardDeviationfn(userList){
    var standardDeviation = Math.pow(variance(userList), 1/2)
    return standardDeviation
}