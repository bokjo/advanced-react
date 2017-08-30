import React    from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  
  state = {
    answer: 44,
  };

  asyncFunc = () => {
    return Promise.resolve(37);
  };

  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunc()
    });
  }
  

  render() {
    return (
      <div>
        <h2>Hello Again React</h2>
        <div>The new answer from React is: {this.state.answer}</div>
      </div>
    );
  }
}

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('main')
);

