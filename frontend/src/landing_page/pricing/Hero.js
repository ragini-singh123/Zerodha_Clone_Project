import React from 'react'

const Hero = () => {
  return (
    <div className='container'>
      <div className='row text-center mt-5 mb-5 p-5 text-muted'>
      <h1>Charges</h1>
      <p className='text-center text-muted fs-3'> List of all charges and taxes</p>
      </div>
      <div className='row mt-5 mb-5 p-5 text-center text-muted'>
        <div className='col-4'>
          <img src='media\images\pricing0.svg' style={{height:"18rem", width:"18rem"}}></img>

          <h2 className='pb-4'> Free equity delivery</h2>
          <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>

        <div className='col-4'>
          <img src='media\images\intradayTrades.svg' style={{height:"18rem", width:"18rem"}}></img>
          <h2 className='pb-4'> Intraday and F&O trades </h2>
          <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>

        <div className='col-4'>
          <img src='media\images\pricingMF.svg'style={{height:"18rem", width:"18rem"}}></img>
          <h2 className='pb-4'> Free direct MF</h2>
          <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
        </div>
    </div>
  )
}

export default Hero
