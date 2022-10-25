import React from 'react'

export default function DangKyKhoaLuan() {
  return (
    <div>
        <h2 className="text-center mt-5">ĐĂNG KÝ ĐỀ TÀI KHÓA LUẬN</h2>
        <div className="form-group container">
            <div className="row">
                <div className="form-outline mt-4 col">
                    <input type="text"  className="form-control"  placeholder="Nhập mã sinh viên"/>
                </div>
                <div className="form-outline mt-4 col">
                    <input type="text"  className="form-control"  placeholder="Nhập mã sinh viên 2 (nếu có)" />
                </div>
            </div>
            <div className="row">
                <div className="form-outline mt-4 col">
                    <label className="form-label" for="khoa" >Chọn đề tài </label>
                    
                </div>
            </div>
            <div className="form-outline mt-4 row">
                <input type="submit" className="btn btn-primary btn-block mb-4" value="Đăng ký khóa luận"/>
                <input type="reset" className="btn btn-primary btn-block mb-4 " value="Hủy"/>
            </div>
        </div>
    </div>
  )
}
