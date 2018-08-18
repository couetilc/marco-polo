function trackLocation() {
    var geoparams = {
        enableHighAccuracy: true,
        timeout: Infinity,
        maximumAge: 0
    }

    function logPosition(position) {
        console.log(position);
        console.log(JSON.stringify(position));
        console.log(position.coords.latitude, ",", position.coords.longitude);
    }

    function noLocation() {
        navigator.geolocation.clearWatch(watchId);
        /* insert "click to retry" */
        console.log("no geolocation");
    }

    var watchId = navigator.geolocation.watchPosition(logPosition, noLocation, geoparams);
    return(watchId);
}

export default trackLocation;
