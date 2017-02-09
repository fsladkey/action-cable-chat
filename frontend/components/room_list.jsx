import React, { Component } from 'react'
import { Link } from 'react-router'

export default function RoomList({ rooms }) {
  const roomItems = rooms.map(room =>
    <li key={ room.id }>
      <Link to={ `/rooms/${room.id}` }>
        { room.name }
      </Link>
    </li>
  )
  return (
    <ul>
      { roomItems }
    </ul>
  )
}
