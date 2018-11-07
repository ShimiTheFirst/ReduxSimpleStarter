import React, { Component } from 'react';

export default class GoogleMap extends Component {
    render() {
        return (
            // div accesible via this.refs.map
            <div ref="map" />
        );
    }

    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }
}