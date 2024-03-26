import ProductCard from '@components/productCard/ProductCard';
import './recommendedProducts.css';
import { recommendedProducts } from '@utils/data';

const RecommendedProducts = () => {
  return (
    <div className="rec-container">
      <h1>Recommended Products</h1>
      <div className="rec-content">
        {recommendedProducts.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;
