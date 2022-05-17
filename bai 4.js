let array = []
for (let i = 0; i < 500; i++) {
    array.push[i]
}
let k = 0
for (let x = 0; x < array.length; x++) {
    for (let j = 2; j <= array[x]; j++) {
        if (array[x] % j === 0) {
            k = k + j
        }
    }
}
document.write("Tổng của các số nguyên tố là: " + k)