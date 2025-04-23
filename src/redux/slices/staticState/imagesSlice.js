import { createSlice } from "@reduxjs/toolkit";

export const imagesSlice = createSlice({
  name: "imagesSlice",
  initialState: {
    homeImageUrl:
      "https://res.cloudinary.com/mangud/image/upload/v1724357016/mariselaShopClient/Screen_Shot_2024-08-22_at_4.03.27_PM_j7t4lo.png",
    mainShopMenuImageImageUrl:
      "https://res.cloudinary.com/mangud/image/upload/v1724357016/mariselaShopClient/Screen_Shot_2024-08-22_at_4.03.27_PM_j7t4lo.png",
    mainShopMenuImageImageUrl2:
      "https://res.cloudinary.com/mangud/image/upload/v1724854077/mariselaShopClient/Screen_Shot_2024-08-28_at_10.06.14_AM_kxt4cz.png",
    aboutImageUrl:
      "https://res.cloudinary.com/mangud/image/upload/v1724854077/mariselaShopClient/Screen_Shot_2024-08-28_at_10.06.14_AM_kxt4cz.png",
  },
  reducers: {},
});

export default imagesSlice.reducer;
