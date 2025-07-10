function add(a, b) {
    return a + b;
}

let result = add(process.argv["2"], process.argv["3"]);
console.log(result);
