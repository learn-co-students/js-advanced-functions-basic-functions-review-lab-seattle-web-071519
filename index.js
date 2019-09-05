// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    return function(adjective="special") {
        return `You are ${flair}${adjective}${flair}!`
    }
}

const Calculator = {
    add(a, b) {
        return a + b;
    },
    multiply(a, b) {
        return a * b;
    },
    subtract(a, b) {
        return a - b;
    },
    divide(a, b) {
        return a / b;
    }
}

function actionApplyer(startNum, fnsArray) {
    let result = startNum;
    for (let i = 0; i < fnsArray.length; i++) {
        result = fnsArray[i](result)
    }
    return result
    // if (fnsArray.length == 0) {
    //     return startNum
    // } else {
    //     return fnsArray.reduce((accum, fn, startNum) => {
    //         console.log(startNum, fn)
    //         accum = fn(startNum)
    //     })
    // }

}