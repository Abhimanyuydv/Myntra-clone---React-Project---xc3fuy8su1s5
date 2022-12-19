import React from 'react'
import './home.css';

export default function Home() {
    return (
        <div>
            <img className='img-home' src={require('../image/poster.webp')}alt="" />
            <h1>DEAL OF THE DAY</h1>
            <div className='img-section'>
                <img className='' src={require('../image/top1.webp')} alt=""/>
                <img className='' src={require('../image/top2.webp')} alt=""/>
                <img className='' src={require('../image/top3.webp')} alt=""/>
                <img className='' src={require('../image/top5.webp')} alt=""/>
                <img className='' src={require('../image/top6.webp')} alt=""/>
                <img className='' src={require('../image/top7.webp')} alt=""/>

            </div>
        </div>
    )
}
