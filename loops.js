
console.log("A while loop that prints all even numbers from 0 to 100");
let i = 0;
do {
    console.log(i + " is even.");
    i+=2;
} while (i<=100);

console.log("A while loop that prints every 3rd number going backwards from 100 until we reach 0");
i = 100;
while (i > 0) {
    console.log(i);
    i -= 3;
}

console.log("A for loop that prints every other number from 1 to 100");
for (i = 1; i <= 100; i+=2) {
    console.log(i);
}

console.log(`A for loop that prints every number from 0 to 100, but 
if the number is divisible by 3, it prints Hello 
instead of the number, and if the number is divisible 
by 5, it prints World instead of the number, and if
it is divisible by both 3 and 5, it prints HelloWorld 
instead of the number.`);
for (i = 0; i <= 100; i++) {
    if (i%3==0 && i%5==0) {
        console.log("HelloWorld");
    }
    else if (i%5 == 0) {
        console.log("World");
    }
    else if (i%3 == 0) {
        console.log("Hello");
    } else {
        console.log(i);
    }
}