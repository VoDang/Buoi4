function KiemTra2() {
    var hvt = f2.HoVaTen.value;
    var dc = f2.DiaChi.value;
    var em = f2.Email.value;
    var dt = f2.DienThoai.value;
    var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ 
    if (hvt == '') {
        alert('Họ và tên không được bỏ trống!');
        return false;
    }
    if (dc == '') {
        alert('Địa chỉ không được bỏ trống!');
        return false;
    }
    if (em == '') {
        alert('Email không được bỏ trống!');
        return false;
    }
    if (dt == '') {
        alert('Điện thoại không được bỏ trống!');
        return false;
    }
    if(!emailPattern.test(em)){
        alert('Email bạn nhập không hợp lệ');
        return false;
    }
    return true;
}

// Biểu thức quy tắc
/* Regular Exception 
    Là cách định dạng phải theo quy tắc của nó 
    Ví dụ như: Ngày tháng Năm phải có định dạng dd/mm/yyyy

    Thuộc tính
    Var + tên thuộc tính = /mẫu/ 
    Mẫu thì vào trang Regexlib.com (kiểu là một thư viện)

    Nghiên cứu thêm về hàm Regular Exception trên w3school
*/