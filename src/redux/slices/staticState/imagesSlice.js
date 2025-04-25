import { createSlice } from "@reduxjs/toolkit";

export const imagesSlice = createSlice({
  name: "imagesSlice",
  initialState: {
    homeImageUrl:
      "https://res.cloudinary.com/mangud/image/upload/v1745591848/mariselaShopClient/Copia_de_Riga_portada_peq_e9bbiw_l6toni.jpg",
    mainShopMenuImageImageUrl:
      "https://res.cloudinary.com/mangud/image/upload/v1745591848/mariselaShopClient/Copia_de_Riga_portada_peq_e9bbiw_l6toni.jpg",
    mainShopMenuImageImageUrl2:
      "https://res.cloudinary.com/mangud/image/upload/v1745591755/mariselaShopClient/Copia_de_Riga-07_e4akdw_wfyjqa.jpg",
    aboutImageUrl:
      "https://res.cloudinary.com/mangud/image/upload/v1724854077/mariselaShopClient/Screen_Shot_2024-08-28_at_10.06.14_AM_kxt4cz.png",
  },
  reducers: {},
});

export default imagesSlice.reducer;
