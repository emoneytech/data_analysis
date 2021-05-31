import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "../plugins/index.js"

require("jquery")

Rails.start()
Turbolinks.start()
ActiveStorage.start()

window.d3 = d3
