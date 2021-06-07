function saturdayFun(word="roller-skate") {
    return(`This Saturday, I want to ${word}!`)
}
function mondayWork(word="go to the office") {
    return(`This Monday, I will ${word}.`)
}
function wrapAdjective(ast="*") {
    return function(word="special") {
        return(`You are ${ast}${word}${ast}!`)
    }
}
let Calculator = {
    add: function(x, y) {
        return x + y;
    },
    subtract: function(x, y) {
        return x - y;
    },
    multiply: function(x, y) {
        return x * y;
    },
    divide: function(x, y) {
        return x / y;
    }
}
function actionApplyer(num, arr) {
    for (let i = 0; i < arr.length; i++ ){
        num = arr[i](num)
    }
    return num
}