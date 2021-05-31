import "bootstrap4-duallistbox/dist/jquery.bootstrap-duallistbox.min"
import "bootstrap4-duallistbox/dist/bootstrap-duallistbox.min.css"

document.addEventListener("turbolinks:load", () => {
  $('.duallistbox').bootstrapDualListbox()
})
