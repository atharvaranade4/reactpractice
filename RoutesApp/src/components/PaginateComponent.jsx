import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PaginateComponent = ({ pageCount, onPageChange, currentPage }) => {
    // const paginate = paginatedData.map((item, i) => (
    //     <React.Fragment key={i}>            
    //         <Link to={ i + 1 }>
    //             <button>{ item.name }</button>
    //         </Link>
    //     </React.Fragment>
    // ));

    return (
        <div>
            {/* { paginate } */}
            <ReactPaginate
                pageCount={pageCount}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                onPageChange={onPageChange}
                containerClassName={'pagination'}
                activeClassName={'active'}
                forcePage={currentPage}
            />
        </div>
    )
}

PaginateComponent.propTypes = {
    pageCount: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
}

export default PaginateComponent;