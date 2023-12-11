import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

function CharacterList() {
    const [data, setData] = useState([])
    const [isLoading, toggleLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    // const {pageId} = useParams()
    // console.log(pageId)

    useEffect (() => {
        // let url = `https://swapi.dev/api/people/?page=${pageId}`
        let url = `https://swapi.dev/api/people/`
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setData(data.results)
            console.log(data)
            toggleLoading(false)
        })
        .catch((e)=> {
            console.log(e)
            toggleLoading(false)
            setHasError(true)
        });
    }, [])

    const peopleList = data.map((item, i) => {
        return (
            <React.Fragment key={item.id}>
                <Link
                    to={`${i+1}`}>
                    <button>{item.name} Profile</button>
                </Link>
            </React.Fragment>
        )
    })

    if (isLoading){
        return <p>Loading characters...</p>
    }

    if (hasError) {
        return <p>Error loading characters</p>
    }

    return (
        <>
            <h1>Star Wars Characters</h1>
            <div>
                {peopleList}          
            </div>
        </>
    )

}

export default CharacterList