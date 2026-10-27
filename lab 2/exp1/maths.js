
function simpleInterest(principal, rate, time) {
    const interest=principle *rate *time;
    return (principal * rate * time) / 100;
}

1
function compoundInterest(principal, rate, time) {
    const amount = principal * Math.pow(1 + rate / 100, time);
    return amount - principal;
}

module.exports = {
    simpleInterest,
    compoundInterest
};