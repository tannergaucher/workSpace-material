import React from 'react';

import GoogleMapReact from "google-map-react";


class GoogleMap extends React.Component {
  
  render(){
    
    const center = {
      lat: 48.8,
      lng: 2.35
    }
    
    return(
      <div style={{ height: 'calc(100vh - 64px)', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCEXqXUNN1CYIFCTWSCc1-cHFznDY61zPY' }}
          center={center}
          defaultCenter={center}
          defaultZoom={13}
        />
      </div>
    )
  }
}

export default GoogleMap;