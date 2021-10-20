import React, { useState } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '600px',
  border: '0px',
  borderRadius: '.5rem'
};

const position = {
  lat: 23.709286,
  lng: 90.412563
};

const onLoad = marker => {
    console.log('marker: ', marker)
}
  

function Direction({origin, destination}) {
 const [directionRes, setDirectionRes] = useState(null);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBPeEhRCUTdYHTLikeQPYrUOZnBKah-MLA"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={18}
      >
        
        {
           origin !== '' && destination !== '' &&  <DirectionsService
                 
                    options={{ 
                        destination: destination,
                        origin: origin,
                        travelMode: 'DRIVING'
                    }}
                    
                    callback={res => {
                        if(res !== null){
                            setDirectionRes(res);
                        }
                    }}
            />
        }

        {
            directionRes && <DirectionsRenderer
                            
                                options={{ 
                                    directions: directionRes
                                }}
                            />
        }

      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Direction)