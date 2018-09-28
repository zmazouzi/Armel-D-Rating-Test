import React,{Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

let url = "https://b.tile.openstreetmap.org/8/127/85.png";

class Mapcom extends Component{ render() {
    const position = [51.505, -0.09];
    const map = (
      <Map center={position} zoom={13}>
        <TileLayer
          url={url}
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
      </Map>
    );
    return map;
}}
export default Mapcom ;
