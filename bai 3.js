let n = +prompt("Nhập số phần tử của mảng")
let array = new Array(n)
for (let i = 0; i < array.length; i++) {
    array[i] = +prompt("Nhập giá trị của phần tử thứ " + (i + 1))
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