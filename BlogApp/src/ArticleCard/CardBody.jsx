import PropTypes from 'prop-types';

function CardBody ( { cardTitle, cardDescription, hasAudioAvailable, hasMemberPreview } ) {
    return (
        <div>
            { (hasAudioAvailable)? <p>Audio Available</p> : null}
            { (hasMemberPreview)? <p>★ Member Preview</p> : null}
            {cardTitle}
            {cardDescription}
        </div>
    )
}

export default CardBody

CardBody.propTypes = {
    cardTitle: PropTypes.string.isRequired, 
    cardDescription: PropTypes.string.isRequired, 
    hasAudioAvailable: PropTypes.bool.isRequired, 
    hasMemberPreview: PropTypes.bool.isRequired
}