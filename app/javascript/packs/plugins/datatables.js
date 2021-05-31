require('jquery')
require('jszip');
require('pdfmake');
require("datatables.net")
require("datatables.net-bs4")
require("datatables.net-bs4/css/dataTables.bootstrap4.min.css")
require("datatables.net-buttons")
require("datatables.net-buttons-bs4")
require("datatables.net-buttons/js/buttons.colVis.js")
require("datatables.net-buttons/js/buttons.html5.js")
require("datatables.net-buttons/js/buttons.colVis.js")

window.jQuery = $;
window.$ = $;
const dataTables = [];

document.addEventListener("turbolinks:load", () => {
  if (dataTables.length === 0 && $('.data-table').length !== 0) {
    $('.data-table').each((_, element) => {
      dataTables.push($(element).DataTable({
        pageLength: 50
      }));
    });
  }
});

document.addEventListener("turbolinks:before-cache", () => {
  while (dataTables.length !== 0) {
    dataTables.pop().destroy();
  }
});