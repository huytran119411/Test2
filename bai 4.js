let n = 500
let array = new Array(n)
for (let i = 0; i < 500; i++) {
    array[i] = i
}
let sum = 0;
let count = 0;
for (let x = 0; x < array.length; x++) {
    for (let j = 1; j <= array[x]; j++) {
        if (array[x] % j === 0) {
            count += 1;
        }
    }
    if (count === 2) {
        sum += array[x]
    }
    count = 0;
}
document.write("Tổng của các số nguyên tố là: " + sum)