import { configureStore } from "@reduxjs/toolkit";

// reducers
import imagesSlice from "./slices/staticState/imagesSlice";
import textSlice from "./slices/staticState/textSlice";
import logicSlice from "./slices/staticState/logicSlice";
import productsStateSlice from "./slices/state/productsStateSlice";

export default configureStore({
  reducer: {
    imagesSlice,
    textSlice,
    logicSlice,
    productsStateSlice,
  },
});
