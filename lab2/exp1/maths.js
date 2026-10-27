
// Simple Interest
function calculateSimpleInterest(init, interestRate, noofyears) {

    const simpleInterest = (init * interestRate * noofyears) / 100;

    return "Simple Interest = " + simpleInterest;
}

// Compound Interest
function calculateCompoundInterest(init, interestRate, noofyears) {

    const amount = init * Math.pow((1 + interestRate / 100), noofyears);

    const compoundInterest = amount - init;

    return "Compound Interest = " + compoundInterest;
}

module.exports = {
    calculateSimpleInterest,
    calculateCompoundInterest
};