import { useEffect, useState } from "react";


export const usefetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    });


    const getUrl = async() => {
        setState({
            ...state,
            isLoading: true
        });

        try {
            const response = await fetch(url);
            const data = await response.json();
            setState({
                data,
                isLoading: false,
                error: null
            });

        } catch (error) {
            console.error(error)
        }

    };

    useEffect(() => {

        getUrl();


    }, [url])


    return {
        data: state.data,
        isLoading: state.isLoading,
        error: state.error
    }
}