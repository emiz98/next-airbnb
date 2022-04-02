import React, { useState } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import icon from '../helpers/constants'

const Map = ({ locations }) => {
  var centerLatSum = 0
  var centerLongSum = 0

  for (let i = 0; i < locations.length; i++) {
    centerLatSum += locations[i].lat
    centerLongSum += locations[i].long
  }
  const [currentLocation, setCurrentLocation] = useState([
    centerLatSum / locations.length,
    centerLongSum / locations.length,
  ])

  function Markers({ data }) {
    const map = useMap()
    return (
      data.length > 0 &&
      data.map((marker, index) => {
        return (
          <Marker
            eventHandlers={{
              click: () => {
                map.setView([marker.lat, marker.long], 14)
              },
            }}
            key={index}
            position={{
              lat: marker.lat,
              lng: marker.long,
            }}
            icon={icon}
          >
            <Tooltip>
              <span>{marker.title}</span>
            </Tooltip>
          </Marker>
        )
      })
    )
  }

  return (
    <div>
      <MapContainer
        center={[currentLocation[0], currentLocation[1]]}
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: '15rem', width: '100%', borderRadius: '10px' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Markers data={locations} />
      </MapContainer>
    </div>
  )
}

export default Map
