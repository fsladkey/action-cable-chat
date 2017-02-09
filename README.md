# ActionCable Chat

Today we're going to build a chat appliction using ActionCable.
New to rails 5, ActionCable allows us to use websockets for live notifications within our app.
ActionCable is really two libraries, one ruby for the server side, and one javascript for the client.
We will be starting from a skeleton which should be pretty familiar to you. Let's take a tour.

## Models

**users**
username
password_digest
session_token

**rooms**
name

<!--
**connections**
room_id
user_id -->

**messages**
room_id
user_id



We will be using our regular auth pattern for this project.
Once this schema exists, and you users are authenticated we can move to controllers.

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

Let's get started!

## Rooms

Our frontend routes are simple, at the index we render a list of all the rooms,
at `rooms/:id` we render messages for the current rooms.
