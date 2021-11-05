// app/javascript/channels/chat_channel.js
import consumer from './consumer'

consumer.subscriptions.create('NotificationChannel', {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log('Connected to the notification channel!')
  },
  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log('Recieving: ', data.icon)
    let str = data.icon
    toastr[`${str}`](`${data.content}`)
    let coords = data.coords
    createMarker(coords)
  },
})

function createMarker(coords) {
  var markers = []
  markers.push(L.marker(coords, { icon: new MyIcon() }).addTo(map))
  const lifetime = 5000
  setTimeout(function () {
    map.removeLayer(markers[0])
  }, lifetime)
}
