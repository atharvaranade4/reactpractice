import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import PaginateComponent from "../components/PaginateComponent";

function PlanetsList() {
    const [data, setData] = useState([]);
    const [isLoading, toggleLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [currentPage, setCurrentPage] = useState(0) 
    const [totalPages, setTotalPages] = useState(0);

    const isInitialRender = useRef(true);

    const fetchData = async (pageNumber) => {
        try {
            let url = `https://swapi.dev/api/planets/?page=${pageNumber + 1}`;
            const response = await fetch(url);
            const responseData = await response.json();
            setData(responseData.results);
            setTotalPages(Math.ceil(responseData.count / responseData.results.length))
            setCurrentPage(pageNumber)
            toggleLoading(false)
            console.log(responseData)
        } catch (e) {
            console.error(e);
            toggleLoading(false);
            setHasError(true);
        }
    }

    useEffect(() => {
        if (isInitialRender.current) {
            isInitialRender.current = false;
        } else {
            console.log("use effect is running");
            fetchData(0);
        }
    }, []);

    const handlePageClick = ({ selected }) => {
        fetchData(selected);
    };

    const planetList = data.map((item, i) => (
        <React.Fragment key={i}>
            <Link to={`/planets/${i + 1}`}>
                <button>{ item.name }</button>
            </Link>
        </React.Fragment>
    )); 

    if (isLoading) {
        return <p>Loading Planets...</p>;
    }

    if (hasError) {
        return <p>Error loading planets</p>;
    }

    return (
        <>
            <h1>Planets List</h1>
            { planetList }
            <PaginateComponent
                  pageCount={totalPages}
                  onPageChange={handlePageClick}
                  currentPage={currentPage}
                />
            <Link to="/"><button>Home</button></Link>
        </>
    );
}

export default PlanetsList;
