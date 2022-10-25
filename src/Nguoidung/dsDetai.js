import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

export default function 
() {
  const [detais, setdetais] = useState([]);
  
  const {id} = useParams();

  useEffect(() =>{
     dsDetai();
  }, [])

  const dsDetai = async () =>{
    const ketQua = await axios.get("http://localhost:8080/dsDeTai");
    setdetais(ketQua.data);
  }


  return (
    <div className="container">
        <div className='py-4'>
        <h2>Danh sách đề tài khóa luận</h2>
        <table className="table border">
            <thead>
                <tr>
                <th scope="col">STT</th>
                <th scope="col">Mã đề tài</th>
                <th scope="col">Tên đề tài</th>
                <th scope="col">Nội dung</th>
                <th scope="col">Hạn nộp</th>
                </tr>
            </thead>
            <tbody>
                {
                  detais.map((detai, index) =>(
                    <tr>
                    <th scope="row" key={index}>{index+1}</th>
                    <td>{detai.maDt}</td>
                    <td>{detai.tenDt}</td>
                    <td>{detai.noiDunngdt}</td>
                    <td>{detai.hanNop}</td>                  
                    </tr>
                  ))
                }
                
            </tbody>
        </table>
        </div>
    </div>
  )
}