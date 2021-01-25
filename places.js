window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Sajmiste',
            location: {
                lat: 44.81262,
                lng: 20.44563,
            }
        },
        {
            name: 'Muzej',
            location: {
                lat: 44.81956,
                lng: 20.44235,
            }
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        const model = document.createElement('a-image');
                    model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
                    model.setAttribute('name', place.name);
                    model.setAttribute('src', 'map-marker.png');

                    // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...
                    model.setAttribute('scale', '20, 20');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}