import React from 'react'

  


export default function 
() {

  const dangnhap = () => {

  }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2'>
                <h2 className='text-center'>Đăng nhập</h2>
                <form >
                <div className='row mt-4'>
                    <label htmlFor='username'  className='col form-label' >
                        Username
                    </label>
                    <input className='col form-control' type={"text"} placeholder="Nhập username"    />
                </div>
                <div className='row mt-4'>
                    <label htmlFor='password' className='col form-label' >
                        Password
                    </label>
                    <input className='col form-control' type={"password"} placeholder="Nhập password"   />
                </div>

                <button className='btn btn-outline-primary mt-4' type='submit' onClick={() => dangnhap()}>
                    Đăng nhập
                </button>
              </form>
            </div>
          </div>
        </div>
  )
}
