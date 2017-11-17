//Geolocation

export default function Locate(){

  let pos = {
    lat:0,
    long:0
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log('brak lokalizacji')
    }
    function showPosition(position) {
      pos.lat = position.coords.latitude;
      pos.long = position.coords.longitude;
      console.log(pos.lat)
      console.log(pos.long)
      return pos
    };
  }
};
