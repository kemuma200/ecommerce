import { GlobalContextState } from "../context/context";
import { Button } from "react-bootstrap";
import Rating from "./rating"

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = GlobalContextState();

  return (
    <div className="products">
      <div className="individualItem">
        <img src={prod.image} alt={prod.name}/>
        <div className="productContents">
          <h4 className="left">{Object.values(prod.name)}</h4>
          <Rating className="right" rating={prod.ratings} />
        </div>
        <div className="productContents">
          <p className="left">$ {prod.price.split(".")[0]}</p>
          <button className="right" onClick={()=>{
            console.log("Hello")
            dispatch({
              type: "ADD_ITEM_TO_CART",
              payload: prod,
            })
          }} disabled={!prod.inStock}>ADD TO CART</button>
        
        </div>
        <p className="stockStatus"> {!prod.inStock ? "Out of Stock" : "In stock"} </p>

      </div>
      
    </div>
  );
};

export default SingleProduct;