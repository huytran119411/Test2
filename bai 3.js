let n = +prompt("Nhập số phần tử của mảng")
let array = new Array(n)
for (let i = 0; i < array.length; i++) {
    array[i] = +prompt("Nhập giá trị của phần tử thứ " + (i + 1))
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