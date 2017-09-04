import React, { Component } from 'react';
import DataApi from '../../api/DataApi';
import { data } from '../../api/testData';
import ArticleList from './ArticleList';


const api = new DataApi(data);

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors(),
    };

    // console.log(this.state);
  }

  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId],
  };

  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        articleActions={this.articleActions}
      />
    );
  }
}

export default App;