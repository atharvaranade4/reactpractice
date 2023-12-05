import PropTypes from 'prop-types';

function CardImage ({ image, altDescription }) {
    return (
        <div>
            <img className='' src={image} alt={altDescription} ></img>
        </div>
    )
}

export default CardImage

CardImage.propTypes = {
    image: PropTypes.string.isRequired,
    altDescription: PropTypes.string.isRequired
}