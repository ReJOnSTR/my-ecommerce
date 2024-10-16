import api from "./clientActions";

export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_FETCH_STATE = "SET_FETCH_STATE";
export const SET_CATEGORY = "SET_CATEGORY";
export const SET_SORT = "SET_SORT";
export const SET_FILTER = "SET_FILTER";
export const FETCH_CATEGORIES_START = "FETCH_CATEGORIES_START";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_ERROR = "FETCH_CATEGORIES_ERROR";
export const FETCH_PRODUCTS_START = "FETCH_PRODUCTS_START";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR";

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});
export const setProductList = (products) => ({
  type: SET_PRODUCT_LIST,
  payload: products,
});
export const setTotal = (total) => ({ type: SET_TOTAL, payload: total });
export const setFetchState = (state) => ({
  type: SET_FETCH_STATE,
  payload: state,
});
export const setCategory = (category) => ({
  type: SET_CATEGORY,
  payload: category,
});
export const setSort = (sort) => ({ type: SET_SORT, payload: sort });
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });

export const fetchCategoriesStart = () => ({ type: FETCH_CATEGORIES_START });
export const fetchCategoriesSuccess = (categories) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});
export const fetchCategoriesError = (error) => ({
  type: FETCH_CATEGORIES_ERROR,
  payload: error,
});

export const fetchProductsStart = () => ({ type: FETCH_PRODUCTS_START });
export const fetchProductsSuccess = (products, total) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products, total },
});
export const fetchProductsError = (error) => ({
  type: FETCH_PRODUCTS_ERROR,
  payload: error,
});

export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
      const response = await api.get("/categories");
      dispatch(fetchCategoriesSuccess(response.data));
    } catch (error) {
      dispatch(fetchCategoriesError(error.message));
    }
  };
};

export const fetchProducts = (params) => {
  return async (dispatch, getState) => {
    dispatch(fetchProductsStart());
    try {
      const state = getState().product;
      const queryParams = new URLSearchParams(
        Object.entries({
          category: state.category,
          sort: state.sort,
          filter: state.filter,
          ...params,
        }).filter(([, value]) => value != null)
      ).toString();
      const response = await api.get(`/products?${queryParams}`);
      dispatch(
        fetchProductsSuccess(response.data.products, response.data.total)
      );
    } catch (error) {
      dispatch(fetchProductsError(error.message));
    }
  };
};
