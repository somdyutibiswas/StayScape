const sampleListings = [
  {
    title: "Royal Jaipur Fort Retreat",
    description: "Experience the charm of Rajasthan from a traditional retreat featuring beautiful arches, warm interiors, and stunning views of the historic city.",
    image: {
        url: "/images/Royal Jaipur Fort.png",
        filename: "Royal-Jaipur-Fort"
    },
    price: 4200,
    location: "Jaipur, Rajasthan",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [75.7873, 26.9124]
    },
    category: ["Iconic Cities", "Popular", "Heritage"]
  },
  {
    title: "Historic Canal House",
    description:
  "Stay close to the timeless charm of Varanasi in this heritage-inspired home, surrounded by historic streets and the spirit of the Ganges.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Varanasi",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [82.9739, 25.3176]
    },
    category: [ "Mountains", "Forest"],
  },
  {
    title: "Historic Villa in Goa",
    description:
      "Experience the charm of Rajasthan in this beautifully restored heritage villa, featuring traditional architecture, elegant courtyards, and timeless details.",    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Goa",
    country: "India",
    geometry: {
        type: "Point",
        coordinates: [74.1240, 15.2993]
    },
    category: ["Iconic Cities", "Pool"],
  },
  {
    title: "Heritage Stay in Varanasi",
    description:
      "Stay close to the timeless charm of Varanasi in this heritage-inspired home, surrounded by historic streets and the spirit of the Ganges.",
    image: {
      filename: "listingimage",
      url: "/images/heritage_home_in_varanasi.jpg",
    },
    price: 1800,
    location: "Varanasi",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [82.9739, 25.3176]
    },
    category: ["Iconic Cities", "Popular", "Heritage"],
  },
  {
    title: "Mountain Cottage in Tawang",
    description:
      "Escape to a peaceful mountain cottage surrounded by the scenic landscapes of Tawang. A cozy retreat for nature and tranquility.",
    image: {
      filename: "listingimage",
      url: "/images/charming cottage.png",
    },
    price: 1200,
    location: "Tawang",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [91.8588, 27.5860]
    },
    category: ["Mountains", "Rooms"],
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Varkala",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [76.9812, 8.4890]
    },
    category: ["Popular", "Rooms", "Pool", "Beach"],
  },
  
{
    title: "Mountain View Cabin",
    description:
      "Enjoy breathtaking views of the Western Ghats from this cozy cabin surrounded by tea plantations and lush green hills.",    
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Munnar",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [76.9812, 8.4890]
    },
    category: ["Mountains", "Forest", "Camping"],
  },
  {
    title: "Serene Kerala Houseboat",
    description: "Relax on the peaceful backwaters of Kerala aboard a traditional houseboat surrounded by coconut palms and beautiful tropical scenery.",
    image: {
        url: "/images/Serene Boat House Retreat.png",
        filename: "Serene-Boat-House-Retreat"
    },
    price: 5500,
    location: "Alappuzha, Kerala",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [76.3378, 9.4981]
    },
    category: ["Iconic Cities", "Heritage", "Boats"],
},
{
    title: "Heritage Home in Pondicherry",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Pondicherry",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [79.8083, 11.9416]
    },
    category: [ "Popular", "Mountains", "Iconic Cities" ],
  },
  {
    title: "Historic Castle in Rajasthan",
    description: "Stay in a beautifully preserved heritage palace surrounded by grand architecture, peaceful gardens, and the timeless charm of Rajasthan.",
    image: {
        url: "/images/Historic Castle Home.png",
        filename: "listingimage"
    },
    price: 4500,
    location: "Rajasthan",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [74.1240, 15.2993]
    },
    category: ["Iconic Cities", "Popular", "Heritage"],
},
  
  {
    title: "Lakeside Cottage in Nainital",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Nainital",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [79.4636, 29.3919] 
    },
    category: ["Iconic Cities","Mountains", "Arctic", "Rooms"],
  },
  {
    title: "Mountain Retreat in Mussoorie",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Mussoorie",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [78.0733, 30.4595] 
    },
    category: ["Mountains", "Forest", "Rooms", "Pool"],
  },
  
  {
    title: "Himalayan View Cottage",
    description: "A cozy mountain cottage with breathtaking views of the Himalayas, perfect for a peaceful getaway surrounded by nature.",
    image: {
        url: "/images/Himalayan View Cottage.png",
        filename: "Himalayan-View-Cottage"
    },
    price: 3200,
    location: "Himachal Pradesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1025, 31.1048]
    },
    category: ["Mountains", "Popular", "Rooms"],
},

