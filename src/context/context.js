import { createContext, useContext, useReducer } from "react";
import { faker } from '@faker-js/faker';
import { cartReducer, productReducer, userReducer, groceryReducer } from "./reducer"

const GlobalContext = createContext();
faker.seed(10000);

const Context = ({ children }) => {
  const items = {
    products: [...Array(10000)].map(() => ({
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      category: faker.commerce.product(),
      price: faker.commerce.price(),
      material: faker.commerce.productName(),
      image: faker.image.image(),
      adj: faker.commerce.productAdjective(),
      description: faker.commerce.productDescription(),
      inStock: faker.mersenne.rand(0, 10),
      fastDelivery: faker.datatype.boolean(),
      ratings: faker.mersenne.rand(0, 10),
      country: faker.address.country()
  
    })),
    groceries: [...Array(1000)].map(() => ({
      id: faker.datatype.uuid(),
      name: faker.commerce.product(),
      image: faker.image.food(),
      price: faker.commerce.price(),
      inStock: faker.mersenne.rand(0, 10),
      fastDelivery: faker.datatype.boolean(),
      ratings: faker.mersenne.rand(0, 10),
      country: faker.address.country(),
      locale: faker.address.city()
    })),
    users: [...Array(1000)].map(() => ({
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      sex : faker.name.sexType(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
      country: faker.address.country(),
      locale: faker.address.city()
  
    })),
    company: {
      bs : faker.company.bsAdjective(),
      bss : faker.company.bsNoun(),
      catchPhrase: faker.company.catchPhrase(),
      name: faker.company.name(),
      logo: faker.image.avatar()
    }

  }
  const [state, dispatch] = useReducer(cartReducer, {
    products: items.products,
    groceries: items.groceries,
    user: items.users,
    company: items.company,
    cart: []
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byCategory: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });
  const [userState, userDispatch] = useReducer(userReducer, {
    byRating: 0,
    searchQuery: "",
  });
  const [groceryState, groceryDispatch] = useReducer(groceryReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    byLocale: false,
    byCountry: false,
    searchQuery: "",
  });

  


  return (
    <GlobalContext.Provider value={{ state, dispatch, productState, productDispatch, userState, userDispatch, groceryState, groceryDispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const GlobalContextState = () => {
  return useContext(GlobalContext);
};

export default Context;