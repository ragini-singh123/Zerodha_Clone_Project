import React from 'react'

const Pricing = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-4'>
              <h1 className='mb-5'>Unbeatable pricing</h1>
              <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
              <a href='' className='mx-5' style={{textDecoration:"none"}}>See pricing  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

            </div>
            <div className='col-2'></div>
            <div className='col-6'>
              <div className='row text-center'>
                <div className='col'>
                  <img src='media/images/pricing0.svg' alt='Pricing' style={{width:"60%"}} />
                  <p className='text-muted'>Free account opening</p>
                </div>
                <div className='col'>
                  <img src='media/images/pricingMF.svg' alt='Pricing' style={{width:"60%"}}  />
                  <p className='text-muted'>Free equity delivery and direct mutual funds</p>
                </div>
                <div className='col'>
                  <img src='media\images\intradayTrades.svg' alt='Pricing' style={{width:"60%"}} />
                  <p className='text-muted'>Intraday and F&O</p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing
