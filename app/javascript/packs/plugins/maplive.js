import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css' // Re-uses images from ~leaflet package
import * as L from 'leaflet'
import 'leaflet-defaulticon-compatibility'
import '@elfalem/leaflet-curve'
import 'leaflet-arc/bin/leaflet-arc.min.js'

import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import 'leaflet.markercluster/dist/leaflet.markercluster.js'

import 'leaflet.timeline.control'

import 'leaflet-extra-markers/dist/js/leaflet.extra-markers.min.js'
import 'leaflet-extra-markers/dist/css/leaflet.extra-markers.min.css'

window.L = L
L.TransitionedIcon = require('leaflet-transitionedicon')

window.redMarker = L.ExtraMarkers.icon({
  icon: 'fa-file-export',
  markerColor: 'red',
  shape: 'square',
  prefix: 'fa',
})
window.greenMarker = L.ExtraMarkers.icon({
  icon: 'fa-file-import',
  markerColor: 'green',
  shape: 'square',
  prefix: 'fa',
})

window.MyIcon = L.TransitionedIcon.extend({
  options: {
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    cssTransitionBatches: 0,
    cssTransitionJitterIn: 1200,
    cssTransitionJitterOut: 300,
    cssTransitionName: 'my-transition',
  },
})
