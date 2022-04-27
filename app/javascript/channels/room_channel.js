// app/javascript/channels/chat_channel.js
import consumer from "./consumer"

consumer.subscriptions.create(
  "RoomChannel",
  {
    connected() {
      // Called when the subscription is ready for use on the server
      console.log("Connected to the room 1!");
    },
    received(data) {
      // Called when there's incoming data on the websocket for this channel
      console.log("Recieving: ", data)
      let msg = $('#msg') 
      if (msg.length) {
        msg.append('<div class="message"> ' + data.content + '</div>')
      } else {
        $(document).Toasts('create', {
          class: 'bg-' + data.type,
          body: data.content,
          title: data.title,
          subtitle: data.subtitle,
          icon: 'fas fa-lg fa-' + data.icon,
        })
      }
    }
  }
)

let submit_messages;$(document).on('turbolinks:load', function () {
  submit_messages()
})
submit_messages = function () {
  $('#message_content').on('keydown', function (event) {
    if (event.key === 'Enter') {
      $('input').click()
      event.target.value = ''
      event.preventDefault()
    }
  })
}