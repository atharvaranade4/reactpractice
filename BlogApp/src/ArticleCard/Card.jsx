import PropTypes from 'prop-types';

import CardImage from "./CardImage";
import CardBody from "./CardBody"
import CardDetails from "./CardDetails"

function Card ({ article, articleType}) {
    return (
        <>
            <div className={`article-card-${articleType}`}>
                <CardImage
                    image={article.image}
                    altDescription={article.title}
                />
            </div>
            <div>
                <CardBody
                    cardTitle={article.title}
                    cardDescription={article.description}
                    hasAudioAvailable={article.hasAudioAvailable}
                    hasMemberPreview={article.memberPreview}
                />
                <CardDetails
                    authorImage={article.author.image}
                    authorName={article.author.name}
                    postedDate={article.postedDate}
                    minutesToRead={article.minutesToRead}
                />
            </div>
        </>
    );
}

Card.propTypes = {
    article: PropTypes.object.isRequired,
    articleType: PropTypes.string.isRequired
}

export default Card