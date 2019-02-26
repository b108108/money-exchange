// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    const money = {"H":50,"Q":25,"D":10,"N":5,"P":1}
  
    if (currency === 0) {
        return {}
    }
    
    if (currency >= 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }

    for (let item in money) {
        
        if (currency >= money[item]) {
            let numsqr = Math.trunc(currency / money[item])
            currency -= money[item]*numsqr  
            money[item] = numsqr           
        } else {
            delete money[item]
        }        
    }

    return money
}
