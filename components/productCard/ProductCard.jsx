import './productCard.css';
import { BiHeart } from 'react-icons/bi';
import Image from 'next/image';

const ProductCard = ({ product }) => {
  return (
    <div className="rec-product-card">
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
  );
};

export default ProductCard;
