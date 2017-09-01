class DataApi {

  constructor(rawData) {
    this.rawData = rawData;
  }

  mapToObject(arr) {
    return arr.reduce((acc, curr, index) => {
      // console.log('####################');
      // console.log(`INDEX: ${index}`)
      // console.log('Accomulator Before: ');
      // console.log(acc);
      // console.log('Current: ');
      // console.log(curr);
      // console.log('####################');
      acc[curr.id] = curr;
      // console.log('Acc After: ');
      // console.log(acc);
      // console.log('####################');
      return acc;
    }, {});
  }

  getArticles() {
    return this.mapToObject(this.rawData.articles);
  }

  getAuthors() {
    return this.mapToObject(this.rawData.authors);
  }

}

export default DataApi;
