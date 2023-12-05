import PropTypes from 'prop-types';

function CardDetails ({ authorImage, authorName, postedDate, minutesToRead }) {
    return (
        <div>
            <img src={authorImage} alt={authorImage}/>
            <div>{authorName}</div>
            <div>{postedDate}</div>
            <div>{minutesToRead}</div>
        </div>
    )
}

export default CardDetails

CardDetails.propTypes = {
    authorImage: PropTypes.string.isRequired, 
    authorName: PropTypes.string.isRequired, 
    postedDate: PropTypes.string.isRequired, 
    minutesToRead: PropTypes.number.isRequired
}