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

  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        authors={this.state.authors}
      />
    );
  }
}

export default App;
