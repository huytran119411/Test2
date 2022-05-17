let n = +prompt("Nhập số phần tử của mảng")
let array = new Array(n)
for (i=0;i<array.length;i++){
    array[i]=prompt("Nhập giá trị của phần tử thứ " + (i+1))
}
let count=0
for(i=0;i<array.length;i++) {
    if(array[i] %2 ===0) {
        count = count + 1
    }
}
document.write("Số lượng các số chẵn trong mảng là: " + count)