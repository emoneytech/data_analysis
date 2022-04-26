// app/javascript/channels/chat_channel.js
import consumer from "./consumer"

consumer.subscriptions.create(
  "RoomChannel",
  {
    connected() {
      // Called when the subscription is ready for use on the server
      console.log("Connected to the room!");
    },
    received(data) {
      // Called when there's incoming data on the websocket for this channel
      console.log("Recieving: ", data)
      $(document).Toasts('create', {
        class: 'bg-' + data.type,
        body: data.content,
        title: data.title,
        subtitle: data.subtitle,
        icon: 'fas fa-lg fa-' + data.icon,
      })
    }
  }
)
