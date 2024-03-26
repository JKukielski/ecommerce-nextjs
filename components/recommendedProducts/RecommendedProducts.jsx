import Image from 'next/image';
import './recommendedProducts.css';
import { recommendedProducts } from '@utils/data';
import { BiHeart } from 'react-icons/bi';
const RecommendedProducts = () => {
  return (
    <div className="rec-container">
      <h1>Recommended Products</h1>
      <div className="rec-content">
        {recommendedProducts.map((product, index) => (
          <div className="rec-product-card" key={index}>
            <div className="rec-product-card-img-container">
              <div className="rec-product-fav-icon-container">
                <BiHeart className="rec-product-fav-icon" />
              </div>
              <Image src={product.url} alt="" width={350} height={325} />
            </div>
            <div className="rec-product-card-text-container">
              <h3 className="rec-product-card-name">{product.name}</h3>
              <p className="rec-product-card-price">{`$${product.price}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;
