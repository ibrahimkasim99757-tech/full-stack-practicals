# Interest Calculation Reference

## Simple Interest
- Formula: `I = P * r * t`
- Amount: `A = P + I` or `A = P * (1 + r * t)`
- Where:
  - `P` = principal (starting amount)
  - `r` = annual interest rate as a decimal (5% = 0.05)
  - `t` = time in years

### Example
- `P = 1000`
- `r = 0.05`
- `t = 3`
- Interest: `1000 * 0.05 * 3 = 150`
- Final amount: `1000 + 150 = 1150`

## Compound Interest
- Formula: `A = P * (1 + r/n)^(n*t)`
- Interest: `I = A - P`
- Where:
  - `n` = times compounded per year
  - All other values are the same as above

### Example (annual compounding)
- `P = 1000`
- `r = 0.05`
- `t = 3`
- `n = 1`
- Amount: `1000 * (1 + 0.05/1)^(1*3) = 1157.625`
- Interest: `157.625`

### Example (quarterly compounding)
- `n = 4`
- Amount: `1000 * (1 + 0.05/4)^(4*3) ≈ 1161.472`

## Continuous Compounding
- Formula: `A = P * e^(r * t)`
- Interest: `I = A - P`

### Example
- `P = 1000`
- `r = 0.05`
- `t = 3`
- Amount: `1000 * e^(0.15) ≈ 1161.83`

## JavaScript Functions
```javascript
function simpleInterest(P, r, t) {
  const interest = P * r * t;
  return { interest, amount: P + interest };
}

function compoundInterest(P, r, t, n = 1) {
  const amount = P * Math.pow(1 + r / n, n * t);
  return { interest: amount - P, amount };
}

function continuousInterest(P, r, t) {
  const amount = P * Math.exp(r * t);
  return { interest: amount - P, amount };
}

// Example usage
const principal = 1000;
const rate = 0.05; // 5%
const years = 3;

console.log('Simple interest:', simpleInterest(principal, rate, years));
console.log('Compound interest:', compoundInterest(principal, rate, years, 1));
console.log('Continuous interest:', continuousInterest(principal, rate, years));
```

## Quick Run
1. Open terminal in `lab 2/exp1`
2. Run `node maths.js` if you save these functions in `maths.js`
3. Change the values for `principal`, `rate`, and `years` as needed.
