let yyyy = +prompt('Mời bạn nhập năm');

let mm = +prompt('Mời bạn nhập tháng');
while (mm < 1 || mm > 12) {
    mm = +prompt('Tháng không hợp lệ, vui lòng nhập lại');
}

let dd = +prompt('Mời bạn nhập ngày');
while (dd < 1 || dd > 31) {
    dd = +prompt('Ngày không hợp lệ, vui lòng nhập lại');
}

if (mm < 10) {
    mm = '0' + mm;
}

if (dd < 10) {
    dd = '0' + dd;
}

document.write('', dd, '-', mm, '-', yyyy);