
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import XemNguoidung from './Nguoidung/xemNguoidung';
import ThemNguoidung from './Nguoidung/themNguoidung';

import Thongtin from './Nguoidung/thongtin';
import Footer from './layout/footer';
import DangKyKhoaLuan from './Nguoidung/DangKyKhoaLuan';
import DsDetai from './Nguoidung/dsDetai';
import ThemDetai from './Nguoidung/themDetai';
import XemHoidong from './Nguoidung/xemHoidong';
import LoginComponent from './Nguoidung/login.js';
import Login from './Nguoidung/login.js';
import { Component } from 'react';
import AuthenticationService from './service/AuthenticationService';
import { Link } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
import SuaNguoidung from './Nguoidung/suaNguoidung';
class App extends Component {

  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthenticationService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_QT","ROLE_GVU"),
        showAdminBoard: user.roles.includes("ROLE_GV"),
      });
    }
  }

  logOut() {
    AuthenticationService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render(){
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
    return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            
            <div className="container-fluid">       
                <Link className="navbar-brand" to="/">Trường Đại học AAAA</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            
            {showModeratorBoard && (
              <NavDropdown className='text-white mr-3' title="Quản lý hệ thống" id="basic-nav-dropdown">
              <NavDropdown.Item href="/quantri/QLTaiKhoan">Quản lý người dùng</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/quantri/themNguoidung">Thêm tài khoản</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/quantri/thongke">Thống kê</NavDropdown.Item>
              </NavDropdown>
            )}

            {showAdminBoard && (
              
                <Link to={"/giangvien"} className="nav-link">
                  Admin Board
                </Link>
              
            )}  

            {currentUser && (
              
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              
            )}  

                
          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/thongtincanhan"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/dangnhap" className="btn btn-outline-light ml-4" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/dangnhap"} className="btn btn-outline-light ml-4">
                  Login
                </Link>
              </li>
            </div>
          )}  
        </nav>
      <div className='container mt-4'>      
          <Routes>
            /* dùng chung */
            <Route exact path='/' element={<Home />} />
            <Route exact path='/thongtincanhan/:id' element={<Thongtin />} />
            <Route exact path='/dangnhap' element={<Login />} />
            /* sinh viên */
            <Route exact path='/sinhvien/DangKyKhoaLuan' element={<DangKyKhoaLuan />} />
            /* giảng viên */
            /* quản trị  */
            <Route exact path='/quantri/QLTaiKhoan' element={<XemNguoidung />} />
            <Route exact path='/quantri/themNguoidung' element={<ThemNguoidung />} />
            <Route exact path='/quantri/suaNguoidung/:id' element={<SuaNguoidung />} /> 
            
            /* giáo vụ */
            <Route exact path='/giaovu/Hoidong' element={<XemHoidong />} />      
            <Route exact path='/giaovu/themDetai' element={<ThemDetai />} />   
            <Route exact path='/detai' element={<DsDetai />} />   
          </Routes>
        </div>
      <Footer />
      
    </div>
  
    
  );
}
}
export default App;
