const artifacts = [
  {
    id: 1,
    title: "Burial of Osiris",
    ancientLocation: 'Nedit ("Place of Throwing Down")',
    modernLocation: "Abydos, El-Balyana, Sohag Governorate, Egypt",
    location: [26.1844, 31.9162], // Abydos
    image:
      "https://images.fineartamerica.com/images-medium-large-5/1-tomb-painting-of-osiris-brian-brake.jpg", // Placeholder image
    description:
      "Mythological burial site of Osiris at Abydos, where ancient Egyptians believed the god of the afterlife was laid to rest. A key center for religious pilgrimage and resurrection rites.",
    dates: "No actual date",
    source:
      "https://www.penn.museum/sites/expedition/abydos-and-the-cult-of-osiris/",
  },
  {
    id: 2,
    title: "Benben Mound",
    ancientLocation: "Heliopolis, Ancient Egypt",
    modernLocation: "Cairo, Egypt",
    location: [30.0478, 31.2336], // Cairo
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c2/Pyramidion-satellite-kh%C3%A9ops.jpg", // Placeholder image
    description:
      "Benben is a pyramid or stunted obelisk. It was from this mound that the first god, Atum the creator, appeared.",
    dates:
      "No actual date; associated with the creation of the world and the first appearance of land from primordial waters (Nu)",
    source:
      "https://ebookcentral-proquest-com.revproxy.brown.edu/lib/brown/reader.action?docID=6213702&ppg=38",
  },
  {
    id: 3,
    title: "Temple of Zeus",
    ancientLocation: "Olympia, Ancient Greece",
    modernLocation: "Athens, Greece",
    location: [37.9838, 23.7275], // Athens
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/93/L%27Olympieion_%28Ath%C3%A8nes%29_%2830776483926%29.jpg", // Placeholder image
    description:
      "The temple was created to honor the Olympians and served as an athletic venue for the Olympic Games.",
    dates: "470–456 BCE",
    source: "https://muse.jhu.edu/article/186537/pdf",
  },
  {
    id: 4,
    title: "Temple of Esna (Khnum)",
    ancientLocation: "Senat, Ancient Egypt",
    modernLocation: "Esna, Luxor, Egypt",
    location: [25.293, 32.5564], // Esna
    image:
      "https://lp-cms-production.imgix.net/2023-07/shutterstock2131993815.jpg", // Placeholder image
    description:
      'The Temple of Esna was the last Egyptian temple to be decorated with hieroglyphic texts. The temple was dedicated to an "androgynous, nameless, omnipotent creator god". The god manifested itself as both the male god Khnum/Khnum-Ra and the female deity Neith.',
    dates: "Ptolemaic Period",
    source: "https://escholarship.org/uc/item/6k78t4w9",
  },
  {
    id: 5,
    title: "Bremner-Rhind Papyrus",
    ancientLocation: "Waset, Ancient Egypt",
    modernLocation: "Thebes, Egypt",
    location: [25.7188, 32.6126], // Thebes
    image: "https://www.worldhistory.org/img/r/p/1500x1500/4817.jpg", // Placeholder image
    description:
      "This manuscript details the creation by Atum-Khepri of Shu, Tefnut, Geb, Nut, Osiris, Horus, Seth, Isis, and Nephthys through masturbation and spit. Additionally, it described the origin of mankind from Atum's tears.",
    dates: "Fourth century BCE",
    source: "https://escholarship.org/uc/item/8tf3j2qq",
  },
  {
    id: 6,
    title: "Naos of the Decades",
    ancientLocation: "Per-Sopdu, Ancient Egypt",
    modernLocation: "Saft el-Henna, Eastern Delta, Egypt",
    location: [30.5552, 31.7339], // Eastern Delta
    image:
      "https://www.historyplace.com/specials/slideshows/cleopatra/cleo4.jpg", // Placeholder image
    description:
      'The "Naos of the Decades" has a cosmogonical inscription that describes the moment of creation when Shu separated the sky from the earth in the form of his children, Nut and Geb, following the Heliopolitan tradition.',
    dates: "Fourth century BCE",
    source: "https://escholarship.org/uc/item/8tf3j2qq",
  },
  {
    id: 7,
    title: "Khons cosmogony",
    ancientLocation: "Ipet-isut, Ancient Egypt",
    modernLocation: "Temple of Khons, Precinct of Karnak, Luxor, Egypt",
    location: [25.719, 32.6577], // Luxor
    image:
      "https://www.mediastorehouse.com/p/731/temple-khonsu-karnak-luxor-egypt-20th-century-14873246.jpg.webp", // Placeholder image
    description:
      "It identified Amun as the demiurge with Ptah-Tatenen. It also depicted the Ogdoad together with a group of 12 other gods to represent the forces by which the creator accomplished making the cosmos.",
    dates: "Late Ptolemaic Period",
    source: "https://escholarship.org/uc/item/8tf3j2qq",
  },
  {
    id: 8,
    title: "Temple of Heliopolis",
    ancientLocation: "Heliopolis, Ancient Egypt",
    modernLocation: "Cairo, Egypt",
    location: [30.0478, 31.2336], // Cairo
    image:
      "https://followinghadrianphotography.com/wp-content/uploads/2020/02/48879962783_861658f6cf_5k.jpg?w=1200", // Placeholder image
    description:
      "According to Egyptian mythology, the Temple of Heliopolis of the gods was considered among the greatest spots, as it was the beginning of all creation. Sun god, Ra, was thought to preside over the earth and the heavens, and lit up the darkness with his light to create the heavens and the earth.",
    dates: "2465-2325 BCE",
    source: "https://escholarship.org/uc/item/8tf3j2qq",
  },
  {
    id: 9,
    title: "Bubastis",
    ancientLocation: "Bubastis, Ancient Egypt",
    modernLocation: "Cairo, Egypt",
    location: [30.0478, 31.2336], // Cairo
    image:
      "https://arce.org/wp-content/uploads/files-imported/2019-01/Lange-Athinodorou_Abb.%204.%20Der%20Gro%C3%83%C5%B8e%20Tempel%20der%20Bastet.JPG", // Placeholder image
    description: "Bubastis was a major cult center dedicated to Bastet, the feline goddess of home, fertility, and protection. Known for its grand temple and cat festivals, it drew pilgrims from across Egypt.",
    dates: "NA",
    source:
      "https://arce.org/resource/goddess-bastet-and-cult-feline-deities-nile-delta/",
  },
  {
    id: 10,
    title: "Oracle of Delphi",
    ancientLocation: "Pytho, Ancient Greece",
    modernLocation: "Mount Parnassus, Delphi, Greece",
    location: [38.4824, 22.501], // Delphi
    image:
      "https://i0.wp.com/www.roger-pearse.com/weblog/wp-content/uploads/2018/09/Delphi-Athenas-Dome-2a.jpg?ssl=1", // Placeholder image
    description:
      "The oracle of Delphi was an institution that commanded huge respect across the ancient Mediterranean world for roughly 1,000 years, with individuals, kings, and Roman emperors coming to consult the oracle.",
    dates: "Late Ptolemaic Period",
    source: "https://muse.jhu.edu/article/758632",
  },
  {
    id: 11,
    title: "Mount Olympus",
    ancientLocation: "Unknown, Ancient Greece",
    modernLocation: "Mount Olympus, Ólympos, Greece",
    location: [40.0857, 22.3589], // Mount Olympus
    image:
      "https://www.ancient-origins.net/sites/default/files/field/image/Mount-Olympus.jpg", // Placeholder image
    description:
      "Mount Olympus was regarded as the abode of the gods and the site of the throne of Zeus. In Homer's Odyssey, the peak never has storms, and it basks in cloudless ether.",
    dates: "No date",
    source: "https://www.britannica.com/place/Mount-Olympus-mountain-Greece",
  },
  {
    id: 12,
    title: "Gates to the Underworld",
    ancientLocation: "Unknown, Ancient Greece",
    modernLocation: "Epirus, Greece",
    location: [39.7444, 20.9794], // Epirus
    image:
      "https://corfuoutdoor.com/web-assets/uploads/2021/02/acheron-river-outdoor-activities-03.jpg", // Placeholder image
    description:
      "During the 10-year Titanomachy, where Titans fought the Olympians for control of the universe, the Titans maintained their strength by drinking from the Acheron River. Angered by this, Zeus cursed the river. Now, the Acheron River is believed to be one of the five mythical waterways that, in Greek mythology, are said to lead into the underworld.",
    dates: "8th Century BCE (first described by Greek poet Homer)",
    source:
      "https://www.nationalgeographic.com/travel/article/greece-river-to-underworld-now-lures-adventure-travelers",
  },
  {
    id: 13,
    title: "Mount Helicon",
    ancientLocation: "Unknown, Ancient Greece",
    modernLocation: "Thespiai, Boeotia, Greece",
    location: [38.3307, 23.2396], // Boeotia
    image: "https://live.staticflickr.com/4103/5058739389_fbcd8ab17d_b.jpg", // Placeholder image
    description:
      "This mountain was home to the muses and where Hesiod also resided.",
    dates: "N/A",
    source: "https://www.britannica.com/place/Mount-Helicon",
  },
  {
    id: 14,
    title: "Cave of Zas",
    ancientLocation: "Mount Drios, Ancient Greece",
    modernLocation: "Mount Zas, Naxos, Greece",
    location: [37.0527, 25.3763], // Naxos
    image:
      "https://www.greeka.com/seedo/photos/1027/naxos-cave-of-zas-top-1-1280.jpg", // Placeholder image
    description:
      "This mountain was believed to be the location of the cave in which Zeus was raised while hiding from his father, Kronos.",
    dates: "N/A",
    source: "https://topostext.org/place/373253LDri",
  },
  {
    id: 15,
    title: "Caves of Hercules",
    ancientLocation: "NA, Ancient Rome",
    modernLocation: "Tanger, Morocco",
    location: [35.7595, -5.834], // Tanger
    image:
      "https://www.story-rabat.com/wp-content/uploads/2025/04/golden-passage-leading-to-the-ocean-1170x550.jpg", // Placeholder image
    description:
      "According to the myth, Hercules (adapted from the Greek Heracles) slept here on his way to steal three golden apples from the Garden of the Hesperides.",
    dates: "N/A",
    source: "https://topostext.org/place/373253LDri",
  },
  {
    id: 16,
    title: "Garden of the Hesperides",
    ancientLocation: "Lixus, Ancient Rome",
    modernLocation: "Larache, Morocco",
    location: [35.1928, -6.1563], // Larache
    image:
      "https://i0.wp.com/mythcrafts.com/wp-content/uploads/2019/08/the_garden_of_hesperides_by_ricciardo_meacci.jpg?resize=655%2C400&ssl=1", // Placeholder image
    description:
      'The garden was where Hercules had to steal the golden apples which were believed to confer immortality (the 11th of the "12 Labors of Hercules")',
    dates: "N/A",
    source: "https://www.atlasobscura.com/places/caves-of-hercules",
  },
  {
    id: 17,
    title: "Troy",
    ancientLocation: "Troy, Ancient Greece",
    modernLocation: "Hisarlık, Turkey",
    location: [39.9571, 26.2386], // Hisarlık
    image:
      "https://www.britishmuseum.org/sites/default/files/styles/uncropped_large/public/2022-07/Achilles-amphora-1280x1182.jpg?itok=9OnEzaBo", // Placeholder image
    description:
      "The location of the epic Trojan War, where the mighty city of Troy was besieged for 10 years by the Greeks, who sailed across the Aegean Sea to take revenge for a grave insult – the abduction of a woman.",
    dates: "NA",
    source: "https://www.britishmuseum.org/blog/myth-trojan-war",
  },
  {
    id: 18,
    title: "Cave of Zeus",
    ancientLocation: "NA, Ancient Greece",
    modernLocation: "Kuşadası, Turkey",
    location: [37.8598, 27.2622], // Kuşadası
    image:
      "https://img.atlasobscura.com/3yPb1GAilBDN95ckngEuQg7rwyurScIZZ8jbWZyvjA8/rt:fit/h:400/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy9kM2Vm/MjAzYy1kN2E4LTQ1/OWMtYmU5OS1jOWNi/NDJlNjAwMDAzMzFm/NDgyYTU1ODNjZDk1/NGRfUDFCTUc2Lmpw/Zw.webp", // Placeholder image
    description:
      "According to myths, Zeus would take refuge in this cave whenever he angered his brother Poseidon, ruler of the sea. The cave helped Zeus escape the big storms that Poseidon would conjure up.",
    dates: "NA",
    source: "https://www.atlasobscura.com/places/cave-of-zeus",
  },
  {
    id: 19,
    title: "Plutonian Cave of Eleusis",
    ancientLocation: "NA, Ancient Greece",
    modernLocation: "Elefsina, Greece",
    location: [38.042, 23.542], // Elefsina
    image:
      "https://www.heritagedaily.com/wp-content/uploads/2021/08/15055792273-bdbca2569b-k-scaled.jpg", // Placeholder image
    description:
      "According to myths, this cavern holds the passage that Persephone– Demeter's daughter, whom Hades kidnapped–used to travel to and from the underworld. The cave is described as having odd vegetation growing out of its crevices, creating unusual wind patterns, and dark indentations and odd cracks along the walls in the rear.",
    dates: "NA",
    source:
      "https://www.efada.gr/en-us/Archaeological-Sites-Monuments/Eleusis/Archaeological-Site-of-Eleusis/ploutonion",
  },
  {
    id: 20,
    title: "Tiber River",
    ancientLocation: "Father Tiber, Ancient Rome",
    modernLocation: "Tiber River, Italy",
    location: [41.8919, 12.4777], // Tiber River, Rome
    image: "https://rome.us/wp-content/uploads/BridgeinRomeoverTiber.jpg", // Placeholder image
    description:
      "The founding myth of Rome states that the city of Rome was founded by twin brothers Romulus and Remus. They were the sons of the god Mars and a vestal virgin, Rhea Silvia. The king of Alba Longa, brother of their grandfather, fearing that the boys would one day overthrow him, ordered them to be thrown into the Tiber River. They were rescued by a she-wolf. Later on, they argued about where to establish their city. Romulus was angered and killed his brother Remus, which is where we get the name Rome.",
    dates: "753 BC",
    source:
      "https://www.google.com/search?q=founding+myth+of+rome&rlz=1C5CHFA_enUS919US919&oq=founding+myth+of+rome&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyCAgBEAAYFhgeMggIAhAAGBYYHjIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yCAgHEAAYFhgeMggICBAAGBYYHjIICAkQABgWGB7SAQg0MjUyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#:~:text=Romulus%20and%20Remus,htdocs%20%E2%80%BA%20ROME%20%E2%80%BA%20romulus",
  },
  {
    id: 21,
    title: "Temple of Vesta",
    ancientLocation: "Urbs Roma, Ancient Rome",
    modernLocation: "Rome, Italy",
    location: [41.8892, 12.4876], // Roman Forum
    image:
      "https://www.historyhit.com/app/uploads/2021/06/Temple-of-Vesta-750px.jpg", // Placeholder image
    description:
      "Within the Roman Forum, the Temple of Vesta housed the Sacred Flame of Vesta. The Sacred Flame of Vesta was a flame that was kept burning by the Vestal Virgins. They were a group of priestesses who were chosen as children and served for thirty years. The flame represented the hearth of the goddess Vesta, patron of the home and family.",
    dates: "Early 1st century BC",
    source:
      "https://www.google.com/search?q=temple+of+vestal&sca_esv=e76af58c9f706ded&rlz=1C5CHFA_enUS919US919&ei=Hwv9Z5DaM8Gt5NoP6LSkwAY&ved=0ahUKEwjQ5fqXzteMAxXBFlkFHWgaCWgQ4dUDCBA&uact=5&oq=temple+of+vestal&gs_lp=Egxnd3Mtd2l6LXNlcnAiEHRlbXBsZSBvZiB2ZXN0YWwyERAuGIAEGJECGMcBGIoFGK8BMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIEMgUQABjvBUi7H1CtBFifHnABeAGQAQCYAaoBoAGaEKoBBDIuMTS4AQPIAQD4AQGYAhGgAucQwgIKEAAYsAMY1gQYR8ICCxAuGIAEGJECGIoFwgILEAAYgAQYkQIYigXCAgoQABiABBhDGIoFwgIKEC4YgAQYQxiKBcICDhAuGIAEGLEDGIMBGIoFwgILEAAYgAQYsQMYgwHCAhAQLhiABBhDGMcBGIoFGK8BwgIQEAAYgAQYsQMYQxjJAxiKBcICCxAAGIAEGJIDGIoFwgIOEC4YgAQYxwEYjgUYrwHCAhMQLhiABBixAxjRAxhDGMcBGIoFwgILEC4YgAQYxwEYrwHCAgUQABiABMICCBAuGIAEGLEDwgIOEC4YgAQYsQMYxwEYrwHCAgUQLhiABMICBxAAGIAEGAqYAwCIBgGQBgiSBwQxLjE2oAew1AKyBwQwLjE2uAfaEA&sclient=gws-wiz-serp#:~:text=great%20to%20see.%22-,Temple%20of%20Vesta,https%3A//penelope.uchicago.edu%20%E2%80%BA%20romanforum%20%E2%80%BA%20vesta,-This%20ancient%20temple",
  },
  {
    id: 22,
    title: "Pantheon",
    ancientLocation: "Urbs Roma, Ancient Rome",
    modernLocation: "Rome, Italy",
    location: [41.8986, 12.4768], // Pantheon
    image: "https://openaccess-cdn.clevelandart.org/1974.39/1974.39_web.jpg", // Placeholder image
    description:
      "Built by Emperor Hadrian to serve as the temple of all gods. One myth states that the original Pantheon was built on the spot where Romulus, the mythical founder of Rome, ascended to heaven after his death.",
    dates: "125-128 AD",
    source:
      "https://www.google.com/search?q=the+original+Pantheon+was+built+on+the+spot+where+Romulus%2C+the+mythical+founder+of+Rome%2C+ascended+to+heaven+after+his+death&sca_esv=e76af58c9f706ded&rlz=1C5CHFA_enUS919US919&biw=868&bih=788&ei=zAz9Z7f5KoLV5NoP7cr3sAY&ved=0ahUKEwi3j7rkz9eMAxWCKlkFHW3lHWYQ4dUDCBA&uact=5&oq=the+original+Pantheon+was+built+on+the+spot+where+Romulus%2C+the+mythical+founder+of+Rome%2C+ascended+to+heaven+after+his+death&gs_lp=Egxnd3Mtd2l6LXNlcnAie3RoZSBvcmlnaW5hbCBQYW50aGVvbiB3YXMgYnVpbHQgb24gdGhlIHNwb3Qgd2hlcmUgUm9tdWx1cywgdGhlIG15dGhpY2FsIGZvdW5kZXIgb2YgUm9tZSwgYXNjZW5kZWQgdG8gaGVhdmVuIGFmdGVyIGhpcyBkZWF0aEgAUABYAHAAeAGQAQCYAQCgAQCqAQC4AQPIAQD4AQL4AQGYAgCgAgCYAwCSBwCgBwCyBwC4BwA&sclient=gws-wiz-serp#:~:text=in%2027%20BC.-,Pantheon%2C%20an%20architectural%20miracle%20%2D%20Eitch%20Borromini,https%3A//www.eitchborromini.com%20%E2%80%BA%20Pantheon%2Dan%2Darchitect...,-About%20featured%20snippets",
  },
  {
    id: 23,
    title: "Trevi Fountain",
    ancientLocation: "Urbs Roma, Ancient Rome",
    modernLocation: "Rome, Italy",
    location: [41.9009, 12.4833], // Trevi Fountain
    image:
      "https://static.wixstatic.com/media/e41b5c_5f12abc2ed614742ac47f306df5411ad~mv2.jpg/v1/fill/w_2500,h_1666,al_c/e41b5c_5f12abc2ed614742ac47f306df5411ad~mv2.jpg", // Placeholder image
    description:
      "According to the myth, the fountain was built on the place where a young girl revealed the source of a water spring to Roman soldiers in the 1st century BC. It was believed that this spring was blessed by the gods, and the girl was their messenger. The soldiers built the fountain to honor the girl and the water.",
    dates: "18th Century",
    source:
      "https://www.google.com/search?q=trevi+fountain+maiden+myth&sca_esv=d111ac6bd73ca852&rlz=1C5CHFA_enUS919US919&biw=868&bih=788&ei=OA79Z4-VIYSg5NoPuNWQ2Q8&ved=0ahUKEwiPkfmR0deMAxUEEFkFHbgqJPsQ4dUDCBA&uact=5&oq=trevi+fountain+maiden+myth&gs_lp=Egxnd3Mtd2l6LXNlcnAiGnRyZXZpIGZvdW50YWluIG1haWRlbiBteXRoMgUQIRigATIFECEYoAEyBRAhGKABMgUQIRigATIFECEYoAEyBRAhGJ8FSLAGUAxY0wRwAHgBkAEAmAGiA6ABywmqAQcwLjMuNC0yuAEDyAEA-AEBmAIFoALiCcICBRAhGKsCmAMAkgcHMC4zLjQtMqAHwxuyBwcwLjMuNC0yuAfiCQ&sclient=gws-wiz-serp#:~:text=View%20Article%3A%20Aqueducts,%E2%80%BA%20floods%20%E2%80%BA%20TheTreviFountain",
  },
  {
    id: 24,
    title: "Temple of Jupiter Optimus Maximus",
    ancientLocation: "Urbs Roma, Ancient Rome",
    modernLocation: "Capitoline Hill, Rome, Italy",
    location: [41.8933, 12.4829], // Capitoline Hill
    image: "https://www.romeandart.eu/images/news/giove-4.jpg", // Placeholder image
    description:
      "Jupiter Optimus Maximus was the king of the Roman gods. Logically, he was considered the most powerful of all the gods. This temple was the site where emperors were inaugurated with Jupiter Optimus Maximus as the witness. Jupiter was born on Capitoline Hill, and because of this myth, Capitoline Hill (one of 7 Rome's hills) is considered to be the most sacred.",
    dates: "509 BCE",
    source:
      "https://www.google.com/search?q=capitoline+hill+myth&sca_esv=d111ac6bd73ca852&rlz=1C5CHFA_enUS919US919&ei=4g79Z6HzCqvl5NoPwN3VUQ&ved=0ahUKEwih7Ori0deMAxWrMlkFHcBuNQoQ4dUDCBA&uact=5&oq=capitoline+hill+myth&gs_lp=Egxnd3Mtd2l6LXNlcnAiFGNhcGl0b2xpbmUgaGlsbCBteXRoMgYQABgWGB4yBhAAGBYYHjILEAAYgAQYhgMYigUyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYogQYiQUyCBAAGIAEGKIEMggQABiABBiiBEiwDFCoBVjMCnACeAGQAQCYAZEBoAGFBKoBAzMuMrgBA8gBAPgBAZgCB6ACmgTCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICBRAAGIAEwgILEC4YgAQYxwEYrwHCAgoQABiABBhDGIoFwgIFEC4YgASYAwCIBgGQBguSBwM1LjKgB7AqsgcDMy4yuAeSBA&sclient=gws-wiz-serp#:~:text=Capitoline%20Hill%20(Campidoglio,sites%20%E2%80%BA%20capitoline%2Dhill",
  },
];

