  import { createSlice } from "@reduxjs/toolkit";

  const PRODUCTS_DEFAULT = [
    {
      id:1,
      name:"Product 1",
      price:25.99,
      img:"https://i.pinimg.com/236x/44/9e/1e/449e1e5c7a779c1b5effd2a378fd3e33.jpg",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat purus vitae urna tristique, vel cursus nunc vulputate. Maecenas in tristique justo. Curabitur a massa at nunc varius vestibulum. Sed auctor, quam in convallis posuere, elit odio auctor neque, nec efficitur libero dolor vel ex. Vivamus ullamcorper nisl a tristique iaculis. Proin vitae justo in urna consequat malesuada.",
      isVisible: true
    },
    {
      id:2,
      name:"Product 2",
      price:26.99,
      img:"https://i.pinimg.com/236x/ac/3f/cc/ac3fcc9859a8da6b0e9160cff53a3ec1.jpg",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat purus vitae urna tristique, vel cursus nunc vulputate. Maecenas in tristique justo. Curabitur a massa at nunc varius vestibulum. Sed auctor, quam in convallis posuere, elit odio auctor neque, nec efficitur libero dolor vel ex. Vivamus ullamcorper nisl a tristique iaculis. Proin vitae justo in urna consequat malesuada.",
      isVisible: true
    },
    {
      id:3,
      name:"Product 3",
      price:27.99,
      img:"https://i.pinimg.com/236x/ea/c0/3b/eac03b1bacb32e8ced1c1f92594e776c.jpg",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat purus vitae urna tristique, vel cursus nunc vulputate. Maecenas in tristique justo. Curabitur a massa at nunc varius vestibulum. Sed auctor, quam in convallis posuere, elit odio auctor neque, nec efficitur libero dolor vel ex. Vivamus ullamcorper nisl a tristique iaculis. Proin vitae justo in urna consequat malesuada.",
      isVisible: true
    },
    {
      id:4,
      name:"Product 4",
      price:28.99,
      img:"https://i.pinimg.com/236x/89/e0/17/89e017299752de082c80a5c34be9378a.jpg",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat purus vitae urna tristique, vel cursus nunc vulputate. Maecenas in tristique justo. Curabitur a massa at nunc varius vestibulum. Sed auctor, quam in convallis posuere, elit odio auctor neque, nec efficitur libero dolor vel ex. Vivamus ullamcorper nisl a tristique iaculis. Proin vitae justo in urna consequat malesuada.",
      isVisible: true
    },
    {
      id:5,
      name:"Product 5",
      price:29.99,
      img:"https://i.pinimg.com/236x/ff/70/97/ff7097494abb488d308d28fa276af9b8.jpg",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat purus vitae urna tristique, vel cursus nunc vulputate. Maecenas in tristique justo. Curabitur a massa at nunc varius vestibulum. Sed auctor, quam in convallis posuere, elit odio auctor neque, nec efficitur libero dolor vel ex. Vivamus ullamcorper nisl a tristique iaculis. Proin vitae justo in urna consequat malesuada.",
      isVisible: true
    },
    {
      id:6,
      name:"Product 6",
      price:21.99,
      img:"https://i.pinimg.com/236x/90/b7/9b/90b79b681ec23e1f7dbb1a3b92cdcd11.jpg",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat purus vitae urna tristique, vel cursus nunc vulputate. Maecenas in tristique justo. Curabitur a massa at nunc varius vestibulum. Sed auctor, quam in convallis posuere, elit odio auctor neque, nec efficitur libero dolor vel ex. Vivamus ullamcorper nisl a tristique iaculis. Proin vitae justo in urna consequat malesuada.",
      isVisible: true
    },
    {
      id:7,
      name:"Product 7",
      price:22.99,
      img:"https://i.pinimg.com/236x/7f/86/f3/7f86f3dd216eabafaa0475a32b0a1080.jpg",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat purus vitae urna tristique, vel cursus nunc vulputate. Maecenas in tristique justo. Curabitur a massa at nunc varius vestibulum. Sed auctor, quam in convallis posuere, elit odio auctor neque, nec efficitur libero dolor vel ex. Vivamus ullamcorper nisl a tristique iaculis. Proin vitae justo in urna consequat malesuada.",
      isVisible: true
    },
    {
      id:8,
      name:"Product 8",
      price:40.99,
      img:"https://i.pinimg.com/236x/2c/e2/cc/2ce2cca7be3b5464dc8622333cfc22cb.jpg",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat purus vitae urna tristique, vel cursus nunc vulputate. Maecenas in tristique justo. Curabitur a massa at nunc varius vestibulum. Sed auctor, quam in convallis posuere, elit odio auctor neque, nec efficitur libero dolor vel ex. Vivamus ullamcorper nisl a tristique iaculis. Proin vitae justo in urna consequat malesuada.",
      isVisible: true 
    },
    {
      id:9,
      name:"Product 9",
      price:41.99,
      img:"https://i.pinimg.com/236x/61/b0/e3/61b0e3f31084828d00ae93c5dc92ff45.jpg",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat purus vitae urna tristique, vel cursus nunc vulputate. Maecenas in tristique justo. Curabitur a massa at nunc varius vestibulum. Sed auctor, quam in convallis posuere, elit odio auctor neque, nec efficitur libero dolor vel ex. Vivamus ullamcorper nisl a tristique iaculis. Proin vitae justo in urna consequat malesuada.",
      isVisible: true
    },
    {
      id:10,
      name:"Product 10",
      price:242.99,
      img:"https://i.pinimg.com/236x/39/b5/ba/39b5babad8c251b35207844064e89330.jpg",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat purus vitae urna tristique, vel cursus nunc vulputate. Maecenas in tristique justo. Curabitur a massa at nunc varius vestibulum. Sed auctor, quam in convallis posuere, elit odio auctor neque, nec efficitur libero dolor vel ex. Vivamus ullamcorper nisl a tristique iaculis. Proin vitae justo in urna consequat malesuada.",
      isVisible: true
    }
  ]

  export const productsSlice = createSlice({
    name: "products",
    initialState: {
      products: PRODUCTS_DEFAULT,
    },  
    reducers: {
      showAllProducts: (state) => {
        state.products.forEach((product) => {
          product.isVisible = true;
        }); 
      },
      toggleProductVisibility: (state, action) => {
        const productId = action.payload;
        const product = state.products.find((product) => product.id === productId);
        if (product) {
          product.isVisible = !product.isVisible; // Cambia la visibilidad al valor opuesto
        }
      },
    },
  });

  export default productsSlice.reducer;

  export const { showAllProducts, toggleProductVisibility } = productsSlice.actions;