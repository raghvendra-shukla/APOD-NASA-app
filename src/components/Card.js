import React from 'react'

function Card(props) {
    const {image , data, title,date}=props
  return (
    <>
    <h1 className='text-white text-center' >{date.split('-').reverse().join('-')}</h1>
    <div className="card mb-3">
        <img src={image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{data}</p>
        </div>
    </div>
    </>
  )
}

export default Card