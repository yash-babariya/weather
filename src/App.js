import React, { Component } from 'react'
import './App.scss'
import { RouterProvider } from 'react-router-dom'
import router from './routes'

export default class App extends Component {
  render() {
    return (
      <div>
        <RouterProvider router={router} />
      </div>
    )
  }
}
