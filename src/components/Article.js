import React from 'react';
import PropTypes from 'prop-types';

const Article = (props) => {
  const { article, author } = props;
  //console.log("HERE");
  //console.log(props);
  return (
    <div>
      <div>{article.title}</div>
      <div>{article.date}</div>
      <div>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div>{article.body}</div>
    </div>
  );
};

Article.propTypes = {

};

export default Article;
