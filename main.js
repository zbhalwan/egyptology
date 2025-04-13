const artifacts = [
  {
    id: 1,
    title: "Egyptian Sun Ritual Tablet",
    ancientLocation: "Heliopolis",
    modernLocation: "Cairo, Egypt",
    location: [30.0478, 31.2336], // Cairo
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/960px-Colosseo_2020.jpg", // Add image path
    description: "Used in daily offerings to Ra, c. 1300 BCE.",
    dates: "1300 BCE",
    source: "https://example.com/sun-ritual-tablet",
  },
  {
    id: 2,
    title: "Greek Oracle Inscription",
    ancientLocation: "Delphi",
    modernLocation: "Delphi, Greece",
    location: [38.4828, 22.501], // Delphi
    image:
      "https://www.ashmolean.org/sites/default/files/ashmolean_03_ram_rvb.jpg", // Add image path
    description: "A dedication at the Oracle of Apollo, c. 500 BCE.",
    dates: "500 BCE",
    source: "https://example.com/oracle-inscription",
  },
  {
    id: 3,
    title: "Roman Sacrificial Altar",
    ancientLocation: "Forum Romanum",
    modernLocation: "Rome, Italy",
    location: [41.8902, 12.4922], // Rome
    image:
      "https://s3.eu-central-1.amazonaws.com/storage.arab-reform.net/ari/2024/08/09125000/shutterstock_120259777-720x479.jpg", // Add image path
    description: "Used in Saturnalia rites, c. 100 CE.",
    dates: "100 CE",
    source: "https://example.com/sacrificial-altar",
  },
];

const map = L.map("map").setView([34.0, 20.0], 5);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

const cardContainer = document.getElementById("card-container");
const markers = [];

let ColorIcon =  L.Icon.extend({
    options: {
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
        iconSize: [25, 41],
        shadowSize: [41, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
 }
});

let greenIcon = new ColorIcon({iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png'});

let redIcon = new ColorIcon({iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png'});

artifacts.forEach((artifact) => {
  const marker = L.marker(artifact.location, { icon: redIcon }).addTo(map);

  const popupContent = `
      <div style="max-width: 300px; font-family: 'Libre Baskerville', serif;">
        <img src="${artifact.image}" alt="${artifact.title}" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 8px;" />
        <h2 style="font-size: 18px; font-weight: bold;">${artifact.title}</h2>
        <p><strong>Ancient Location:</strong> ${artifact.ancientLocation}</p>
        <p><strong>Modern Location:</strong> ${artifact.modernLocation}</p>
        <p><strong>Description:</strong> ${artifact.description}</p>
        <p><strong>Dates:</strong> ${artifact.dates}</p>
        <p><strong>Source:</strong> <a href="${artifact.source}" target="_blank" style="color: blue; text-decoration: underline;">Learn more</a></p>
      </div>
    `;
  marker.bindPopup(popupContent);

  const card = document.createElement("div");
  card.className = "border p-4 rounded-lg shadow hover:bg-gray-50 cursor-pointer";
  card.innerHTML = `
      <h2 class="text-lg font-semibold">${artifact.title}</h2>
      <p class="text-sm">${artifact.description}</p>
    `;
  card.addEventListener("click", () => {
    // map.panTo(artifact.location, { animate: true });
    map.setView(artifact.location, 4, { animate: true }); 
     // Wait for the map to finish moving, then open the popup
     map.once('moveend', () => {
        marker.openPopup();
      });
    
  });

  cardContainer.appendChild(card);
});
