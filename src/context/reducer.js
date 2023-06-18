export const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_ITEM_TO_CART":
        return { 
            ...state, 
            cart: [...state.cart, { ...action.payload, qty: 1 }] 
        };
      case "REMOVE_ITEM_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((c) => c.id !== action.payload.id),
        };
      case "CHANGE_QUANTITY":
        return {
          ...state,
          cart: state.cart.filter((c) =>
            c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
          ),
        };
      default:
        return state;
    }
  };
  
  export const productReducer = (state, action) => {
    switch (action.type) {
      case "SORT_BY_PRICE":
        return { ...state, sort: action.payload };
      case "SORT_BY_CATEGORY":
        return{ ...state, byCategory: action.payload}
      case "FILTER_BY_STOCK":
        return { ...state, byStock: !state.byStock };
      case "FILTER_BY_RATING":
        return { ...state, byRating: action.payload };
      case "FILTER_BY_SEARCH":
        return { ...state, searchQuery: action.payload };
      case "CLEAR_FILTERS":
        return { byStock: false, byFastDelivery: false, byRating: 0 };
      default:
        return state;
    }
  };
  export const userReducer = (state, action) => {
    switch (action.type) {
      case "SORT_BY_NAME":
        return { ...state, sort: action.payload };
      case "SORT_BY_USER_ID":
        return { ...state, byUserId: action.payload};
      case "SORT_BY_EMAIL":
        return { ...state, byEmail: action.payload};
      case "SORT_BY_BIRTHDATE":
        return { ...state, byBirthDate: action.payload}
      case "SORT_BY_ID":
        return { ...state, byCategory: action.payload}
      case "SORT_BY_LOCATION":
        return { ...state, byLocale: action.payload}
      case "FILTER_BY_SEARCH":
        return { ...state, searchQuery: action.payload };
      case "FILTER_BY_RATING":
        return { ...state, byRating: action.payload };
      case "CLEAR_FILTERS":
        return { byStock: false, byFastDelivery: false, byRating: 0 };
      default:
        return state;
    }
  };
  export const groceryReducer = (state, action) => {
    switch (action.type) {
      case "SORT_BY_NAME":
        return { ...state, sort: action.payload };
      case "SORT_BY_ITEM_ID":
        return { ...state, byCategory: action.payload};
      case "SORT_BY_PRICE":
        return { ...state, byEmail: action.payload};
      case "FILTER_BY_STOCK":
        return { ...state, byStock: !state.byStock };
      case "FILTER_BY_RATING":
        return { ...state, byRating: action.payload };
      case "FILTER_BY_COUNTRY":
        return { ...state, byCountry: action.payload };
      case "FILTER_BY_LOCALE":
        return { ...state, byLocale: action.payload };
      case "FILTER_BY_DELIVERY":
        return { ...state, byFastDelivery: !state.byFastDelivery };
      case "FILTER_BY_SEARCH":
        return { ...state, searchQuery: action.payload };
      case "CLEAR_FILTERS":
        return { byStock: false, byFastDelivery: false, byRating: 0 };
      default:
            return state;
        }
    };

  