const map = L.map("map").setView([34.0, 15.0], 5);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// const cardContainer = document.getElementById("card-container");
const markers = [];

let ColorIcon = L.Icon.extend({
  options: {
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
    iconSize: [25, 41],
    shadowSize: [41, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  },
});

let greenIcon = new ColorIcon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
});

let redIcon = new ColorIcon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
});

// Get references to the category containers
const egyptContainer = document.getElementById("egypt-container");
const greeceContainer = document.getElementById("greece-container");
const romeContainer = document.getElementById("rome-container");

// Iterate through artifacts and group them by category
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
  card.className =
    "border p-4 rounded-lg shadow hover:bg-gray-50 cursor-pointer";
  card.innerHTML = `
      <h2 class="text-lg font-semibold">${artifact.title}</h2>
      <p class="text-sm">${artifact.description}</p>
    `;
  card.addEventListener("click", () => {
    map.setView(artifact.location, 4, { animate: true });
    setTimeout(() => {
      marker.openPopup();
      // Adjust the map so the popup is fully visible (shift up)
      map.panBy([0, -200], { animate: true });
    }, 500);
  });

  // Append the card to the appropriate category container
  if (
    artifact.ancientLocation.includes("Egypt") ||
    artifact.modernLocation.includes("Egypt")
  ) {
    egyptContainer.appendChild(card);
  } else if (
    artifact.ancientLocation.includes("Greece") ||
    artifact.modernLocation.includes("Greece")
  ) {
    greeceContainer.appendChild(card);
  } else if (
    artifact.ancientLocation.includes("Rome") ||
    artifact.modernLocation.includes("Rome")
  ) {
    romeContainer.appendChild(card);
  }

});
