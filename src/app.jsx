import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false
    }
    this.break = this.break.bind(this)
  }

  break() {
    this.setState({
      error: true
    })
  }

  render() {
    if (this.state.error) {
      throw Error('Something went wrong.')
    }

    return (
      <>
        <h1>
          Hello World
        </h1>
        <div>
          To break the app, click <a href="#" onClick={this.break}>here</a>
        </div>
      </>
    )
  }
}