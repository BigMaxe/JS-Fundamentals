let a =parseInt(process.argv[2]);

if (isNaN(a)) {
    return console.log(1);
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(a));
