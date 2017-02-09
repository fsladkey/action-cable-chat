# ActionCable Chat

## Models

**users**
username
password_digest
session_token

**rooms**
name

**connections**
room_id
user_id

**messages**
room_id
user_id


## Controllers

**UsersController*
* create

**SessionsController*
* create
* destroy

**StaticPagesController*
* root

**Api::MessagesController*
* create

**Api::RoomsController*
* index
* show
