function generateUniqueId() {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 10000);
  return `product${timestamp}${random}`;
}

const products = {
  button: [
    {
      id: generateUniqueId(),
      name: "pyjama button",
      image: 'img/button1.jpg',
      price: 29.99
      
    },
    // add more products as needed
  ],
  short: [
    {
      id: generateUniqueId(),
      name: "pyjama short satin",
      image: "img/satinShort2.jpg",
      price:12.99
    },
    // add more products as needed
  ],
  underwear: [
    {
      id: generateUniqueId(),
      name: "Victoria",
      image: "img/victoriaClose.jpg",
      imageOpen: "img/victoriaOpen.jpg",
      isOpen: false,
      animationInterval: null,
      price: 14.99
    },
    // add more products as needed
  ]
};

export default products;
