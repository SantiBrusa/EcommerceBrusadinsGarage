// import products from "./products.json"; para usarlos desde un .json

const products = [
  {
    id: 1,
    name: "Shampoo Toxic Shine",
    description: "Shampoo para lavar vehiculos",
    stock: 7,
    price: 2500,
    image: "/img/shampooToxic.webp",
    category: "shampoo",
  },
  {
    id: 2,
    name: "Shampoo Vonixx",
    description: "Shampoo para lavar vehiculos",
    stock: 5,
    price: 3500,
    image: "/img/shampooVonixx.webp",
    category: "shampoo",
  },
  {
    id: 3,
    name: "Renovador Toxic Shine",
    description: "Revividor de color de neumaticos",
    stock: 2,
    price: 1200,
    image: "/img/renovadorToxic.webp",
    category: "renovadores",
  },
  {
    id: 4,
    name: "Renovador Vonixx",
    description: "Revividor de color de neumaticos",
    stock: 7,
    price: 1700,
    image: "/img/renovadorVonixx.webp",
    category: "renovadores",
  },
  {
    id: 5,
    name: "Cera Liquida Toxic Shine",
    description: "Da Brillo a tu vehiculo",
    stock: 8,
    price: 4300,
    image: "/img/CeraToxic.webp",
    category: "ceras",
  },
  {
    id: 6,
    name: "Cera Liquida Vonixx",
    description: "Da Brillo a tu vehiculo",
    stock: 10,
    price: 5000,
    image: "/img/CeraVonixx.webp",
    category: "ceras",
  },
];

const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export default getProducts;
