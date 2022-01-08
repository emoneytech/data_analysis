if (navigator.serviceWorker) {
  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    for (let registration of registrations) {
      if (
        registration.scope != 'http://localhost:3000/' &&
        registration.scope != 'https://data-analysis.emonet.tech:8443/'
      ) {
        registration.unregister()
      }
    }
  })

  navigator.serviceWorker
    .register('/serviceworker.js', { scope: '/' })
    .then(function (reg) {
      navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
        serviceWorkerRegistration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: vapidPublicKey,
        }).then(async function (sub) {
          // sub.client = navigator
          var _navigator = {}
          for (var i in navigator) _navigator[i] = navigator[i]
          delete _navigator.plugins
          delete _navigator.mimeTypes
          let body = JSON.parse(JSON.stringify(sub))
          body.client = _navigator
          const data = await fetch('/webpush_subscriptions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(body)
          }).then(result => result.json())
          console.log(data)
        })
      })
    })
} else {
  console.error('Service worker is not supported in this browser')
}