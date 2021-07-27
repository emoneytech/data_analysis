export function initLoading() {
  let card = $('div.card')
  let div = document.createElement("div")
  div.setAttribute("id", "loading")
  div.setAttribute("class", "overlay dark")
  let i = document.createElement("i")
  i.setAttribute("class", "fas fa-2x fa-sync-alt fa-spin")
  div.append(i)
  card.append(div)
}

export function stopLoading() {
  $("div#loading").remove()
}

export function getAverageStock(anagrafica_id, id) {
  initLoading()
  let item_id = id.split('-')[1]
  $.ajax({
    url: "/customers/anagrafiche/" + anagrafica_id + "/conti/" + item_id + "/get_average.json",
    success: function(data) {
      stopLoading()
      $('td#'+id).html(data)
    }
  })
}