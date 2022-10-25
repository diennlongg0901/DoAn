import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Radio, FormControl, RadioGroup,FormControlLabel } from '@material-ui/core';




export default function 
() {

    let navigate = useNavigate();

    const {id} = useParams();

    const [nguoidung, setNguoidung]=useState({
        
        maCv:"",
        maNd:"",
        ho:"",
        ten:"",
        // maNguoidung:"",
        // chucVu:"",
        // ngay_sinh:"",
        // anh : "",
        gioi_tinh:""
    })

    const onInputchange =(e) =>{
        setNguoidung({...nguoidung, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.post(`http://localhost:8080/quantri/capnhatND/${id}`, nguoidung);
        navigate("/quantri/QLTaiKhoan");
    };

    useEffect(() =>{
        loadNguoidung();
      }, [])

    const loadNguoidung = async(e) => {
        const result = await axios.get(`http://localhost:8080/nguoidung/${id}`);
        setNguoidung(result.data);
    }

    const {ho,ten,maCv,maNd, gioi_tinh} = nguoidung;

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2'>
                <h2 className='text-center'>Cập nhật người dùng</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                <div className='row mt-4'>
                    <label htmlFor='ho' className='col form-label' >
                        Họ
                    </label>
                    <input className='col form-control' type={"text"} placeholder="Nhập họ người dùng" name='ho' defaultValue={ho} onChange={(e) => onInputchange(e)}  />
                </div>
                <div className='row mt-4'>
                    <label htmlFor='ten' className='col form-label' >
                        Tên
                    </label>
                    <input className='col form-control' type={"text"} placeholder="Nhập tên người dùng" name='ten' defaultValue={ten} onChange={(e) => onInputchange(e)} />
                </div>
                <div className='row mt-4'>
                    <label htmlFor='maNd' className='col form-label' >
                        Mã người dùng
                    </label>
                    <input className='col form-control' type={"text"} placeholder="Nhập mã người dùng" name='maNd' defaultValue={maNd} onChange={(e) => onInputchange(e)} />
                </div>
                
                <div className="d-flex row mt-4">
                    <label className="form-label col" >Giới tính:</label>
                        <div className='col'>
                            <FormControl>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    defaultValue= {gioi_tinh}
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="male" control={<Radio />} label="Nam" />
                                    <FormControlLabel value="female" control={<Radio />} label="Nữ" />
                                    
                                </RadioGroup>
                            </FormControl>
                        </div>
                </div>
                
                

                
                <div className='row mt-4'>
                    <label htmlFor='maCv' className='col form-label' >
                        Chức vụ người dùng
                    </label>
                    <input className='col form-control' type={"text"} placeholder="Nhập chức vụ người dùng" name='maCv' defaultValue={maCv} onChange={(e) => onInputchange(e)} />
                </div>
                {/* <div className='row mt-4'>
                    <label htmlFor='anh' className='col form-label' >
                        Ảnh đại diện
                    </label>
                    <div className="col">   
                        <input type="file" name='anh' defaultValue={anh} className="form-control"  />
                    </div>
                </div> */}

                <button className='btn btn-outline-primary mt-4' type='submit' >
                    Xác nhận
                </button>
                <Link className='btn btn-danger mx-2 mt-4' to="/quantri/QLTaiKhoan">
                    Hủy
                </Link>
                </form>
            </div>
        </div>
    </div>
  )
}
