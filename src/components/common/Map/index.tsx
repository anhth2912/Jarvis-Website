import React, { useEffect, useRef, useMemo } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

type Props = {
  address: string
}

export const Map: React.FC<Props> = ({ address }) => {
  const mapRef = useRef(null)
  const geocoder = useMemo(() => {
    /*global google*/
    return new google.maps.Geocoder()
  }, [])
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
      version: 'weekly',
    })
    geocoder &&
      void loader.load().then(() => {
        geocoder.geocode({ address: address }, (_results, status) => {
          if ((status as string) === 'OK') {
          } else {
            console.error(`Geocode was not successful for the following reason: ${status}`)
          }
        })
      })
  }, [address, geocoder])
  return <div style={{ height: '400px' }} ref={mapRef} />
}
export default Map
