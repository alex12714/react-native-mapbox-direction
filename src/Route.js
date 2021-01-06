// @flow
import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';

const Route = ({ route, lineColor }) => {
  const layerStyles = {
    lineColor,
    lineWidth: 6,
    lineOpacity: 0.8,
  }
  
  return (
    <MapboxGL.ShapeSource id="routeSource" shape={route}>
      <MapboxGL.LineLayer
        id="routeFill"
        style={layerStyles}
      />
    </MapboxGL.ShapeSource>
  );
};

export default Route;
