window.onload = function() {
  document.querySelector("#home").style.display = "block";
  // hide other sections
  var sections = document.querySelectorAll("main > section");
  for (var i = 0; i < sections.length; i++) {
    if (sections[i].id !== "home") {
      sections[i].style.display = "none";
    }
  }
};

function showSection(sectionId) {
    const sections = document.querySelectorAll("main section");
    for (const section of sections) {
        if (section.id === sectionId) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    }
};
//Maps
// Replace the placeholder data with your actual data
const locationsData = [
    { Country: "Spain", State: "Valencia", City: "Castellón de la Plana", Language: "Spanish", Longitude: -0.0488, Latitude: 39.9864 },
  { Country: "Norway", State: "Buskerud", City: "Drammen", Language: "Norwegian", Longitude: 10.2057, Latitude: 59.7469 },
  { Country: "United Kingdom", State: "Wales", City: "Swansea", Language: "English", Longitude: -3.9554, Latitude: 51.6205 },
  { Country: "South Korea", State: "Gangwon", City: "Wonju", Language: "Korean", Longitude: 127.9475, Latitude: 37.3514 },
  { Country: "Italy", State: "Liguria", City: "La Spezia", Language: "Italian", Longitude: 9.8459, Latitude: 44.1053 },
  { Country: "United States", State: "California", City: "San Francisco", Language: "English", Longitude: -122.4194, Latitude: 37.7749 },
  { Country: "Russia", State: "Tatarstan", City: "Kazan", Language: "Russian", Longitude: 49.1419, Latitude: 55.8304 },
  { Country: "Japan", State: "Okayama", City: "Okayama", Language: "Japanese", Longitude: 133.9336, Latitude: 34.6551 },
  { Country: "Brazil", State: "São Paulo", City: "Campinas", Language: "Portuguese", Longitude: -47.0608, Latitude: -22.9056 },
  { Country: "Canada", State: "Quebec", City: "Laval", Language: "French", Longitude: -73.7433, Latitude: 45.5699 },
  { Country: "Turkey", State: "Istanbul", City: "Sisli", Language: "Turkish", Longitude: 28.985, Latitude: 41.0614 },
  { Country: "Germany", State: "North Rhine-Westphalia", City: "Bochum", Language: "German", Longitude: 7.2213, Latitude: 51.4818 },
  { Country: "Australia", State: "Queensland", City: "Gold Coast", Language: "English", Longitude: 153.4, Latitude: -28.0167 },
  { Country: "China", State: "Guangdong", City: "Guangzhou", Language: "Mandarin", Longitude: 113.2644, Latitude: 23.1291 },
  { Country: "France", State: "Île-de-France", City: "Paris", Language: "French", Longitude: 2.3522, Latitude: 48.8566 },
  { Country: "Mexico", State: "Mexico City", City: "Tlalpan", Language: "Spanish", Longitude: -99.1939, Latitude: 19.2721 },
  { Country: "Thailand", State: "Bangkok", City: "Huai Khwang", Language: "Thai", Longitude: 100.5848, Latitude: 13.7669 },
  { Country: "Sweden", State: "Stockholm", City: "Solna", Language: "Swedish", Longitude: 18.0067, Latitude: 59.371 },
  { Country: "Nigeria", State: "Lagos", City: "Ikeja", Language: "English", Longitude: 3.3451, Latitude: 6.6068 },
  { Country: "Argentina", State: "Buenos Aires", City: "La Plata", Language: "Spanish", Longitude: -58.943, Latitude: -34.9205 },
  { Country: "South Africa", State: "Gauteng", City: "Johannesburg", Language: "English", Longitude: 28.0436, Latitude: -26.2023 },
];

const map = L.map('map').setView([0, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const markers = {};
locationsData.forEach(location => {
  const { Country, State, City, Language, Longitude, Latitude } = location;
  const marker = L.marker([Latitude, Longitude]).addTo(map);
  marker.bindPopup(`<strong>Country:</strong> ${Country}<br><strong>City:</strong>
  ${City}<br><strong>Language:</strong> ${Language}`);
  markers[`${Country}_${City}`] = marker;
});

const table = $('#locationsTable').DataTable({
  data: locationsData,
  columns: [
    { data: 'Country' },
    { data: 'State' },
    { data: 'City' },
    { data: 'Language' },
    { data: 'Longitude' },
    { data: 'Latitude' },
  ],
});

$('#locationsTable tbody').on('mouseenter', 'tr', function () {
  const rowData = table.row(this).data();
  const { Country, City } = rowData;
  const marker = markers[`${Country}_${City}`];
  marker.openPopup();
});

$('#locationsTable tbody').on('mouseleave', 'tr', function () {
  const rowData = table.row(this).data();
  const { Country, City } = rowData;
  const marker = markers[`${Country}_${City}`];
  marker.closePopup();
});

// Populate the language filter dropdown
const languages = [...new Set(locationsData.map(location => location.Language))].sort();
languages.forEach(language => {
  $('#languageFilter').append(`<option value="${language}">${language}</option>`);
});

$('#languageFilter').on('change', function () {
  const selectedLanguage = this.value;
  table.column(3).search(selectedLanguage).draw();

  if (selectedLanguage) {
    locationsData.forEach(location => {
      const { Country, City } = location;
      const marker = markers[`${Country}_${City}`];
      if (location.Language === selectedLanguage) {
        marker.addTo(map);
      } else {
        map.removeLayer(marker);
      }
    });
  } else {
    locationsData.forEach(location => {
      const { Country, City } = location;
      const marker = markers[`${Country}_${City}`];
      marker.addTo(map);
    });
  }
})
