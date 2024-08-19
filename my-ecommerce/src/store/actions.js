export const TOGGLE_MENU = "TOGGLE_MENU";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_CURRENT_SLIDE = "SET_CURRENT_SLIDE";

export const toggleMenu = () => ({ type: TOGGLE_MENU });
export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});
export const setCurrentSlide = (slideIndex) => ({
  type: SET_CURRENT_SLIDE,
  payload: slideIndex,
});
