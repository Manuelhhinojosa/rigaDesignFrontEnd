import { createSlice } from "@reduxjs/toolkit";

export const imagesSlice = createSlice({
  name: "imagesSlice",
  initialState: {
    homeImageUrl:
      "https://res.cloudinary.com/mangud/image/upload/v1745591848/mariselaShopClient/Copia_de_Riga_portada_peq_e9bbiw_l6toni.jpg",
    mainShopMenuImageImageUrl:
      "https://res.cloudinary.com/mangud/image/upload/v1745591755/mariselaShopClient/Copia_de_Riga-07_e4akdw_wfyjqa.jpg",
    mainShopMenuImageImageUrl2:
      "https://res.cloudinary.com/mangud/image/upload/v1745592642/mariselaShopClient/Screen_Shot_2025-04-25_at_10.50.29_AM_y9uea5.png",
    aboutImageUrl:
      "https://res.cloudinary.com/mangud/image/upload/v1745593780/mariselaShopClient/Screen_Shot_2025-04-25_at_11.09.29_AM_r5riet.png",
  },
  reducers: {},
});

export default imagesSlice.reducer;
