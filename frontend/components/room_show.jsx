import React, { Component } from 'react'
import { fetchRoom } from '../api_util'

export default class RoomIndex extends Component {

  constructor(props) {
    super(props)
    this.state = { room: null }
  }

  componentDidMount() {
    const { params: { id } } = this.props
    fetchRoom(id).then(room => this.setState({ room }))
  }

  render() {
    const { room } = this.state
    if (!room) return null
    return (
      <section>
        <h1>{ room.name }</h1>
      </section>
    )
  }
}
