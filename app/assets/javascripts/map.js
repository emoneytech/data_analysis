var format1 = "YYYY-MM-DD HH:mm:ss"
var bbox
  , map
  , timelineControl
  , markers
  , current_range
  , start_date
  , end_date
  , props
  , start_query_date
  , end_query_date

// functions

function initMap(divID) {
  coords = [35.9480742, 14.3973929]
  map = new L.map(divID);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    minZoom: 3,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
  }).addTo(map);
  map.setView(new L.LatLng(coords[0], coords[1]), 5);
  map.on('zoomend', function() {
    getMovements();
  });
  map.on('dragend', function() {
    getMovements();
  });
}
  
function setBbox() {
  bbox = map.getBounds()._southWest.lng 
  bbox += ',' + map.getBounds()._southWest.lat 
  bbox += ',' + map.getBounds()._northEast.lng 
  bbox += ',' + map.getBounds()._northEast.lat;
  $('span#bbox').html(bbox)
}

function setProps() {
  current_range = $('#showrange').val()
  switch(current_range) {
    case 'hour':
      step = { minute: 5 }
      dateFormat = 'HH:mm'
      break
    case 'day':
      step = { hour: 1 }
      dateFormat = 'HH:mm'
      break
    case 'month':
      step = { day: 1 }
      dateFormat = 'dd-MM'
      break
    case 'year':
      step = { month: 1 }
      dateFormat = 'MMM'
      break
  }
  this.props = {
    range: current_range,
    step: step,
    dateFormat: dateFormat
  }
  setQueryDate(this.props)
}

function setQueryDate(props) {
  if(!start_query_date) {
    start_date = current_date.startOf(props.range)
  }
  start_query_date = start_date.format(format1)
  end_query_date = start_date.add(Object.values(props.step)[0], Object.keys(props.step)[0]).format(format1)
  $('span#start_date').html(start_query_date)
  $('span#end_date').html(end_query_date)
  $('span#current_range').html(props.range)
  $('span#current_step').html(JSON.stringify(props.step))
}

function getMovements() {
  setBbox();
  $.ajax({
    url: '/data_analysis/maps.json?bbox=' + this.bbox + '&start_date=' + this.start_query_date + '&end_date=' + this.end_query_date,
    success: function(data) {
      setCluster(data)
      $('span#places_count').html(data.features.length)
    }
  });
}

function setCluster(geoJsonData) {
  if (markers) {
    map.removeLayer(markers);
  }
  var geoJsonLayer = L.geoJson(geoJsonData, {
    onEachFeature: function (feature, layer) {
      str = compilePopup(feature.properties)
      layer.bindPopup(str);
    }
  });
  markers = L.markerClusterGroup();
  markers.addLayer(geoJsonLayer);
  map.addLayer(markers);
}

function compilePopup(properties) {
  str = '<h5>' + properties.customer_full_name + '</h5>'
  str += '<h5>' + properties.beneficiary + '</h5>'
  str += '<p>' 
  str += properties.service_updated_at + '<br />'
  str += properties.beneficiary_iban + '<br />'
  str += properties.address + '<br />'
  str += (properties.amount.cents / 100).toLocaleString("en-US", {style:"currency", currency:"EUR"}); + '<br />'
  str += '</p>'
  return str
}

function initTimeControl(props) {
  let btn = document.createElement("button")
  btn.className = "btn btn-primary"
  let slot = document.createElement("p")
  slot.className = "hide"

  timelineControl = L.control.timeline({
    autoplay: false,
    position: "bottomleft",
    onNextStep: (cur) => tick(cur),
    interval: 3000,
    button: {
      pausedText: "Play",
      playingText: "Pause",
      render: () => btn
    },
    timeline: {
      dateFormat: props.dateFormat,
      // renderSlot: () => slot,
      // renderActiveSlot: () => document.createElement("p"),
      range: [this.current_date.startOf(props.range).toDate(), this.current_date.endOf(props.range).toDate()],
      step: props.step
    }
  })
  map.addControl(timelineControl)
}

function tick(cur) {
  start_date = moment(cur)
  setProps()
  getMovements()
}

function setDateRange(){
  $("#showrange").on('change', function() {
    setProps()
    getMovements()
    if (timelineControl) {
      map.removeControl(timelineControl);
    }
    pickerInit(datepicker, this.value);
    initTimeControl(props)
    // console.log(this.value)
  })
}
/*
function setSelector() {
  var date1 = new Date()
  $('#showtime').daterangepicker({
    singleDatePicker: true,

    timePicker: true,
    timePickerIncrement: 1,
    locale: {
      "format": 'MMM YYYY'
    },
    changeYear: true,
    changeMonth: true,
    maxDate: date1
  })
}
*/
var datepicker = $('input#showtime');
var pickerConfig = function(period) {
  var config = {};
  switch (period) {
    case "hour":
      config = {
        showDropdowns: true,
        timePicker: true,
        timePickerIncrement: 1,
        singleDatePicker: true,
        autoUpdateInput: true,
        locale: {
          format: "YYYY-MM-DD HH:mm:ss",
          cancelLabel: 'Clear'
        }
      };
      break;
    case "day":
      config = {
        showDropdowns: true,
        singleDatePicker: true,
        autoUpdateInput: true,
        locale: {
          format: "YYYY-MM-DD",
          cancelLabel: 'Clear'
        },
        startDate: start_date
      };
      break;
    case "month":
      config = {
        showDropdowns: true,
        singleDatePicker: true,
        autoUpdateInput: true,
        locale: {
          format: "MMM YYYY",
          cancelLabel: 'Clear'
        },
        startDate: start_date
      };
      break;
    case "year":
      config = {
        showDropdowns: true,
        singleDatePicker: true,
        autoUpdateInput: true,
        locale: {
          format: "YYYY",
          cancelLabel: 'Clear'
        },
        startDate: start_date
      };
      break;
    case "range":
      config = {
        showDropdowns: true,
        timePicker: true,
        timePickerIncrement: 1,
        autoUpdateInput: true,
        locale: {
          format: "YYYY-MM-DD HH:mm:ss",
          cancelLabel: 'Clear'
        },
        startDate: start_date
      };
      break;
    default:
      config = null;
      break;
  }
  return config;
};
var pickerEvent = function(start, end, label, period) {
  console.log('period: ', period)
  console.log("A new date selection was made: " + start.format(format1) + ' to ' + end.format(format1));
  switch (period) {
    case "month":
    case "year":
      break;
    default:
      console.log('period: ', period)
      break;
  }
}
var pickerInit = function(picker, period) {
  datepicker = picker.daterangepicker(pickerConfig(period), function(start, end) {
    current_date = start
    switch (period) {
      case "month":
        start_date = start
      case "year":
        start_date = start
        break;
      default:
        start_date = start
        break;
    }
    setProps()
    getMovements()
    if (timelineControl) {
      map.removeControl(timelineControl);
    }
    initTimeControl(props)
  })

}


