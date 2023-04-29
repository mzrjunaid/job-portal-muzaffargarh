import JOBS from "../../data/dummyData";
import Jobs from "../../models/Jobs";

import { CREATE_AD, GET_AD } from "../actions/ads";

const initialState = {
  availablejobs: JOBS,
  userProducts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_AD:
      return {
        availableProducts: action.products,
        userProducts: action.userProducts,
      };
    case CREATE_AD:
      console.log(action);
      const newAd = new Jobs(
        action.adData.id,
        action.adData.title,
        action.adData.imageUrl,
        action.adData.jobPlace,
        action.adData.publishDate,
        action.adData.lastDate,
        action.adData.jobType,
        action.adData.vacancies,
        action.adData.education,
        action.adData.ageLimit,
        action.adData.gender,
        action.adData.experience,
        action.adData.domicile
      );
      return {
        ...state,
        availablejobs: state.availablejobs.concat(newAd),
        userProducts: state.userProducts.concat(newAd),
      };
    //   case UPDATE_PRODUCT:
    //     const productIndex = state.userProducts.findIndex(
    //       (prod) => prod.id === action.pid
    //     );
    //     const updatedProduct = new Product(
    //       action.id,
    //       state.userProducts[productIndex].ownerId,
    //       action.productData.title,
    //       action.productData.imageUrl,
    //       action.productData.description,
    //       state.userProducts[productIndex].price
    //     );
    //     const updateUserProducts = [...state.userProducts];
    //     updateUserProducts[productIndex] = updatedProduct;
    //     const availableProducts = state.availableProducts.findIndex(
    //       (prod) => prod.id === action.pid
    //     );
    //     const updatedAvailableProducts = [...state.availableProducts];
    //     updatedAvailableProducts[availableProducts] = updatedProduct;
    //     return {
    //       ...state,
    //       availableProducts: updatedAvailableProducts,
    //       userProducts: updateUserProducts,
    //     };
    //   case DELETE_PRODUCT:
    //     return {
    //       ...state,
    //       userProducts: state.userProducts.filter(
    //         (product) => product.id !== action.pid
    //       ),
    //       availableProducts: state.userProducts.filter(
    //         (product) => product.id !== action.pid
    //       ),
    //     };
  }
  return state;
};
