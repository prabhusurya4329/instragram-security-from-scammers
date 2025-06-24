export const districtCityMap: Record<string, string[]> = {
  "East Godavari": ["Rajahmundry", "Kakinada", "Amalapuram", "Mandapeta", "Ramachandrapuram", "Tuni", "Pithapuram"],
  "West Godavari": ["Eluru", "Bhimavaram", "Tadepalligudem", "Tanuku", "Narasapuram", "Palacole", "Kovvur", "Nidadavole"],
  "Krishna": ["Vijayawada", "Machilipatnam", "Nuzvid", "Gudivada", "Jaggayyapeta", "Nandigama", "Tiruvuru"],
  "Guntur": ["Guntur", "Tenali", "Narasaraopet", "Chilakaluripet", "Bapatla", "Ponnur", "Mangalagiri"],
  "Visakhapatnam": ["Visakhapatnam", "Gajuwaka", "Anakapalle", "Bheemunipatnam", "Pendurthi", "Gopalapatnam"],
  "Nellore": ["Nellore", "Kavali", "Gudur", "Sullurpeta", "Venkatagiri", "Atmakur"],
  "Kurnool": ["Kurnool", "Adoni", "Nandyal", "Yemmiganur", "Dhone", "Nandikotkur"],
  "Chittoor": ["Chittoor", "Tirupati", "Madanapalle", "Srikalahasti", "Puttur", "Nagari"],
  "Kadapa": ["Kadapa", "Proddatur", "Rajampet", "Pulivendula", "Jammalamadugu", "Rayachoti"],
  "Anantapur": ["Anantapur", "Guntakal", "Hindupur", "Dharmavaram", "Kadiri", "Tadipatri"],
  "Prakasam": ["Ongole", "Chirala", "Markapur", "Kandukur", "Addanki", "Podili"],
  "Srikakulam": ["Srikakulam", "Amadalavalasa", "Palasa", "Ichchapuram", "Rajam", "Palakonda"],
  "Vizianagaram": ["Vizianagaram", "Bobbili", "Parvathipuram", "Cheepurupalli", "Gajapathinagaram"]
};

export const placeOptions = [
  {
    id: "mall",
    name: "Mall",
    image: "https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "hotel",
    name: "Hotel",
    image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "restaurant",
    name: "Restaurant",
    image: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "airport",
    name: "Airport",
    image: "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "railway",
    name: "Railway Station",
    image: "https://images.pexels.com/photos/2031755/pexels-photo-2031755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "bus",
    name: "Bus Station",
    image: "https://images.pexels.com/photos/2767814/pexels-photo-2767814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "hospital",
    name: "Hospital",
    image: "https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "office",
    name: "Office Complex",
    image: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "shopping",
    name: "Shopping Center",
    image: "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "theater",
    name: "Movie Theater",
    image: "https://images.pexels.com/photos/7991158/pexels-photo-7991158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "convention",
    name: "Convention Center",
    image: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "sports",
    name: "Sports Complex",
    image: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "education",
    name: "Educational Institution",
    image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "tourist",
    name: "Tourist Spot",
    image: "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "beach",
    name: "Beach",
    image: "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export const slotOptions = [
  { id: "A1", name: "Slot A1", price: 30 },
  { id: "A2", name: "Slot A2", price: 35 },
  { id: "B1", name: "Slot B1", price: 40 },
  { id: "B2", name: "Slot B2", price: 45 },
  { id: "C1", name: "Slot C1", price: 50 },
];

export const serviceOptions = {
  carWash: {
    name: "Car Wash",
    price: 50
  },
  food: {
    name: "Canteen Service",
    price: 40
  }
};