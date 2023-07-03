import React from 'react'
import './../pages/css/Search.css'

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const Medicine = () => {
  return (
    <>
      <div classNameName='medi-box class=" bg-white'>
        <div className="container">

          <div className="row height d-flex justify-content-center align-items-center">

            <div className="col-md-8">

              <div className="search">
                <i className="fa fa-search"></i>
                <input type="text" className="form-control" placeholder="ব্যান্ডের নাম বা জেনেরিক নাম দ্বারা আপনার ওষুধের নাম অনুসন্ধান করুন" />
                <button className="btn btn-primary">Search</button>
              </div>

            </div>

          </div>
        </div>

          {/* card start */}

 <div class=" bg-white">


    <div className="flex justify-center p-3">
        <div className="rounded-lg shadow-md bg-white max-w-sm hover:shadow-lg">
             <div className="p-3">
                <h5 className="text-center fs-4 mb-2 fw-bold">Napa Extra</h5>
                <h6 className="mb-1 fs-6 fw-bold">Brand Id:<span className='fs-6 fw-normal'>101</span></h6>
                <h6 className="mb-1 fs-6 fw-bold">Generic Name:<span className='fs-6 fw-normal'>okay</span></h6>
                <h6 className="mb-1 fs-6 fw-bold">Brand Type:<span className='fs-6 fw-normal'>Herbal</span></h6>
                <h6 className="mb-1 fs-6 fw-bold">Dose Type:<span className='fs-6 fw-normal'>Herbal</span></h6>
                <h6 className="mb-1 fs-6 fw-bold">Company Name:<span className='fs-6 fw-normal'>Herbal</span></h6>
                <h6 className="mb-1 fs-6 fw-bold">Slug:<span className='fs-6 fw-normal'>Herbal</span></h6>
                <h6 className="mb-1 fs-6 fw-bold">Price:<span className='fs-6 fw-normal'>Herbal</span></h6>

                
            </div> 
        </div>
    </div>

</div>

<div class=" bg-white">

<div className="flex justify-center p-3">
    <div className="rounded-lg shadow-md bg-white max-w-sm hover:shadow-lg">
         <div className="p-3">
            <h5 className="text-center  fs-4 mb-2 fw-bold">Napa Extra</h5>
            <h6 className="mb-1 fs-6 fw-bold">Brand Id:<span className='fs-6 fw-normal'>101</span></h6>
            <h6 className="mb-1 fs-6 fw-bold">Generic Name:<span className='fs-6 fw-normal'>okay</span></h6>
            <h6 className="mb-1 fs-6 fw-bold">Brand Type:<span className='fs-6 fw-normal'>Herbal</span></h6>
            <h6 className="mb-1 fs-6 fw-bold">Dose Type:<span className='fs-6 fw-normal'>Herbal</span></h6>
            <h6 className="mb-1 fs-6 fw-bold">Company Name:<span className='fs-6 fw-normal'>Herbal</span></h6>
            <h6 className="mb-1 fs-6 fw-bold">Slug:<span className='fs-6 fw-normal'>Herbal</span></h6>
            <h6 className="mb-1 fs-6 fw-bold">Price:<span className='fs-6 fw-normal'>Herbal</span></h6>

            
        </div> 
    </div>
</div>

</div>




      {/* pagination here */}

<div className=' d-flex justify-content-center'>
  <Stack spacing={2}>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Stack>
</div>



</div>

    </>
  )
}

export default Medicine