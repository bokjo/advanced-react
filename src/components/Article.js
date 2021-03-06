import React         from 'react';
import PropTypes     from 'prop-types';
import storeProvider from './storeProvider';

const styles = {

  article: {
    paddingBottom: 15,
    borderBottomStyle: 'solid',
    borderBottomColor: '#eee',
    borderBotomWidth: .71,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  date: {
    fontSize: '0.66uem',
    color: '#888',
    fontFamily: 'Monospace',
  } ,
  author: {
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: 'Inconsolata-dz',
  },
  link: {
    color: '#32FA9D'
  },
  body: {
    paddingLeft: 20,
    paddingRight: 20,
  },
};

const formatDate = (dateToFormat) =>
  new Date(dateToFormat).toDateString();

const Article = (props) => {
  const { article, author } = props;

  return (
    <div style={styles.article}>
      <div style={styles.title}>{article.title}</div>
      <div style={styles.date}>
        {formatDate(article.date)}
      </div>
      <div style={styles.author}>
        <a style={styles.link} href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div style={styles.body}>{article.body}</div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })
};

function  extraProps(store, originalProps) {
  return {
    author: store.lookupAuthor(originalProps.article.authorId),
  };
}

export default storeProvider(extraProps)(Article);

