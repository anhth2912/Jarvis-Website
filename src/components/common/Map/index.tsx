import React, { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

type Props = {
  address: string
}

export const Map: React.FC<Props> = ({ address }) => {
  const mapRef = useRef<HTMLDivElement>(null)
  console.log('===========================', process.env.GOOGLE_MAPS_API_KEY)
  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.GOOGLE_MAPS_API_KEY ?? '',
        version: 'weekly',
      })

      const { Map } = await loader.importLibrary('maps')

      const { Marker } = await loader.importLibrary('marker')

      const position = {
        lat: 21.00745964050293,
        lng: 105.80953216552734,
      }

      // map option
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 14,
        mapId: 'DEMO_MAP_ID',
      }

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions)

      new Marker({
        map,
        position,
      })
    }

    initMap()
  }, [address])
  return <div style={{ height: '400px' }} ref={mapRef} />
}
export default Map
