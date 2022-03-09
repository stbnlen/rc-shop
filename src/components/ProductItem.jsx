import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const { state, addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };

  if (!product.images[0]) {
    return null;
  }

  return (
    <div className={styles.ProductItem}>
      {/* {!product.images[0].includes('jpg') && !product.images[0].includes('png') && <Image src={product.images[0]} alt={product.title} width={240} height={240} layout="responsive" />} */}
      <Image src={product.images[0]} alt={product.title} width={240} height={240} layout="responsive" />
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure className={styles['more-clickable-area']} onClick={() => handleClick(product)}>
          {state.cart.includes(product) ? (
            <Image className={(styles.disabled, styles['add-to-cart-btn'])} src={addedToCartImage} alt="added to cart" width={50} height={50} />
          ) : (
            <Image className={(styles['add-to-cart-btn'], styles.pointer)} src={addToCartImage} alt="add to cart" />
          )}
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
