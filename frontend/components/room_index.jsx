import React, { Component } from 'react'
import { fetchRooms } from '../api_util'
import RoomList from './room_list'

export default class RoomIndex extends Component {

  constructor(props) {
    super(props)
    this.state = { rooms: [] }
  }

  componentDidMount() {
    fetchRooms().then(rooms => this.setState({ rooms }))
  }
  render() {
    return (
      <section>
        <h1>Room Index</h1>
        <RoomList rooms={ this.state.rooms }/>
      </section>
    )
  }
}
