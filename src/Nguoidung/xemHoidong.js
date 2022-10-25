import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

export default function 
() {
  const [hoidongs, sethoidongs] = useState([]);
  
  const {id} = useParams();

  useEffect(() =>{
     dsHoidong();
  }, [])

  const dsHoidong = async () =>{
    const ketQua = await axios.get("http://localhost:8080/giaovu/Hoidong");
    sethoidongs(ketQua.data);
  }


  return (
    <div className="container mt-4">
        <div className='py-4'>
        <h2>Danh sách hội đồng khóa luận</h2>
        <table className="table border mt-4">
            <thead>
                <tr>
                <th scope="col">STT</th>
                <th scope="col">Mã Hội đồng</th>
                <th scope="col">Tên Hội đồng</th>
                <th scope="col">Ngày lập</th>
                
                </tr>
            </thead>
            <tbody>
                {
                  hoidongs.map((hoidong, index) =>(
                    <tr>
                    <th scope="row" key={index}>{index+1}</th>
                    <td>{hoidong.maHd}</td>
                    <td>{hoidong.tenHd}</td>
                    <td>{hoidong.ngayLap}</td>
                                 
                    </tr>
                  ))
                }
                
            </tbody>
        </table>
        </div>
    </div>
  )
}