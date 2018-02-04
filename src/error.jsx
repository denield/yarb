import React, { Component } from 'react'

const Self = ({ children }) => <a href=".">{children}</a>

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
    // logErrorToMyService(error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          The application has crashed. Any unsaved work has lost. Apologise.
          Please try to refresh the application by clicking <Self>here</Self>.
          If that does not work, please contact technical support.
        </h1>
      )
    }
    return this.props.children
  }
}