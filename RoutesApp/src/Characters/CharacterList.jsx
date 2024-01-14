import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';

function CharacterList() {
    const [data, setData] = useState([]);
    const [isLoading, toggleLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [nextUrl, setNextUrl] = useState(null);

    const isInitialRender = useRef(true);

    const fetchData = async () => {
        try {
            let url = nextUrl || 'https://swapi.dev/api/people/';
            const response = await fetch(url);
            const responseData = await response.json();
            setData((prevData) => [...prevData, ...responseData.results]);
            setNextUrl(responseData.next);
            toggleLoading(false);
        } catch (e) {
            console.error(e);
            toggleLoading(false);
            setHasError(true);
        }
    };

    useEffect(() => {
        if (isInitialRender.current) {
            isInitialRender.current = false;
        } else {
            console.log("use effect is running");
            fetchData();
        }
    }, []);

    const peopleList = data.map((item, i) => (
        <React.Fragment key={i}>            
            <Link to={`${i <= 15 ? i + 1 : i + 2}`}> {/** SWAPI/characters/17 does not exist */}
                <button>{item.name}</button>
            </Link>
        </React.Fragment>
    ));

    if (isLoading) {
        return <p>Loading characters...</p>;
    }

    if (hasError) {
        return <p>Error loading characters</p>;
    }

    return (
        <>
            <h1>Star Wars Characters</h1>
            <div>{ peopleList }</div>
            {nextUrl && <button onClick={fetchData}>Load More</button>}
        </>
    );
}

export default CharacterList;
