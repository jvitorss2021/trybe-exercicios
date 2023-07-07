let lotteryNumbers = [];
let firstGame = [3, 5, 12, 30, 38, 55];

for (let index = 0; index < firstGame.length; index += 1) {
   lotteryNumbers.push(Math.ceil(Math.random()* 60));

};

console.log(lotteryNumbers);
