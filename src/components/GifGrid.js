import React, { useEffect, useState } from 'react'
import { UseFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridIem } from './GifGridIem';

export const GifGrid = ({ category }) => {

    const { data, loading } = UseFetchGifs(category);
    /*     const [images, setImages] = useState([]);
    
    
        useEffect(() => { //Se ejecuta una sola vez al renderizar
            getGifs(category).then(setImages)
        }, [category]); */

    return (
        <>
            <h3>{category}</h3>
            { loading && <p>Loading</p> }

            <div className='card-grid'>
                {
                    data.map(img => (
                        <GifGridIem key={img.id} {...img} />
                    ))
                }
            </div>
        </>
    )
}
