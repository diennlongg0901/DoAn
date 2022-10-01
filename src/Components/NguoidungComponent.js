import React from "react";
import NguoidungService from "../Services/NguoidungService";

class NguoidungComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            nguoidung:[]
        }
    }

    componentDidMount(){
        NguoidungService.laydsNguoidung().then((response) => {
            this.setState({nguoidung: response.data})
        });

        var xhttp = new XMLHttpRequest();
        var self = this;
      
        xhttp.onreadystatechange = function(e){
        console.log(this);
        if (xhttp.readyState === 4 && xhttp.status === 200){
          console.log("ok, response :", this.response);
          self.setState({
            posts: JSON.parse(this.response)
          });
        }
        }
        xhttp.open("get", "http://localhost:8080/WebKhoaLuan/quantri/QLTaiKhoan", true);
        xhttp.send();
    }

    render(){
        return(
            <div>
                <h1 className="text-center">Quản lý tài khoản</h1>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <td> Mã người dùng</td>
                            <td> Họ</td>
                            <td> Tên</td>
                            <td> Giới tính</td>
                            <td> Username</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.nguoidung.map(
                            nd =>
                            <tr key={nd.nguoidungPK.maND}>
                                <td> {nd.nguoidungPK.maND}</td>
                                <td> {nd.ho}</td>
                                <td> {nd.ten}</td>
                                <td> {nd.gioiTinh}</td>
                                <td> {nd.username}</td>
                            </tr>     
                        )
                        
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default NguoidungComponent;