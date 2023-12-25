


price(1200, 70, 5, 10);
function price(PhonePrice, CasePrice, PhoneUnit, CaseUnit) {
    var totalPhoneCost = PhonePrice * PhoneUnit;
    var totalCaseCost = CasePrice * CaseUnit;
    TotalCost = totalPhoneCost + totalCaseCost
    console.log('Phone total cost = ' + totalPhoneCost);
    console.log('Case total cost = ' + totalCaseCost);
    console.log('Total bill = ' + TotalCost)
}

