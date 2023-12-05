import PropTypes from 'prop-types';

function ArticleRow({rowName}){
    return (
        <div className='article-row'>
            <h2>{rowName}</h2>
        </div>
    )
}

export default ArticleRow

ArticleRow.propTypes = {
    rowName: PropTypes.string.isRequired
}