function calculatedTax(income, expense){
    if(income >= expense){
        return (income-expense) * 0.20
    }
    return "Invalid Input"
}
console.log(calculatedTax(10000, 10000));