console.log(
  "bài tập 1: viết một hàm nhận 2 tham số a và b hàm trả về giá trị tồng a và b"
);

console.log(
  "bài tập 2: viết một hàm nhận tham số n nhập từ bàn phím, tính tổng(sum) từ 0 tới n và trả ra giá trị tổng"
);

console.log(
  "bài tập 3: viết một hàm nhận tham số n nhập từ bàn phím,hàm trả về giá trị là số nguyên tố từ 0 tới n"
);

// bài 1
function tinhtong(a, b) {
  return a + b;
}
// in ra kết quả
console.log(tinhtong(6, 9));

// bài 2

function tinhTong(n) {
  let sum = 0;
  for (let i = 2; i <= n; i++) {
    sum += i;
  }
  return sum;
}
// người dùng nhập liệu và in ra kết quả
let n = parseInt(prompt("mời nhập vào số n"));
console.log(` số  của n là: ${tinhTong(n)}`);

// bài 3
// kiểm tra số nguyên tố
function laSoNguyenTo(x) {
  if (x < 2) return false;
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }
  return true;
}
//chứa trả về số nguyên tố
function cacSoNguyenTo(x) {
  let ab = [];
  for (let i = 2; i <= x; i++) {
    if (laSoNguyenTo(i)) {
      ab.push(i);
    }
  }
  return ab;
}
//người dùng  nhập vào và in ra kết quả

let x = Number(prompt(" mời nhập sào số n"));
console.log("Các số nguyên tố từ 0 đến n là:", cacSoNguyenTo(x));
