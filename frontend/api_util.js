export function fetchRooms() {
  return $.ajax("/api/rooms")
}

export function fetchRoom(id) {
  return $.ajax(`/api/rooms/${id}`)
}
