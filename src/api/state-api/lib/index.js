class StateApi {

  constructor(rawData) {
    this.data = {
      articles: this.mapToObject(rawData.articles),
      authors: this.mapToObject(rawData.authors),
    };
  }

  mapToObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  lookupAuthor = (authorId) => {
    return this.data.authors[authorId];
  }

  getState = () => {
    return this.data;
  }

}

export default StateApi;
