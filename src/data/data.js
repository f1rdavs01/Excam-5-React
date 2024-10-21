import shop1 from "../assets/shops1.svg";
import shop2 from "../assets/shops2.svg";
import shop3 from "../assets/shops4.svg";
import hero from "../assets/hero.svg";
import products from "../assets/products.png";
import products2 from "../assets/products2.png";
import products3 from "../assets/products3.png";
import products4 from "../assets/products4.png";
import products5 from "../assets/products5.png";
import products6 from "../assets/products6.png";
import products7 from "../assets/products7.png";
import products8 from "../assets/products8.png";
import products9 from "../assets/products9.png";
import products10 from "../assets/products10.png";
import products11 from "../assets/products11.png";
import products12 from "../assets/products12.png";
import food1 from "../assets/food1.png";
import food2 from "../assets/food2.png";
import food3 from "../assets/food3.png";
import food4 from "../assets/food4.png";
import fricendly from "../assets/fricendly.png";
import organic1 from "../assets/organic1.png";
import organic2 from "../assets/organic2.png";
import organic3 from "../assets/organic3.png";
import discover1 from "../assets/discover1.png";
import discover2 from "../assets/discover2.png";
const data = {
  hero: [
    {
      id: 1,
      img: hero,
      title: "Choose the best healthier way of life",
      disc: "100% Natural Food",
    },
  ],
  shop: [
    {
      id: 1,
      img: shop1,
      disc: "Natural!!",
      title: "Get Garden Fresh Fruits",
    },
    {
      id: 2,
      img: shop2,
      disc: "Offer!!",
      title: "Get 10% offon Vegetables",
    },
  ],
  shopdeteils: [
    {
      id: 1,
      img: shop3,
      log: "About Us",
      title: "We Believe in Working Accredited Farmers",
      info: "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    },
  ],
  products: [
    {
      id: 1,
      img: products,
      buttontitle: "Vegetable",
      title: "Calabrese Broccoli",
      price: "$20.00",
      price2: "$13.00",
      rating:3
    },
    {
      id: 2,
      img: products2,
      buttontitle: "Fresh",
      title: "Fresh Banana Fruites",
      price: "$20.00",
      price2: "$14.00",
      rating:4,
    },
    {
      id: 3,
      img: products3,
      buttontitle: "Millets",
      title: "White Nuts",
      price: "$20.00",
      price2: "$15.00",
      rating:2,
    },
    {
      id: 4,
      img: products4,
      buttontitle: "Vegetable",
      title: "Calabrese Broccoli",
      price: "$20.00",
      price2: "$13.00",
      rating:5,
    },
    {
      id: 5,
      img: products5,
      buttontitle: "Health",
      title: "Mung Bean",
      price: "$20.00",
      price2: "$11.00",
      rating:3,
    },
    {
      id: 6,
      img: products6,
      buttontitle: "Nuts",
      title: "Brown Hazelnut",
      price: "$20.00",
      price2: "$12.00",
      rating:5,
    },
    {
      id: 7,
      img: products7,
      buttontitle: "Fresh",
      title: "Eggs",
      price: "$20.00",
      price2: "$17.00",
      rating:2,
    },
    {
      id: 8,
      img: products8,
      buttontitle: "Fresh",
      title: "Zelco Suji Elaichi Rusk",
      price: "$20.00",
      price2: "$15.00",
      rating:4,
    },
    {
      id: 9,
      img: products9,
      buttontitle: "Health",
      title: "Mung Bean",
      price: "$20.00",
      price2: "$11.00",
      rating:5,
    },
    {
      id: 10,
      img: products10,
      buttontitle: "Nuts",
      title: "White Hazelnut",
      price: "$20.00",
      price2: "$13.00",
      rating:5,
    },
    {
      id: 11,
      img: products11,
      buttontitle: "Fresh",
      title: "Fresh Corn",
      price: "$20.00",
      price2: "$13.00",
      rating:3,
    },
    {
      id: 12,
      img: products12,
      buttontitle: "Fresh",
      title: "Organic Almonds",
      price: "$20.00",
      price2: "$13.00",
      rating:5,
    },
  ],
  food: [
    
    {
        id: 1,
        img: food1,
        buttontitle: "Vegetable",
        title: "Mung Bean",
        price: "$20.00",
        price2: "$11.00",
        rating:3,
    },
    {
        id: 2,
        img: food2,
        buttontitle: "Vegetable",
        title: "Brown Hazelnut",
        price: "$20.00",
        price2: "$11.00",
        rating: 3
    },
    {
        id:3,
        img: food3,
        buttontitle: "Vegetable",
        title: "Onion",
        price: "$20.00",
        price2: "$11.00",
        rating: 4
    },
    {
        id: 4,
        img: food4,
        buttontitle: "Vegetable",
        title: "Cabbage",
        price: "$20.00",
        price2: "$11.00",
        rating: 5
    },

  ],
  friendly:[
    {
        id: 1,
        img: fricendly,
        logo: "Eco Friendly",
        title: "Econis is a Friendly Organic Store",
        disc1: "Start with Our Company First",
        disc2 : "Learn How to Grow Yourself",
        disc3: "Farming Strategies of Today",
        info: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis."

    }
  ],
  friendlycard:[
    {
        id: 1,
        img: organic1,
        title: "Organic Juice"
    },
    {
        id: 2,
        img: organic2,
        title: "Organic Food"
    },
    {
        id: 3,
        img: organic3,
        title: "Nuts Cookis"
    },
  ],
  discover:[
    {
        id: 1,
        logo: "News",
        logotitle: "Discover weekly content about organic food, & more",
        img:discover1,
        disc: "By Rachi Card",
        buttons: "25Nov",
        title: "The Benefits of Vitamin D & How to Get It",
        info : "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
        btn: "Read More"
    },
    {
        id: 2,
        logo: "News",
        logotitle: "Discover weekly content about organic food, & more",
        img:discover2,
        disc: "By Rachi Card",
        buttons: "25Nov",
        title: "Our Favourite Summertime Tommeto",
        info : "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
        btn: "Read More"
    },
  ]
};

export default data;
