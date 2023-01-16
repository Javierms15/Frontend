import { useEffect, useState } from 'react'
import { Marker, useMapEvents } from 'react-leaflet'

export const LocationMarker = ({onChange}) => {
    const [position, setPosition] = useState(null);

    const map = useMapEvents({
        click(e) {
            setPosition(e.latlng);
            onChange({lat: e.latlng.lat, lng: e.latlng.lng});
        },
        locationfound(e){
            map.setView(e.latlng, map.getZoom());
        }
    })

    useEffect(() => {
      map.locate({enableHighAccuracy: true});
    }, []);

    return position === null ? null : (
        <Marker position={position} />
    )
}
