import React, { Component } from 'react';
import MapGL, { NavigationControl, Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import './index.css'

const TOKEN = 'pk.eyJ1IjoicGFzcXVhbGVidWNjaSIsImEiOiJjamxzMnE0dTMwYjNwM2tubWd5am1uNzc2In0.zwjILGILq5eChHkM2tgQnQ';

const navStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	padding: '10px'
};

class Mappa extends Component {

	constructor(props) {
		super(props);
		this.state = {
			viewport: {
				latitude: 45.723819,
				longitude: 9.403937,
				zoom: 16,
				bearing: 0,
				pitch: 0,
				width: '100%',
				height: '40vh',
			}
		};
	}

	render() {
		const { viewport } = this.state;

		return (
			<MapGL
				{...viewport}
				mapStyle="mapbox://styles/pasqualebucci/cjqbdyohf4cpq2rqyj8edirf2"
				mapboxApiAccessToken={TOKEN}
				onViewportChange={(viewport) => this.setState({ viewport })}
				scrollZoom={false}
			>
				<div className="nav" style={navStyle}>
					<NavigationControl onViewportChange={(viewport) => this.setState({ viewport })} />
				</div>
				<Marker latitude={45.723819} longitude={9.403937} offsetLeft={0} offsetTop={30}>
					<div className="marker"></div>
					<span className="beacon"></span>
				</Marker>
				
			</MapGL>
		);
	}
}

export default Mappa