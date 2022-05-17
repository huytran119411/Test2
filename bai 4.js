let n = 500
let array = new Array(n)
for (let i = 0; i < 500; i++) {
    array[i] = i
}
let k = 0
for (let x = 0; x < array.length; x++) {
    for (let j = 2; j <= array[x]; j++) {
        if (array[x] % j === 0) {
            k = k + j
        }
    }
}
document.write("tổng các số nguyên tố nhỏ hơn 500 là : "+k)