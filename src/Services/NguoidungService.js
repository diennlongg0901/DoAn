import http from "../http-common";

class NguoidungService {
    laydsNguoidung(){
        return http.get("/quantri/QLTaiKhoan")
    }
}

export default new NguoidungService();