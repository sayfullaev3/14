function calculateProportion(total, amount) {
    if (total === 0) {
    } return (amount / total) * 100;
}
let total = 200;
let amount = 50;
let proportion = calculateProportion(total, amount);
console.log(`Пропорция: ${proportion}`);
