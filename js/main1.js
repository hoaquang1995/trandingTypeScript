console.log(
  "bài tập 1: tạo một đối tượng sinh viên với các thuộc tính tên, tuổi, chiều cao, cân nặng, điểm môn toán, điểm môn văn"
);

console.log(
  "bài tập 2: Nhập vào một danh sách các đối tượng sinh viên đã làm ở bài một, Tính và in ra điểm trung bình của toàn bộ sinh viên. công thức tính trung bình là (điểm toán + điểm văn) / 2"
);

// bài làm  1

let sinhVien = {
  ten: "tran anh tuan ",
  tuoi: 27,
  chieuCao: 174, // cm
  canNang: 65, // kg
  diemToan: 8,
  diemVan: 7,
};

console.log(sinhVien);

// bài làm 2

class sinhVien1 {
  constructor(ten, tuoi, chieucao, canNang, diemToan, diemVan) {
    this.ten = ten;
    this.tuoi = tuoi;
    this.chieucao = chieucao;
    this.canNang = canNang;
    this.diemToan = diemToan;
    this.diemVan = diemVan;
  }
  // tính điểm trung bình
  tinhdiemTrungBinh() {
    return (this.diemToan + this.diemVan) / 2;
  }
}
// danh sách sinh viên

let SV1 = new sinhVien1("nguyen van ngu", 20, 170, 70, 7, 8);
let SV2 = new sinhVien1("tran hoc", 19, 163, 70, 9, 8);
let SV3 = new sinhVien1("thai zui ", 34, 165, 70, 7, 9);
let SV4 = new sinhVien1("acj", 25, 190, 70, 6, 4);
let SV5 = new sinhVien1("akkakk", 23, 180, 70, 3, 7);
let danhsachSinhVien = [SV1, SV2, SV3, SV4, SV5];

// đếm và in ra danh sách sinh viên
for (let i = 0; i < danhsachSinhVien.length; i++) {
  let sv = danhsachSinhVien[i];
  console.log(
    "sinh viên: " + sv.ten + " điểm trung bình: " + sv.tinhdiemTrungBinh()
  );
}
