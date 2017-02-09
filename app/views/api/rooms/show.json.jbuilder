json.partial! "room", room: @room
json.messages @room.messages do |message|
  json.partial! "api/messages/message", message: message
end
