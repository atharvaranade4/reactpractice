import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

const PaginateComponent = ({ pageCount, onPageChange, currentPage }) => {
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