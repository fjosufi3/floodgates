var map;
function initMap() {
    var p_creek = {lat: 34.0525999, lng: -84.6671573};
    map = new google.maps.Map(document.getElementById('map'), {
        center: p_creek,
        zoom: 15
    });
    var marker = new google.maps.Marker({
        position: p_creek,
        map: map
    });
}