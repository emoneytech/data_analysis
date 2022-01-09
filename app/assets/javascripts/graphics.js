function setGraphicsClass(target, direction) {
  switch (direction) {
    case 'ALL':
      $(target).removeClass('card-success')
      $(target).removeClass('card-danger')
      $(target).addClass('card-warning')
      break
    case 'IN':
      $(target).removeClass('card-danger')
      $(target).removeClass('card-warning')
      $(target).addClass('card-success')
      break
    case 'OUT':
      $(target).removeClass('card-success')
      $(target).removeClass('card-warning')
      $(target).addClass('card-danger')
      break
    default:
      $(target).removeClass('card-success')
      $(target).removeClass('card-danger')
      $(target).addClass('card-warning')
  }
}

function refreshChart(chart, url) {
  console.log('recupero i dettagli per il grafico: ', chart)
  console.log('url: ', url)
  $.ajax({
    url: url,
    success: function (data) {
      let current_chart = Chartkick.charts[chart]
      current_chart.updateData(data)
      current_chart.redraw()
    },
  })
}
