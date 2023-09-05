import React from 'react'
import MyContext from './MyContext';
import { useState, useEffect } from 'react';
const MyState = (props) => {
    const api_key = "cf8f6a0b28d6498893f40e0c10e277fc";
    const url = "https://newsapi.org/v2/everything?q=";
    const [loader, setloader] = useState(true);
    const [data, setdata] = useState([]);
    async function fetchnews(news_data) {
        setloader(true);
        try {
           
            const res = await fetch(url + `${news_data}` + "&apiKey=" + api_key, { mode: 'cors' });
            const data = await res.json();
            setdata(data.articles);

        } catch (error) {
            console.log("Api not fetch properly");
            setdata([]);
        }
        setloader(false);
    }

    useEffect(() => {
        fetchnews("india");
    }, []);


    return (
        <div>
            <MyContext.Provider value={{ loader, fetchnews, data }}>
                {props.children}
            </MyContext.Provider>
        </div>
    )
}

export default MyState
