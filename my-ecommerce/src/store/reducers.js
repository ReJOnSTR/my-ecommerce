import { TOGGLE_MENU, SET_PRODUCTS, SET_CURRENT_SLIDE } from "./actions";

const initialState = {
  menu: {
    isMenuOpen: false,
  },
  products: [],
  slider: {
    currentSlide: 0,
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        menu: { ...state.menu, isMenuOpen: !state.menu.isMenuOpen },
      };
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case SET_CURRENT_SLIDE:
      return {
        ...state,
        slider: { ...state.slider, currentSlide: action.payload },
      };
    default:
      return state;
  }
};

export default rootReducer;
