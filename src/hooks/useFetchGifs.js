import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const UseFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => { //Se ejecuta una sola vez al renderizar
        getGifs(category).then(
            imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            })
    }, [category]);

    return state;
}