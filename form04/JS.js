function KiemTra(){
    var ht = f4.HovaTen.value;
    var day = f4.Ngay.value;
    var month = f4.Thang.value;
    var year = f4.Nam.value;
    var NN = f4.NgheNghiep.value;
    var GC = f4.GhiChu.value;

    if (ht == '') {
        alert('Họ tên không được bỏ trống!');
        return false;
    }
    if (day == '') {
        alert('Ngày sinh không hợp lệ!');
        return false;
    } if (month == '') {
        alert('Ngày sinh không hợp lệ!');
        return false;
    } if (year == '') {
        alert('Ngày sinh không hợp lệ!');
        return false;
    } if (NN == '') {
        alert('Nghề nghiệp không được bỏ trống!');
        return false;
    } if (GC == '') {
        alert('Ghi chú không được bỏ trống!');
        return false;
    }
    return true;
}