require('jquery')
require('jszip');
require('pdfmake');
require("datatables.net")
require("datatables.net-bs4")
require("datatables.net-responsive")
require("datatables.net-responsive-bs4")
require("datatables.net-bs4/css/dataTables.bootstrap4.min.css")
require("datatables.net-buttons")
require("datatables.net-buttons-bs4")
require("datatables.net-buttons/js/buttons.colVis.js")
require("datatables.net-buttons/js/buttons.html5.js")
require("datatables.net-buttons/js/buttons.colVis.js")

import "admin-lte/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css"
import "admin-lte/plugins/datatables-responsive/css/responsive.bootstrap4.min.css"
import "admin-lte/plugins/datatables-buttons/css/buttons.bootstrap4.min.css"

window.jQuery = $;
window.$ = $;
const dataTables = [];

document.addEventListener("turbolinks:load", () => {
});

document.addEventListener("turbolinks:before-cache", () => {
  while (dataTables.length !== 0) {
    dataTables.pop().destroy();
  }
});