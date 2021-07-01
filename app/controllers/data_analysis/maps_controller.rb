module DataAnalysis
  class MapsController < ApplicationController
    before_action(only: :index) { authorize! :admin, :dashboard }

    def index
      @places = Place.where(positionable_type: 'Anagrafica').geocoded.limit(100)
      respond_to do |format|
        format.html
        format.json do
          geojson = @places.map do |place|
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [place.lonlat.longitude, place.lonlat.latitude],
              },
              properties: {
                name: place.positionable_type,
                popupContent: render_to_string(partial: 'data_analysis/maps/position.html', locals: { place: place } ),
                address: place.address
              }
            }
          end
  
          render json: geojson
        end
      end
  
    end


  end
end
