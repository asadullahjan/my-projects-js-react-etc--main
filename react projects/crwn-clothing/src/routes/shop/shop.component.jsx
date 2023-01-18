import { useContext } from "react";
import { ProductsContext } from "../../contexts/shop-data.context";
import ProductCard from "../../components/product-card/product-card.component";
import "../shop/shop.styles.scss";

const Shop = () => {
  const {products} = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => {  
        return(
        <ProductCard key={product.id} {...product}/>
        )  
      })}
    </div>
  )
}

export default Shop;