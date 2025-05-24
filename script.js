const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');
const price = urlParams.get('price');
const image = urlParams.get('image');
const details = urlParams.get('details');

document.getElementById("productName").textContent = name || "Product Name";
document.getElementById("productPrice").textContent = price || "₱0.00";
document.getElementById("productImage").src = image 
  ? `../Pictures folder/${image}`
  : "placeholder.jpg";
document.getElementById("productDetails").textContent = details || "No additional product information.";

const colorwaySelect = document.getElementById("colorwaysSelect");

const colorwaysMap = {
  "Air Jordan 1": ["Chicago", "Bred", "Royal", "Shadow", "Pine Green"],
  "Air Max 90": ["Infrared", "Laser Blue", "Volt", "Triple Black"],
  "Nike Dunk Low": ["Panda", "Championship Red", "UNC", "Brazil", "Kentucky"],
  "Nike ZoomX Vaporfly NEXT%": ["Prototype", "Bright Mango", "Aqua", "White Lime"],
  "Nike Pegasus": ["White/Black", "Navy", "Crimson", "Cool Grey"],
  "Freak 5": ["Black/Red", "Purple Pulse", "Barely Green", "White/Gold"],
  "Vapor": ["Black/Volt", "White/Silver", "Blue/Gold", "Red/Gum"],
  "Dunklow": ["Team Red", "Photon Dust", "Coast", "Medium Curry"],
  "Nike GT Jump 2": ["University Red", "Black/White", "Cool Grey", "Royal Pulse"],
  "Nike LeBron 21": ["Arctic Wolf", "Akoya Pearl", "Dragon Pearl", "Wolf Grey"],
  "Nike KD 16": ["B.A.D.", "Aunt Pearl", "Black/Gold", "All-Star"],
  "Nike Cosmic Unity 3": ["As One We Win", "White/Volt", "Dark Marina", "Hyper Royal"],
  "Nike Ja 1": ["Day One", "Midnight", "Scratch", "Ember Glow"],
  "Nike Alpha Menace Pro 3": ["Wolf Grey", "Game Royal", "Black/White", "Midnight Navy"],
  "Nike Huarache Elite 4": ["Triple Black", "Red/White", "Wolf Grey", "Blue Void"],
  "Nike Mercurial Superfly 9": ["White/Pink Blast", "Shadow Pack", "Bright Crimson", "Lucent Pack"],
  "Nike Phantom GX": ["Bright Crimson", "Black/Chrome", "Blast Pack", "Lucent Pack"],
  "Nike Force Savage Elite 2": ["Black/White", "Team Red", "Game Royal", "White/Gold"],
  "Nike Zoom Fly 5": ["Volt Glow", "Black/Anthracite", "Barely Volt", "Grey Fog"],
  "Nike ZoomX Vaporfly NEXT% 3": ["Prototype", "Bright Mango", "Aqua", "White Lime"],
  "Nike Alphafly 3": ["Phantom/Total Orange", "Volt/Black", "White/Crimson", "Mint Foam"],
  "Nike Invincible 3": ["Summit White", "Black/Volt", "Pink Foam", "Bright Crimson"],
  "Nike Structure 25": ["White/Laser Orange", "Black/Smoke Grey", "Royal Blue", "Light Silver"]
};

const defaultColorways = ["Triple White", "Triple Black", "White/Gum", "White/Red"];
const matchedColorways = colorwaysMap[name] || defaultColorways;

matchedColorways.forEach(color => {
  const option = document.createElement("option");
  option.textContent = color;
  colorwaySelect.appendChild(option);
});
