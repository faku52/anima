import { useState } from "react";
import ItemList from "./ItemList";
import Loader from "./Loader";
import Productos from "./Productos";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [hasProduct, setHasProduct] = useState(false);

  const listproduct = new Promise((resolve) =>
    setTimeout(() => {
      resolve(Productos);
    }, 3000)
  );

  listproduct
    .then((data) => setProducts(data))
    .then((data) => setHasProduct(!data));

  console.log(products);

  return (
    <div className="itemListContainer">
      <div>{greeting}</div>
      {!hasProduct ? (
        <Loader/>
      ) : (
        <ItemList products={products}/>
      )}

    </div>
  );
};

export default ItemListContainer;