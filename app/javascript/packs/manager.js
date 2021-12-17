// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require('admin-lte')

import 'bootstrap'
import './plugins/bootstrap-switch/js/bootstrap-switch'
import './plugins/bootstrap-switch/css/bootstrap4/bootstrap-switch.min.css'

import '../stylesheets/application'
import "@fortawesome/fontawesome-free/js/all"
import "chartkick/chart.js"
import "../plugins/index.js"

require("jquery")
require('select2')


require('./plugins/duallistbox.js')
require('./plugins/daterangepicker.js')

require('./plugins/jquery.slimscroll.min.js')

import "select2/dist/css/select2.min.css"
import "select2-bootstrap4-theme/dist/select2-bootstrap4.min.css"

require('./plugins/datatables.js')

require('./plugins/maplive.js')

import moment from 'moment/moment'
import {initLoading, stopLoading, getAccountInfo} from './plugins/loading'
window.initLoading = initLoading
window.stopLoading = stopLoading
window.getAccountInfo = getAccountInfo
window.moment = moment

global.toastr = require("toastr")

import * as d3 from "d3"
window.d3 = d3
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
window.jQuery = $
window.$ = $
const tables = []

document.addEventListener("turbolinks:load", () => {
  $('[data-toggle="tooltip"]').tooltip()
  $('.select2').select2({ theme: 'bootstrap4' })

  if (tables.length === 0 && $('.data-table').length !== 0) {
    tables.push(
    $('.data-table').each((_, element) => {
        $(element).DataTable({
          dom: 'Blfrtip',
          paging: false,
          info: false,
          lengthChange: false,
          autoWidth: false,
          responsive: true,
          buttons: ["copy", "csv", "excel", "pdf", "colvis", 'createState', 'savedStates']
        }).buttons().container().appendTo('#' + element.id + '_wrapper .col-md-6:eq(0)')
      })
      )
  }
})

document.addEventListener("turbolinks:before-cache", () => {
  while (tables.length !== 0) {
    tables.pop().remove()
  }
})
