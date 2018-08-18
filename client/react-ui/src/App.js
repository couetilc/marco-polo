import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
        <MainPage />
    );
  }
}

class MainPage extends Component {
    render() {
        return(
        <div className="page">
            <MainHeader />
            <User />
            <Tracker />
        </div>);
    }
}

class MainHeader extends Component {
    render() {
        return(
        <header>
            <h1>
                <span className="marco">MARCO</span>
                <span>finds</span>
                <span className="polo">POLO</span>
            </h1>
        </header>);
    }
}

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "unset"
        };
    }

    render() {
        return(
        <div className="user">
            <span>you are: </span>
            <span className="username">{this.state.username}</span>
        </div>);
    }
}

class Tracker extends Component {
    constructor(props) {
        super(props);
        const geoparams = {
            enableHighAccuracy: true,
            timeout: Infinity,
            maximumAge: 0
        }

        const watchId = navigator.geolocation
            .watchPosition(this.logPosition, this.noLocation, geoparams);

        this.state = {
            logs: [],
            watchId: watchId
        };
    }

    logPosition = (position) => {
        console.log(position);
        this.setState((prevState, props) => {
            prevState.logs.push({
                timestamp: position.timestamp,
                longitude: position.coords.longitude,
                latitude: position.coords.latitude
            });
            prevState.geolocationStatus = "enabled";
            return prevState;
        });
    }

    noLocation = () => {
        this.setState({ geolocationStatus: "disabled" });
    }

    render() {
        return(
        <div className="tracker">
            <h1>Location History</h1>
            <h6>geolocation: {this.state.geolocationStatus}</h6>
            <div className="log-stream">
                <div className="log-legend">
                    <span>Timestamp</span>
                    <span>Latitude</span>
                    <span>Longitude</span>
                </div>
                {this.state.logs.map((log, idx) => 
                    <Log key={idx} {...log} />)}
            </div>
        </div>);
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.state.watchId);
    }
}

class Log extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timestamp: props.timestamp,
            longitude: props.longitude,
            latitude: props.latitude
        }
    }

    render() {
        return(
        <div className="log">
            <span className="log-timestamp">{this.state.timestamp}</span>
            <span className="log-latitude">{this.state.latitude}</span>
            <span className="log-longitude">{this.state.longitude}</span>
        </div>);
    }
}
export default App;
