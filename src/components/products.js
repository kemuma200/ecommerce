import { GlobalContextState } from "../context/context"
import Filters from "./filter"
import SingleProduct from "./singleProducts"
import "../css/sb.css"

const Home = () => {
  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = GlobalContextState();
  console.log(products)
  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = Object.values(sortedProducts).sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = Object.values(sortedProducts).filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = Object.values(sortedProducts).filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = Object.values(sortedProducts).filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = Object.values(sortedProducts).filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    console.log(sortedProducts)
    return sortedProducts;
   
  };

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transformProducts().map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;