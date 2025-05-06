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
    description:
      "Bubastis was a major cult center dedicated to Bastet, the feline goddess of home, fertility, and protection. Known for its grand temple and cat festivals, it drew pilgrims from across Egypt.",
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
    image: "https://www.italiandualcitizenship.net/wp-content/uploads/2019/03/History-of-the-Pantheon-Italy.jpg", // Placeholder image
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

const temples = [
  {
    id: 1,
    title: "Parthenon",
    ancientLocation: "Athens, Acropolis",
    modernLocation: "Athens, Greece",
    location: [37.9715, 23.7267],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/da/The_Parthenon_in_Athens.jpg",
    description:
      "Dedicated to Athena Parthenos, the patron goddess of Athens. The Parthenon symbolized civic pride and divine favor, merging art, architecture, and religious devotion during the height of Athenian power.",
    dates: "Constructed 447–432 BCE",
    source: "https://assets.cambridge.org/97805218/20936/frontmatter/9780521820936_frontmatter.pdf",
  },
  {
    id: 2,
    title: "Pantheon",
    ancientLocation: "Campus Martius",
    modernLocation: "Rome, Italy",
    location: [41.8986, 12.4768],
    image:
      "https://www.italiandualcitizenship.net/wp-content/uploads/2019/03/History-of-the-Pantheon-Italy.jpg",
    description:
      "Originally built to honor all Roman gods, the Pantheon was later converted to a Christian church. Its massive dome and oculus remain engineering marvels, reflecting Rome’s religious plurality and architectural mastery.",
    dates: "Completed c. 126 CE under Hadrian",
    source: "https://www.hup.harvard.edu/books/9780674010192",
  },
  {
    id: 3,
    title: "Fifth Dynasty Sun Temple of Niuserre",
    ancientLocation: "Abu Ghurab",
    modernLocation: "Giza Governorate, Egypt",
    location: [29.9214, 31.2096],
    image:
      "https://www.suntemplesproject.org/wp-content/uploads/2022/04/3D-reconstruction-2-1024x486.jpg",
    description:
      "A solar temple dedicated to the sun god Ra by Pharaoh Niuserre. Part of Egypt’s Fifth Dynasty emphasis on solar cult worship, it featured an obelisk and altar aligned with the sun’s movement.",
    dates: "Reign of Niuserre (c. 2445–2421 BCE)",
    source:
      "https://archive.org/details/the-complete-temples-of-ancient-egypt_202407",
  },
];

