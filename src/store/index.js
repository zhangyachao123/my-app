import { configureStore } from "@reduxjs/toolkit";
import {
  navListReducer,
  navItemReducer,
  panelListReducer,
} from "./navListState";
export default configureStore({
  reducer: {
    navList: navListReducer,
    navItem: navItemReducer,
    panelList: panelListReducer,
  },
});
