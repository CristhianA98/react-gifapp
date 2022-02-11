import React from 'react'

export const GifGridIem = ({title, url }) => {

    return (
        <div className='card animate__animated animate__bounce animate__backInUp'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