const gods = [
  {
    id: 1,
    title: "Jupiter, King of Gods",
    ancientLocation: "Rome, Roman Empire",
    modernLocation: "The British Museum, London, UK",
    location: [41.8892, 12.4876], // British Museum coordinates
    image: "https://media.britishmuseum.org/media/Repository/Documents/2014_10/13_18/02bdbefc_5bc1_4ea0_a158_a3c3012dea9e/mid_00822434_001.jpg",
    description: "King of Roman gods, equivalent to Greek Zeus, depicted as a powerful ruler with authority over sky and thunder.",
    dates: "1613",
    source: "https://www.britishmuseum.org/collection/object/P_1868-0612-1376"
  },
  {
    id: 2,
    title: "Bronze Statuette of Jupiter",
    ancientLocation: "Rome, Roman Empire",
    modernLocation: "The Metropolitan Museum of Art, New York, USA",
    location: [41.8892, 12.4876], // Met Museum coordinates
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/251215/534075/main-image",
    description: "Roman supreme deity, ruler of the gods, depicted as a mature bearded figure often wielding a thunderbolt.",
    dates: "late 1st century CE",
    source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/251215/534075/main-image"
  },
  {
    id: 3,
    title: "Juno and the Peacock",
    ancientLocation: "Rome, Roman Empire",
    modernLocation: "The Metropolitan Museum of Art, New York, USA",
    location: [41.8892, 12.4876], // Met Museum coordinates
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/207645/1580191/main-image",
    description: "Queen of Roman gods, wife of Jupiter and goddess of marriage and childbirth, depicted with regal attributes.",
    dates: "late 16th century",
    source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/207645/1580191/main-image"
  },
  {
    id: 4,
    title: "Juno, Queen of all Goddesses",
    ancientLocation: "Rome, Roman Empire",
    modernLocation: "The Metropolitan Museum of Art, New York, USA",
    location: [41.8892, 12.4876], // Met Museum coordinates
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/715006/1672299/main-image",
    description: "Roman goddess of marriage and women, equivalent to Greek Hera, depicted as a matronly figure with dignified bearing.",
    dates: "1889",
    source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/715006/1672299/main-image"
  },
  {
    id: 5,
    title: "Standing Cup of Neptune",
    ancientLocation: "Rome, Roman Empire",
    modernLocation: "The British Museum, London, UK",
    location: [41.8892, 12.4876], // British Museum coordinates
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/461184/918110/main-image",
    description: "Roman god of the sea, equivalent to Greek Poseidon, depicted as a powerful bearded figure wielding a trident.",
    dates: "1594",
    source: "https://www.britishmuseum.org/collection/object/H_WB-115"
  },
  {
    id: 6,
    title: "Neptune by Michel Anguier",
    ancientLocation: "Rome, Roman Empire",
    modernLocation: "The Metropolitan Museum of Art, New York, USA",
    location: [41.8892, 12.4876], // Met Museum coordinates
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/192731/394265/main-image",
    description: "God of freshwater and the sea in Roman mythology, typically shown as a muscular figure with sea attributes.",
    dates: "18-19th century",
    source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/192731/394265/main-image"
  },
  {
    id: 7,
    title: "Copper Alloy Figure of Mars",
    ancientLocation: "Rome, Roman Empire",
    modernLocation: "The British Museum, London, UK",
    location: [41.8892, 12.4876], // British Museum coordinates
    image: "https://media.britishmuseum.org/media/Repository/Documents/2014_10/1_6/03e382db_fe27_4e6b_94c6_a3b7006e9590/mid_00032982_001.jpg",
    description: "Roman god of war, equivalent to Greek Ares, depicted as an armored warrior figure with weapons.",
    dates: "2nd century AD; Romano-British era",
    source: "https://www.britishmuseum.org/collection/object/H_1871-0601-1"
  },
  {
    id: 8,
    title: "Marble Relief Fragment with the Head of Mars",
    ancientLocation: "Rome, Roman Empire",
    modernLocation: "The Metropolitan Museum of Art, New York, USA",
    location: [41.8892, 12.4876], // Met Museum coordinates
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/250709/533111/main-image",
    description: "Roman war deity, second only to Jupiter in importance, portrayed as a helmeted warrior figure.",
    dates: "early 3rd century CE",
    source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/250709/533111/main-image"
  },
  {
    id: 9,
    title: "Bronze Statuette of Minerva",
    ancientLocation: "Rome, Roman Empire",
    modernLocation: "The Metropolitan Museum of Art, New York, USA",
    location: [41.8892, 12.4876], // Met Museum coordinates
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/250784/1776616/main-image",
    description: "Roman goddess of wisdom and strategic warfare, equivalent to Greek Athena, depicted with helmet, spear and owl.",
    dates: "2nd century CE",
    source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/250784/1776616/main-image"
  },
  {
    id: 10,
    title: "Minerva by Benvenuto Cellini",
    ancientLocation: "Rome, Roman Empire",
    modernLocation: "The Metropolitan Museum of Art, New York, USA",
    location: [41.8892, 12.4876], // Met Museum coordinates
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/198746/1590708/main-image",
    description: "Roman goddess of wisdom, healing, and strategy, typically shown wearing armor with symbols of knowledge.",
    dates: "second half 16th century",
    source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/198746/1590708/main-image"
  },
  {
    id: 11,
    title: "Cérès by Guillaume Coustou",
    ancientLocation: "Rome, Roman Empire",
    modernLocation: "The Louvre, Paris, France",
    location: [41.8892, 12.4876], // Louvre coordinates
    image: "assets/0001130532_OG.JPG",
    description: "Roman goddess of agriculture and grain crops, equivalent to Greek Demeter, depicted with wheat and harvest symbols.",
    dates: "1726 / 1736",
    source: "https://collections.louvre.fr/en/ark:/53355/cl010092049"
  },
  {
    id: 12,
    title: "Bronze Statue of Ceres by Michel Anguier",
    ancientLocation: "Rome, Roman Empire",
    modernLocation: "The Metropolitan Museum of Art, New York, USA",
    location: [41.8892, 12.4876], // Met Museum coordinates
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/826290/1987118/main-image",
    description: "Roman goddess of the harvest and maternal relationships, portrayed with agricultural symbols and vegetation.",
    dates: "1700 after a 1652 model",
    source: "https://www.metmuseum.org/art/collection/search/826290"
  },
  {
    id: 13,
    title: "Apollo by Adriaen de Vries",
    ancientLocation: "Greece, Ancient Greece",
    modernLocation: "The Metropolitan Museum of Art, New York, USA",
    location: [37.9838, 23.7275], // Met Museum coordinates
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/199016/480587/main-image",
    description: "God of music, arts, prophecy and healing in both Greek and Roman mythology, depicted as a youthful, handsome figure.",
    dates: "ca. 1594–98",
    source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/199016/480587/main-image"
  },
  {
    id: 14,
    title: "Apollo by Hendrick Goltzius",
    ancientLocation: "Greece, Ancient Greece",
    modernLocation: "The Metropolitan Museum of Art, New York, USA",
    location: [37.9838, 23.7275], // Met Museum coordinates
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/340036/771665/main-image",
    description: "Greek and Roman god of light, music and prophecy, typically portrayed as an idealized young man with lyre or bow.",
    dates: "1588",
    source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/340036/771665/main-image"
  },
  {
    id: 15,
    title: "Diana by Karl Theodore Bitter",
    ancientLocation: "Rome, Roman Empire",
    modernLocation: "The Metropolitan Museum of Art, New York, USA",
    location: [41.8892, 12.4876], // Met Museum coordinates
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/10171/24059/main-image",
    description: "Roman goddess of the hunt, moon, and wilderness, equivalent to Greek Artemis, depicted as a huntress with bow and arrows.",
    dates: "1910",
    source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/10171/24059/main-image"
  },
  {
    id: 16,
    title: "Diana by Augustus Saint-Gaudens",
    ancientLocation: "Rome, Roman Empire",
    modernLocation: "The Metropolitan Museum of Art, New York, USA",
    location: [41.8892, 12.4876], // Met Museum coordinates
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/11998/40786/main-image",
    description: "Roman goddess of the hunt and moon, portrayed as a young woman with hunting attributes and often accompanied by deer.",
    dates: "1892–93, cast 1928",
    source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/11998/40786/main-image"
  },
  {
    id: 17,
    title: "Marble Relief of a Woman as Venus",
    ancientLocation: "Rome, Roman Empire",
    modernLocation: "The British Museum, London, UK",
    location: [41.8892, 12.4876], // British Museum coordinates
    image: "https://media.britishmuseum.org/media/Repository/Documents/2014_10/5_20/3b5c8a12_0cab_407f_a7c3_a3bb0159be3a/mid_00376350_001.jpg",
    description: "Roman goddess of love, beauty and desire, equivalent to Greek Aphrodite, depicted as the epitome of female beauty.",
    dates: "100–120 AD",
    source: "https://www.britishmuseum.org/collection/object/G_1948-0423-1"
  },
  {
    id: 18,
    title: "Venus and Cupid by Lorenzo Lotto",
    ancientLocation: "Rome, Roman Empire",
    modernLocation: "The Metropolitan Museum of Art, New York, USA",
    location: [41.8892, 12.4876], // Met Museum coordinates
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436918/2169880/main-image",
    description: "Roman goddess of love and beauty, typically portrayed as an idealized nude or partially clothed female figure.",
    dates: "1520s",
    source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436918/2169880/main-image"
  },
  {
    id: 19,
    title: "Saucer Bowl with Vulcan",
    ancientLocation: "Rome, Roman Empire",
    modernLocation: "The British Museum, London, UK",
    location: [41.8892, 12.4876], // British Museum coordinates
    image: "https://media.britishmuseum.org/media/Repository/Documents/2014_9/30_15/b8312e4d_91a4_4b95_9d97_a3b601053216/mid_00020376_001.jpg",
    description: "Roman god of fire and metalworking, equivalent to Greek Hephaestus, depicted as a blacksmith with hammer and forge.",
    dates: "1539",
    source: "https://www.britishmuseum.org/collection/object/H_1878-1230-373"
  },
  {
    id: 20,
    title: "Bronze Statue of Vulcan",
    ancientLocation: "Rome, Roman Empire",
    modernLocation: "The Metropolitan Museum of Art, New York, USA",
    location: [41.8892, 12.4876], // Met Museum coordinates
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/206781/1580185/main-image",
    description: "Roman god of fire and craftsmanship, often portrayed as a bearded smith with tools and sometimes with a lame leg.",
    dates: "16th century",
    source: "https://www.metmuseum.org/art/collection/search/206781"
  },
  {
    id: 21,
    title: "The Farnese Hermes",
    ancientLocation: "Rome, Roman Empire",
    modernLocation: "The British Museum, London, UK",
    location: [41.8892, 12.4876], // British Museum coordinates
    image: "https://media.britishmuseum.org/media/Repository/Documents/2014_10/10_11/318fe5f1_ca97_4d3f_867f_a3c000b9ddb7/mid_00548110_001.jpg",
    description: "Roman messenger god and deity of commerce, equivalent to Greek Hermes, depicted with winged hat and sandals.",
    dates: "1st century AD",
    source: "https://www.britishmuseum.org/collection/object/G_1864-1021-1"
  },
  {
    id: 22,
    title: "Statuette of Mercury",
    ancientLocation: "Rome, Roman Empire",
    modernLocation: "The Metropolitan Museum of Art, New York, USA",
    location: [41.8892, 12.4876], // Met Museum coordinates
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/899859/2256072/main-image",
    description: "Roman god of travelers and commerce, portrayed as a youthful, athletic figure with winged attributes.",
    dates: "c. 2nd Century CE",
    source: "https://www.metmuseum.org/art/collection/search/899859"
  },
  {
    id: 23,
    title: "Wall Painting of Bacchus",
    ancientLocation: "Rome, Roman Empire",
    modernLocation: "The British Museum, London, UK",
    location: [41.8892, 12.4876], // British Museum coordinates
    image: "https://media.britishmuseum.org/media/Repository/Documents/2014_10/5_20/a9adf4e7_db9e_442a_9333_a3bb0159ab45/mid_00376343_001.jpg",
    description: "Roman god of wine and revelry, equivalent to Greek Dionysus, depicted with grape vines and often in an ecstatic state.",
    dates: "circa 30 BC",
    source: "https://www.britishmuseum.org/collection/object/G_1899-0215-1"
  },
  {
    id: 24,
    title: "Hope Dionysos Statue",
    ancientLocation: "Rome, Roman Empire",
    modernLocation: "The Metropolitan Museum of Art, New York, USA",
    location: [41.8892, 12.4876], // Met Museum coordinates
    image: "https://www.metmuseum.org/art/collection/search/255973",
    description: "Roman god of wine and festivity, typically shown as a youthful or effeminate figure often with vine leaves and grapes.",
    dates: "7 BCE–68 CE",
    source: "https://www.metmuseum.org/art/collection/search/255973"
  },
  {
    title: "Nu",
    image: "https://media.britishmuseum.org/media/Repository/Documents/2014_10/5_21/7096bda1_ae77_47bd_88c9_a3bb015df6f6/mid_00377924_001.jpg",
    modernLocation: "The British Museum",
    description: "Nu, the primordial waters, often shown as a supporting or surrounding force.",
    dates: "18th Dynasty",
    symbols: [],
    source: "https://media.britishmuseum.org/media/Repository/Documents/2014_10/5_21/7096bda1_ae77_47bd_88c9_a3bb015df6f6/mid_00377924_001.jpg",
    ancientLocation: "Hermopolis, Egypt",
    location: [27.776, 30.8]
  },
  {
    title: "Nu",
    image: "assets/Screen Shot 2025-05-06 at 1.35.02 AM.png",
    modernLocation: "The Louvre",
    description: "Nu depicted as a winged goddess on a sarcophagus cover.",
    dates: "390 -1352 BCE",
    symbols: ["wings"],
    source: "https://collections.louvre.fr/en/ark:/53355/cl010027594",
    ancientLocation: "Hermopolis, Egypt",
    location: [27.776, 30.8]
  },
  {
    title: "Amun-Re",
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/544874/1151843/main-image",
    modernLocation: "The Metropolitan Museum of Art",
    description: "Amun-Re, king of the gods, depicted with tall crown and divine symbols.",
    dates: "ca. 945–712 B.C.",
    symbols: ["ankh", "scimitar", "crown"],
    source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/544874/1151843/main-image",
    ancientLocation: "Thebes, Egypt",
    location: [25.7, 32.6]
  },
  {
    title: "Amun-Re",
    image: "https://media.britishmuseum.org/media/Repository/Documents/2021_2/16_17/d1648152_2c1e_46e6_bc5e_acd1011f0c50/mid_obverse_ed_TIF.jpg",
    modernLocation: "The British Museum",
    description: "Throne-seated figure of Amun-Ra wearing his symbolic crown.",
    dates: "19th Dynasty",
    symbols: ["flat-topped crown"],
    source: "https://media.britishmuseum.org/media/Repository/Documents/2021_2/16_17/d1648152_2c1e_46e6_bc5e_acd1011f0c50/mid_obverse_ed_TIF.jpg",
    ancientLocation: "Thebes, Egypt",
    location: [25.7, 32.6]
  },
  {
    title: "Shu",
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/546052/1214127/main-image",
    modernLocation: "The Metropolitan Museum of Art",
    description: "Shu separating sky and earth, a key act in Egyptian cosmology.",
    dates: "332–30 B.C.",
    symbols: [],
    source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/546052/1214127/main-image",
    ancientLocation: "Heliopolis, Egypt",
    location: [30.13, 31.28]
  },
  {
    title: "Shu",
    image: "https://media.britishmuseum.org/media/Repository/Documents/2014_10/2_20/d8a74345_7014_4ced_a2ad_a3b8014ab92d/mid_00329068_001.jpg",
    modernLocation: "The British Museum",
    description: "Amulet of Shu kneeling with a sun-disk headdress.",
    dates: "26th Dynasty",
    symbols: ["sun-disk"],
    source: "https://media.britishmuseum.org/media/Repository/Documents/2014_10/2_20/d8a74345_7014_4ced_a2ad_a3b8014ab92d/mid_00329068_001.jpg",
    ancientLocation: "Heliopolis, Egypt",
    location: [30.13, 31.28]
  },
  {
    title: "Tefnut",
    image: "https://imgsrv.brooklynmuseum.org/collections/objects/CUR.05.364_wwgA-1.jpg?width=3840&quality=75",
    modernLocation: "The Brooklyn Museum",
    description: "Tefnut shown as a lioness, symbolizing moisture and power.",
    dates: "664–332 B.C.E.",
    symbols: [],
    source: "https://imgsrv.brooklynmuseum.org/collections/objects/CUR.05.364_wwgA-1.jpg?width=3840&quality=75",
    ancientLocation: "Heliopolis, Egypt",
    location: [30.13, 31.28]
  },
  {
    title: "Tefnut",
    image: "assets/Screen Shot 2025-05-06 at 1.36.22 AM.png",
    modernLocation: "The Louvre",
    description: "Stela showing Tefnut with Shu, carved in limestone.",
    dates: "32 to 30 BCE",
    symbols: [],
    source: "https://collections.louvre.fr/en/ark:/53355/cl010005998",
    ancientLocation: "Heliopolis, Egypt",
    location: [30.13, 31.28]
  },
  {
    title: "Geb",
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/555683/2050542/main-image",
    modernLocation: "The Metropolitan Museum of Art",
    description: "Object linked to Geb, the earth god, possibly a ritual whip.",
    dates: "ca. 1981–1802 B.C.",
    symbols: [],
    source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/555683/2050542/main-image",
    ancientLocation: "Heliopolis, Egypt",
    location: [30.13, 31.28]
  },
  {
    title: "Geb",
    image: "assets/0000067683_OG.JPG",
    modernLocation: "The Louvre",
    description: "Back of a stela features Geb, carved in wood.",
    dates: "730 -745 BCE",
    symbols: [],
    source: "https://collections.louvre.fr/en/ark:/53355/cl010017961",
    ancientLocation: "Heliopolis, Egypt",
    location: [30.13, 31.28]
  },
  {
    title: "Nut",
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/549265/1661385/main-image",
    modernLocation: "The Metropolitan Museum of Art",
    description: "Winged Nut pectoral, the sky goddess protecting the dead.",
    dates: "Dynasty 19",
    symbols: ["wings"],
    source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/549265/1661385/main-image",
    ancientLocation: "Thebes, Egypt",
    location: [25.7, 32.6]
  },
  {
    title: "Nut",
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/555221/2221453/main-image",
    modernLocation: "The Metropolitan Museum of Art",
    description: "Nut shown before an offering table on a limestone stela.",
    dates: "ca. 1550–1295 B.C.",
    symbols: [],
    source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/555221/2221453/main-image",
    ancientLocation: "Thebes, Egypt",
    location: [25.7, 32.6]
  },
  {
    title: "Osiris",
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/570658/1216588/main-image",
    modernLocation: "The Metropolitan Museum of Art",
    description: "Osiris as ruler of the underworld, mummiform with crook and flail.",
    dates: "664–30 B.C.",
    symbols: ["crook", "flail"],
    source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/570658/1216588/main-image",
    ancientLocation: "Abydos, Egypt",
    location: [26.186, 31.921]
  },
  {
    title: "Osiris",
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/573692/1854102/main-image",
    modernLocation: "The Metropolitan Museum of Art",
    description: "Osiris figure carved in anhydrite stone.",
    dates: "522–343 B.C.",
    symbols: [],
    source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/573692/1854102/main-image",
    ancientLocation: "Abydos, Egypt",
    location: [26.186, 31.921]
  },
  {
    title: "Isis",
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/548310/1214471/main-image",
    modernLocation: "The Metropolitan Museum of Art",
    description: "Isis nursing Horus, a symbol of rebirth and motherhood.",
    dates: "332–30 B.C.",
    symbols: ["throne headdress"],
    source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/548310/1214471/main-image",
    ancientLocation: "Philae, Egypt",
    location: [24.024, 32.884]
  },
  {
    title: "Isis",
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/551003/1221893/main-image",
    modernLocation: "The Metropolitan Museum of Art",
    description: "Isis amulet representing protection and magical power.",
    dates: "332–30 B.C.",
    symbols: [],
    source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/551003/1221893/main-image",
    ancientLocation: "Philae, Egypt",
    location: [24.024, 32.884]
  },
  {
    title: "Seth",
    image: "https://media.britishmuseum.org/media/Repository/Documents/2014_11/12_19/eb6e5ed6_db19_4784_a75b_a3e101442d9e/mid_00125833_001.jpg",
    modernLocation: "The British Museum",
    description: "Wooden amulet of Seth, god of chaos, seated with curled tail.",
    dates: "Unknown",
    symbols: [],
    source: "https://www.britishmuseum.org/collection/object/Y_EA30460",
    ancientLocation: "Ombos (Naqada), Egypt",
    location: [26.05, 32.24]
  },
  {
    title: "Zeus",
    image: "assets/SC50763.jpg",
    modernLocation: "Boston Museum of Fine Arts",
    description: "God of the Sky; Zeus from east pediment of Temple of Zeus at Olympia; Plaster.",
    dates: "Unknown, 1883 acquisition",
    symbols: ["lightning bolt", "eagle", "swan", "clouds", "bull", "oak tree"],
    source: "https://collections.mfa.org/objects/388014/zeus-from-east-pediment-temple-of-zeus-at-olympia?ctx=7a07db38-7d65-466d-8dee-afc3f88b1764&idx=0",
    ancientLocation: "Olympia, Greece",
    location: [37.638, 21.630]
  },
  {
    title: "Zeus",
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/252511/516065/main-image",
    modernLocation: "The Metropolitan Museum of Art",
    description: "Marble head of a god, probably Zeus; marble.",
    dates: "3rd or 2nd century BCE, Hellenistic Period",
    symbols: [],
    source: "https://www.metmuseum.org/art/collection/search/252511",
    ancientLocation: "Greece",
    location: [39.074, 21.824]
  },
  {
    title: "Hera",
    image: "https://media.britishmuseum.org/media/Repository/Documents/2014_11/9_19/0e79fa76_4488_4a8d_8b58_a3de0143ea09/mid_01466274_001.jpg",
    modernLocation: "The British Museum",
    description: "Queen of the gods; Gold hat jewel showing the Judgement of Paris in relief; includes Aphrodite, Eros, Athena, and Hermes.",
    dates: "1525–1575",
    symbols: ["diadem", "pomegranate", "peacock", "cow"],
    source: "https://www.britishmuseum.org/collection/object/H_WB-152",
    ancientLocation: "Argos, Greece",
    location: [37.633, 22.733]
  },
  {
    title: "Hera",
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/256598/534535/main-image",
    modernLocation: "The Metropolitan Museum of Art",
    description: "Terracotta neck-amphora jar; Obverse: Hera sending out Iris with the Nemean lion; Reverse: Herakles wrestling the Nemean lion.",
    dates: "500 BCE, Archaic Period",
    symbols: [],
    source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/256598/534535/main-image",
    ancientLocation: "Greece",
    location: [39.074, 21.824]
  },
  {
    title: "Poseidon",
    image: "assets/SC263449.jpg",
    modernLocation: "Boston Museum of Fine Arts",
    description: "God of the sea; Stater of Poseidonia with Poseidon hurling trident.",
    dates: "530–500 B.C, Archaic Period",
    symbols: ["trident", "fish", "horse"],
    source: "https://collections.mfa.org/objects/2266/stater-of-poseidonia-with-poseidon-hurling-trident?ctx=a8afd325-c7c2-4cea-974e-e9c9fe03a21c&idx=9",
    ancientLocation: "Poseidonia (Paestum), Magna Graecia, Rome",
    location: [40.421, 15.005]
  },
  {
    title: "Poseidon",
    image: "assets/SC247208.jpg",
    modernLocation: "Boston Museum of Fine Arts",
    description: "Drachm with head of Poseidon; Gold.",
    dates: "About 213–205 B.C., Hellenistic Period",
    symbols: [],
    source: "https://collections.mfa.org/objects/87067/drachm-with-head-of-poseidon?ctx=915c095e-20ec-4f73-9363-e023610041de&idx=21",
    ancientLocation: "Greece",
    location: [39.074, 21.824]
  },
  {
    title: "Ares",
    image: "assets/SC40660.jpg",
    modernLocation: "Boston Museum of Fine Arts",
    description: "God of battle and war; Oil flask depicting Nike sacrificing a bull between Ares and Aphrodite.",
    dates: "About 394–390 B.C., Classical Period",
    symbols: ["spear", "helmet", "armor", "dog", "chariot", "torch", "vulture"],
    source: "https://collections.mfa.org/objects/153774/oil-flask-squat-lekythos-depicting-nike-sacrificing-a-bull;jsessionid=1F0A3F48D0D8ECB0DE4B08155EAA4A31?ctx=8bbbdddf-ba4d-471c-9084-f2ff3a30d0b1&idx=7",
    ancientLocation: "Greece",
    location: [39.074, 21.824]
  },
  {
    title: "Ares",
    image: "assets/SC254157.jpg",
    modernLocation: "Boston Museum of Fine Arts",
    description: "1/6 stater of Mytilene with head of Ares.",
    dates: "400–350 B.C., Classical Period",
    symbols: [],
    source: "https://collections.mfa.org/objects/2137/16-stater-of-mytilene-with-head-of-ares;jsessionid=1F0A3F48D0D8ECB0DE4B08155EAA4A31?ctx=8bbbdddf-ba4d-471c-9084-f2ff3a30d0b1&idx=0",
    ancientLocation: "Mytilene, Greece",
    location: [39.107, 26.555]
  },
  {
    title: "Athena",
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/254648/1356876/main-image",
    modernLocation: "The Metropolitan Museum of Art",
    description: "Goddess of war and wisdom; Bronze statuette of Athena flying her owl.",
    dates: "460 BCE, Classical Period",
    symbols: ["owl", "olive tree", "spear", "aegis", "shield", "serpents"],
    source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/254648/1356876/main-image",
    ancientLocation: "Athens, Greece",
    location: [37.983, 23.727]
  },
  {
    title: "Athena",
    image: "https://media.britishmuseum.org/media/Repository/Documents/2014_10/11_18/4325547c_02f3_4111_80d2_a3c101329110/mid_00687711_001.jpg",
    modernLocation: "The British Museum",
    description: "Silver tetradrachm with the head of Athena on the obverse, and an owl on the reverse.",
    dates: "450–406 BC, Classical Period",
    symbols: ["owl"],
    source: "https://www.britishmuseum.org/collection/object/C_1905-0309-7",
    ancientLocation: "Athens, Greece",
    location: [37.983, 23.727]
  },
  {
    title: "Demeter",
    image: "https://media.britishmuseum.org/media/Repository/Documents/2014_10/1_6/fc15a18a_0feb_42f1_bb45_a3b7006f3b69/mid_00033201_001.jpg",
    modernLocation: "The British Museum",
    description: "Goddess of harvest, fertility, and the earth; Parian marble figure of Demeter with a torch.",
    dates: "2nd century AD",
    symbols: ["grain", "cornucopia", "bread"],
    source: "https://www.britishmuseum.org/collection/object/G_1836-1008-2",
    ancientLocation: "Greece",
    location: [39.074, 21.824]
  },
  {
    title: "Demeter",
    image: "assets/SC246912.jpg",
    modernLocation: "Boston Museum of Fine Arts",
    description: "Stater of Metapontion with head of Demeter, signed by Aristoxenos; silver mint.",
    dates: "410–330 B.C., Classical Period",
    symbols: ["grain", "cornucopia", "bread"],
    source: "https://collections.mfa.org/objects/1148/stater-of-metapontion-with-head-of-demeter-signed-by-aristo?ctx=781fc184-4609-402b-bc29-0f3131572eb1&idx=4",
    ancientLocation: "Greece",
    location: [39.074, 21.824]
  },
  {
    title: "Apollo",
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/247971/506616/main-image",
    modernLocation: "The Metropolitan Museum of Art",
    description: "God of archery, music/dance, truth, and prophecy; Bronze statuette of Apollo with bow and libation vessel.",
    dates: "ca. 500 BCE, Classical Period",
    symbols: ["lyre", "serpent", "bow and arrow", "python", "laurel wreath", "tripod", "sun"],
    source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/247971/506616/main-image",
    ancientLocation: "Greece",
    location: [39.074, 21.824]
  },
  {
    title: "Apollo",
    image: "assets/SC125471.jpg",
    modernLocation: "Boston Museum of Fine Arts",
    description: "Roundel with Apollo; musician figure with lyre and laurel wreath.",
    dates: "150–100 B.C., Hellenistic Period",
    symbols: ["laurel wreath"],
    source: "https://collections.mfa.org/objects/198/roundel-with-apollo?ctx=1c78b6f9-8de1-4e4b-8967-4cc9fe78e816&idx=8",
    ancientLocation: "Greece",
    location: [39.074, 21.824]
  },
  {
    title: "Artemis",
    image: "https://media.britishmuseum.org/media/Repository/Documents/2014_10/5_21/9c1447a8_ccd5_4390_815e_a3bb015f31cc/mid_00378153_001.jpg",
    modernLocation: "The British Museum",
    description: "Goddess of wild animals, the hunt, vegetation, chastity and childbirth; Bronze figure of Artemis.",
    dates: "2nd–1st century BC, Hellenistic period",
    symbols: ["bow and arrow", "deer", "quiver", "moon"],
    source: "https://www.britishmuseum.org/collection/object/G_1951-0606-14",
    ancientLocation: "Greece",
    location: [39.074, 21.824]
  },
  {
    title: "Artemis",
    image: "assets/Screen Shot 2025-05-06 at 1.56.54 AM.png",
    modernLocation: "The Metropolitan Museum of Art",
    description: "Bronze statue of Artemis and a Deer wearing hunting attire.",
    dates: "1st century BCE–1st century CE, Late Hellenistic or Early Imperial Era",
    symbols: ["deer"],
    source: "https://www.metmuseum.org/art/collection/search/258081",
    ancientLocation: "Greece",
    location: [39.074, 21.824]
  },
  {
    title: "Aphrodite",
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/255409/2022253/main-image",
    modernLocation: "The Metropolitan Museum of Art",
    description: "Bronze statuette of Aphrodite with silver eyes, holding the apple from the Judgment of Paris.",
    dates: "3rd–1st century BCE, Hellenistic Period",
    symbols: ["pomegranate", "golden apple", "dove", "swan", "scallop shell"],
    source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/255409/2022253/main-image",
    ancientLocation: "Greece",
    location: [39.074, 21.824]
  },
  {
    title: "Aphrodite",
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/257642/536522/main-image",
    modernLocation: "The Metropolitan Museum of Art",
    description: "Marble statue of Aphrodite.",
    dates: "2nd century BCE, Hellenistic Period",
    symbols: ["pomegranate", "golden apple", "dove", "swan", "scallop shell"],
    source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/257642/536522/main-image",
    ancientLocation: "Greece",
    location: [39.074, 21.824]
  },
  {
    title: "Hephaestus",
    image: "assets/SC346599.jpg",
    modernLocation: "Boston Museum of Fine Arts",
    description: "Etching of Hephaestus from 'The Twelve Olympian Gods with Signs of the Zodiac' by Johann Georg Bergmüller.",
    dates: "Unknown",
    symbols: ["hammer", "anvil", "fire", "donkey", "volcano"],
    source: "https://collections.mfa.org/objects/632005/the-twelve-olympian-gods-with-signs-of-the-zodiac-hephaest?ctx=04358bf5-1175-4da0-b8c7-0da135ca24ad&idx=0",
    ancientLocation: "Greece",
    location: [39.074, 21.824]
  },
  {
    title: "Hephaestus",
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/254859/1905229/main-image",
    modernLocation: "The Metropolitan Museum of Art",
    description: "Terracotta amphora jar with black-figure style associated with Hephaestus.",
    dates: "ca. 540 BCE, Archaic Period",
    symbols: ["hammer", "anvil", "fire", "donkey", "volcano"],
    source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/254859/1905229/main-image",
    ancientLocation: "Greece",
    location: [39.074, 21.824]
  },
  {
    title: "Hermes",
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/256193/539600/main-image",
    modernLocation: "The Metropolitan Museum of Art",
    description: "Gold finger ring engraved with Hermes fastening a wing to his foot.",
    dates: "late 4th century BCE, Late Classical Period",
    symbols: ["caduceus", "winged shoes", "petasos", "tortoise shell"],
    source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/256193/539600/main-image",
    ancientLocation: "Greece",
    location: [39.074, 21.824]
  },
  {
    title: "Hermes",
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/255933/524907/main-image",
    modernLocation: "The Metropolitan Museum of Art",
    description: "Bronze herm of Hermes.",
    dates: "ca. 490 BCE, Archaic Period",
    symbols: ["caduceus", "winged shoes", "petasos", "tortoise shell"],
    source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/255933/524907/main-image",
    ancientLocation: "Greece",
    location: [39.074, 21.824]
  },
  {
    title: "Dionysos",
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/254996/1523458/main-image",
    modernLocation: "The Metropolitan Museum of Art",
    description: "Marble statuette of Dionysos in Thracian attire with panther skin and goatskin cape.",
    dates: "early 3rd century BCE, early Hellenistic Greek period",
    symbols: ["grapes", "ivy", "thyrsus", "pine cone"],
    source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/254996/1523458/main-image",
    ancientLocation: "Greece",
    location: [39.074, 21.824]
  },
  {
    title: "Dionysos",
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/257518/528960/main-image",
    modernLocation: "The Metropolitan Museum of Art",
    description: "Faience appliqué with a bust of Dionysos.",
    dates: "3rd–1st century BCE, Hellenistic period",
    symbols: ["grapes", "ivy", "thyrsus", "pine cone"],
    source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/257518/528960/main-image",
    ancientLocation: "Greece",
    location: [39.074, 21.824]
  }
];



