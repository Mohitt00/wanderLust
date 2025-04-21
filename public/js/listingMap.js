// Accessing the coordinates from the data attributes in the HTML
const mapElement = document.getElementById('map');
const latitude = parseFloat(mapElement.getAttribute('data-lat'));
const longitude = parseFloat(mapElement.getAttribute('data-lng'));
const title = mapElement.dataset.title;

// Initialize the map
const coordinates = [latitude, longitude];
const map = L.map('map').setView(coordinates, 13);

// Set up OpenStreetMap as the base layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add a marker with a popup to the map
L.marker(coordinates).addTo(map)
  .bindPopup(title)
  .openPopup();


