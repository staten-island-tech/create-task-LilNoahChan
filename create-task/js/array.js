const items = [
  {
    section: "personal",
    itemName: "crest toothpaste",
    itemCost: 6,
    img: "https://www.cvs.com/bizcontent/merchandising/productimages/large/37000889427.jpg",
    cvs: "yes"
  },
  {
    section: "personal",
    itemName: "colgate toothpaste",
    itemCost: 15,
    img: "https://www.cvs.com/bizcontent/merchandising/productimages/large/35000993380.jpg",
    cvs: "yes"
  },
  {
    section: "personal",
    itemName: "pronamel toothpaste",
    itemCost: 3,
    img: "https://www.cvs.com/bizcontent/merchandising/productimages/large/310158830405.jpg",
    cvs: "yes"
  },
  {
    section: "personal",
    itemName: "biotene toothpaste",
    itemCost: 10,
    img: "https://www.cvs.com/bizcontent/merchandising/productimages/large/4858210065.jpg",
    cvs: "yes"
  },
  {
    section: "personal",
    itemName: "hello toothpaste",
    itemCost: 8,
    img: "https://www.cvs.com/bizcontent/merchandising/productimages/large/819156020035.jpg",
    cvs: "yes"
  },
  {
    section: "personal",
    itemName: "gillette deodorant",
    itemCost: 9,
    img: "https://www.cvs.com/bizcontent/merchandising/productimages/large/4740009758.jpg",
    cvs: "yes"
  },
  {
    section: "personal",
    itemName: "degree deodorant",
    itemCost: 6,
    img: "https://www.cvs.com/bizcontent/merchandising/productimages/large/7940026700.jpg",
    cvs: "yes"
  },
  {
    section: "personal",
    itemName: "oldspice deodorant",
    itemCost: 10,
    img: "https://www.cvs.com/bizcontent/merchandising/productimages/large/12044037539.jpg",
    cvs: "yes"
  },
  {
    section: "personal",
    itemName: "mitchum deodorant",
    itemCost: 9,
    img: "https://www.cvs.com/bizcontent/merchandising/productimages/large/30997310590.jpg",
    cvs: "yes"
  },
  {
    section: "grocery",
    itemName: "gold emblem cashews",
    itemCost: 18,
    img: "https://www.cvs.com/bizcontent/merchandising/productimages/large/50428642238.jpg",
    cvs: "yes"
  },
  {
    section: "grocery",
    itemName: "gold emblem pistachios",
    itemCost: 13,
    img: "https://www.cvs.com/bizcontent/merchandising/productimages/large/50428642894.jpg",
    cvs: "yes"
  },
  {
    section: "grocery",
    itemName: "double stuff oreos",
    itemCost: 6,
    img: "https://www.cvs.com/bizcontent/merchandising/productimages/large/44000033255.jpg",
    cvs: "yes"
  },
  {
    section: "grocery",
    itemName: "chips ahoy",
    itemCost: 6,
    img: "https://www.cvs.com/bizcontent/merchandising/productimages/large/44000033385.jpg",
    cvs: "yes"
  },
  {
    section: "grocery",
    itemName: "oreos",
    itemCost: 3,
    img: "https://www.cvs.com/bizcontent/merchandising/productimages/large/44000007492.jpg",
    cvs: "yes"
  },
  {
    section: "grocery",
    itemName: "skinny popcorn",
    itemCost: 5,
    img: "https://www.cvs.com/bizcontent/merchandising/productimages/large/85025100400.jpg",
    cvs: "yes"
  },
  {
    section: "vitamins",
    itemName: "vitamin a",
    itemCost: 17,
    img: "https://www.cvs.com/bizcontent/merchandising/productimages/large/5042830302.jpg",
    cvs: "yes"
  },
  {
    section: "vitamins",
    itemName: "vitamin b",
    itemCost: 13,
    img: "https://www.cvs.com/bizcontent/merchandising/productimages/large/5042837587.jpg",
    cvs: "yes"
  },
  {
    section: "vitamins",
    itemName: "vitamin c",
    itemCost: 10,
    img: "https://www.cvs.com/bizcontent/merchandising/productimages/large/50428634066.jpg",
    cvs: "yes"
  },
  {
    section: "vitamins",
    itemName: "vitamin d",
    itemCost: 32,
    img: "https://www.cvs.com/bizcontent/merchandising/productimages/large/74312291760.jpg",
    cvs: "yes"
  },
  {
    section: "vitamins",
    itemName: "vitamin e",
    itemCost: 15,
    img: "https://www.cvs.com/bizcontent/merchandising/productimages/large/50428312513.jpg",
    cvs: "yes"
  },
  {
    section: "vitamins",
    itemName: "vitamin k",
    itemCost: 13,
    img: "https://www.cvs.com/bizcontent/merchandising/productimages/large/5042830302.jpg",
    cvs: "yes"
  },
  {
    section: "household",
    itemName: "air wick",
    itemCost: 6,
    img: "https://www.cvs.com/bizcontent/merchandising/productimages/large/62338985527.jpg",
    cvs: "yes"
  },
  {
    section: "household",
    itemName: "febreze air freshner",
    itemCost: 6,
    img: "https://www.cvs.com/bizcontent/merchandising/productimages/large/37000933366.jpg",
    cvs: "yes"
  },
  {
    section: "household",
    itemName: "citrus spray",
    itemCost: 9,
    img: "https://www.cvs.com/bizcontent/merchandising/productimages/large/848858003411.jpg",
    cvs: "yes"
  },
  {
    section: "household",
    itemName: "tide detergent",
    itemCost: 27,
    img: "https://www.cvs.com/bizcontent/merchandising/productimages/large/37000403654.jpg",
    cvs: "yes"
  },
  {
    section: "household",
    itemName: "tide pods",
    itemCost: 13,
    img: "https://www.cvs.com/bizcontent/merchandising/productimages/large/3077202432.jpg",
    cvs: "yes"
  },
  {
    section: "household",
    itemName: "gain detergent",
    itemCost: 20,
    img: "https://www.cvs.com/bizcontent/merchandising/productimages/large/37000772736.jpg",
    cvs: "yes"
  },
  {
    section: "household",
    itemName: "total home pods",
    itemCost: 12,
    img: "https://www.cvs.com/bizcontent/merchandising/productimages/large/5042852946.jpg",
    cvs: "yes"
  },
  {
    section: "household",
    itemName: "all detergent",
    itemCost: 8,
    img: "https://www.cvs.com/bizcontent/merchandising/productimages/large/72613739172.jpg",
    cvs: "yes"
  },
];
export { items };
