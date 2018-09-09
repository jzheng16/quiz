import React, { Component } from 'react';

class Home extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => {
        console.log('res', res);
        this.setState({ response: res[0].title })
      })
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/question');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div>
        {this.state.response}
      </div>

    )
  }
}

export default Home;