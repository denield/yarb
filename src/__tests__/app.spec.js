import React from 'react'
const renderer = require('react-test-renderer')
import App from '../app'

describe('<App/>', () => {
  it('renders hello world', () => {
    const tree = renderer
      .create(<App/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})