{
    title: "Mountain Cabin in Manali",
    description:
        "Unplug and unwind in this cozy mountain cabin surrounded by pine forests and breathtaking Himalayan views. A peaceful escape for nature lovers.",    image: {
    filename: "listingimage",
    url: "/images/Mountain Cabin.jpg",
    },
    price: 1100,
    location: "Manali",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1887, 32.2396]
    },
    category: ["Mountains", "Forest", "Rooms"],
  },
  {
    title: "Lakeview Palace Retreat",
    description: "A peaceful heritage retreat overlooking the beautiful waters of Man Sagar Lake, surrounded by the timeless architecture and charm of Jaipur.",
    image: {
        url: "/images/Lakeview Palace Retreat.png",
        filename: "Lakeview-Palace-Retreat"
    },
    price: 4200,
    location: "Jaipur, Rajasthan",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [74.1240, 15.2993]
    },
    category: ["Iconic Cities", "Popular", "Heritage"],
},

{
    title: "Modern Loft in Mumbai",
    description: "A stylish modern loft in the heart of Mumbai, featuring elegant interiors, warm details, and a comfortable urban atmosphere.",
    image: {
        url: "/images/Modern Loft in mumbai.png",
        filename: "Modern-Loft-in-Mumbai"
    },
    price: 5500,
    location: "Mumbai, Maharashtra",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [72.8777, 19.0760] 
    },
    category: ["Iconic Cities", "Popular"],
  },
  
   {
    title: "Cozy Beachfront in Goa",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Goa",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [74.1240, 15.2993]
    },
    category: ["Beach", "Popular", "Boats"],
  },
  {
    title: "Private Pool Villa",
    description: "A peaceful private villa with a refreshing pool, comfortable outdoor seating, and a relaxing tropical atmosphere.",
    image: {
        url: "/images/Private Pool Villa.jpg",
        filename: "private_pool_villa"
    },
    price: 4800,
    location: "Goa",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [74.1240, 15.2993]
    },
    category: [ "Rooms", "Pool"]
  },
  {
    title: "Royal Palace Stay in Jaisalmer",
    description:
        "Stay in a peaceful heritage retreat with elegant architecture, beautiful lake views, and a timeless royal atmosphere.",
    image: {
        filename: "listingimage",
        url: "/images/heritage_palace.png",
    },
    price: 2200,
    location: "Jaisalmer",
    country: "India",
    geometry: {
        type: "Point",
        coordinates: [73.7125, 24.5854]
    },
    category: ["Heritage", "Popular", "Iconic Cities"],
  },
  {
    title: "Heritage Home in Kolkata",
    description:
      "Experience the old-world charm of Kolkata in this elegant heritage home surrounded by historic architecture and vibrant city life.",
    image: {
      filename: "listingimage",
      url: "/images/Colonial Stay in Kolkata.png",
    },
    price: 2200,
    location: "Kolkata",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [88.3639, 22.5726] 
    },
    category: ["Heritage", "Rooms", "Iconic Cities"],
  },
  {
    title: "Snowy Mountain Cabin",
    description: "A cozy wooden cabin surrounded by snow-covered forests, perfect for a quiet winter escape in the mountains.",
    image: {
        url: "/images/Snow Cabin.png",
        filename: "Snow-Cabin"
    },
    price: 3800,
    location: "Manali, Himachal Pradesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1887, 32.2396]
    },
    category: ["Iconic Cities", "Arctic"],
  },
  {
    title: "Serene Poolside Retreat",
    description:
        "A peaceful retreat with a beautiful swimming pool, comfortable rooms, and a relaxing outdoor space surrounded by greenery. Perfect for a quiet weekend getaway.",
    image: {
        filename: "listingimage",
        url: "/images/Serene Poolside.jpg"
    },
    price: 2500,
    location: "Siliguri",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [88.4250, 26.7167]
    },
    category: ["Pool", "Rooms", "Popular"],
  },
  {
    title: "Art Deco Apartment in Ladakh",
    description:
        "Stay in a stylish modern apartment in the heart of Mumbai, close to the city's vibrant streets, landmarks, cafés, and nightlife.",    image: {
    filename: "listingimage",
    url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Ladakh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.5770, 34.1526]
    },
    category: ["Iconic Cities", "Rooms", "Arctic"],
  },
  {
    title: "Blue Mountain Retreat",
    description:
        "A peaceful hillside retreat surrounded by misty mountains, lush greenery, and beautiful valley views. Perfect for a quiet getaway in nature.",
    image: {
        filename: "listingimage",
        url: "/images/Blue_mountain.png",
    },
    price: 1800,
    location: "Darjeeling",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [88.2627, 27.0360] 
    },
    category: ["Iconic Cities", "Mountains", "Rooms"],
  }, 
  {
    title: "Island Retreat in Andaman",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Andaman Islands",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [92.6586, 11.6670] 
    },
    category: ["Beach", "Popular", "Rooms"],
  },
    
  {  title: "Lakefront Cabin in Srinagar",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of Srinagar.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Srinagar",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [74.8723, 34.0837]
    },
    category: ["Forest", "Popular", "Camping", "Boats"],
  },
 
];

module.exports = { data: sampleListings };