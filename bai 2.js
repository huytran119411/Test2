let n = +prompt("Nhập số phần tử của mảng")
let array = new Array(n)
for (i = 0; i < array.length; i++) {
    array[i] = prompt("Nhập giá trị của phần tử thứ " + (i + 1))
}
let count = 0
let mang1 = "a"

for (i = 0; i < array.length; i++) {
    if (array[i] === mang1[0]) {
        count = count + 1
    }
}
document.write("Số phần tử a là: " + count)