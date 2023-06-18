import { GlobalContextState } from "../context/context"
import SingleProduct from "./singleProducts"
import "../css/sb.css"

const MealBoxProducts = () => {
  const {
    state: { groceries },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = GlobalContextState();

  const transformProducts = () => {
    let sortedGroceries = groceries;

    if (sort) {
      sortedGroceries = Object.values(sortedGroceries).sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedGroceries = Object.values(sortedGroceries).filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedGroceries = Object.values(sortedGroceries).filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedGroceries = Object.values(sortedGroceries).filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedGroceries = Object.values(sortedGroceries).filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    
    return sortedGroceries;
   
  };

  return (
    <div className="home">
      <div className="productContainer">
        {transformProducts().map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default MealBoxProducts;