// app/javascript/channels/chat_channel.js
import consumer from "./consumer"

consumer.subscriptions.create(
  "PrivateChannel",
  {
    connected() {
      // Called when the subscription is ready for use on the server
      console.log("Connected to the private channel!");
    },
    received(data) {
      // Called when there's incoming data on the websocket for this channel
      console.log("Recieving: ", data)
      
      let private_messages = $('.private_messages') 
      if (private_messages.length) {
        private_messages.append(
          '<div class="message">' +
            data.content +
            '</a></div>'
        )
      }
      else {
        $(document).Toasts('create', {
          class: 'bg-' + data.widget_type,
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