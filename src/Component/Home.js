import React from 'react'
import './home.css';

export default function Home() {
    return (
        <div>
            <img className='img-home' src={require('../image/poster.webp')} />
            <h1>DEAL OF THE DAY</h1>
            <div className='img-section'>
                <img className='' src={require('../image/top1.webp')} />
                <img className='' src={require('../image/top2.webp')} />
                <img className='' src={require('../image/top3.webp')} />
                <img className='' src={require('../image/top5.webp')} />
                <img className='' src={require('../image/top6.webp')} />
                <img className='' src={require('../image/top7.webp')} />

            </div>
        </div>
    )
}
