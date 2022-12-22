import React from 'react'
import './home.css';

export default function Home() {
    return (
        <div>
            <img className='home-section' src={require('../image/poster.webp')}alt="" />
            <h1>DEAL OF THE DAY</h1>
            <div className='product-section'>
                <img  src={require('../image/top1.webp')} alt=""/>
                <img  src={require('../image/top2.webp')} alt=""/>
                <img  src={require('../image/top3.webp')} alt=""/>
                <img  src={require('../image/top5.webp')} alt=""/>
                <img  src={require('../image/top7.webp')} alt=""/>
                <img  src={require('../image/top6.webp')} alt=""/>

            </div>
        </div>
    )
}
