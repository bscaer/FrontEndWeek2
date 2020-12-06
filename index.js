let isHotOutside = false;
let isWeekday = false;
let hasMoneyInPocket = false;

let costOfMilk = 1;
let moneyInWallet = 2;
let thirstLevel = 3; // how thirsty you are on a scale of 1-10

let shouldByIcecream = isHotOutside && moneyInWallet;
let willGoSwimming = isHotOutside && !isWeekday;
let isAGoodDay = isHotOutside && moneyInWallet && !isWeekday;
let willBuyMilk = isHotOutside && (thirstLevel >= 3) && (moneyInWallet >= 2*costOfMilk);

// Log the values to the console.
console.log("Should buy ice cream is " + shouldByIcecream);
console.log("Will go swimming is " + willGoSwimming);
console.log("Is a good day is " + isAGoodDay);
console.log("Will buy milk is " + willBuyMilk);