import moment from "moment"
import "bootstrap-daterangepicker/daterangepicker.js"
import "../../stylesheets/plugins/daterangepicker.scss"


document.addEventListener("turbolinks:load", () => {
  $(".daterange").daterangepicker({
    startDate: moment().subtract(1, 'months'),
    endDate: moment(),
    maxDate: moment(),
    locale: { format: 'DD/MM/YYYY'},
  })
})
