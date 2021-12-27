if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register('/serviceworker.js', { scope: './' })
    .then(function (reg) {
      navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
        serviceWorkerRegistration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: vapidPublicKey,
        }).then(async function (sub) {
          const data = await fetch('/webpush_subscriptions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(sub)
          }).then(result => result.json())
          console.log(data)
        })
      })
    })
} else {
  console.error('Service worker is not supported in this browser')
}