const map = L.map("map").setView([34.0, 15.0], 5);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

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

let currentMarkers = [];

function clearSidebarAndMarkers() {
  egyptContainer.innerHTML = "";
  greeceContainer.innerHTML = "";
  romeContainer.innerHTML = "";
  currentMarkers.forEach((m) => map.removeLayer(m));
  currentMarkers = [];
}

function renderData(dataset) {
  clearSidebarAndMarkers();
  dataset.forEach((item) => {
    const marker = L.marker(item.location, { icon: redIcon }).addTo(map);
    currentMarkers.push(marker);

    const popupContent = `
      <div style="max-width: 300px; font-family: 'Libre Baskerville', serif;">
        <img src="${item.image}" alt="${item.title}" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 8px;" />
        <h2 style="font-size: 18px; font-weight: bold;">${item.title}</h2>
        <p><strong>Ancient Location:</strong> ${item.ancientLocation}</p>
        <p><strong>Modern Location:</strong> ${item.modernLocation}</p>
        <p><strong>Description:</strong> ${item.description}</p>
        <p><strong>Dates:</strong> ${item.dates}</p>
        <p><strong>Source:</strong> <a href="${item.source}" target="_blank">Learn more</a></p>
      </div>
    `;
    marker.bindPopup(popupContent);

    const card = document.createElement("div");
    card.className =
      "border p-4 rounded-lg shadow hover:bg-gray-50 cursor-pointer";
    card.innerHTML = `
      <h2 class="text-lg font-semibold">${item.title}</h2>
      <p class="text-sm">${item.description}</p>
    `;
    card.addEventListener("click", () => {
      map.setView(item.location, 4, { animate: true });
      setTimeout(() => {
        marker.openPopup();
        map.panBy([0, -200], { animate: true });
      }, 500);
    });

    if (
      item.ancientLocation.includes("Egypt") ||
      item.modernLocation.includes("Egypt")
    ) {
      egyptContainer.appendChild(card);
    } else if (
      item.ancientLocation.includes("Greece") ||
      item.modernLocation.includes("Greece")
    ) {
      greeceContainer.appendChild(card);
    } else if (
      item.ancientLocation.includes("Rome") ||
      item.modernLocation.includes("Rome")
    ) {
      romeContainer.appendChild(card);
    }
});

}

function showView(viewName) {
  const titleElement = document.getElementById("dynamic-title");

  if (viewName === "temples") {
    renderData(temples);
    titleElement.textContent = "Temple Architecture";
  } else if (viewName === "myths") {
    renderData(artifacts);
    titleElement.textContent = "Geography of Myths";
  } else if (viewName === "gods") {
    renderData(gods);
    titleElement.textContent = "Depiction of Gods";
  }
}


showView("myths"); // Default view

