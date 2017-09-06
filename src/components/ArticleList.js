import React     from 'react';
import PropTypes from 'prop-types';
import Article   from './Article';


const ArticleList = (props) => {

  return (
    <div>
      {Object.values(props.articles).map((article) =>
        <Article
          key={article.id}
          article={article}
          store={props.store}
        />
      )}
    </div>
  );
};

ArticleList.propTypes = {

};

export default ArticleList;
